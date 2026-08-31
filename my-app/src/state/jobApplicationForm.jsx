import { useState } from "react";

function JobApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    role: "",
    gender: "",
    javascript: false,
    react: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Job Application</h2>

      <label>Name</label>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email</label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Experience</label>

      <input
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <label>Job Role</label>

      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
      </select>

      <p>Gender</p>

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

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>

      <p>Skills</p>

      <label>
        <input
          type="checkbox"
          name="javascript"
          checked={formData.javascript}
          onChange={handleChange}
        />
        JavaScript
      </label>

      <label>
        <input
          type="checkbox"
          name="react"
          checked={formData.react}
          onChange={handleChange}
        />
        React
      </label>

      <br />

      <button type="submit">Apply</button>
    </form>
  );
}

export default JobApplication;
