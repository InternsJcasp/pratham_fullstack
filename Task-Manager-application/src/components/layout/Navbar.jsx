import { LogOut, Moon, Sun } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            TaskFlow
          </h1>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Task Management
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* User */}
          <span className="hidden text-sm text-gray-600 sm:block dark:text-gray-300">
            {user?.name}
          </span>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={logout}
            aria-label="Logout"
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
