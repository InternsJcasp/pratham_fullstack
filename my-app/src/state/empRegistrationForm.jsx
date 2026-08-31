import { useState } from "react";

function EmployeeRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    department: "",
    gender: "",
    salary: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields including gender and salary
    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.department ||
      !formData.gender ||
      !formData.salary
    ) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear error if valid
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Employee Registration</h1>

        {error && <p className="text-red-500">{error}</p>}

        {/* Name */}
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* Salary (Added missing input) */}
        <div>
          <label htmlFor="salary">Salary: </label>
          <input
            type="number"
            id="salary"
            placeholder="Enter salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        {/* Department */}
        <div>
          <label htmlFor="department">Department: </label>
          <select
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <p>Gender: </p>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <br />
        <button type="submit">Register Employee</button>
      </form>
    </div>
  );
}

export default EmployeeRegistration;
