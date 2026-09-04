import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import ProductList from "./components/products/ProductList";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Layout from "./components/layout/Layout";

import { useAuth } from "./hooks/useAuth";
import ProductDetails from "./components/products/ProductDetails";

export default function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/products" replace /> : <Login />
        }
      />

      {/* Protected Routes */}
      <Route
        element={
          isAuthenticated ? <Layout /> : <Navigate to="/login" replace />
        }
      >
        <Route path="/products" element={<ProductList />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>

      {/* Default */}
      <Route
        path="*"
        element={
          <Navigate to={isAuthenticated ? "/products" : "/login"} replace />
        }
      />
    </Routes>
  );
}
