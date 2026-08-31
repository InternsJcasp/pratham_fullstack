import { useState } from "react";
import InputField from "../components/common/inputfield";
import ErrorMessage from "../components/common/errorMessage";
import Button from "../components/common/Button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Pure Validation Functions
  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Please enter a valid email address.";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required.";
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    }
    return "";
  };

  const validateConfirmPassword = (confirmPassword, password) => {
    if (!confirmPassword) return "Please confirm your password.";
    if (confirmPassword !== password) return "Passwords do not match.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all login form fields
    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(
        formData.confirmPassword,
        formData.password,
      ),
    };

    // Filter out empty error strings
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("Logged in successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <ErrorMessage message={errors.email} />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <InputField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          <ErrorMessage message={errors.password} />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <InputField
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          <ErrorMessage message={errors.confirmPassword} />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full px-4 py-1 border rounded border-slate-600 hover:bg-slate-700 transition-colors hover:text-white"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
