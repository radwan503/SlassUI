// /components/HeroSectionModern.tsx
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  UserCog,
  ShoppingCart,
  ChartLine,
  Rocket,
  Blocks,
  ShieldCheck,
  Award,
} from "lucide-react";

// --- Utility: classNames ---
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// --- Decorative Backdrop ---
const Backdrop = () => (
  <>
    {/* Radial mesh gradient "ink blots" */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(75rem_50rem_at_120%_-10%,rgba(255,255,255,0.07),transparent)]" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.3\'/></svg>')]" />
    </div>
  </>
);

// --- Floating Icon ---
const FloatingIcon = ({
  Icon,
  className,
  delay = 0,
}: {
  Icon: any;
  className?: string;
  delay?: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={cn("absolute z-10 text-white/50 drop-shadow-xl", className)}
      initial={{ y: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: reduce ? 0 : [0, -10, 0],
        rotate: reduce ? 0 : [0, 6, 0],
        opacity: 0.35,
      }}
      transition={{
        duration: 6,
        repeat: reduce ? 0 : Infinity,
        delay: delay / 1000,
        ease: "easeInOut",
      }}
    >
      <Icon className="h-10 w-10 md:h-12 md:w-12" />
    </motion.div>
  );
};

// --- Sparkline (inline SVG) ---
const Sparkline = () => (
  <svg viewBox="0 0 500 160" className="h-24 w-full" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="0.9" />
        <stop offset="100%" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path
      d="M0,120 C60,40 120,140 180,80 240,20 300,140 360,60 420,20 480,150 500,130"
      fill="none"
      stroke="url(#g)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="500" cy="130" r="8" fill="#fff" />
  </svg>
);

// --- Stat Chip ---
const StatChip = ({
  icon: Ico,
  color,
  label,
  value,
}: {
  icon: any;
  color: string; // Tailwind bg-* class
  label: string;
  value: string;
}) => (
  <div className="group flex flex-col items-center rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
    <div className={cn("mb-2 flex h-12 w-12 items-center justify-center rounded-full shadow-lg", color)}>
      <Ico className="h-6 w-6 text-white" />
    </div>
    <p className="text-lg font-semibold text-white">{value}</p>
    <p className="text-xs text-white/70">{label}</p>
  </div>
);

// --- Stats Card ---
const StatsCard = () => {
  return (
    <div className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
          <ShieldCheck className="h-4 w-4 text-emerald-300" /> Active Users ✨
        </h3>
        <span className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
          Live
        </span>
      </div>

      {/* Graph + Value */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-5 text-center">
          <p className="text-4xl font-extrabold text-white md:text-5xl">478</p>
          <p className="text-xs text-white/70">Page views / min</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-indigo-600/40 p-3">
          <Sparkline />
          <div className="absolute right-3 top-3 rounded-full bg-white/20 px-2 py-1 text-[10px] font-medium text-white/90">
            +12.4%
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { icon: UserCog, color: "bg-blue-500", label: "Users", value: "36K" },
          { icon: ShoppingCart, color: "bg-pink-500", label: "Clicks", value: "1M" },
          { icon: ChartLine, color: "bg-green-500", label: "Sales", value: "25K" },
          { icon: Rocket, color: "bg-orange-500", label: "Items", value: "25K" },
        ].map((s, i) => (
          <StatChip key={i} icon={s.icon} color={s.color} label={s.label} value={s.value} />
        ))}
      </div>

      <p className="text-center text-xs italic text-white/70">
        Trusted by <span className="font-medium text-indigo-200">10,000+ companies</span> worldwide 🌍
      </p>

      {/* Glow ring */}
      <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
    </div>
  );
};

// --- Main Hero ---
export default function HeroSectionModern() {

  // Floating icons map ensures stable keys & easy edits
  const floaters = useMemo(
    () => [
      { Icon: UserCog, className: "top-10 left-4 sm:top-16 sm:left-14" },
      { Icon: ShoppingCart, className: "top-1/4 right-4 sm:right-16" },
      { Icon: Blocks, className: "bottom-1/2 left-8 sm:left-36" },
      { Icon: Rocket, className: "bottom-10 right-10 sm:bottom-14 sm:right-24" },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1020] via-[#14122a] to-[#0e0e17] text-white">
      <Backdrop />

      {/* Floating Icons */}
      {floaters.map((f, idx) => (
        <FloatingIcon key={idx} Icon={f.Icon} className={f.className} delay={idx * 900} />
      ))}

      <div className="container relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl"
          >
            Build Smarter. <br className="hidden sm:block" /> Grow Faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto mb-8 max-w-xl text-balance text-base text-white/80 md:text-lg lg:mx-0"
          >
            Empower your team with modern analytics, real-time insights, and a design system built for growth. Experience the
            <span className="font-semibold text-indigo-200"> next‑gen glass UI</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg ring-1 ring-white/10 transition hover:translate-y-[-1px] hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 active:translate-y-[0]"
            >
              Get Started Free
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Watch Demo
            </button>
          </motion.div>

          {/* Newsletter */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-md rounded-2xl border border-white/15 bg-white/10 p-4 shadow-lg backdrop-blur lg:mx-0"
          >
            <p className="mb-3 text-sm text-white/80">
              Join <span className="font-semibold text-indigo-200">50k+ subscribers</span> & unlock exclusive features.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="hero-email">
                Email address
              </label>
              <input
                id="hero-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300/40"
              />
              <button
                type="submit"
                className="rounded-xl bg-indigo-600/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                Subscribe
              </button>
            </div>
          </motion.form>

          {/* Trust Badge */}
          <div className="mt-6 flex items-center justify-center gap-3 opacity-90 lg:justify-start">
            <Award className="h-5 w-5 text-yellow-300" />
            <p className="text-sm text-white/70">Award‑winning UI & Analytics Platform</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Tilt wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
          >
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-emerald-400/20 blur-2xl" />
              <StatsCard />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reduce motion friendly keyframes (fallback) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .float-slow { animation: float 6s ease-in-out infinite; }
          @keyframes float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-10px) } }
        }
      `}</style>
    </section>
  );
}
