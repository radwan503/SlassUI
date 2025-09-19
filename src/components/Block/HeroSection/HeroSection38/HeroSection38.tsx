// src/components/DetailsInfo.tsx
import { ArrowRight, CheckCircle2, Shield, Rocket, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Button from "../../../../utils/Button";


const features = [
  { icon: Layers, label: "150+ sections", desc: "Hero, Pricing, Reviews, Footers" },
  { icon: Rocket, label: "Copy → Ship", desc: "Drop-in React + Tailwind" },
  { icon: Shield, label: "Accessible", desc: "ARIA & keyboard friendly" },
];

export default function HeroSection38() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#0b0f1a]">
      {/* Background: subtle grid + gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.20),rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.05),rgba(0,0,0,0)_60%,rgba(255,255,255,0.05))] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.04)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.04)_25px)] bg-[size:26px_26px] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Crafted for React + Tailwind devs
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
              Build modern UIs <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">in minutes</span>,
              not days.
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg lg:max-w-2xl">
              A production‑ready library of components and page sections for fast‑moving teams.
              Copy, paste, and customize. TypeScript‑friendly and designed for accessibility.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {features.map(({ icon: Icon, label, desc }) => (
                <li key={label} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-white/70">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Link to="/ui-blocks" className="w-full sm:w-auto">
                <Button
                  className="w-full !justify-center text-sm md:text-base"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Browse Components
                </Button>
              </Link>
              <Link to="/template" className="w-full sm:w-auto">
                <Button
                  className="w-full !justify-center text-sm md:text-base"
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore Templates
                </Button>
              </Link>
              <Link to="/docs" className="w-full sm:w-auto">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/0 px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5">
                  <CheckCircle2 className="h-4 w-4" /> See docs & examples
                </span>
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 lg:justify-start">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Shield className="h-3.5 w-3.5" /> MIT Licensed
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> TypeScript Ready
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Rocket className="h-3.5 w-3.5" /> Production‑tested
              </span>
            </div>
          </motion.div>

          {/* Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Glow ring */}
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-400/10 to-emerald-400/20 blur-2xl" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              {/* Tabs */}
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
                {['Hero', 'Pricing', 'Testimonials', 'Footer'].map((tab, i) => (
                  <button
                    key={tab}
                    className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition ${
                      i === 0 ? 'bg-white/90 text-[#0b0f1a]' : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    aria-pressed={i === 0}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Frame */}
              <div className="mt-3 grid gap-3 lg:grid-cols-5">
                {/* Palette */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 lg:col-span-2">
                  <p className="text-xs font-semibold text-white/80">Theme</p>
                  <div className="mt-2 grid grid-cols-5 gap-2">
                    {["#0b0f1a","#111827","#1f2937","#4f46e5","#22d3ee"].map((c) => (
                      <div key={c} className="aspect-square rounded-lg border border-white/10" style={{ background: c }} />
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] text-white/60">Dark, elegant, flexible palettes.</p>
                </div>

                {/* Component tile */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 lg:col-span-3">
                  <p className="text-xs font-semibold text-white/80">Hero Variant A</p>
                  <div className="mt-2 rounded-lg border border-white/10 bg-[#0f1525] p-4">
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="mt-3 h-6 w-3/4 rounded bg-white/20" />
                    <div className="mt-2 h-6 w-2/3 rounded bg-white/10" />
                    <div className="mt-4 flex gap-2">
                      <div className="h-9 w-28 rounded-md bg-white/90" />
                      <div className="h-9 w-28 rounded-md bg-white/10" />
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-white/60">Drag‑and‑drop ready components.</p>
                </div>
              </div>

              {/* Code block mock */}
              <div className="mt-3 rounded-xl border border-white/10 bg-[#0f1525] p-3">
                <pre className="max-h-48 overflow-auto text-[11px] leading-relaxed text-white/80"><code>{`
import { Button } from "@/components/ui";

export default function Hero(){
  return (
    <section className="py-20">
      <h1 className="text-5xl font-bold">Launch faster</h1>
      <p className="text-white/70 mt-2">Ship beautiful UIs with copy‑paste blocks.</p>
      <div className="mt-6 flex gap-2">
        <Button>Get started</Button>
        <Button variant="secondary">See templates</Button>
      </div>
    </section>
  );
}
`}</code></pre>
              </div>
            </div>

            {/* Floating badges */}
            <div className="pointer-events-none absolute -right-2 -top-3 hidden select-none lg:block">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                ⭐ 3.4k+ devs using
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
