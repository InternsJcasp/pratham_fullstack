import { useParams } from "react-router-dom";
import useProductDataById from "../../hooks/useProductDataById";
import Button from "../common/Button";
import { useCart } from "../../hooks/useCart";
export default function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();

  // Pass id to custom hook
  const { productDataById, loading } = useProductDataById(id);

  // Loading state
  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // If product not found
  if (!productDataById) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow">
        {/* Product Image */}
        <div>
          <img
            src={productDataById.thumbnail}
            alt={productDataById.title}
            className="w-full h-80 object-contain"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-2xl font-bold">{productDataById.title}</h1>

          <p className="text-gray-500 mt-2">{productDataById.description}</p>

          <p className="text-xl font-bold mt-4">${productDataById.price}</p>

          <p className="mt-2">⭐ {productDataById.rating}</p>

          <p className="mt-2">Stock: {productDataById.stock}</p>

          <p className="mt-2 text-green-600">
            {productDataById.availabilityStatus}
          </p>

          <Button
            onClick={() => addToCart(productDataById)}
            className="mt-3 bg-black w-full py-2 text-white dark:bg-white dark:text-black"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 bg-gray-100 p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Product Information</h2>

        <p>Brand: {productDataById.brand}</p>

        <p>Category: {productDataById.category}</p>

        <p>SKU: {productDataById.sku}</p>

        <p>Warranty: {productDataById.warrantyInformation}</p>

        <p>Shipping: {productDataById.shippingInformation}</p>

        <p>Return Policy: {productDataById.returnPolicy}</p>
      </div>
    </div>
  );
}
