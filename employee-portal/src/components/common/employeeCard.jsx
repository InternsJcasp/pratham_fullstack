export default function EmployeeCard({
  name,
  role,
  department,
  email,
  salary,
  image,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow w-full min-w-0">
      {/* Avatar Container with fixed dimensions & flex-shrink protection */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4 flex-shrink-0">
        <img
          src={image || "https://via.placeholder.com/96"}
          alt={name}
          className="w-full h-full rounded-full object-cover border-2 border-slate-100"
        />
      </div>

      {/* Employee Details Container */}
      <div className="w-full flex flex-col items-center min-w-0">
        <h4 className="text-[1rem] sm:text-[1.125rem] leading-[1.35] font-semibold text-slate-900 mb-0.5 max-w-full truncate px-1">
          {name}
        </h4>

        {role && (
          <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.45] font-medium text-blue-600 mb-2 max-w-full truncate px-1">
            {role}
          </p>
        )}

        <span className="text-[0.75rem] leading-[1.4] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md mb-3 max-w-full truncate">
          {department}
        </span>

        {salary && (
          <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.4] font-semibold text-emerald-600 mb-1.5">
            ${salary.toLocaleString()}
            <span className="text-[0.75rem] font-normal text-slate-400 ml-0.5">
              /yr
            </span>
          </p>
        )}

        <p
          className="text-[0.75rem] leading-[1.4] font-normal text-slate-500 w-full truncate px-2"
          title={email}
        >
          {email}
        </p>
      </div>
    </div>
  );
}
