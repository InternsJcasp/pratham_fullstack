const PRODUCT_API_URL = import.meta.env.PRODUCT_URL;

export const addProduct = async (productData, token) => {
  const response = await fetch(PRODUCT_API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  return response.json();
};
