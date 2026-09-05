import { useAuth } from "../hooks/useAuth";
const UserDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>User Dashboard</h1>

      <h2>Welcome, {user.name}</h2>

      <p>Email: {user.email}</p>

      <p>Role: {user.role}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
