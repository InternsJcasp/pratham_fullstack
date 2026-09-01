import { useState } from "react";
import { CartContext } from "./cartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeToCart = (id) => {
    setCart(cart.filter((item) => item.id === id));
  };
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
