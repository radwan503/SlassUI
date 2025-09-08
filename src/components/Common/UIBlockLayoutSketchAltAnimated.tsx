import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Skeleton shimmer styles
const Skeleton = ({ height }: { height: number }) => (
  <div
    className="w-full rounded-md bg-slate-800 relative overflow-hidden"
    style={{ height: `${height}rem` }}
  >
    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
  </div>
);

const MotionBlock = ({ title = "Block", height = 16, index = 0, loading = false }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ scale: 1.03 }}
    className="rounded-xl border border-slate-700 bg-slate-900 shadow-sm p-3"
  >
    <div className="text-xs uppercase text-slate-400 mb-2">{title}</div>
    {loading ? <Skeleton height={height} /> : (
      <div
        className="w-full rounded-md bg-slate-800 p-3"
        style={{ height: `${height}rem` }}
      >
      
      </div>
    )}
  </motion.div>
);

export default function UIBlockLayoutSketchAltAnimated() {
  const [sidebar, setSidebar] = useState(true);
  const [cards, setCards] = useState([
    { t: "Card A", h: 10 },
    { t: "Card B", h: 10 },
    { t: "Card C", h: 10 },
    { t: "Card D", h: 10 },
    { t: "Card E", h: 10 },
    { t: "Card F", h: 10 },
  ]);
  const [loading, setLoading] = useState(true);

  // Fake loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        if (prev.length === 0) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/70 backdrop-blur sticky top-0 z-10">
        <div className="font-bold text-lg">Alt UI Sketch</div>
        <button
          onClick={() => setSidebar((s) => !s)}
          className="text-lg px-3 py-1 rounded-md border border-slate-700 bg-slate-800 hover:bg-slate-700 transition"
        >
          {sidebar ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <AnimatePresence>
          {sidebar && (
            <motion.aside
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-64 shrink-0 border-r border-slate-800 p-4 space-y-4 bg-slate-900 overflow-y-auto"
            >
              <MotionBlock title="Navigation" height={6} loading={loading} />
              <MotionBlock title="Filters" height={10} loading={loading} />
              <MotionBlock title="Profile" height={8} loading={loading} />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-3">Stats Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Metric A", "Metric B", "Metric C", "Metric D"].map((t, i) => (
                <MotionBlock key={t} title={t} height={6} index={i} loading={loading} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Main Cards (Auto Shuffle)</h2>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence>
                {cards.map((card, i) => (
                  <MotionBlock key={card.t} title={card.t} height={card.h} index={i} loading={loading} />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="p-6 border-t border-slate-800 bg-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Footer Col 1", "Footer Col 2", "Footer Col 3", "Footer Col 4"].map((t, i) => (
            <MotionBlock key={t} title={t} height={6} index={i} loading={loading} />
          ))}
        </div>
      </footer>
    </div>
  );
}
