import  { useState, useEffect } from "react";

const Block = ({ title = "Block", height = 16 }) => (
  <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-3">
    <div className="text-xs uppercase text-slate-500 dark:text-slate-400 mb-2">{title}</div>
    <div
      className="w-full rounded-md bg-slate-100 dark:bg-slate-800"
      style={{ height: `${height}rem` }}
    />
  </div>
);

export default function UIBlockLayoutSketchAlt() {
  const [sidebar, setSidebar] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur sticky top-0 z-10">
        <div className="font-bold text-lg">Alt UI Sketch</div>
        <div className="flex gap-2">
          <button
            onClick={() => setSidebar((s) => !s)}
            className="px-3 py-1 rounded-md border"
          >
            {sidebar ? "Hide Sidebar" : "Show Sidebar"}
          </button>
          <button
            onClick={() => setDark((d) => !d)}
            className="px-3 py-1 rounded-md border"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {sidebar && (
          <aside className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 p-4 space-y-4 bg-white dark:bg-slate-900 overflow-y-auto">
            <Block title="Navigation" height={6} />
            <Block title="Filters" height={10} />
            <Block title="Profile" height={8} />
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-3">Stats Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Block title="Metric A" height={6} />
              <Block title="Metric B" height={6} />
              <Block title="Metric C" height={6} />
              <Block title="Metric D" height={6} />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Main Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Block title="Card A" height={14} />
              <Block title="Card B" height={18} />
              <Block title="Card C" height={12} />
              <Block title="Card D" height={16} />
              <Block title="Card E" height={14} />
              <Block title="Card F" height={20} />
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Block title="Footer Col 1" height={6} />
          <Block title="Footer Col 2" height={6} />
          <Block title="Footer Col 3" height={6} />
          <Block title="Footer Col 4" height={6} />
        </div>
      </footer>
    </div>
  );
}
