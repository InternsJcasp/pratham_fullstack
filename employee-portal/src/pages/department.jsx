import { useState } from "react";
import { useEmployees } from "../hooks/useEmployees";
import EmployeeCard from "../components/common/employeeCard";
import LoadingSpinner from "../components/common/loading";
import { Error } from "../components/common/error";

export default function Department() {
  const { employees, loading, error } = useEmployees();
  const [selectedDept, setSelectedDept] = useState("Engineering");

  const departmentsList = ["Engineering", "Marketing", "Design", "Product"];

  if (loading) return <LoadingSpinner />;
  if (error) return <Error message={error} />;

  // Calculate department stats dynamically
  const getDepartmentStats = (deptName) => {
    const deptEmployees = employees.filter(
      (emp) => emp.department === deptName,
    );
    const totalSalary = deptEmployees.reduce((sum, emp) => sum + emp.salary, 0);
    const avgSalary = deptEmployees.length
      ? Math.round(totalSalary / deptEmployees.length)
      : 0;

    return {
      count: deptEmployees.length,
      avgSalary,
      totalSalary,
    };
  };

  const activeEmployees = employees.filter(
    (emp) => emp.department === selectedDept,
  );
  const currentStats = getDepartmentStats(selectedDept);

  return (
    <main className="flex-1 p-4 sm:p-6 bg-slate-50 min-h-screen flex flex-col justify-between w-full min-w-0 box-border overflow-x-hidden">
      <div className="w-full min-w-0">
        {/* Header Section */}
        <div className="mb-6 min-w-0">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] leading-[1.2] font-bold text-slate-800 wrap-break-word">
            Departments
          </h1>
          <p className="text-[1rem] sm:text-[1.125rem] leading-normal font-normal text-slate-500 mt-1 wrap-break-word">
            Overview of team structure and department breakdown
          </p>
        </div>

        {/* Department Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
          {departmentsList.map((dept) => {
            const isSelected = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  isSelected
                    ? "bg-slate-700 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Selected Department Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total Members
            </p>
            <p className="text-2xl font-bold text-slate-800 mt-1">
              {currentStats.count} Employees
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Average Salary
            </p>
            <p className="text-2xl font-bold text-slate-800 mt-1">
              ${currentStats.avgSalary.toLocaleString()}/yr
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Department Budget
            </p>
            <p className="text-2xl font-bold text-slate-800 mt-1">
              ${currentStats.totalSalary.toLocaleString()}/yr
            </p>
          </div>
        </div>

        {/* Employee Cards Grid */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">
          {selectedDept} Team Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full min-w-0">
          {activeEmployees.length > 0 ? (
            activeEmployees.map((emp) => <EmployeeCard key={emp.id} {...emp} />)
          ) : (
            <div className="col-span-full text-center py-12 text-slate-400">
              No employees assigned to this department yet.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
