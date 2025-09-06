import { useState } from 'react';
import { ChevronDown, ArrowRight, Dot, Plus, Layout, Zap, Rocket, Menu, X, BarChart2, Users} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCard = ({ className, icon }:any) => {
  const iconProps:any = {
    plus: { bg: "bg-fuchsia-500", icon: <Plus className="h-6 w-6 text-white" /> },
    layout: { bg: "bg-sky-500", icon: <Layout className="h-6 w-6 text-white" /> },
    zap: { bg: "bg-amber-500", icon: <Zap className="h-6 w-6 text-white" /> },
    rocket: { bg: "bg-rose-500", icon: <Rocket className="h-6 w-6 text-white" /> },
    default: { bg: "bg-neutral-500", icon: <Dot className="h-6 w-6 text-white" /> }
  };
  
  const currentIcon = iconProps[icon] || iconProps.default;

  return (
    <motion.div
      className={`pointer-events-none absolute z-0 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-sm shadow-2xl backdrop-blur-md transition-all duration-300 ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full shadow-inner ${currentIcon.bg}`}>
        {currentIcon.icon}
      </div>
    </motion.div>
  );
};

const CardSection = ({ title, children }:any) => {
  return (
    <motion.div
      className="relative z-10 rounded-3xl border border-white/20 bg-black/5 p-4 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 rounded-3xl opacity-50 [background:radial-gradient(125%_125%_at_50%_10%,_#393A3C_40%,_#2e2e2f_100%)]" />
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/50">
          <span className="inline-flex h-2 w-2 rounded-sm bg-white/30" />
          {title}
        </div>
        {children}
      </div>
    </motion.div>
  );
};

const PlaceholderLine = ({ w = "100%",}) => {
  return <div className="h-2 rounded-full bg-neutral-700/70" style={{ width: w }} />;
};

const PlaceholderBlock = ({ h = "40px" }) => {
  return (
    <div
      className="rounded-xl border border-white/20 bg-neutral-800/60 shadow-inner"
      style={{ height: h }}
    />
  );
};

const HeroSection19 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-900 via-zinc-900 to-black font-inter text-white">
      {/* Subtle glowing effect */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(white,transparent)]">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bot h-7 w-7 text-white shadow-sm"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
              <path d="M15 13v2" />
              <path d="M9 13v2" />
            </motion.svg>
            <span className="text-lg font-semibold tracking-tight text-white/90">Visionary</span>
          </div>

          {/* Nav + Actions - Desktop */}
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
              Use Cases <ChevronDown className="h-4 w-4" />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
              Resources <ChevronDown className="h-4 w-4" />
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Login</a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 text-white/70 hover:text-white focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col items-center gap-6 text-2xl font-semibold text-white/80">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Pricing</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Use Cases</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Resources</a>
              <div className="h-px w-20 bg-neutral-700 my-4" />
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-white">Login</a>
              <motion.a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-lg font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 pt-10 text-center sm:pt-16 md:pt-24">
        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white drop-shadow-md sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unleash your creative potential with <br className="hidden sm:block" /><span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Visionary</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg md:mt-5 md:text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A new way to create, share, and collaborate on your ideas. Build, imagine, and innovate with our powerful tools.
        </motion.p>

        {/* CTA badge */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            <Rocket className="h-4 w-4 text-white" />
            <span className="opacity-90">Launched today!</span>
            <Dot className="h-1.5 w-1.5" />
            <span>Join our community</span>
          </a>
        </motion.div>

        {/* Dashboard / floating UI */}
        <section className="relative mx-auto mt-12 max-w-5xl pb-24 sm:mt-16 md:mt-24">
          {/* Main card container */}
          <motion.div
            className="relative flex flex-col gap-4 rounded-[2.5rem] border border-white/20 bg-black/5 p-4 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <CardSection title="Recent Projects">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="90%" />
                      <PlaceholderLine w="70%" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="85%" />
                      <PlaceholderLine w="65%" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="75%" />
                      <PlaceholderLine w="50%" />
                    </div>
                  </div>
                </div>
              </CardSection>

              {/* Collaborators */}
              <CardSection title="Collaborators">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="80%" />
                      <PlaceholderLine w="60%" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="70%" />
                      <PlaceholderLine w="50%" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="90%" />
                      <PlaceholderLine w="40%" />
                    </div>
                  </div>
                </div>
              </CardSection>

              <CardSection title="Activity Log">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-sm bg-neutral-700/60 shadow-inner" />
                    <PlaceholderLine w="95%" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-sm bg-neutral-700/60 shadow-inner" />
                    <PlaceholderLine w="80%" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-sm bg-neutral-700/60 shadow-inner" />
                    <PlaceholderLine w="75%" />
                  </div>
                </div>
              </CardSection>
            </div>

            {/* Second Row of Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Analytics Overview */}
              <CardSection title="Analytics Overview">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BarChart2 className="h-8 w-8 text-white/60" />
                    <div className="flex-1">
                      <PlaceholderLine w="85%" />
                      <PlaceholderLine w="50%" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="70%" />
                      <PlaceholderLine w="40%" />
                    </div>
                  </div>
                </div>
              </CardSection>

              {/* Team Status */}
              <CardSection title="Team Status">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-white/60" />
                    <div className="flex-1">
                      <PlaceholderLine w="90%" />
                      <PlaceholderLine w="60%" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-700/60 shadow-inner" />
                    <div className="flex-1">
                      <PlaceholderLine w="80%" />
                      <PlaceholderLine w="55%" />
                    </div>
                  </div>
                </div>
              </CardSection>

              {/* Additional Card */}
              <CardSection title="Task Board">
                <div className="space-y-4">
                  <div className="h-40 rounded-xl bg-neutral-700/60 shadow-inner" />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <PlaceholderBlock h="34px" />
                    <PlaceholderBlock h="34px" />
                  </div>
                </div>
              </CardSection>
            </div>
          </motion.div>

          {/* Floating surrounding cards - desktop only for effect */}
          <FloatingCard className="-left-16 -top-10 -rotate-6 hidden sm:flex" icon="plus" />
          <FloatingCard className="-right-16 -top-6 rotate-6 hidden sm:flex" icon="zap" />
          <FloatingCard className="-left-10 bottom-4 -rotate-3 hidden sm:flex" icon="layout" />
          <FloatingCard className="-right-8 bottom-0 rotate-3 hidden sm:flex" icon="rocket" />
        </section>
      </main>

      <div className="h-10 sm:h-16" />
    </div>
  );
};

export default HeroSection19;

