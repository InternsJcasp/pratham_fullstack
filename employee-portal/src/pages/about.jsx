export default function About() {
  const stats = [
    { label: "Active Employees", value: "30+" },
    { label: "Departments", value: "4" },
    { label: "Platform Uptime", value: "99.9%" },
    { label: "Global Locations", value: "12" },
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 bg-slate-50 min-h-screen flex flex-col justify-between w-full min-w-0 box-border overflow-x-hidden">
      <div className="w-full min-w-0 max-w-5xl">
        {/* Header Section */}
        <div className="mb-8 min-w-0">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] leading-[1.2] font-bold text-slate-800 wrap-break-word">
            About Employee Portal
          </h1>
          <p className="text-[1rem] sm:text-[1.125rem] leading-normal font-normal text-slate-500 mt-1 wrap-break-word">
            Empowering teams with streamlined directory tools and workforce
            analytics.
          </p>
        </div>

        {/* Core Mission Card */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-[0.9375rem] mb-4">
            The Employee Portal was built to solve the complexities of modern
            team management. Our platform brings all department data, personnel
            directories, and structural metrics into a single intuitive
            interface.
          </p>
          <p className="text-slate-600 leading-relaxed text-[0.9375rem]">
            Whether you are searching for specific team members, tracking
            cross-departmental structures, or reviewing organizational stats,
            our platform provides fast, real-time insights for administrative
            clarity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                {stat.value}
              </p>
              <p className="text-[0.875rem] font-medium text-slate-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Key Features List */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Platform Capabilities
          </h2>
          <ul className="space-y-3 text-[0.9375rem] text-slate-600">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-slate-700 mt-2 shrink-0"></span>
              <span>
                <strong>Instant Search & Filter:</strong> Instantly locate team
                members across departments by name or specific criteria.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-slate-700 mt-2 shrink-0"></span>
              <span>
                <strong>Compensation Insights:</strong> Sort and evaluate
                organizational compensation trends seamlessly.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-slate-700 mt-2 shrink-0"></span>
              <span>
                <strong>Responsive Architecture:</strong> Fully optimized for
                desktop dashboards, tablet displays, and mobile views.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
