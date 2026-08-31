import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/rootLayout";
import Home from "./pages/home";
import Employees from "./pages/employees";
import Department from "./pages/department";
import Profile from "./pages/profile";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="department" element={<Department />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
