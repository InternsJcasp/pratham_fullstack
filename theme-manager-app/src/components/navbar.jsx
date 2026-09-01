// src/components/Navbar.jsx
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/theme/themeContext";
import { AuthContext } from "../context/auth/authContext";
import { NotificationContext } from "../context/notification/notificationContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout, isLoggedIn } = useContext(AuthContext);
  const { count, clearNotifications } = useContext(NotificationContext);
  const location = useLocation();

  // Mobile menu toggle state
  const [isOpen, setIsOpen] = useState(false);

  // Helper to check active links
  const isActive = (path) => location.pathname === path;

  // Reusable NavLink item
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            WorkPulse
          </Link>

          {/* Desktop Navigation Links */}
          {isLoggedIn && (
            <div className="hidden items-center gap-4 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition ${
                    isActive(link.path)
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right Action Items (Desktop & Hamburger Button) */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Notification Button */}
          <button
            onClick={clearNotifications}
            className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            title="Clear Notifications"
            aria-label="Notifications"
          >
            <span className="text-xl">🔔</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-sm">
                {count}
              </span>
            )}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
            <span className="hidden sm:inline"> {theme === "light" ? "Dark" : "Light"}</span>
          </button>

          {/* Desktop User Info & Logout */}
          {isLoggedIn && (
            <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 dark:border-slate-800 md:flex">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Hi, <strong className="text-slate-900 dark:text-white">{user}</strong>
              </span>
              <button
                onClick={logout}
                className="rounded-lg bg-red-500/10 px-3 py-1.5 text-sm font-semibold text-red-600 transition hover:bg-red-500/20 dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          {isLoggedIn && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {isLoggedIn && isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Signed in as <span className="text-slate-700 dark:text-slate-200">{user}</span>
            </span>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-md py-1.5 text-base font-medium transition ${
                  isActive(link.path)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <hr className="my-1 border-slate-200 dark:border-slate-800" />

            <button
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
              className="w-full rounded-lg bg-red-500/10 py-2 text-center text-sm font-semibold text-red-600 hover:bg-red-500/20 dark:bg-red-500/20 dark:text-red-400"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}