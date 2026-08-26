export default function Header() {
  return (
    <header className="bg-slate-800 w-full text-white px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 flex justify-between items-center shadow-md">
      <h1 className="text-[1.25rem] sm:text-[1.75rem] leading-tight font-bold tracking-tight text-white">
        Employee Portal
      </h1>

      <span className="text-[0.875rem] leading-[1.4] font-semibold bg-slate-700/80 hover:bg-slate-700 text-slate-100 px-3 py-1 rounded-full border border-slate-600/50 transition-colors">
        Admin
      </span>
    </header>
  );
}
