import { Navbar } from "./components/navbar";
import ProductList from "./components/productList";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
