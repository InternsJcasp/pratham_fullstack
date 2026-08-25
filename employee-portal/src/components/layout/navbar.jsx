export default function Navbar() {
  return (
    <nav className="bg-slate-700 text-slate-200 px-6 py-2 flex gap-6 text-sm font-medium">
      <a href="#" className="hover:text-white transition-colors">
        Dashboard
      </a>
      <a href="#" className="hover:text-white transition-colors">
        Employees
      </a>
      <a href="#" className="hover:text-white transition-colors">
        Departments
      </a>
      <a href="#" className="hover:text-white transition-colors">
        Settings
      </a>
    </nav>
  );
}
