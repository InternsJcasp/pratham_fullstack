import { useContext } from "react";
import { AuthContext } from "../context/auth/authContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="mx-auto max-w-2xl mt-10 rounded-md border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          {user ? user.charAt(0).toUpperCase() : "U"}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            User Profile
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Authenticated Member
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800">
        <div className="flex justify-between py-2">
          <span className="text-slate-500 dark:text-slate-400">Username</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {user}
          </span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-slate-500 dark:text-slate-400">Status</span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
            Active Session
          </span>
        </div>
      </div>
    </div>
  );
}
