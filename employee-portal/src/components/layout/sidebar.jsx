import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Overview", path: "/" },
    { name: "Employees", path: "/employees" },
    { name: "Departments", path: "/department" },
    { name: "Profile", path: "/profile" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <aside className="w-64 bg-slate-100 border-r border-slate-200 min-h-screen hidden md:flex flex-col shrink-0">
      {/* Sidebar Brand Header */}
      <div className="p-4 border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          Employee Portal
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="p-4 flex-1">
        <h2 className="text-[0.75rem] leading-[1.4] font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Navigation
        </h2>

        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-[0.875rem] font-medium transition-colors ${
                      isActive
                        ? "bg-slate-200 text-slate-900 font-semibold"
                        : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
