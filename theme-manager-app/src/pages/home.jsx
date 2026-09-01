import { useContext } from "react";
import { NotificationContext } from "../context/notification/notificationContext";

export default function Home() {
  const { addNotification } = useContext(NotificationContext);

  return (
    <div className="mx-auto max-w-4xl  rounded-md mt-10 border border-slate-200 bg-white p-8 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Employee Dashboard
      </h1>
      <p className="mt-2 text-base md:text-xl text-slate-600 dark:text-slate-400">
        Welcome to your centralized management overview.
      </p>

      <div className="mt-8 rounded-md border border-slate-100 bg-slate-50 p-6 dark:border-slate-800/80 dark:bg-slate-800/40">
        <h3 className="text-xl md:text-lg font-semibold text-slate-800 dark:text-slate-200">
          Quick Actions
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Trigger system state updates below.
        </p>

        <button
          onClick={addNotification}
          className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 active:scale-95"
        >
          Create Notification
        </button>
      </div>
    </div>
  );
}
