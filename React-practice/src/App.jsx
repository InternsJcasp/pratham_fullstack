import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProducts";
import Unauthorized from "./pages/Unauthorized";

import ProtectedRoutes from "./routes/ProtectedRouted";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* User Routes */}

        <Route element={<ProtectedRoutes allowedRoles={["user"]} />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>

        {/* Admin Routes */}

        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/admin/products/add" element={<AddProduct />} />
        </Route>

        {/* Default Route */}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
