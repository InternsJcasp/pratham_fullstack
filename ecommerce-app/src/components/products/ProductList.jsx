import { useMemo, useState } from "react";
import useProductData from "../../hooks/useProductData";
import ProductCards from "./ProductCards";
import ProductSkeleton from "../common/productSkeleton";

export default function ProductList() {
  const { productData, loading, error } = useProductData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const categories = [
    "all",
    ...new Set(productData.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...productData];

    // Search
    result = result.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );

    // Category filter
    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    // Sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [productData, search, category, sort]);

  if (loading) {
    return <ProductSkeleton />;
  }
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold dark:text-white">Products</h1>

      {/* Controls */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 dark:bg-gray-900 col-span-2 dark:text-white"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 dark:bg-gray-900 dark:text-white"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 dark:bg-gray-900 dark:text-white"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCards key={product.id} products={product} />
        ))}
      </div>

      {/* No Result */}
      {filteredProducts.length === 0 && (
        <p className="mt-10 text-center dark:text-white">No products found</p>
      )}
    </div>
  );
}
