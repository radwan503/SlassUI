import { useState } from "react";
import { motion, type MotionProps, type Transition } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Menu,
  X,
  Shield,
  ArrowRight,
  Users,
  BarChart3,
  Clock,
} from "lucide-react";

// small animation helpers
const float: MotionProps = {
  initial: { y: 0 },
  animate: { y: [0, -18, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};

const popIn = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 12, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, delay, ease: "circOut" as Transition["ease"] },
});

export default function LiquidGlassHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "activity" | "uptime">(
    "overview"
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#060b1a] via-[#0a1229] to-[#0d1536] text-white">
      {/* ambient gradient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,105,180,.22),transparent_60%),radial-gradient(circle_at_85%_65%,rgba(56,189,248,.18),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(99,102,241,.18),transparent_55%)]" />
      <motion.div {...float} className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-pink-500/25 blur-[90px]" />
      <motion.div {...float} transition={{ ...float.transition, duration: 9 }} className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-cyan-400/25 blur-[110px]" />

      {/* subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur-xl/0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-tr from-pink-500 to-cyan-400 font-black text-white shadow-lg shadow-pink-500/20">
              L
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">LiquidGlass</div>
              <div className="text-[11px] text-white/60">UI Motion Toolkit</div>
            </div>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#pricing">Pricing</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 font-medium text-white backdrop-blur-md ring-1 ring-white/15 hover:bg-white/20"
            >
              <Sparkles className="h-4 w-4" />
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </nav>

          {/* Mobile menu btn */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden rounded-lg p-2 ring-1 ring-white/15 hover:bg-white/10"
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile dropdown */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden border-t border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 grid gap-3 text-white/90">
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#features">Features</a>
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#pricing">Pricing</a>
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#about">About</a>
            <a className="rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20">Get Started</a>
          </div>
        </motion.div>
      </header>

      {/* HERO */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col-reverse lg:flex-row items-center gap-10 px-5 sm:px-8 pt-14 pb-20">
        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div {...popIn(0.05)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <Shield className="h-3.5 w-3.5" />
            Encrypted by default • No tracking
          </motion.div>

          <motion.h1 {...popIn(0.1)} className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            Build fluid, modern
            <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              glassmorphic experiences
            </span>
          </motion.h1>

          <motion.p {...popIn(0.2)} className="mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-white/70">
            Production‑ready React components with tasteful motion, accessibility, and responsive defaults. Drop in, theme, ship.
          </motion.p>

          <motion.div {...popIn(0.3)} className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#get-started"
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-xl ring-1 ring-white/10 transition-transform hover:scale-[1.03]"
            >
              <Rocket className="h-5 w-5" /> Start for free
              <span className="absolute -inset-0.5 -z-10 rounded-2xl blur-md bg-gradient-to-r from-pink-500/40 via-fuchsia-500/40 to-cyan-400/40" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 ring-1 ring-white/15 text-white/90 hover:bg-white/5">
              <BarChart3 className="h-5 w-5" /> See features
            </a>
          </motion.div>

          {/* trust pills */}
          <motion.ul {...popIn(0.35)} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/70">
            {[
              { icon: <Users className="h-4 w-4" />, label: "10k+ developers" },
              { icon: <Clock className="h-4 w-4" />, label: "<3ms interactions" },
              { icon: <Shield className="h-4 w-4" />, label: "WCAG AA ready" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 backdrop-blur-md">
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT: Upgraded Glass Card */}
        <motion.div {...popIn(0.2)} className="flex-1 w-full">
          <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-3xl border border-white/15 bg-white/7 backdrop-blur-2xl shadow-2xl">
            {/* moving sheen */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 p-5 sm:p-6">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">Realtime Overview</h3>
                  <p className="text-[12px] text-white/60">Liquid‑glass components, live.</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                  Live
                </span>
              </div>

              {/* tabs */}
              <div className="mt-4 flex gap-2 text-xs">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "activity", label: "Activity" },
                  { id: "uptime", label: "Uptime" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as any)}
                    className={`rounded-xl px-3 py-1.5 ring-1 transition ${
                      activeTab === t.id
                        ? "bg-white/15 ring-white/25"
                        : "bg-white/5 ring-white/10 hover:bg-white/10"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* content */}
              <div className="mt-5 grid gap-4">
                {activeTab === "overview" && (
                  <div className="grid grid-cols-2 gap-3">
                    <KPI title="Revenue" value="$12.4k" sub="▲ 8.2%" />
                    <KPI title="Active Users" value="2,134" sub="▲ 3.5%" />
                    <div className="col-span-2 rounded-xl bg-gradient-to-r from-pink-400/15 to-cyan-400/15 p-4 ring-1 ring-white/10">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span>Completion</span>
                        <span>82%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/15">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "82%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "activity" && (
                  <ul className="grid gap-3 text-sm">
                    {[
                      { t: "New signup", d: "anna@studio.dev", ago: "1m" },
                      { t: "Payment succeeded", d: "#INV-2029", ago: "4m" },
                      { t: "Plan upgraded", d: "Team → Pro", ago: "12m" },
                    ].map((row, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between rounded-xl bg-white/7 px-3 py-2 ring-1 ring-white/10"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-pink-300" />
                          <span className="font-medium">{row.t}</span>
                          <span className="text-white/60">· {row.d}</span>
                        </div>
                        <span className="text-white/50">{row.ago}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "uptime" && (
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between rounded-xl bg-white/7 px-3 py-3 ring-1 ring-white/10">
                      <span className="text-sm">Overall uptime</span>
                      <span className="font-semibold">99.98%</span>
                    </div>
                    <div className="rounded-xl bg-white/7 p-4 ring-1 ring-white/10">
                      <div className="mb-2 text-xs text-white/70">Last 24h</div>
                      {/* mini bars */}
                      <div className="flex h-16 items-end gap-1">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-1.5 rounded-t bg-gradient-to-t from-cyan-400/70 to-pink-400/70"
                            style={{ height: `${60 + Math.sin(i) * 20}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* footer actions */}
              <div className="mt-6 flex gap-3">
                <button className="flex-1 rounded-xl bg-white/12 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/20">
                  Open dashboard
                </button>
                <button className="rounded-xl px-4 py-2 text-sm text-white/80 ring-1 ring-white/15 hover:bg-white/10">
                  Share
                </button>
              </div>
            </div>

            {/* glow orbs */}
            <motion.div
              aria-hidden
              className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-pink-500/30 blur-2xl"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* corner accent */}
      <motion.div
        {...float}
        transition={{ ...float.transition, duration: 10 }}
        className="pointer-events-none absolute -top-6 -right-6 h-48 w-48 rounded-full bg-gradient-to-br from-pink-500/40 to-cyan-500/40 blur-[100px]"
      />
    </section>
  );
}

function KPI({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl bg-white/8 p-4 ring-1 ring-white/10">
      <div className="text-xs text-white/70">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {sub && <div className="mt-1 text-[11px] text-emerald-300/90">{sub}</div>}
    </div>
  );
}
