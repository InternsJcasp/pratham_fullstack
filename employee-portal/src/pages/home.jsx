import { Link } from "react-router-dom";
import { useEmployees } from "../hooks/useEmployees";

export default function Home() {
  const { employees } = useEmployees();

  return (
    <main className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Dashboard Overview
      </h1>
      <p className="text-slate-500 mb-6">
        Welcome to the Portal Management Dashboard.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-400">
            Total Employees
          </p>
          <p className="text-3xl font-bold text-slate-800 mt-2">
            {employees.length || 30}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-400">Departments</p>
          <p className="text-3xl font-bold text-slate-800 mt-2">4</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-400">Active Status</p>
          <p className="text-3xl font-bold text-green-600 mt-2">Online</p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/employees"
          className="inline-block bg-slate-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-600 transition"
        >
          View Full Directory →
        </Link>
      </div>
    </main>
  );
}
