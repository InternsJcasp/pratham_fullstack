import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex-1 p-4 sm:p-6 bg-slate-50 min-h-screen flex flex-col items-center justify-center text-center w-full min-w-0 box-border overflow-x-hidden">
      <div className="max-w-md w-full bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        {/* Large 404 Badge */}
        <h1 className="text-6xl font-extrabold text-slate-800 tracking-tight mb-2">
          404
        </h1>

        <h2 className="text-xl font-bold text-slate-700 mb-2">
          Page Not Found
        </h2>

        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Check
          the URL or return back home.
        </p>

        {/* Navigation Action Button */}
        <Link
          to="/"
          className="inline-block w-full bg-slate-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-slate-600 transition shadow-sm"
        >
          Back to Overview
        </Link>
      </div>
    </main>
  );
}
