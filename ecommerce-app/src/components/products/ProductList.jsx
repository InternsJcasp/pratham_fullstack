import useProductData from "../../hooks/useProductData";
import ErrorComponent from "../common/ErrorMessage";

import ProductSkeleton from "../common/productSkeleton";
import ProductCards from "./ProductCards";

export default function ProductList() {
  const { productData, loading, error } = useProductData();

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (error) {
    return <ErrorComponent message="product Data is not loading" />;
  }
  return (
    <div className="m-5 grid grid-cols-2 md:grid-cols-4 gap-5">
      {productData.map((items, idx) => {
        return <ProductCards key={idx} products={items} />;
      })}
    </div>
  );
}
