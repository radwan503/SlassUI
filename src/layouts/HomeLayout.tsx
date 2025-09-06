import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const HomeLayout = ({ children }:any) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  return(
  <div className="flex flex-col min-h-screen">
    <Navbar
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        toggleNav={() => setNavOpen(!navOpen)}
        navOpen={navOpen}
      />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
  )
};

export default HomeLayout;
