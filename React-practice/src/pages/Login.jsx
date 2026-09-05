import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import Input from "../components/Input";
import Button from "../components/Button";

import { validateLoginForm } from "../utils/validation";

const Login = () => {
  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    //  Validate form
    const validationError = validateLoginForm(formData);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      //  Call login
      const response = await login(formData.email, formData.password);

      // Handle login error
      if (!response.success) {
        setError(response.message);
        return;
      }

      // Login successful
      setSuccess("Login successful. Redirecting...");

      // Navigate according to role
      setTimeout(() => {
        if (response.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 500);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
