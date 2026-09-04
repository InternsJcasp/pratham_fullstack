import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProductDataById() {
  const [productDataById, setProductDataById] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Fetching data from API failed");
        }

        const resData = await response.json();

        setProductDataById(resData);
      } catch (error) {
        console.error("Something went wrong:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  return {
    productDataById,
    loading,
    error,
  };
}
