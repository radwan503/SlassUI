import React from "react";


export default function AngledPanelBackground() {
  const vars: React.CSSProperties = {
    // @ts-ignore - CSS custom properties are fine
    "--bg": "#010d20",
    "--hatch-gap": "10px",
    "--hatch-opacity": 0.08 as unknown as string,
    "--separator": "rgba(0,255,255,0.08)",
    "--glow-cyan": "rgba(34,211,238,0.10)",
    "--glow-indigo": "rgba(99,102,241,0.10)",
  };

  const railHatchStyle: React.CSSProperties = {
    backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,var(--hatch-opacity)) 0 1px, transparent 1px var(--hatch-gap))`,
    backgroundSize: `var(--hatch-gap) var(--hatch-gap)`,
  } as React.CSSProperties;

  return (
    <section
  className="relative overflow-hidden bg-[var(--bg)] text-slate-200 antialiased"
  style={vars}
>
  {/* Decorative glows */}
  <div
    className="pointer-events-none absolute -top-40 -left-36 h-96 w-96 rounded-full"
    style={{ background: "var(--glow-cyan)", filter: "blur(64px)" }}
  />
  <div
    className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full"
    style={{ background: "var(--glow-indigo)", filter: "blur(72px)" }}
  />

  {/* Left & Right rails with hatch pattern + vertical labels */}
  <aside className="pointer-events-none fixed left-0 top-0 z-10 hidden h-screen w-16 sm:block sm:w-20 lg:w-24">
    <div className="absolute inset-0 border-r border-white/10 opacity-80" style={railHatchStyle} />
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 -rotate-90 select-none text-[10px] uppercase tracking-[0.35em] text-slate-400/70">
      Components
    </div>
  </aside>

  <aside className="pointer-events-none fixed right-0 top-0 z-10 hidden h-screen w-16 sm:block sm:w-20 lg:w-24">
    <div className="absolute inset-0 border-l border-white/10 opacity-80" style={railHatchStyle} />
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 -rotate-90 select-none text-[10px] uppercase tracking-[0.35em] text-slate-400/70">
      Tailwind
    </div>
  </aside>

  {/* Content container padded so it doesn't sit beneath rails */}
  <div className="relative z-20 mx-auto container px-4">
    <div className="pt-16 sm:pt-24 lg:pt-28" />

    {/* HERO */}
    <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
          React + Tailwind
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          149+ Ready-to-Use Components <br /> for Modern Web Apps
        </h1>
        <p className="mt-6 max-w-xl text-textSlate">
          Stop reinventing the wheel. Build faster with pre-designed, production-ready 
          sections like Heroes, Pricing, Testimonials, and more — all crafted with 
          <span className="text-indigo-400 font-semibold"> React & TailwindCSS</span>.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/ui-blocks"
            className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400"
          >
            Browse Components
          </a>
          <a
            href="/template"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
          >
            View Template
          </a>
        </div>
      </div>

      {/* Right-side rotated collage (decorative) */}
      <div aria-hidden className="pointer-events-none relative hidden lg:block">
        <div className="absolute -right-10 -top-10 h-96 w-[44rem] -rotate-[18deg] opacity-90">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2 h-28 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
            <div className="col-span-2 mt-10 h-24 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
            <div className="col-span-2 h-32 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
            <div className="col-span-3 -mt-4 h-28 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
            <div className="col-span-3 mt-6 h-24 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
            <div className="col-span-2 mt-6 h-24 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
            <div className="col-span-4 -mt-10 h-36 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40" />
          </div>
          {/* soft fade so collage blends into bg */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[var(--bg)] via-transparent" />
        </div>
      </div>
    </div>
    <div className="pb-24" />
  </div>
</section>

  );
}
