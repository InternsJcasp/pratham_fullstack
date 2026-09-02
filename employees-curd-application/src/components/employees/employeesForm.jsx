import { useState } from "react";
import { DEPARTMENTS } from "../../utils/constant";
import Button from "../common/button";

export default function EmployeeForm({ initialData, onSubmit, loading }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      email: "",
      phone: "",
      department: "",
      salary: "",
    },
  );

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error message when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.salary) newErrors.salary = "Salary is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    onSubmit({
      ...formData,
      salary: Number(formData.salary),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Jane Doe"
          className={`mt-1 w-full rounded-xl border px-3.5 py-2 text-sm outline-none transition-all ${
            errors.name
              ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Grid container for Email & Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane.doe@company.com"
            className={`mt-1 w-full rounded-xl border px-3.5 py-2 text-sm outline-none transition-all ${
              errors.email
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={`mt-1 w-full rounded-xl border px-3.5 py-2 text-sm outline-none transition-all ${
              errors.phone
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      {/*  Department & Salary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Department */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Department
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`mt-1 w-full rounded-xl border bg-white px-3.5 py-2 text-sm outline-none transition-all ${
              errors.department
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            }`}
          >
            <option value="">Select Department</option>
            {DEPARTMENTS.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="mt-1 text-xs text-red-500">{errors.department}</p>
          )}
        </div>

        {/* Salary */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Salary ($)
          </label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="75000"
            className={`mt-1 w-full rounded-xl border px-3.5 py-2 text-sm outline-none transition-all ${
              errors.salary
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            }`}
          />
          {errors.salary && (
            <p className="mt-1 text-xs text-red-500">{errors.salary}</p>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 flex justify-end">
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={loading}
          className="w-full sm:w-auto"
        >
          {loading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Saving...
            </>
          ) : (
            "Save Employee"
          )}
        </Button>
      </div>
    </form>
  );
}
