import { Navbar } from "./components/navbar";
import ProductList from "./components/productList";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
import PostList from "./components/postList";

function App() {
  return (
    <>
      <Navbar />
      <PostList />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
