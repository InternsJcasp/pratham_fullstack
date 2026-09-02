export default function EmptyState({
  title = "No Employees Found",
  message = "There are no employees matching your criteria.",
  onClear,
}) {
  return (
    <div className="my-8 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{message}</p>
      {onClear && (
        <button
          onClick={onClear}
          className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Clear search & filters
        </button>
      )}
    </div>
  );
}
