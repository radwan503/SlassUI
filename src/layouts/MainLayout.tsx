import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default open for large screens
  const [navOpen, setNavOpen] = useState(false);

  // Auto close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1536) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          toggleNav={() => setNavOpen(!navOpen)}
          navOpen={navOpen}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 mt-16 
          ${sidebarOpen ? "w-64" : "w-0"} 
          bg-white dark:bg-gray-800 overflow-hidden 
          fixed 2xl:static 2xl:block z-40`}
      >
        <Sidebar collapsed={!sidebarOpen} />
      </div>

      {/* Main Content */}
      <main
        className="pt-16 flex-1 h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900"
        style={{ height: "calc(100vh - 0px)" }}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
