import products from "../data/product";
import ProductCard from "./productCard";
function ProductList() {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
