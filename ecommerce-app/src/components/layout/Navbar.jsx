import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import { useCart } from "../../hooks/useCart";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();

  return (
    <nav className="flex items-center justify-between border-b bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-900">
      {/* Logo */}
      <NavLink to="/" className="relative dark:text-white">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          My Store
        </h1>
      </NavLink>
      {/* Navigation */}
      <div className="flex items-center gap-6">
        <NavLink to="/products" className="text-gray-700 dark:text-gray-300">
          Products
        </NavLink>

        <NavLink to="/dashboard" className="text-gray-700 dark:text-gray-300">
          Dashboard
        </NavLink>

        {/* User */}
        <span className="text-gray-900 dark:text-white">{user?.name}</span>

        {/* Cart */}
        <NavLink to="/cart" className="relative dark:text-white">
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -right-4 -top-3 rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-md dark:text-white">
              {totalItems}
            </span>
          )}
        </NavLink>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="border p-2 rounded-full text-gray-900 dark:border-gray-600 dark:text-white"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>

        {/* Logout */}
        <button
          onClick={logout}
          className="bg-black  dark:bg-white dark:text-black px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
