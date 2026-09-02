import Button from "../common/button";

export default function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <tr>
            <th className="px-6 py-3.5">Name</th>
            <th className="px-6 py-3.5">Email</th>
            <th className="px-6 py-3.5">Phone</th>
            <th className="px-6 py-3.5">Department</th>
            <th className="px-6 py-3.5">Salary</th>
            <th className="px-6 py-3.5 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100 text-slate-700">
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="transition-colors hover:bg-slate-50/80"
            >
              {/* Name with initials avatar */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-slate-700">
                    {employee.name
                      ? employee.name.charAt(0).toUpperCase()
                      : "E"}
                  </div>
                  <span className="font-semibold text-slate-900">
                    {employee.name}
                  </span>
                </div>
              </td>

              {/* Email */}
              <td className="px-6 py-4 text-slate-600">{employee.email}</td>

              {/* Phone */}
              <td className="px-6 py-4 text-slate-600">{employee.phone}</td>

              {/* Department Badge */}
              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                  {employee.department}
                </span>
              </td>

              {/* Salary formatted */}
              <td className="px-6 py-4 font-medium text-slate-900">
                ₹{Number(employee.salary).toLocaleString("en-IN")}
              </td>

              {/* Actions */}
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(employee.id)}
                    className="text-slate-600 hover:text-indigo-600"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(employee.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
