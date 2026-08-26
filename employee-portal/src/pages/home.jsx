import { useState, useEffect } from "react";
import EmployeeCard from "../components/common/employeeCard";
import LoadingSpinner from "../components/common/loading";
import { Error } from "../components/common/error";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search, Filter & Sort state
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 6;

  // Department options for missing API data
  const departmentsList = ["Engineering", "Marketing", "Design", "Product"];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }

        const resData = await response.json();
        const rawList = resData.users || [];

        const formattedList = rawList.map((user, index) => {
          const fullName = `${user.firstName} ${user.lastName}`;
          const cleanEmail =
            user.email ||
            `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@company.com`;

          const photoAvatar = `https://i.pravatar.cc/150?img=${(index % 70) + 1}`;

          return {
            id: user.id,
            name: fullName,
            email: cleanEmail,
            salary: user.age * 2500 + 40000,
            age: user.age,
            department: departmentsList[index % departmentsList.length],
            image: photoAvatar,
            avatar: photoAvatar,
          };
        });

        setEmployees(formattedList);
      } catch (err) {
        setError(err.message || "Failed to load employee data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter logic
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment =
      department === "All" || emp.department === department;
    return matchesSearch && matchesDepartment;
  });

  // Sort logic
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortBy === "salaryLow") return a.salary - b.salary;
    if (sortBy === "salaryHigh") return b.salary - a.salary;
    return a.name.localeCompare(b.name);
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);
  const startIndex = (currentPage - 1) * employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    startIndex,
    startIndex + employeesPerPage,
  );

  // Input Handlers
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setSearch("");
    setDepartment("All");
    setSortBy("name");
    setCurrentPage(1);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  return (
    <main className="flex-1 p-4 sm:p-6 bg-slate-50 min-h-screen flex flex-col justify-between w-full min-w-0 box-border overflow-x-hidden">
      <div className="w-full min-w-0">
        {/* Header Section */}
        <div className="mb-6 min-w-0">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] leading-[1.2] font-bold text-slate-800 wrap-break-word">
            Employee Directory
          </h1>

          <p className="text-[1rem] sm:text-[1.125rem] leading-normal font-normal text-slate-500 mt-1 wrap-break-word">
            Manage and view team members
          </p>
        </div>

        {/* Controls Bar */}
        <div className="bg-white p-4 w-full rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between min-w-0">
          {/* Search Box */}
          <div className="relative w-full lg:flex-1 lg:max-w-md min-w-0">
            <input
              type="text"
              placeholder="Search employees by name..."
              value={search}
              onChange={handleSearchChange}
              className="w-full pl-3 pr-4 py-2 text-[0.875rem] leading-tight font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition box-border"
            />
          </div>

          {/* Filter, Sort & Reset Group */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 items-stretch sm:items-center min-w-0">
            <select
              value={department}
              onChange={handleDepartmentChange}
              className="w-full sm:w-44 px-3 py-2 text-[0.875rem] leading-tight font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition box-border"
            >
              <option value="All">All Departments</option>
              {departmentsList.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={handleSortChange}
              className="w-full sm:w-44 px-3 py-2 text-[0.875rem] leading-tight font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition box-border"
            >
              <option value="name">Sort by: Name</option>
              <option value="salaryLow">Salary: Low to High</option>
              <option value="salaryHigh">Salary: High to Low</option>
            </select>

            <button
              onClick={handleResetFilter}
              className="w-full sm:w-auto bg-slate-700 px-4 py-2 text-white font-medium text-[0.875rem] leading-tight rounded-lg hover:bg-slate-600 transition cursor-pointer text-center shrink-0"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full min-w-0">
          {currentEmployees.length > 0 ? (
            currentEmployees.map((emp) => (
              <EmployeeCard key={emp.id} {...emp} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-[1.0rem] leading-normal font-normal text-slate-400">
              No employees found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 pt-4 border-t border-slate-200 w-full min-w-0">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-1.5 text-[0.875rem] leading-tight font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1.5 text-[0.875rem] leading-tight font-medium rounded-lg transition ${
                    currentPage === page
                      ? "bg-slate-700 text-white"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {page}
                </button>
              ),
            )}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-1.5 text-[0.875rem] leading-tight font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
