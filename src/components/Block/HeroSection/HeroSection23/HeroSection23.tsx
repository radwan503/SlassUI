// /components/HeroSection23Modern.tsx
import { useMemo, useState } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { Sparkles, Rocket, Shield, ArrowRight, Video, Zap, Menu, X } from "lucide-react";

// ---- Tiny helper for staggered fade/slide-ins
const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  },
});

// ---- Animated metaball-like blob used behind the glass to create a liquid vibe
interface AnimatedBlobProps { className?: string; duration?: number; delay?: number; }
function AnimatedBlob({ className, duration = 18, delay = 0 }: AnimatedBlobProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={reduce ? { x: 0, y: 0, scale: 1 } : { x: [0, 30, -20, 20, 0], y: [0, -25, 15, -15, 0], scale: [1, 1.15, 0.95, 1.08, 1] }}
      transition={{ duration, ease: "easeInOut", repeat: reduce ? 0 : Infinity, delay }}
      className={className}
    />
  );
}

export default function HeroSection23Modern() {
  const [open, setOpen] = useState(false);

  const navItems = useMemo(() => [
    { href: "#features", label: "Features" },
    { href: "#showcase", label: "Showcase" },
    { href: "#pricing", label: "Pricing" },
  ], []);

  return (
    <div className="relative  w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f766e] text-white">
      {/* Background grid (with soft mask) */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_40%,black,transparent)]" aria-hidden>
        <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid23" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid23)" />
        </svg>
      </div>

      {/* Gooey filter for liquid effect */}
      <svg className="absolute -z-10 h-0 w-0" aria-hidden>
        <defs>
          <filter id="goo23">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full bg-teal-400/30 blur-[60px]" />
        <div className="absolute -right-24 -bottom-24 h-[460px] w-[460px] rounded-full bg-emerald-500/20 blur-[70px]" />
        {/* subtle conic shimmer */}
        <div className="absolute inset-0 opacity-[0.08] [background:conic-gradient(from_180deg_at_50%_50%,transparent,rgba(255,255,255,0.5),transparent)]" />
      </div>

      {/* NAVBAR */}
      <header className="mx-auto w-full max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.a href="#top" className="flex items-center gap-2" {...fadeUp(0)}>
            <span aria-hidden className="h-8 w-8 rounded-xl bg-white/10 shadow-inner backdrop-blur" />
            <span className="font-semibold tracking-wide">LiquidLabs</span>
          </motion.a>

          {/* Desktop nav */}
          <motion.nav className="hidden items-center gap-6 md:flex" {...fadeUp(0.05)}>
            {navItems.map((n) => (
              <a key={n.href} className="text-sm text-white/80 transition hover:text-white" href={n.href}>{n.label}</a>
            ))}
            <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Sign in</button>
          </motion.nav>

          {/* Mobile toggle */}
          <button aria-label={open ? "Close menu" : "Open menu"} className="md:hidden rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                {n.label}
              </a>
            ))}
            <button className="mt-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Sign in</button>
          </nav>
        </motion.div>
      </header>

      {/* Floating accent icons */}
      <motion.div className="pointer-events-none absolute right-6 top-6 hidden gap-3 sm:flex" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Zap className="h-5 w-5 opacity-40" />
        <Sparkles className="h-5 w-5 opacity-40" />
        <Shield className="h-5 w-5 opacity-40" />
      </motion.div>

      {/* HERO CONTENT */}
      <main className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-4 md:grid-cols-2">
        {/* Left column */}
        <div>
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Introducing the Liquid Glass UI Kit
          </motion.div>

          <motion.h1 variants={fadeUp(0.05)} initial="hidden" animate="show" className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Make your hero banners feel {" "}
            <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">alive</span>.
          </motion.h1>

          <motion.p variants={fadeUp(0.1)} initial="hidden" animate="show" className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
            A modern, animated hero section crafted with React, TailwindCSS, and a gooey liquid‑glass aesthetic. Drop it into your app and customize.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp(0.15)} initial="hidden" animate="show" className="mt-8 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-medium backdrop-blur transition hover:translate-y-[-1px] hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
              <Rocket className="h-4 w-4" /> Get Started
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-transparent px-5 py-3 font-medium text-white/80 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
              <Video className="h-4 w-4" /> Watch Demo
            </button>
          </motion.div>

          {/* Quick feature pills */}
          <motion.ul variants={fadeUp(0.2)} initial="hidden" animate="show" className="mt-8 flex max-w-xl flex-wrap gap-2 text-xs text-white/70">
            {['Framer Motion','TailwindCSS','Glassmorphism','Gooey blobs','A11y‑ready','Mobile‑first'].map((t) => (
              <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">{t}</li>
            ))}
          </motion.ul>
        </div>

        {/* Right column – Liquid Glass Showcase */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.1 }} className="relative">
          {/* Liquid container */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl rounded-[28px] border border-black/30 bg-black/100 p-1 shadow-2xl backdrop-blur-xl" style={{ filter: "url(#goo23)" }}>
            <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-white/10 to-white/5">
              {/* Moving blobs inside the glass */}
              <AnimatedBlob className="absolute left-8 top-8 h-40 w-40 rounded-full bg-teal-300/50 blur-[10px]" duration={16} />
              <AnimatedBlob className="absolute right-6 top-10 h-28 w-28 rounded-full bg-emerald-300/50 blur-[8px]" duration={20} delay={1} />
              <AnimatedBlob className="absolute bottom-8 left-10 h-32 w-32 rounded-full bg-cyan-300/50 blur-[10px]" duration={22} delay={0.5} />
              <AnimatedBlob className="absolute bottom-6 right-10 h-24 w-24 rounded-full bg-lime-300/50 blur-[10px]" duration={18} delay={1.2} />

              {/* Glass content */}
              <div className="relative z-10 grid h-full grid-cols-2 gap-3 p-4">
                {[{icon: Shield, title:'Secure', text:'AES‑256, SSO, audit logs.'}, {icon: Sparkles, title:'Beautiful', text:'Subtle motion & shine.'}, {icon: Rocket, title:'Fast', text:'Optimized for performance.'}, {icon: Video, title:'Ready', text:'Plug & play in minutes.'}].map((c, i) => (
                  <div key={i} className="rounded-2xl border border-white/20 bg-black/60 p-4 backdrop-blur transition hover:bg-white/15">
                    <div className="flex items-center gap-2 text-sm font-medium"><c.icon className="h-4 w-4" /> {c.title}</div>
                    <p className="mt-2 text-xs text-white/80">{c.text}</p>
                  </div>
                ))}
              </div>

              {/* Subtle highlight */}
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent)]" />
            </div>
          </div>

          {/* Floating badge near the glass */}
          <motion.div className="absolute -right-2 -top-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
            <Sparkles className="h-3.5 w-3.5" /> Liquid Glass
          </motion.div>
        </motion.div>
      </main>

      {/* FOOTER STRIP / Glow */}
      <div className="pointer-events-none mx-auto mb-10 mt-[-8px] h-16 w-[92%] max-w-6xl rounded-3xl bg-gradient-to-r from-teal-400/10 via-white/10 to-emerald-400/10 blur-2xl" />

      {/* Helper styles for float fallback (reduced motion safe) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-float { animation: float 8s ease-in-out infinite; }
          @keyframes float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-8px) } }
        }
      `}</style>
    </div>
  );
}
