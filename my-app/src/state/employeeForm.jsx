import { useState } from "react";

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Employee Data:");
    console.log(employee);
  }

  return (
    <div>
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name</label>

          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Enter employee name"
          />
        </div>

        <br />

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Enter employee email"
          />
        </div>

        <br />

        <div>
          <label>Department</label>

          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
