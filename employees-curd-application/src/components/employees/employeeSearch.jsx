import { Search, X } from "lucide-react";
export default function EmployeeSearch({ search, setSearch }) {
  return (
    <div className="relative w-full max-w-sm">
      {/* Search Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
        <Search className="size-5" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search employees by name, role, or email..."
        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
      />

      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 focus:outline-none"
          aria-label="Clear search"
        >
          <X className="size-5" />
        </button>
      )}
    </div>
  );
}
