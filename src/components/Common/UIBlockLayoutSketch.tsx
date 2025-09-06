import  {  useState, useEffect } from "react";

const Icon = ({ children, className = "h-5 w-5", ...props }:any) => (
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

const MenuIcon = (p:any) => (
  <Icon {...p}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Icon>
);

const GridIcon = (p:any) => (
  <Icon {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </Icon>
);

const LeftPanelIcon = (p:any) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <rect x="4" y="6" width="6" height="12" rx="1" />
  </Icon>
);

const RightPanelIcon = (p:any) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <rect x="14" y="6" width="6" height="12" rx="1" />
  </Icon>
);

const SunIcon = (p:any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
  </Icon>
);

const MoonIcon = (p:any) => (
  <Icon {...p}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </Icon>
);

function Block({ title = "Block", height = 16 }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 p-4 shadow-sm">
      <div className="text-xs uppercase text-slate-500 dark:text-slate-400 mb-2">{title}</div>
      <div className={`w-full rounded-lg bg-slate-100 dark:bg-slate-800`} style={{ height: `${height}rem` }} />
    </div>
  );
}

export default function UIBlockLayoutSketch() {
  const [sidebar, setSidebar] = useState(true);
  const [side, setSide] = useState("left");
  const [columns, setColumns] = useState(3);
  const [fixed, setFixed] = useState(true);
  const [dark, setDark] = useState(false);

  // Debug/test results (small list)
  const [results, setResults] = useState<any>([]);
  const push = (r:any) => setResults((s:any) => [r, ...s].slice(0, 6));

  useEffect(() => {
    if (typeof document !== "undefined" && document?.documentElement?.classList) {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  const container = fixed ? "max-w-6xl mx-auto px-4" : "w-full px-4";
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.max(1, Math.min(4, columns))} gap-4`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6">
      <header className={`sticky top-0 bg-white/70 dark:bg-slate-900/60 backdrop-blur border-b border-slate-200 dark:border-slate-800 ${container} py-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebar((s) => !s)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <MenuIcon />
            </button>
            <div className="font-semibold">UI Block Layout</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/70 dark:bg-slate-900/60 rounded-xl px-2 py-1 border border-slate-200 dark:border-slate-700">
              <GridIcon className="h-4 w-4" />
              <input
                aria-label="columns"
                type="range"
                min={1}
                max={4}
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-28"
              />
              <div className="w-6 text-sm text-right tabular-nums">{columns}</div>
            </div>

            <button onClick={() => setFixed((f) => !f)} className={`px-3 py-1 rounded-md border ${fixed ? "bg-slate-900 text-white" : "bg-white/70"}`}>
              {fixed ? "Fixed" : "Fluid"}
            </button>

            <button
              onClick={() => {
                setSidebar(true);
                setSide("left");
              }}
              className={`px-3 py-1 rounded-md border ${sidebar && side === "left" ? "bg-slate-900 text-white" : "bg-white/70"}`}
            >
              <LeftPanelIcon className="h-4 w-4 inline-block mr-2" /> Left
            </button>

            <button
              onClick={() => {
                setSidebar(true);
                setSide("right");
              }}
              className={`px-3 py-1 rounded-md border ${sidebar && side === "right" ? "bg-slate-900 text-white" : "bg-white/70"}`}
            >
              <RightPanelIcon className="h-4 w-4 inline-block mr-2" /> Right
            </button>

            <button onClick={() => setDark((d) => !d)} className="px-3 py-1 rounded-md border bg-white/70 dark:bg-slate-900/60">
              {dark ? <SunIcon className="h-4 w-4 inline-block mr-2" /> : <MoonIcon className="h-4 w-4 inline-block mr-2" />}
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <main className={`${container} mt-6`}> 
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Page Title</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Use the controls above to sketch layout variations.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => push('Saved layout snapshot') } className="px-3 py-1 border rounded-md">Save</button>
            <button
              onClick={() => {
                setSidebar(false);
                push('Closed sidebar');
              }}
              className="px-3 py-1 border rounded-md"
            >
              Close Sidebar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* left sidebar */}
          {sidebar && side === "left" && (
            <aside className="lg:col-span-3 space-y-4">
              <Block title="Profile" height={8} />
              <Block title="Filter" height={6} />
            </aside>
          )}

          {/* main */}
          <section className={sidebar ? "lg:col-span-9" : "lg:col-span-12"}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <Block title="Stat" height={6} />
              <Block title="Stat" height={6} />
              <Block title="Stat" height={6} />
            </div>

            <div className={gridClass}>
              <Block title="Card A" height={12} />
              <Block title="Card B" height={12} />
              <Block title="Card C" height={12} />
              <Block title="Card D" height={12} />
              <Block title="Card E" height={12} />
              <Block title="Card F" height={12} />
            </div>
          </section>

          {/* right sidebar */}
          {sidebar && side === "right" && (
            <aside className="lg:col-span-3 space-y-4">
              <Block title="Notes" height={8} />
              <Block title="Shortcuts" height={6} />
            </aside>
          )}
        </div>

        {/* Debug / Tests area */}
        <div className="mt-6 p-4 border rounded-lg bg-white/60 dark:bg-slate-900/60">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium">Debug & Quick Tests</div>
              <div className="text-xs text-slate-500">Buttons here exercise simple behaviors</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSidebar((s) => !s);
                  push('Test: toggled sidebar');
                }}
                className="px-3 py-1 border rounded-md"
              >
                Toggle Sidebar
              </button>
              <button
                onClick={() => {
                  setSide('right');
                  setSidebar(true);
                  push('Test: switched side to right');
                }}
                className="px-3 py-1 border rounded-md"
              >
                Switch to Right
              </button>
              <button
                onClick={() => {
                  setColumns(4);
                  push('Test: columns -> 4');
                }}
                className="px-3 py-1 border rounded-md"
              >
                Set 4 Columns
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Recent results</div>
              <ul className="list-disc pl-5 text-sm">
                {results.length === 0 ? <li className="text-slate-500">No tests run yet.</li> : results.map((r:any, i:any) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            <div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">State</div>
              <div className="text-sm">
                <div>Sidebar: <strong>{String(sidebar)}</strong></div>
                <div>Side: <strong>{side}</strong></div>
                <div>Columns: <strong>{columns}</strong></div>
                <div>Container fixed: <strong>{String(fixed)}</strong></div>
                <div>Dark mode: <strong>{String(dark)}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
