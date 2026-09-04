import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-950">
      <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>

      <p className="mt-2 dark:text-gray-300">Welcome, {user?.name}</p>

      <p className="mt-1 dark:text-gray-300">Email: {user?.email}</p>

      <button onClick={logout} className="mt-5 bg-red-600 px-4 py-2 text-white">
        Logout
      </button>
    </div>
  );
}
