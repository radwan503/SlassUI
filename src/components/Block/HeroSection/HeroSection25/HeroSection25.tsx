import { motion, type MotionProps } from "framer-motion";
import { Sparkles, Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

export default function LiquidGlassHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const float: MotionProps = {
    initial: { y: 0 },
    animate: { y: [0, -20, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  };

  const popIn = (delay = 0): MotionProps => ({
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.9, delay, ease: "easeOut" },
  });

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#050c1a] via-[#0a1229] to-[#111c44] flex flex-col">
      {/* gradient background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,150,0.35),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.3),transparent_60%)]" />

      {/* floating blurred blobs */}
      <motion.div {...float} className="absolute top-20 left-20 w-96 h-96 rounded-full bg-pink-500/30 blur-[100px]" />
      <motion.div
        {...float}
        transition={{ ...float.transition, duration: 7 }}
        className="absolute bottom-32 right-16 w-[28rem] h-[28rem] rounded-full bg-cyan-500/30 blur-[120px]"
      />
      <motion.div
        {...float}
        transition={{ ...float.transition, duration: 6, delay: 1 }}
        className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] rounded-full bg-indigo-500/30 blur-[100px]"
      />

      {/* NAVBAR */}
      <header className="relative z-20 w-full">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-cyan-400 flex items-center justify-center font-bold text-white">
              L
            </div>
            <span className="text-white font-semibold text-lg">
              LiquidGlass
            </span>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-white shadow-md hover:scale-[1.05] transition-transform"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-xl border-t border-white/10 md:hidden z-30"
          >
            <div className="flex flex-col p-6 gap-4 text-white">
              <a href="#" className="hover:text-cyan-300 transition">
                Features
              </a>
              <a href="#" className="hover:text-cyan-300 transition">
                Pricing
              </a>
              <a href="#" className="hover:text-cyan-300 transition">
                About
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-center font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16 flex-1">
        {/* Left side */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            {...popIn(0.1)}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            Experience the{" "}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
              Future
            </span>
          </motion.h1>

          <motion.p
            {...popIn(0.3)}
            className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
          >
            An award-winning liquid glass hero section with mesmerizing motion,
            immersive gradients, and futuristic glassmorphism. Designed to
            impress.
          </motion.p>

          <motion.div
            {...popIn(0.5)}
            className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
          >
            <a
              href="#"
              className="group relative inline-flex items-center rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 px-7 py-3 font-semibold text-white shadow-xl hover:scale-[1.05] transition-transform"
            >
              <span className="mr-2">Get Started</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-30" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <Sparkles className="w-4 h-4" /> Explore More
            </a>
          </motion.div>
        </div>

        {/* Right side: Glass demo card */}
        <motion.div {...popIn(0.2)} className="flex-1 relative">
          <div className="relative mx-auto w-[420px] max-w-full rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* animated sheen */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative p-6 z-10">
              <h3 className="text-white font-semibold text-lg">
                Interactive Dashboard
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Liquid-glass components in action
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/10 text-white text-center">
                  <div className="text-2xl font-bold">$12.4k</div>
                  <div className="text-xs text-slate-300 mt-1">Revenue</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 text-white text-center">
                  <div className="text-2xl font-bold">2,134</div>
                  <div className="text-xs text-slate-300 mt-1">Active Users</div>
                </div>
                <div className="col-span-2 p-4 rounded-xl bg-gradient-to-r from-pink-400/20 to-cyan-400/20 text-white">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>68%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition">
                  Open
                </button>
                <button className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm hover:text-white transition">
                  Share
                </button>
              </div>
            </div>

            {/* glowing orb */}
            <motion.div
              className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-pink-500/30 blur-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 0.6], y: [10, 0, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 text-sm"
      >
        Scroll to explore ↓
      </motion.div>

      {/* corner glowing accent */}
      <motion.div
        {...float}
        transition={{ ...float.transition, duration: 10 }}
        className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/40 to-cyan-500/40 blur-[100px]"
      />
    </section>
  );
}
