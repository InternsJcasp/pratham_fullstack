import { useEffect, useState } from "react";

export default function useProductData() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);

      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("Fetching data from API failed");
        }

        const resData = await response.json();

        setProductData(resData.products);
      } catch (error) {
        console.error("Something went wrong:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return {
    productData,
    loading,
    error,
  };
}
