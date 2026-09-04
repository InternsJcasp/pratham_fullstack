import { useCart } from "../../hooks/useCart";
import Button from "../common/Button";
export default function ProductCards({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 shadow-lg shadow-gray-400 dark:border-gray-700">
      <img
        src={products.thumbnail}
        alt={products.title}
        className="h-48 w-full object-cover"
      />

      <h3 className="mt-3 text-lg font-semibold dark:text-white">
        {products.title}
      </h3>

      <p className="mt-2 font-bold dark:text-white">
        ${products.price}
      </p>

      <Button
        onClick={() => addToCart(products)}
        className="mt-3 bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
      >
        Add to Cart
      </Button>
    </div>
  );
}