import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="flex-1 p-4 sm:p-6 bg-slate-50 min-h-screen flex flex-col justify-between w-full min-w-0 box-border overflow-x-hidden">
      <div className="w-full min-w-0 max-w-4xl">
        {/* Header Section */}
        <div className="mb-6 min-w-0">
          <h1 className="text-[1.5rem] sm:text-[2.25rem] leading-[1.2] font-bold text-slate-800 wrap-break-word">
            Contact Support
          </h1>
          <p className="text-[1rem] sm:text-[1.125rem] leading-normal font-normal text-slate-500 mt-1 wrap-break-word">
            Have a question or need administrative help? Send us a message.
          </p>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium transition">
            Thank you! Your message has been sent successfully. We will get back
            to you shortly.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Directory Support">Directory Support</option>
                  <option value="Account Issue">Account Issue</option>
                  <option value="Feature Request">Feature Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Describe your question or issue..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-700 py-2.5 px-4 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar Info Card */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-base font-bold text-slate-800 mb-4">
                Help Desk Info
              </h2>

              <div className="space-y-3 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-700">Support Hours</p>
                  <p className="text-slate-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Direct Email</p>
                  <p className="text-slate-500">support@employeeportal.com</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">
                    Office Location
                  </p>
                  <p className="text-slate-500">HQ Building, Floor 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
