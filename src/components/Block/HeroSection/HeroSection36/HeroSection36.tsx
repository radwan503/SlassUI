import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Gauge,
  Layers,
  ShieldCheck,
  PlugZap,
  PlayCircle,
  Github,
} from "lucide-react";

export default function HeroSection36() {
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
    <section className="relative overflow-hidden bg-[var(--bg)] text-slate-200 antialiased" style={vars}>
      {/* Tiny helpers */}
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes sheen { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        .tilt:hover { transform: perspective(1000px) rotateX(2deg) rotateY(-3deg) translateY(-2px); }
      `}</style>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-40 -left-36 h-96 w-96 rounded-full"
           style={{ background: "var(--glow-cyan)", filter: "blur(64px)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full"
           style={{ background: "var(--glow-indigo)", filter: "blur(72px)" }} />

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
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: copy + CTAs + stats */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              <Sparkles className="h-3.5 w-3.5" />
              New in v1.1
              <span className="text-cyan-300">160+ blocks</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Build modern UIs{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                ridiculously fast
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-slate-300">
              Stop reinventing the wheel. Use production-ready sections—Heroes, Pricing, Testimonials,
              Dashboards—crafted for{" "}
              <span className="font-semibold text-indigo-300">React</span> +
              <span className="font-semibold text-indigo-300"> TailwindCSS</span> with clean a11y and dark mode.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/ui-blocks" className="inline-flex">
                <button className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400">
                  Browse Components
                  <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
                </button>
              </Link>

              <Link to="/template" className="inline-flex">
                <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
                  Explore Templates
                  <Layers className="h-4 w-4" />
                </button>
              </Link>

              <Link to="/live-demo" className="inline-flex">
                <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
                  <PlayCircle className="h-4 w-4" />
                  Live demo
                </button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["160+", "Sections"],
                ["28", "Categories"],
                ["Weekly", "Updates"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
                  <div className="text-2xl font-extrabold text-white">{k}</div>
                  <div className="text-slate-400 text-xs">{v}</div>
                </div>
              ))}
            </div>

            {/* Feature grid */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                [<CheckCircle2 key="a" className="h-4 w-4 text-emerald-400" />, "Accessible", "WCAG-friendly components"],
                [<ShieldCheck key="b" className="h-4 w-4 text-sky-400" />, "Theme-ready", "Dark/light with tokens"],
                [<Gauge key="c" className="h-4 w-4 text-indigo-400" />, "Performance-first", "<2kb per section"],
                [<PlugZap key="d" className="h-4 w-4 text-cyan-300" />, "Composable", "Headless logic & hooks"],
              ].map(([Icon, title, sub]) => (
                <li key={String(title)} className="flex items-start gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  {Icon as React.ReactNode}
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-slate-400">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <img alt="" src="https://i.pravatar.cc/28?img=1" className="h-6 w-6 rounded-full ring-2 ring-[var(--bg)] animate-[float_6s_ease-in-out_infinite]" />
                <img alt="" src="https://i.pravatar.cc/28?img=3" className="h-6 w-6 rounded-full ring-2 ring-[var(--bg)] animate-[float_6s_ease-in-out_infinite] [animation-delay:.2s]" />
                <img alt="" src="https://i.pravatar.cc/28?img=8" className="h-6 w-6 rounded-full ring-2 ring-[var(--bg)] animate-[float_6s_ease-in-out_infinite] [animation-delay:.4s]" />
              </div>
              <span>
                Trusted by <span className="font-semibold text-white">3,200+</span> developers
              </span>
              <a href="https://github.com" className="inline-flex items-center gap-1 hover:opacity-80">
                <Github className="h-3.5 w-3.5" />
                1.6k★
              </a>
            </div>
          </div>

          {/* Right: angled preview stack */}
          <div className="relative">
            {/* Back card */}
            <div className="pointer-events-none absolute -top-6 -left-4 hidden h-[18rem] w-[34rem] -rotate-6 rounded-2xl border border-white/10 bg-white/5 opacity-60 blur-[1px] sm:block" />
            {/* Middle card */}
            <div className="pointer-events-none absolute -top-3 -right-8 hidden h-[18rem] w-[34rem] rotate-3 rounded-2xl border border-white/10 bg-white/5 opacity-70 sm:block" />
            {/* Foreground card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition-transform tilt will-change-transform">
              {/* Sheen */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute left-0 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-white/5 via-white/10 to-transparent animate-[sheen_3.5s_ease-in-out_infinite]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex gap-1 text-[11px]">
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-white ring-1 ring-white/10">React</span>
                  <span className="rounded-md px-2 py-0.5 text-slate-300 ring-1 ring-white/10">Tailwind</span>
                  <span className="rounded-md px-2 py-0.5 text-slate-300 ring-1 ring-white/10">HTML</span>
                </div>
              </div>

              {/* Code sample */}
              <pre className="px-4 py-4 text-xs leading-relaxed overflow-x-auto text-slate-300">
{`import { Button } from "@/components/ui";
export default function PricingCTA() {
  return (
    <div className="rounded-xl p-4 md:p-6 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 ring-1 ring-white/10">
      <h3 className="text-base md:text-lg font-semibold text-white">Start building today</h3>
      <p className="mt-1 text-slate-300">Access 160+ sections and growing weekly.</p>
      <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-slate-900">
        Get Access <span>→</span>
      </button>
    </div>
  )
}`}
              </pre>

              {/* Footer metrics */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-3 text-center text-[11px] text-slate-300">
                <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                  <p className="font-semibold text-white">A+</p>
                  <p>Lighthouse UI</p>
                </div>
                <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                  <p className="font-semibold text-white">&lt;2kb</p>
                  <p>Per section</p>
                </div>
                <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                  <p className="font-semibold text-white">0 setup</p>
                  <p>Copy & paste</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70">
          {["Vercel", "Tailwind", "Figma", "React", "TypeScript"].map((brand) => (
            <div key={brand} className="text-xs md:text-sm text-slate-300 ring-1 ring-white/10 rounded-lg px-3 py-1.5 bg-white/5">
              {brand}
            </div>
          ))}
        </div>

        <div className="pb-24" />
      </div>
    </section>
  );
}
