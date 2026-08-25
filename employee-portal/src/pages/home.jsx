import EmployeeCard from "../components/common/employeeCard";
import { EmployeesData } from "../data/employeeData";

export default function Home() {
  return (
    <main className="flex-1 p-6 bg-slate-50">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Employee Directory
        </h2>
        <p className="text-sm text-slate-500">Manage and view team members</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {EmployeesData.map((emp) => (
          <EmployeeCard key={emp.id} {...emp} />
        ))}
      </div>
    </main>
  );
}
