import { Users } from "lucide-react";
export default function EmptyState({
  title = "No Employees Found",
  message = "There are no employees matching your criteria.",
  onClear,
}) {
  return (
    <div className="my-8 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <Users />
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
