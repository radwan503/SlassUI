import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, Home, Info } from "lucide-react";
import menuData from "../data/MenuItem";

const Sidebar = ({ collapsed }: { collapsed?: boolean }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside
      className={`fixed top-16 left-0 z-50 flex flex-col bg-primary border-r border-darkBg p-4 shadow-xl transition-transform duration-300 overflow-y-auto h-[calc(100vh-64px)] w-64
        ${collapsed ? "-translate-x-full" : "translate-x-0"}
      `}
    >
      <ul className="space-y-2">
        <Link
          to="/"
          className="flex items-center gap-2 py-2 text-sm text-textSlate hover:text-textColor"
        >
          <Home/>
          <span>Home</span>
        </Link>
        <Link
          to="https://radwananik.netlify.app/"
          className="flex items-center gap-2 py-2 text-sm text-textSlate hover:text-textColor"
        >
          <Info/>
          <span>Creator</span>
        </Link>
        <p className="  !text-blue-500">UI Blocks</p>
        {menuData.map((menu) => (
          <li key={menu.title}>
            {menu.children ? (
              <>
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full flex justify-between items-center py-2 font-medium text-gray-800 hover:text-blue-500"
                >
                  <span>{menu.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMenus[menu.title] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openMenus[menu.title] && (
                  <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                    {menu.children.map((child) => (
                      <li key={child.title}>
                        <Link to={child.path} className="block hover:text-blue-600">
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={menu.path!}
                className="flex items-center gap-2 py-2 text-sm text-textSlate hover:text-textColor"
              >
                {menu.icon}
                {!collapsed && <span>{menu.title}</span>}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Upgrade Section */}
      <div
        role="alert"
        className="relative mt-auto w-full px-4 py-4 text-base text-white bg-gray-900 rounded-lg"
      >
        <h6 className="mb-1 font-semibold">Upgrade to PRO</h6>
        <p className="text-sm opacity-80">
          Unlock more features and premium components.
        </p>
        <div className="flex gap-3 mt-4">
          <a href="#">Dismiss</a>
          <a href="#">Upgrade Now</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
