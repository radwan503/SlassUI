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

const HeroSection24=()=> {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#071132] flex items-center justify-center">
      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-700/30 via-pink-600/20 to-transparent opacity-60" />

      {/* SVG gooey filter */}
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
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* floating blobs */}
      <div
        className="absolute inset-0 -z-10 filter"
        style={{ WebkitFilter: "blur(12px)" }}
      >
        <div className="relative w-full h-full" style={{ filter: "url(#goo)" }}>
          <motion.div
            {...float}
            className="absolute left-10 top-10 w-72 h-72 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-80 mix-blend-screen"
            style={{ transform: "translateZ(0)" }}
          />
          <motion.div
            {...float}
            className="absolute right-20 top-40 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-70 mix-blend-screen"
            transition={{ ...float.transition, duration: 8, delay: 1.2 }}
          />
          <motion.div
            {...float}
            className="absolute -left-24 bottom-20 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-70 mix-blend-screen"
            transition={{ ...float.transition, duration: 7, delay: 0.6 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              {...popIn(0.08)}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
            >
              Build beautiful interfaces with
              <span className="relative ml-3 inline-block">
                <span className="px-2 py-1 rounded-md bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-300">
                  liquid glass
                </span>
                <span className="absolute -inset-0.5 rounded-md opacity-30 blur-[6px] bg-gradient-to-r from-pink-300 to-yellow-300" />
              </span>
            </motion.h1>

            <motion.p
              {...popIn(0.18)}
              className="mt-6 text-lg text-slate-200 max-w-xl mx-auto lg:mx-0"
            >
              A stylish hero with frosted glass, soft liquid shapes and subtle
              motion — perfect for landing pages, product intros or creative
              portfolios. Built with React, TailwindCSS and a little SVG magic.
            </motion.p>

            <motion.div
              {...popIn(0.28)}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-2xl bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 px-6 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-100 transition-transform"
              >
                <span className="mr-3">Get started</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-95"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                  style={{
                    background:
                      "linear-gradient(90deg,#ff6bcb,#7c3aed,#06b6d4)",
                  }}
                />
              </a>
              <a
                href="#"
                className="text-sm text-slate-300 hover:text-white transition"
              >
                See examples →
              </a>
            </motion.div>
          </div>

          {/* Right: glass card */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              {...popIn(0.12)}
              className="relative w-[420px] max-w-full rounded-3xl border border-white/10 overflow-hidden backdrop-blur-[10px] bg-white/5 shadow-2xl p-6"
              style={{
                WebkitBackdropFilter: "blur(10px)",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              }}
            >
              {/* card content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-white/90">
                    Dashboard
                  </div>
                  <div className="text-xs text-white/60">v1.2</div>
                </div>
                {/* simple stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-1 rounded-lg p-3 bg-white/6">
                    <div className="text-xs text-white/80">Revenue</div>
                    <div className="text-lg font-semibold text-white mt-1">
                      $12.4k
                    </div>
                  </div>
                  <div className="col-span-1 rounded-lg p-3 bg-white/6">
                    <div className="text-xs text-white/80">Active</div>
                    <div className="text-lg font-semibold text-white mt-1">
                      2,134
                    </div>
                  </div>
                </div>
              </div>
              {/* animated tiny blob */}
              <motion.div
                className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full mix-blend-screen opacity-80"
                animate={{ scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: [0, 1, 0.6], y: [6, 0, 6] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-slate-300"
        >
          Scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
}
export default HeroSection24
