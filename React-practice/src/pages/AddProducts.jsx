import { useState } from "react";

import { useAuth } from "../hooks/useAuth";

import { addProduct } from "../services/productService";

import Input from "../components/Input";
import Button from "../components/Button";

const AddProduct = () => {
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const product = await addProduct(formData, token);

      console.log("Created product:", product);

      setSuccess("Product added successfully!");

      setFormData({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter product title"
        />

        <Input
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />

        <Input
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
        />

        <Input
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />

        <Input
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
