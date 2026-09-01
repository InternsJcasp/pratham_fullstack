import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { cart, removeToCart, total } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ₹{item.price}
          </span>

          <button onClick={() => removeToCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
