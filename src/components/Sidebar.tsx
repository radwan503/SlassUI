// components/Sidebar.tsx
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
      className={`fixed top-16 left-0 z-50 flex flex-col h-[calc(100vh-64px)] w-64
        border-r border-darkBg bg-gradient-to-b from-[#0B1220] via-[#0E1730] to-[#0B1220]
        text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,.45)]
        backdrop-blur-xl overflow-y-auto transition-transform duration-300
        ${collapsed ? "-translate-x-full" : "translate-x-0"}`}
      aria-label="Main sidebar navigation"
    >
      {/* Decorative glow / brand strip (purely visual) */}
      <div className="relative mb-3 px-4 pt-3">
        <div className="absolute inset-x-4 -top-2 h-[2px] rounded-full bg-gradient-to-r from-cyan-400/70 via-blue-400/70 to-violet-400/70"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500 text-white text-xs font-bold shadow-lg">
              UI
            </span>
            <span className="text-sm tracking-wide text-slate-300/90">
              SlassUI Library
            </span>
          </div>
          <span className="rounded-full bg-slate-800/70 px-2 py-0.5 text-[10px] tracking-wide text-slate-300 ring-1 ring-white/10">
            v1.0
          </span>
        </div>
      </div>

      <ul className="px-3 space-y-1">
        {/* Primary links */}
        <li>
          <Link
            to="/"
            className="group flex items-center gap-2 rounded-md px-2 py-2 text-[13px] text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition"
          >
            <Home className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>Home</span>
            <span className="ml-auto text-[10px] rounded px-1.5 py-0.5 bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/25">
              go
            </span>
          </Link>
        </li>

        <li>
          <Link
            to="https://radwananik.netlify.app/"
            className="group flex items-center gap-2 rounded-md px-2 py-2 text-[13px] text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition"
          >
            <Info className="h-4 w-4 opacity-80 group-hover:opacity-100" />
            <span>Creator</span>
            <span className="ml-auto text-[10px] rounded px-1.5 py-0.5 bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/25">
              external
            </span>
          </Link>
        </li>

        {/* Section label */}
        <li className="pt-2 pb-1">
          <p className="px-2 text-[11px] uppercase tracking-wider text-cyan-300/80">
            UI Blocks
          </p>
        </li>

        {/* Dynamic menus */}
        {menuData.map((menu) => (
          <li key={menu.title} className="rounded-md">
            {menu.children ? (
              <>
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full group flex items-center justify-between rounded-md px-2 py-2 text-[13px] font-medium
                             text-slate-200/90 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition"
                >
                  <span className="inline-flex items-center gap-2">
                    {/* optional icon if present on parent */}
                    {menu.icon ? (
                      <span className="opacity-90 group-hover:opacity-100">{menu.icon}</span>
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,.35)]" />
                    )}
                    {menu.title}
                    {!!menu.children?.length && (
                      <span className="ml-1 text-[10px] rounded px-1.5 py-0.5 bg-slate-700/60 text-slate-200 ring-1 ring-white/10">
                        {menu.children.length}
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 opacity-80 transition-transform duration-300 ${
                      openMenus[menu.title] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Collapsible list */}
                {openMenus[menu.title] && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                    {menu.children.map((child) => (
                      <li key={child.title}>
                        <Link
                          to={child.path}
                          className="group flex items-center justify-between rounded-md px-2 py-1.5 text-[13px]
                                     text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition"
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400/70 group-hover:bg-sky-400/90" />
                            {child.title}
                          </span>
                          <span className="text-[10px] text-slate-400 group-hover:text-slate-200">
                            ↗
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={menu.path!}
                className="group flex items-center gap-2 rounded-md px-2 py-2 text-[13px]
                           text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition"
              >
                {menu.icon}
                <span className="truncate">{menu.title}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Spacer */}
      <div className="mt-4 px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Upgrade Section */}
      <div
        role="alert"
        className="relative mt-auto m-4 overflow-hidden rounded-xl
                   bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-900
                   ring-1 ring-white/10 shadow-lg"
      >
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-violet-500/20 blur-2xl" />

        <div className="relative px-4 py-4">
          <h6 className="mb-1 text-sm font-semibold text-white">Upgrade to PRO</h6>
          <p className="text-[12px] leading-5 text-slate-300/90">
            Unlock advanced layouts, premium components, and priority updates.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-[12px]
                         text-slate-200 hover:text-white bg-white/5 hover:bg-white/10
                         ring-1 ring-white/10 transition"
            >
              Dismiss
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-[12px]
                         text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400
                         hover:from-cyan-300 hover:to-blue-300 font-medium
                         ring-1 ring-white/20 shadow-[0_6px_20px_rgba(34,211,238,.35)] transition"
            >
              Upgrade Now
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-400/90">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.6)]" />
              Secure
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,.6)]" />
              Regular updates
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,.6)]" />
              100+ blocks
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
