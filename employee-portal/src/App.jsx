import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Navbar from "./components/layout/navbar";
import Sidebar from "./components/layout/sidebar";
import Home from "./pages/home";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <Header />
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};
