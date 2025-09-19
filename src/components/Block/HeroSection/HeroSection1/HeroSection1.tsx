import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCog,
  ShoppingCart,
  ChartLine,
  Rocket,
  Blocks,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ---------- Floating Icon (auto-hides on very small screens) ----------
const FloatingIcon: React.FC<{
  icon: React.ElementType;
  className?: string;
  delay?: number;
}> = ({ icon: Icon, className = "", delay = 0 }) => (
  <div
    className={`hidden sm:block absolute text-gray-400/60 dark:text-white/20 z-30 ${className}`}
    style={{ animation: `float 6s ease-in-out ${delay}ms infinite` }}
    aria-hidden
  >
    <Icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12" />
  </div>
);

// ---------- Mini Sparkline (SVG) ----------
const Sparkline: React.FC<{ values: number[]; strokeWidth?: number }> = ({
  values,
  strokeWidth = 3,
}) => {
  const d = useMemo(() => {
    const w = 240,
      h = 72,
      pad = 6;
    const max = Math.max(...values),
      min = Math.min(...values);
    const norm = (v: number) =>
      h -
      pad -
      ((v - min) / Math.max(max - min, 1)) * (h - pad * 2);
    const step = (w - pad * 2) / Math.max(values.length - 1, 1);
    return values
      .map((v, i) => `${i === 0 ? "M" : "L"}${pad + i * step},${norm(v)}`)
      .join(" ");
  }, [values]);

  return (
    <svg
      viewBox="0 0 240 72"
      className="w-full h-16 sm:h-20"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        d={d}
        fill="none"
        stroke="url(#grad)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ---------- Stat Pill ----------
const StatPill: React.FC<{
  label: string;
  value: string | number;
  icon: React.ElementType;
}> = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-br from-white/70 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur border border-white/60 dark:border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm">
    <div className="grid place-items-center rounded-xl bg-black/5 dark:bg-white/10 w-9 h-9 sm:w-10 sm:h-10">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
        {label}
      </div>
      <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
        {value}
      </div>
    </div>
  </div>
);

// ---------- Stats Card ----------
const StatsCard: React.FC = () => {
  const [views] = useState([220, 240, 260, 230, 290, 310, 478]);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      {/* Gradient Ring */}
      <div className="absolute inset-0 -z-10 rounded-[24px] sm:rounded-[28px] p-[1px] bg-[linear-gradient(120deg,rgba(99,102,241,.35),rgba(56,189,248,.35),rgba(34,197,94,.35))] [mask:linear-gradient(#000_0_0)#fff]" />

      <div className="bg-white/85 dark:bg-[#0b1220]/70 rounded-3xl border border-white/60 dark:border-white/10 shadow-2xl backdrop-blur-xl p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h3 className="text-[13px] sm:text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Active users right now
          </h3>
          <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
            Live
          </span>
        </div>

        {/* Top block */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gray-50/70 dark:bg-white/5 border border-gray-200/80 dark:border-white/10">
            <p className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              478
              <span className="ml-1 text-[10px] sm:text-xs font-semibold align-super text-emerald-600 dark:text-emerald-400">
                +12%
              </span>
            </p>
            <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
              Page views per minute
            </p>
          </div>
          <div className="p-2.5 sm:p-4 rounded-2xl bg-indigo-600 text-white relative overflow-hidden">
            <Sparkline values={views} />
            <div className="absolute bottom-2 right-2 sm:right-3 text-right">
              <div className="text-lg sm:text-2xl font-extrabold">478</div>
              <div className="text-[10px] opacity-80">last 7 ticks</div>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          <StatPill label="Users" value="36K" icon={UserCog} />
          <StatPill label="Clicks" value="1M" icon={ShoppingCart} />
          <StatPill label="Sales" value="25K" icon={ChartLine} />
          <StatPill label="Items" value="25K" icon={Rocket} />
        </div>

        <p className="text-[10px] sm:text-[11px] text-center text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
          Update your payout method in Settings
        </p>
      </div>
    </div>
  );
};

// ---------- Hero Section ----------
const CTAButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}> = ({ children, onClick, variant = "primary" }) => (
  <button
    onClick={onClick}
    className={[
      "inline-flex items-center justify-center gap-2 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold transition-all",
      variant === "primary"
        ? "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[.98] shadow-lg"
        : "border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur hover:bg-white/90 dark:hover:bg-white/10",
    ].join(" ")}
  >
    {children}
  </button>
);

const Trust: React.FC = () => (
  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
    <ShieldCheck className="w-4 h-4" /> SOC2-ready • GDPR-friendly • 99.9% Uptime
    SLA
  </div>
);

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(ok ? "ok" : "err");
    // hook your API here
  };

  return (
    <form onSubmit={submit} className="w-full max-w-md mx-auto lg:mx-0">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-gray-300/80 dark:border-white/15 bg-white/90 dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
        />
        <CTAButton>
          Get 2 months free <ArrowRight className="w-4 h-4" />
        </CTAButton>
      </div>
      <AnimatePresence>
        {status !== "idle" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className={`mt-2 text-[11px] ${
              status === "ok" ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {status === "ok"
              ? "Thanks! Please check your inbox."
              : "Please enter a valid email address."}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

export default function ModernHeroStatsCard() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gray-50 dark:bg-[#050c1a] text-slate-900 dark:text-white"
      style={{
        paddingTop: "max(4rem, env(safe-area-inset-top))",
        paddingBottom: "max(3rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* Background gradients & noise (lighter on mobile) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 sm:-top-32 sm:-left-32 w-[24rem] sm:w-[36rem] h-[24rem] sm:h-[36rem] rounded-full blur-3xl bg-indigo-400/25" />
        <div className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 w-[24rem] sm:w-[36rem] h-[24rem] sm:h-[36rem] rounded-full blur-3xl bg-sky-300/25" />
        <div
          className="hidden sm:block absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, #000 1px, transparent 1px),radial-gradient(1px 1px at 80% 60%, #000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Floating icons */}
      <FloatingIcon
        icon={UserCog}
        className="top-8 left-4 sm:left-12"
        delay={0}
      />
      <FloatingIcon
        icon={ShoppingCart}
        className="top-1/4 right-4 sm:right-16"
        delay={400}
      />
      <FloatingIcon
        icon={Blocks}
        className="bottom-1/2 left-6 sm:left-40"
        delay={800}
      />
      <FloatingIcon
        icon={Rocket}
        className="bottom-6 right-8 sm:bottom-12 sm:right-24"
        delay={1200}
      />

      {/* Content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(1.8rem,4vw,3.75rem)] font-extrabold tracking-tight leading-[1.1]"
            >
              Greatr Team,{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                Best Result
              </span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-3 sm:mt-4 text-[15px] sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Crafted with modern design and built for performance. Ship faster
              with an interface your team will love.
            </motion.p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <CTAButton>Start free</CTAButton>
                <CTAButton variant="ghost">Book a demo</CTAButton>
              </div>
              <Trust />
              <NewsletterForm />
            </div>
          </div>

          {/* Right: card */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3]">
              {/* Decorative panel */}
              <div className="absolute inset-0 rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-indigo-200/60 to-sky-200/60 dark:from-white/10 dark:to-white/5 border border-black/5 dark:border-white/10" />

              {/* Floating Stats Card */}
              <div className="absolute inset-0 grid place-items-center p-2.5 sm:p-4">
                <StatsCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        @keyframes float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-12px) } }
      `}</style>
    </section>
  );
}
