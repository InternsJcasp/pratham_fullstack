import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { deleteEmployee, getEmployees } from "../services/employeeServices";

import Loader from "../components/common/loader";
import ErrorMessage from "../components/common/errorMessage";
import EmptyState from "../components/common/emptyState";

import EmployeeTable from "../components/employees/employeeTable";
import EmployeeSearch from "../components/employees/employeeSearch";
import EmployeePagination from "../components/employees/employeePagination";
import Button from "../components/common/button";

import { ITEMS_PER_PAGE } from "../utils/constant";

function EmployeeList() {
  const navigate = useNavigate();

  // Employees
  const [employees, setEmployees] = useState([]);

  // Loading and error
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState("");

  // Search and pagination
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Used for retry
  const [retry, setRetry] = useState(0);

  // GET EMPLOYEES
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getEmployees();

        setEmployees(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load employees.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [retry]);

  // RETRY
  const handleRetry = () => {
    setRetry((prev) => prev + 1);
  };

  // SEARCH
  const filteredEmployees = employees.filter((employee) => {
    const searchText = search.toLowerCase();

    return (
      employee.name.toLowerCase().includes(searchText) ||
      employee.email.toLowerCase().includes(searchText) ||
      employee.department.toLowerCase().includes(searchText)
    );
  });

  // PAGINATION
  const totalPages = Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // SEARCH HANDLER
  const handleSearch = (value) => {
    setSearch(value);

    // Go back to page 1
    setCurrentPage(1);
  };

  // DELETE EMPLOYEE
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleteLoading(true);
      setError("");

      await deleteEmployee(id);

      // Remove employee from UI
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id),
      );
    } catch (error) {
      console.error(error);
      setError("Failed to delete employee.");
    } finally {
      setDeleteLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error && employees.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <ErrorMessage message={error} onRetry={handleRetry} />
      </div>
    );
  }

  // UI
  return (
    <div className="min-h-screen bg-slate-50 py-8 text-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Employee Management
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage team accounts, assign departments, and track updates.
            </p>
          </div>

          <Button
            type="button"
            variant="primary"
            onClick={() => navigate("/employees/add")}
          >
            <Plus className="text-gray-300" />
            Add Employee
          </Button>
        </div>

        {/* Toolbar: Search & Action Alerts */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <EmployeeSearch search={search} setSearch={handleSearch} />
          </div>

          {/* Inline Error Message */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Delete Loading Indicator Banner */}
          {deleteLoading && (
            <div className="flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-sm font-medium text-indigo-700">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
              Deleting employee...
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="mt-6">
          {paginatedEmployees.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {/* Employee Table */}
              <EmployeeTable
                employees={paginatedEmployees}
                onEdit={(id) => navigate(`/employees/edit/${id}`)}
                onDelete={handleDelete}
              />

              {/* Pagination */}
              {totalPages > 1 && (
                <EmployeePagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
