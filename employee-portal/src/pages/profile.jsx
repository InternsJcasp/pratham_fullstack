import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Morgan",
    role: "Senior HR Manager",
    email: "alex.morgan@company.com",
    phone: "+1 (555) 019-2834",
    department: "Human Resources",
    location: "San Francisco, CA",
    bio: "Passionate about building collaborative workplace cultures and optimizing workforce operations across engineering and marketing teams.",
    avatar: "https://i.pravatar.cc/150?img=32",
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
  };

  return (
    <main className="flex-1 p-4 sm:p-6 bg-slate-50 min-h-screen flex flex-col justify-between w-full min-w-0 box-border overflow-x-hidden">
      <div className="w-full min-w-0 max-w-4xl">
        {/* Page Header */}
        <div className="mb-6 min-w-0">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] leading-[1.2] font-bold text-slate-800 wrap-break-word">
            User Profile
          </h1>
          <p className="text-[1rem] sm:text-[1.125rem] leading-normal font-normal text-slate-500 mt-1 wrap-break-word">
            Manage your account details and personal preferences
          </p>
        </div>

        {/* Profile Card Header */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-2 border-slate-200 object-cover shadow-sm"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl font-bold text-slate-800">
                {profile.name}
              </h2>
              <p className="text-sm font-medium text-slate-500">
                {profile.role}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">
                  {profile.department}
                </span>
                <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-medium border border-slate-200">
                  {profile.location}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition"
            >
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Profile Form / Details View */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
            {isEditing ? "Edit Personal Details" : "Personal Information"}
          </h3>

          {isEditing ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Role / Position
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="3"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white bg-slate-700 rounded-lg hover:bg-slate-600 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="text-sm font-medium text-slate-700 mt-1">
                    {profile.email}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Phone Number
                  </p>
                  <p className="text-sm font-medium text-slate-700 mt-1">
                    {profile.phone}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Department
                  </p>
                  <p className="text-sm font-medium text-slate-700 mt-1">
                    {profile.department}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-medium text-slate-700 mt-1">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  About Me
                </p>
                <p className="text-sm leading-relaxed text-slate-600 mt-1">
                  {profile.bio}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
