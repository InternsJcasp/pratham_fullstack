export default function EmployeeCard({ name, role, department, email, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <img
        src={image || "https://via.placeholder.com/96"}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-100"
      />
      <h3 className="text-lg font-bold text-slate-800">{name}</h3>
      <p className="text-sm font-medium text-blue-600 mb-1">{role}</p>
      <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md mb-3">
        {department}
      </span>
      <p className="text-xs text-slate-500">{email}</p>
    </div>
  );
}
