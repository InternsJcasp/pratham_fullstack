import { useState } from "react";
import InputField from "../components/common/inputfield";
import DateField from "../components/common/dateField";
import SelectField from "../components/common/selectField";
import ErrorMessage from "../components/common/errorMessage";
import Button from "../components/common/Button";
import { departmentOptions } from "../components/common/departmentOption";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Pure Validation Functions
  const validateRequired = (value, fieldName) => {
    if (!value || !value.toString().trim()) {
      return `${fieldName} is required.`;
    }
    return "";
  };

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

  const validateMobile = (mobile) => {
    if (!mobile.trim()) return "Mobile number is required.";
    const mobileRegex = /^[0-9]{10}$/; // Adjust regex based on regional requirements
    if (!mobileRegex.test(mobile))
      return "Enter a valid 10-digit mobile number.";
    return "";
  };

  const validateDate = (date, fieldName) => {
    if (!date) return `${fieldName} is required.`;
    const selectedDate = new Date(date);
    const today = new Date();

    if (selectedDate > today) return `${fieldName} cannot be in the future.`;
    return "";
  };

  const validateSalary = (salary) => {
    if (!salary) return "Salary is required.";
    const numericSalary = Number(salary);
    if (isNaN(numericSalary) || numericSalary <= 0) {
      return "Enter a valid positive salary amount.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all form fields
    const newErrors = {
      name: validateRequired(formData.name, "Name"),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      mobile: validateMobile(formData.mobile),
      dob: validateDate(formData.dob, "Date of Birth"),
      department: validateRequired(formData.department, "Department"),
      designation: validateRequired(formData.designation, "Designation"),
      salary: validateSalary(formData.salary),
      joiningDate: validateDate(formData.joiningDate, "Joining Date"),
    };

    // Remove empty error keys
    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Proceed with API call or submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Now!</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <InputField
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
          <ErrorMessage message={errors.name} />
        </div>

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

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <InputField
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
          />
          <ErrorMessage message={errors.mobile} />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <DateField name="dob" value={formData.dob} onChange={handleChange} />
          <ErrorMessage message={errors.dob} />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium">Department</label>
          <SelectField
            name="department"
            value={formData.department}
            options={departmentOptions}
            onChange={handleChange}
            placeholder="Select Department"
          />
          <ErrorMessage message={errors.department} />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium">Designation</label>
          <InputField
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
          />
          <ErrorMessage message={errors.designation} />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium">Salary</label>
          <InputField
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter salary"
          />
          <ErrorMessage message={errors.salary} />
        </div>

        {/* Date of Joining */}
        <div>
          <label className="block text-sm font-medium">Date of Joining</label>
          <DateField
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.joiningDate} />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full px-4 py-1 border rounded border-slate-600 hover:bg-slate-700 transition-colors hover:text-white"
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
