import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import Input from "../common/Input";
import Button from "../common/Button";

export default function LoginForm() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password);

      // Login successful
      navigate("/products");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md border bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900"
    >
      <h1 className="mb-6 text-2xl font-bold dark:text-white">
        Login
      </h1>

      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      {error && (
        <p className="mb-4 text-red-500">
          {error}
        </p>
      )}

      <Button>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}