import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold dark:text-white">
          Your Cart is Empty
        </h1>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold dark:text-white">Shopping Cart</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Products */}
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 flex gap-4 border p-4 dark:border-gray-700 dark:bg-gray-900"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-28 w-28 object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold dark:text-white">{item.title}</h2>

                <p className="mt-2 dark:text-gray-300">${item.price}</p>

                {/* Quantity */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="border px-3 py-1 dark:border-gray-600 dark:text-white"
                  >
                    -
                  </button>

                  <span className="dark:text-white">{item.quantity}</span>

                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="border px-3 py-1 dark:border-gray-600 dark:text-white"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 text-red-500"
                >
                  Remove
                </button>
              </div>

              {/* Product total */}
              <div className="font-bold dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="h-fit border p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-xl font-bold dark:text-white">Order Summary</h2>

          <div className="mt-5 flex justify-between">
            <span className="dark:text-gray-300">Total</span>

            <span className="font-bold dark:text-white">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Checkout */}
          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-black px-4 py-3 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
