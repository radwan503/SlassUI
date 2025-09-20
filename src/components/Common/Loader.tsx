"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";


type LoaderProps = {
  title?: string;
  tagline?: string;
  tips?: string[];
  showProgress?: boolean; // fake progress to keep UX lively
};

const DEFAULT_TIPS = [
  "Composing animations…",
  "Optimizing gradients…",
  "Prefetching icons…",
  "Assembling components…",
  "Hydrating state…",
  "Polishing pixels…",
];

const Loader: React.FC<LoaderProps> = ({
  title = "SlassUI",
  tagline = "Crafting UI with style…",
  tips = DEFAULT_TIPS,
  showProgress = true,
}) => {
  const [tipIdx, setTipIdx] = useState(0);
  const [progress, setProgress] = useState(7);
  const reducedMotion = usePrefersReducedMotion();
  const tipInterval = useRef<number | null>(null);
  const progInterval = useRef<number | null>(null);

  // Rotate tips
  useEffect(() => {
    if (!tips.length) return;
    tipInterval.current = window.setInterval(() => {
      setTipIdx((i) => (i + 1) % tips.length);
    }, 2200);
    return () => {
      if (tipInterval.current) window.clearInterval(tipInterval.current);
    };
  }, [tips]);

  // Fake progress (bounces between 65-95% while loading)
  useEffect(() => {
    if (!showProgress) return;
    let dir = 1;
    progInterval.current = window.setInterval(() => {
      setProgress((p) => {
        const next = p + dir * (Math.random() * 3 + 0.7);
        if (next >= 95) dir = -1;
        if (next <= 65) dir = 1;
        return Math.max(0, Math.min(100, next));
      });
    }, 220);
    return () => {
      if (progInterval.current) window.clearInterval(progInterval.current);
    };
  }, [showProgress]);

  // A few “loading tags” (contentful and responsive)
  const tags = useMemo(
    () => ["Buttons", "Cards", "Navbar", "Dashboard", "Charts", "Forms", "Modals", "Tables"],
    []
  );

  return (
    <div
      className="relative grid min-h-screen place-items-center overflow-hidden
                 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200"
      role="status"
      aria-live="polite"
    >
      {/* Decorative background halos (no transparency/glass) */}
      <BgHalos reducedMotion={reducedMotion} />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        {/* Brand */}
        <div className="text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight
                       bg-gradient-to-r from-sky-400 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent"
          >
            {title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">{tagline}</p>
        </div>

        {/* Loader Core */}
        <div className="mt-10 flex items-center justify-center">
          <div className="relative h-32 w-32 sm:h-40 sm:w-40">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,0.25) 0%, rgba(217,70,239,0.16) 38%, rgba(244,63,94,0.14) 70%, transparent 80%)",
              }}
              aria-hidden
            />

            {/* Conic ring */}
            <div
              className={`absolute inset-0 rounded-full p-[3px] sm:p-1.5
                          [background:conic-gradient(var(--tw-gradient-stops))] 
                          from-sky-400 via-fuchsia-500 to-rose-500`}
              style={{
                animation: reducedMotion ? undefined : "spin 3s linear infinite",
                borderRadius: "9999px",
              }}
              aria-hidden
            >
              <div className="h-full w-full rounded-full bg-slate-950" />
            </div>

            {/* Inner ring with dashed track */}
            <div className="absolute inset-3 sm:inset-4 rounded-full border-2 border-dashed border-slate-700/60" />

            {/* Center dot */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 to-fuchsia-500 shadow-lg shadow-fuchsia-700/30" />
            </div>

            {/* Orbiting dots */}
            {!reducedMotion && (
              <>
                <OrbitDot size="sm" delay="0s" />
                <OrbitDot size="md" delay="-.6s" />
                <OrbitDot size="lg" delay="-1.2s" />
              </>
            )}
          </div>
        </div>

        {/* Progress bar + % */}
        {showProgress && (
          <div className="mx-auto mt-8 w-full max-w-lg">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Loading</span>
              <span className="tabular-nums">{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full w-0 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-rose-500"
                style={{ width: `${progress}%` }}
              />
              {/* Shimmer */}
              {!reducedMotion && (
                <div className="h-full w-1/3 -translate-x-full animate-[shimmer_1.8s_ease_infinite] bg-white/20 mix-blend-overlay" />
              )}
            </div>
          </div>
        )}

        {/* Tip carousel */}
        {tips.length > 0 && (
          <div className="mx-auto mt-6 w-full max-w-xl">
            <div
              className="rounded-xl border border-slate-800/70 bg-slate-900/60 px-4 py-3 text-center text-sm text-slate-300
                         shadow-[0_0_0_1px_rgba(15,23,42,0.6)_inset]"
            >
              <span className="mr-2 inline-block rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] font-semibold text-sky-300">
                Tip
              </span>
              <span className="align-middle">{tips[tipIdx]}</span>
              {!reducedMotion && (
                <span className="ml-1 inline-block animate-pulse align-middle">…</span>
              )}
            </div>
          </div>
        )}

        {/* “Loading tags” grid (contentful + responsive) */}
        <ul className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {tags.map((t) => (
            <li
              key={t}
              className="group rounded-lg border border-slate-800/70 bg-slate-900/50 px-3 py-2 text-center text-xs text-slate-300
                         transition-colors hover:border-sky-600/40 hover:bg-slate-900/80"
            >
              <span className="bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
                {t}
              </span>
              {!reducedMotion && (
                <div className="mt-1 h-0.5 w-0 bg-gradient-to-r from-sky-400 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Keyframes (scoped via tailwind’s arbitrary rules) */}
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(var(--r)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--r)) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

function OrbitDot({ size, delay }: { size: "sm" | "md" | "lg"; delay: string }) {
  const r = size === "sm" ? "34px" : size === "md" ? "46px" : "58px";
  const dim = size === "sm" ? "6px" : size === "md" ? "7px" : "8px";
  const gradient =
    size === "sm"
      ? "from-sky-400 to-cyan-300"
      : size === "md"
      ? "from-fuchsia-500 to-pink-400"
      : "from-rose-500 to-orange-400";
  return (
    <div
      className="absolute inset-1/2"
      style={{
        transform: "translate(-50%, -50%)",
        animation: `orbit 4.2s linear infinite`,
        animationDelay: delay,
        // @ts-ignore – custom property for radius
        ["--r" as any]: r,
      }}
      aria-hidden
    >
      <div
        className={`h-[${dim}] w-[${dim}] rounded-full bg-gradient-to-br ${gradient} shadow-[0_0_18px_rgba(244,63,94,0.25)]`}
      />
    </div>
  );
}

function BgHalos({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(56,189,248,0.18) 0%, rgba(217,70,239,0.14) 40%, rgba(244,63,94,0.12) 70%, transparent 80%)",
          animation: reducedMotion ? undefined : "spin 40s linear infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 right-[-120px] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(14,165,233,0.12) 0%, rgba(99,102,241,0.14) 45%, rgba(236,72,153,0.12) 75%, transparent 85%)",
          animation: reducedMotion ? undefined : "spin 52s linear infinite",
        }}
      />
    </>
  );
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(q.matches);
    const onChange = () => setPrefers(q.matches);
    q.addEventListener?.("change", onChange);
    return () => q.removeEventListener?.("change", onChange);
  }, []);
  return prefers;
}

export default Loader;
