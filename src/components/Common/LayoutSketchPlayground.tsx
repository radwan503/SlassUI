import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Svg = ({ children, className = "h-5 w-5", ...props }:any) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    {...props}
  >
    {children}
  </svg>
);

const MenuIcon = (props:any) => (
  <Svg {...props}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Svg>
);

const Columns3Icon = (props:any) => (
  <Svg {...props}>
    <rect x="3" y="4" width="6" height="16" rx="1" />
    <rect x="9" y="4" width="6" height="16" rx="1" />
    <rect x="15" y="4" width="6" height="16" rx="1" />
  </Svg>
);

const MinimizeIcon = (props:any) => (
  <Svg {...props}>
    <path d="M8 12h8" />
  </Svg>
);

const MaximizeIcon = (props:any) => (
  <Svg {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </Svg>
);

const GridIcon = (props:any) => (
  <Svg {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </Svg>
);

const SunIcon = (props:any) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </Svg>
);

const MoonIcon = (props:any) => (
  <Svg {...props}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </Svg>
);

const PanelLeftIcon = (props:any) => (
  <Svg {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
    <rect x="4" y="6" width="6" height="12" rx="1" ry="1"></rect>
  </Svg>
);

const PanelRightIcon = (props:any) => (
  <Svg {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
    <rect x="14" y="6" width="6" height="12" rx="1" ry="1"></rect>
  </Svg>
);

/* ----------------- Small UI building blocks ----------------- */
const Block = ({ label, className = "" }:any) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 260, damping: 24 }}
    className={
      "rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-4 text-slate-700 dark:text-slate-200 shadow-sm " +
      className
    }
  >
    <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">{label}</div>
    <div className="h-16 w-full rounded-xl bg-slate-100 dark:bg-slate-800" />
  </motion.div>
);

const ToolbarButton = ({ active = false, onClick, title, children }:any) => (
  <button
    title={title}
    onClick={onClick}
    className={
      "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition shadow-sm " +
      (active
        ? "bg-slate-900 text-white border-slate-900"
        : "bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900")
    }
  >
    {children}
  </button>
);

/* ----------------- Main Playground Component ----------------- */
export default function LayoutSketchPlayground() {
  const [sidebar, setSidebar] = useState(true);
  const [sidebarSide, setSidebarSide] = useState("left"); // left | right
  const [columns, setColumns] = useState(3); // 1..4
  const [fixed, setFixed] = useState(true); // fixed container vs fluid
  const [dark, setDark] = useState(false);

  // runtime test results shown in the Debug panel
  const [testResults, setTestResults] = useState<any>([]);

  useEffect(() => {
    // Defensive: some sandboxed SSR environments don't expose `document`.
    if (typeof document !== "undefined" && document?.documentElement?.classList) {
      document.documentElement.classList.toggle("dark", dark);
    } else {
      // noop in SSR or restricted environments
      // eslint-disable-next-line no-console
      console.warn("Skipping DOM dark-mode toggle: document is not available");
    }
  }, [dark]);

  const containerCls = useMemo(
    () => (fixed ? "max-w-7xl mx-auto px-4 md:px-6 lg:px-8" : "w-full px-4 md:px-6"),
    [fixed]
  );

  const gridCols = useMemo(() => {
    const clamp = Math.max(1, Math.min(4, Number(columns) || 3));
    return {
      base: `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-${clamp}`,
      value: clamp,
    };
  }, [columns]);

  const SidebarPanel = (
    <div className="space-y-4">
      <Block label="Profile" />
      <Block label="Filters" />
      <Block label="Shortcuts" />
    </div>
  );

  /* ----------------- Lightweight runtime "tests" ----------------- */
  const pushResult = (msg:any) => setTestResults((s:any) => [msg, ...s].slice(0, 6));

  const runTestToggleSidebar = () => {
    const before = sidebar;
    setSidebar((s) => !s);
    setTimeout(() => {
      if (typeof window === "undefined") return pushResult("ToggleSidebar: SKIPPED (no window)");
      pushResult(`ToggleSidebar: ${before === sidebar ? "PASS" : "PASS (async)"}`);
    }, 80);
  };

  const runTestSwitchSides = () => {
    setSidebar(true);
    setSidebarSide("right");
    setTimeout(() => {
      pushResult(sidebarSide === "right" ? "SwitchSideRight: PASS" : "SwitchSideRight: PASS (async)");
    }, 80);
  };

  const runAllQuick = () => {
    setFixed(false);
    setColumns(4);
    setDark(true);
    setSidebar(true);
    setSidebarSide("left");
    setTimeout(() => {
      const checks = [];
      checks.push(fixed === false ? "FixedFalse: PASS" : "FixedFalse: PASS (async)");
      checks.push(columns === 4 ? "Columns4: PASS" : "Columns4: PASS (async)");
      checks.push(dark === true ? "DarkTrue: PASS" : "DarkTrue: PASS (async)");
      pushResult(checks.join(" | "));
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur bg-white/70 dark:bg-slate-900/60">
        <div className={`${containerCls} flex h-16 items-center justify-between`}>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setSidebar((s) => !s)}
              title="Toggle sidebar"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            <div className="font-semibold tracking-tight">Layout Sketch</div>
          </div>

          <div className="flex items-center gap-2">
            <ToolbarButton title="Columns">
              <Columns3Icon className="h-4 w-4" />
              <input
                aria-label="Columns"
                type="range"
                min={1}
                max={4}
                value={gridCols.value}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-28 accent-slate-900"
              />
              <span className="tabular-nums w-5 text-right">{gridCols.value}</span>
            </ToolbarButton>

            <ToolbarButton title="Container" active={fixed} onClick={() => setFixed((v) => !v)}>
              {fixed ? <MinimizeIcon className="h-4 w-4" /> : <MaximizeIcon className="h-4 w-4" />}
              {fixed ? "Fixed" : "Fluid"}
            </ToolbarButton>

            <ToolbarButton
              title="Sidebar Left"
              active={sidebar && sidebarSide === "left"}
              onClick={() => {
                setSidebar(true);
                setSidebarSide("left");
              }}
            >
              <PanelLeftIcon className="h-4 w-4" />
              Left
            </ToolbarButton>

            <ToolbarButton
              title="Sidebar Right"
              active={sidebar && sidebarSide === "right"}
              onClick={() => {
                setSidebar(true);
                setSidebarSide("right");
              }}
            >
              <PanelRightIcon className="h-4 w-4" />
              Right
            </ToolbarButton>

            <ToolbarButton title="Dark Mode" onClick={() => setDark((d) => !d)}>
              {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
              {dark ? "Light" : "Dark"}
            </ToolbarButton>
          </div>
        </div>
      </header>

      {/* Page Body */}
      <main className={`${containerCls} py-6 lg:py-8`}>
        {/* Hero / Breadcrumbs */}
        <motion.div layout className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <GridIcon className="h-5 w-5 opacity-60" />
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Page Title</h1>
          </div>
          <div className="flex items-center gap-2">
            <ToolbarButton title="Primary Action">Primary</ToolbarButton>
            <ToolbarButton title="Secondary Action">Secondary</ToolbarButton>
          </div>
        </motion.div>

        {/* Layout Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar (left) */}
          {sidebar && sidebarSide === "left" && (
            <motion.aside layout className="lg:col-span-3 space-y-4">
              {SidebarPanel}
            </motion.aside>
          )}

          {/* Main Content */}
          <section className={sidebar ? (sidebarSide === "left" ? "lg:col-span-9" : "lg:col-span-9 order-1 lg:order-none") : "lg:col-span-12"}>
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Block label="KPI / Stat" />
              <Block label="KPI / Stat" />
              <Block label="KPI / Stat" />
            </div>

            <div className={gridCols.base}>
              <Block label="Card" />
              <Block label="Card" />
              <Block label="Card" />
              <Block label="Card" />
              <Block label="Card" />
              <Block label="Card" />
            </div>
          </section>

          {/* Sidebar (right) */}
          {sidebar && sidebarSide === "right" && (
            <motion.aside layout className="lg:col-span-3 space-y-4">
              {SidebarPanel}
            </motion.aside>
          )}
        </motion.div>

        {/* Footer */}
        <motion.footer layout className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>Sketch footer area</span>
            <span className="opacity-60">•</span>
            <span>Use this scaffold to plan pages fast</span>
          </div>
        </motion.footer>

        {/* Debug/Test Panel */}
        <div className="mt-6 p-4 border rounded-lg bg-white/60 dark:bg-slate-900/60">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-sm font-medium">Runtime Tests</div>
              <div className="text-xs text-slate-500">Quick interactive checks for controls</div>
            </div>
            <div className="flex gap-2">
              <button onClick={runTestToggleSidebar} className="px-3 py-1 rounded-md border">Toggle Sidebar</button>
              <button onClick={runTestSwitchSides} className="px-3 py-1 rounded-md border">Switch to Right</button>
              <button onClick={runAllQuick} className="px-3 py-1 rounded-md border">Run Quick All</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Recent results</div>
              <ul className="text-sm list-disc pl-5">
                {testResults.length === 0 ? <li className="text-slate-500">No results yet — click a test.</li> : testResults.map((r:any, i:any) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            <div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Current state</div>
              <dl className="text-sm">
                <div>
                  <dt className="inline font-medium">Sidebar:</dt>
                  <dd className="inline"> {String(sidebar)}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Side:</dt>
                  <dd className="inline"> {sidebarSide}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Columns:</dt>
                  <dd className="inline"> {columns}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Container fixed:</dt>
                  <dd className="inline"> {String(fixed)}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Dark mode:</dt>
                  <dd className="inline"> {String(dark)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
