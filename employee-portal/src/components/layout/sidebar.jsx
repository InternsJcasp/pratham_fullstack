export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-100 border-r border-slate-200 p-4 hidden md:block min-h-[calc(100vh-8rem)]">
      <h2 className="text-[0.875rem] leading-[1.4] font-semibold text-slate-500 uppercase tracking-wider mb-4">
        Navigation
      </h2>

      <ul className="space-y-2 text-slate-700 text-[0.875rem] leading-tight font-medium">
        <li className="p-2 bg-slate-200 rounded-md cursor-pointer">Overview</li>
        <li className="p-2 hover:bg-slate-200 rounded-md cursor-pointer">
          Directory
        </li>
        <li className="p-2 hover:bg-slate-200 rounded-md cursor-pointer">
          Attendance
        </li>
        <li className="p-2 hover:bg-slate-200 rounded-md cursor-pointer">
          Leave Requests
        </li>
      </ul>
    </aside>
  );
}
