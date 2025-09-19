import { motion, type MotionProps, type Transition } from "framer-motion";

// small animation helpers
const float: MotionProps = {
  initial: { y: 0 },
  animate: { y: [0, -18, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const popIn = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 12, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: {
    duration: 0.6,
    delay,
    ease: "circOut" as Transition["ease"],
  },
});

const HeroSection24 = () => {
  return (
    <section
      aria-label="Hero"
      className="relative w-full  overflow-hidden bg-gradient-to-b from-[#0b1022] via-[#0b1220] to-[#091026] text-white"
    >
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(40%_30%_at_80%_10%,rgba(236,72,153,0.12),transparent)]" />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
      </div>

      {/* SVG defs (goo + sheen) */}
      <svg className="absolute -z-20" width="0" height="0" aria-hidden>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 22 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <linearGradient id="sheen" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* floating blobs */}
      <div className="absolute inset-0 -z-10 filter" style={{ WebkitFilter: "blur(14px)" }}>
        <div className="relative w-full h-full" style={{ filter: "url(#goo)" }}>
          <motion.div
            {...float}
            className="absolute left-[-40px] top-16 w-72 h-72 rounded-full bg-gradient-to-br from-pink-500 to-amber-400 opacity-70 mix-blend-screen"
            style={{ transform: "translateZ(0)" }}
          />
          <motion.div
            {...float}
            transition={{ ...float.transition, duration: 8, delay: 1.2 }}
            className="absolute right-10 top-36 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-60 mix-blend-screen"
          />
          <motion.div
            {...float}
            transition={{ ...float.transition, duration: 7, delay: 0.6 }}
            className="absolute -left-24 bottom-16 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-60 mix-blend-screen"
          />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] pt-28 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <motion.div
              {...popIn(0.02)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              New: Motion-ready UI kit
            </motion.div>

            <motion.h1
              {...popIn(0.08)}
              className="mt-4 font-extrabold leading-[1.05] tracking-tight
                         text-4xl sm:text-[2.8rem] md:text-[3.4rem]"
            >
              Build interfaces that feel{" "}
              <span className="relative inline-block">
                alive
                <span className="absolute -inset-0.5 rounded-md opacity-40 blur-[8px] bg-gradient-to-r from-pink-300/40 via-fuchsia-300/40 to-cyan-300/40" />
              </span>
              .
            </motion.h1>

            <motion.p
              {...popIn(0.16)}
              className="mt-5 mx-auto lg:mx-0 max-w-xl text-[15px] sm:text-base text-slate-200/90"
            >
              A sleek hero with liquid glass, soft blobs, and tasteful motion.
              Perfect for SaaS, tools, and creative portfolios. Plug-and-play
              with React + Tailwind + Framer Motion.
            </motion.p>

            <motion.div
              {...popIn(0.24)}
              className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              <a
                href="#get-started"
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold
                           bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-900/20
                           hover:scale-[1.015] active:scale-100 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>Get started</span>
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-95 group-hover:translate-x-0.5 transition">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="pointer-events-none absolute -inset-1 rounded-2xl blur-xl opacity-30"
                  style={{ background: "linear-gradient(90deg,#ff6bcb,#7c3aed,#06b6d4)" }}
                />
              </a>

              <a
                href="#examples"
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/10 transition
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                See live examples →
              </a>
            </motion.div>

            {/* trust row */}
            <motion.div
              {...popIn(0.32)}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-xs text-slate-300/80"
            >
              <span className="opacity-80">Trusted by teams at</span>
              <div className="flex items-center gap-4 opacity-80">
                <span className="rounded-md bg-white/5 px-2 py-1">Acme</span>
                <span className="rounded-md bg-white/5 px-2 py-1">Globex</span>
                <span className="rounded-md bg-white/5 px-2 py-1">Umbrella</span>
              </div>
            </motion.div>
          </div>

          {/* Right: redesigned analytics card */}
          <div className="flex items-center justify-center">
            <motion.div
              {...popIn(0.12)}
              className="group relative w-full max-w-[460px] rounded-3xl border border-white/10 overflow-hidden
                         bg-white/[0.04] backdrop-blur-xl shadow-2xl"
              style={{
                WebkitBackdropFilter: "blur(12px)",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              }}
            >
              {/* subtle glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                              bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />

              {/* header */}
              <div className="relative z-10 flex items-center justify-between px-5 pt-5">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-400" />
                  <div>
                    <div className="text-sm font-semibold">Analytics</div>
                    <div className="text-[11px] text-white/60">Live overview</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-white/60">v2.3</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
                </div>
              </div>

              {/* plan toggle */}
              <div className="relative z-10 mt-4 px-5">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs">
                  <button className="rounded-full px-3 py-1.5 bg-white/10">Monthly</button>
                  <button className="rounded-full px-3 py-1.5 text-white/75 hover:bg-white/10 transition">Annual</button>
                </div>
              </div>

              {/* KPIs */}
              <div className="relative z-10 grid grid-cols-3 gap-3 px-5 pt-5">
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-[11px] text-white/70">MRR</div>
                  <div className="mt-1 text-lg font-semibold">$24.8k</div>
                  <div className="mt-0.5 text-[11px] text-emerald-400">+7.4%</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-[11px] text-white/70">Active</div>
                  <div className="mt-1 text-lg font-semibold">3,214</div>
                  <div className="mt-0.5 text-[11px] text-emerald-400">+2.1%</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <div className="text-[11px] text-white/70">Churn</div>
                  <div className="mt-1 text-lg font-semibold">1.9%</div>
                  <div className="mt-0.5 text-[11px] text-rose-300">-0.3%</div>
                </div>
              </div>

              {/* sparkline + legend */}
              <div className="relative z-10 mt-4 px-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-white/70">Last 30 days</div>
                  <div className="flex items-center gap-3 text-[11px] text-white/70">
                    <span className="inline-flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" /> MRR
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-300" /> Users
                    </span>
                  </div>
                </div>
                <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-3">
                  <svg viewBox="0 0 200 60" className="w-full h-20">
                    {/* baseline */}
                    <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    {/* MRR line */}
                    <polyline
                      fill="none"
                      stroke="rgba(103,232,249,0.9)"
                      strokeWidth="2"
                      points="0,45 20,43 40,44 60,40 80,38 100,36 120,30 140,28 160,25 180,24 200,22"
                    />
                    {/* Users line */}
                    <polyline
                      fill="none"
                      stroke="rgba(240,171,252,0.9)"
                      strokeWidth="2"
                      points="0,48 20,47 40,46 60,44 80,41 100,39 120,37 140,36 160,34 180,33 200,31"
                    />
                  </svg>
                </div>
              </div>

              {/* usage goal */}
              <div className="relative z-10 mt-4 px-5">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>API usage</span>
                  <span>72% of 1M</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                </div>
              </div>

              {/* team row */}
              <div className="relative z-10 mt-5 flex items-center justify-between px-5 pb-5">
                <div className="flex -space-x-2">
                  <img alt="" className="h-7 w-7 rounded-full border border-white/10" src="https://i.pravatar.cc/28?img=1" />
                  <img alt="" className="h-7 w-7 rounded-full border border-white/10" src="https://i.pravatar.cc/28?img=2" />
                  <img alt="" className="h-7 w-7 rounded-full border border-white/10" src="https://i.pravatar.cc/28?img=3" />
                  <div className="h-7 w-7 rounded-full bg-white/10 border border-white/10 grid place-items-center text-[11px]">+4</div>
                </div>
                <a
                  href="#open-dashboard"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[12px] hover:bg-white/10 transition"
                >
                  Open dashboard
                </a>
              </div>

              {/* decorative blob */}
              <motion.div
                className="pointer-events-none absolute -right-8 -bottom-10 w-28 h-28 rounded-full mix-blend-screen opacity-80"
                animate={{ scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 1, 0.6], y: [6, 0, 6] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: 0.6 }}
          className="mt-14 text-center text-sm text-slate-300/90"
        >
          Scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection24;
