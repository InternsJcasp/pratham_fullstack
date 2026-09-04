import { Link } from "react-router-dom";

import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-950">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>

      <p className="mt-3 text-gray-500 dark:text-gray-400">Page not found.</p>

      <Link to="/dashboard" className="mt-6">
        <Button>Go Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;
