import { useState } from "react";
import { ProductCard } from "../components/productCard";

export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2999,
      description: "High-quality wireless headphones with noise cancellation.",
      image: "image-url",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 2499,
      description: "RGB mechanical keyboard for gaming and programming.",
      image: "image-url",
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Wearables",
      price: 3999,
      description: "Smart watch with fitness tracking and notifications.",
      image: "image-url",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      category: "Bags",
      price: 1499,
      description: "Water-resistant backpack suitable for laptops and travel.",
      image: "image-url",
    },
    {
      id: 5,
      name: "USB-C Charger",
      category: "Electronics",
      price: 999,
      description: "Fast USB-C charger compatible with multiple devices.",
      image: "image-url",
    },
  ];
  const [data, setData] = useState(products);

  const addEmployee = () => {
    setData((previousData) => [
      ...previousData,
      {
        id: 6,
        name: "USB-C Charger",
        category: "Electronics",
        price: 999,
        description: "Fast USB-C charger compatible with multiple devices.",
        image: "image-url",
      },
    ]);
  };

  return (
    <main>
      <h2>Home Page</h2>

      <button onClick={addEmployee}>Add Employee</button>

      {data.map((employee) => (
        <ProductCard
          key={employee.id}
          productName={employee.name}
          images={employee.image}
          details={`${employee.role} - ${employee.department}`}
          price={employee.email}
          rating="4.5"
        />
      ))}
    </main>
  );
};
