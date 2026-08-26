import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "#" },
    { name: "Employees", href: "#" },
    { name: "Departments", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <nav className="bg-slate-700 text-slate-200 px-4 sm:px-6 py-3 border-b border-slate-600 w-full min-w-0">
      <div className="flex items-center justify-between min-w-0">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600 focus:outline-none transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-[0.875rem] leading-[1.25rem] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden pt-3 pb-2 flex flex-col gap-2 text-[0.875rem] leading-[1.25rem] font-medium border-t border-slate-600 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-1.5 rounded-md hover:bg-slate-600 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
