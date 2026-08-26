import { useState } from "react";

function EmployeeManager() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rahul",
      department: "IT",
      salary: 40000,
    },
    {
      id: 2,
      name: "Priya",
      department: "HR",
      salary: 35000,
    },
    {
      id: 3,
      name: "Amit",
      department: "Finance",
      salary: 50000,
    },
  ]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // ADD
  const addEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      name: "Neha",
      department: "IT",
      salary: 45000,
    };

    setEmployees([...employees, newEmployee]);
  };

  // DELETE
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // UPDATE
  const increaseSalary = (id) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              salary: employee.salary + 5000,
            }
          : employee,
      ),
    );
  };

  // FILTER
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  // SORT
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "salaryLow") {
      return a.salary - b.salary;
    }

    if (sortBy === "salaryHigh") {
      return b.salary - a.salary;
    }

    return 0;
  });

  return (
    <div>
      <h1>Employee Manager</h1>

      {/* ADD */}
      <button onClick={addEmployee}>Add Employee</button>

      <br />
      <br />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* DEPARTMENT FILTER */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      {/* SORT */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="salaryLow">Salary: Low to High</option>
        <option value="salaryHigh">Salary: High to Low</option>
      </select>

      <hr />

      {/* LIST RENDERING */}
      {sortedEmployees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>

          <p>Department: {employee.department}</p>

          <p>Salary: ₹{employee.salary}</p>

          {/* UPDATE */}
          <button onClick={() => increaseSalary(employee.id)}>
            Increase Salary
          </button>

          {/* DELETE */}
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeManager;
