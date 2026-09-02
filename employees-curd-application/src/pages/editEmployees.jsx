import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/employees/employeesForm";
import { getEmployeeById, updateEmployee } from "../services/employeeServices";
import Loader from "../components/common/loader";
import ErrorMessage from "../components/common/errorMessage";
import Button from "../components/common/button";
import { MoveLeft } from "lucide-react";
function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setLoading(true);
        const data = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load employee.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (employeeData) => {
    try {
      setSaving(true);
      await updateEmployee(id, employeeData);
      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (error) {
      console.error(error);
      alert("Failed to update employee.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <ErrorMessage message={error} onRetry={() => navigate(0)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 text-slate-800">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Navigation & Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Edit Employee
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Update details for {employee?.name || "the selected employee"}.
            </p>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate("/employees")}
          >
            <MoveLeft className="size-5 text-gray-400"/>
            Back
          </Button>
        </div>

        {/* Form Container Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {employee && (
            <EmployeeForm
              initialData={employee}
              onSubmit={handleSubmit}
              loading={saving}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
