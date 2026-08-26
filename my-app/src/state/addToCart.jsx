import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addProduct = () => {
    setCart([...cart, "Laptop"]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <button onClick={addProduct}>Add Laptop</button>

      <h2>Items: {cart.length}</h2>

      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ShoppingCart;
