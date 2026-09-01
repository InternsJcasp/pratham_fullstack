import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-transparent border-b border-gray-400 py-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        <h1 className="text-2xl text-purple-400 font-bold font-mono">
          Fusion
        </h1>

        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5">

          <Link to="/cart">
            Cart : {cart.length}
          </Link>

          <button onClick={toggleTheme}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button className="px-4 py-2 bg-purple-400 text-base font-medium">
            Log In
          </button>

        </div>
      </div>
    </header>
  );
};