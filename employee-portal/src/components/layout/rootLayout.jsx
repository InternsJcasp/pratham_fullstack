import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";
export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Top Navbar */}
      <Header />
      <Navbar />

      {/* Main Body Layout */}
      <div className="flex flex-1 w-full min-w-0 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Content Area + Footer */}
        <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-y-auto">
          {/* Dynamic Page Views Render Here */}
          <div className="flex-1">
            <Outlet />
          </div>

          {/* Bottom Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
