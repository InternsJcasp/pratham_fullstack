import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useState } from "react";

export default function Checkout() {
  const navigate = useNavigate();

  const { cartItems, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    alert("Order placed successfully!");

    clearCart();

    navigate("/products");
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold dark:text-white">
          No items to checkout
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
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-3xl font-bold dark:text-white">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Customer Information */}
        <div className="lg:col-span-2">
          <div className="border p-6 dark:border-gray-700 dark:bg-gray-900">
            <h2 className="mb-6 text-xl font-bold dark:text-white">
              Shipping Information
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label className="mb-2 block dark:text-white">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="mb-2 block dark:text-white">Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="mb-2 block dark:text-white">Address</label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full border p-3 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter your address"
                />
              </div>

              {/* City */}
              <div className="mb-4">
                <label className="mb-2 block dark:text-white">City</label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter city"
                />
              </div>

              {/* Pincode */}
              <div className="mb-6">
                <label className="mb-2 block dark:text-white">Pincode</label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  placeholder="Enter pincode"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 px-4 py-3 font-semibold text-white"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="h-fit border p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-xl font-bold dark:text-white">Your Order</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="mt-4 flex gap-3 border-b pb-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-16 w-16 object-cover"
              />

              <div className="flex-1">
                <p className="text-sm font-semibold dark:text-white">
                  {item.title}
                </p>

                <p className="text-sm dark:text-gray-400">
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <p className="font-semibold dark:text-white">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="mt-6 flex justify-between text-xl font-bold">
            <span className="dark:text-white">Total</span>

            <span className="dark:text-white">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
