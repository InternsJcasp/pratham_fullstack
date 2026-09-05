import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Welcome, {user.name}</h2>

      <p>Email: {user.email}</p>

      <p>Role: {user.role}</p>

      <Link to="/admin/products/add">Add Product</Link>

      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
