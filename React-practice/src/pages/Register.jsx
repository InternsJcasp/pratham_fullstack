import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import Input from "../components/Input";
import Button from "../components/Button";

import { validateRegisterForm } from "../utils/validation";

const Register = () => {
  const navigate = useNavigate();

  const { register, loading } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing again
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear old messages
    setError("");
    setSuccess("");

    //  Validate form
    const validationError = validateRegisterForm(formData);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // Call authentication service through context
      const response = await register(
        formData.name,
        formData.email,
        formData.password,
        formData.role,
      );

      // Handle registration error
      if (!response.success) {
        setError(response.message);
        return;
      }

      // Registration successful
      setSuccess("Registration successful. Redirecting to login...");

      // Navigate to login
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register</h1>

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

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

        <div>
          <label htmlFor="role">Role</label>

          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
