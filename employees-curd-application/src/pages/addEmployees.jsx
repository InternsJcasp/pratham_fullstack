import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/employees/employeesForm";
import { createEmployee } from "../services/employeeServices";
import Button from "../components/common/button";
import { MoveLeft } from "lucide-react";
import { EMPLOYEE_MESSAGES } from "../constant/message";
export default function AddEmployee() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (employeeData) => {
    try {
      setLoading(true);
      await createEmployee(employeeData);
      alert(EMPLOYEE_MESSAGES.CREATED);
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert(EMPLOYEE_MESSAGES.FETCH_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 text-slate-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Navigation / Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Add New Employee
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Fill in the information below to add a new team member.
            </p>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate("/employees")}
          >
            <MoveLeft className="size-5" />
            Back
          </Button>
        </div>

        {/* Form Container Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <EmployeeForm onSubmit={handleSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
}
