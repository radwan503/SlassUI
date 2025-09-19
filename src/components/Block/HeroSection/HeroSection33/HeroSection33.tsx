import React, { useState } from "react";

export default function HeroSection33() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#e9f3ff] via-[#e8fff3] to-[#f0eaff] text-slate-900">
      {/* Inline keyframes so you can run this immediately */}
      <style>{`
        @keyframes slow-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-6px);} }
        .orbit { animation: slow-spin 24s linear infinite; }
        .float { animation: float 6s ease-in-out infinite; }
        .orbiter { position:absolute; left:50%; top:50%; transform: translate(-50%, -50%) rotate(var(--angle)) translate(var(--r)) rotate(calc(-1 * var(--angle))); transition: transform 450ms cubic-bezier(.2,.8,.2,1); }
      `}</style>

      {/* Top Navigation */}
          <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo + App Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-bold text-emerald-950 shadow-sm">
            💬
          </div>
          <div className="text-lg font-semibold tracking-tight">
            Bongo <span className="text-slate-500">Bongo</span>
          </div>
          {/* <div className="ml-3 h-6 w-px bg-slate-300/70" />
          <div className="text-lg font-semibold">Bit Assist</div> */}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a className="hover:text-slate-900" href="#features">Features</a>
          <a className="hover:text-slate-900" href="#pricing">Pricing</a>
          <a className="hover:text-slate-900" href="#changelog">Changelog</a>
          <a className="hover:text-slate-900" href="#docs">Documentation</a>
        </nav>

        {/* CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-white/70">
            Sign In
          </button>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-200/50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/80 backdrop-blur px-6 py-4 space-y-4 text-slate-700 shadow-sm">
          <a className="block hover:text-slate-900" href="#features">Features</a>
          <a className="block hover:text-slate-900" href="#pricing">Pricing</a>
          <a className="block hover:text-slate-900" href="#changelog">Changelog</a>
          <a className="block hover:text-slate-900" href="#docs">Documentation</a>
        </nav>
      )}

      {/* Hero */}
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-8 md:pb-24">
        {/* Left copy */}
        <section className="max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Engage Customers Smarter, Faster & Easier
          </h1>
          <p className="mt-5 text-lg text-slate-600">
           Unify all your customer conversations into one powerful dashboard.  
            Boost support, sales, and engagement effortlessly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-emerald-950 shadow transition hover:brightness-95">Get Started</button>
            <button className="rounded-full border border-slate-300/90 bg-white/60 px-6 py-3 text-base font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-white">
              Live Demo
            </button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
            <span>Trusted by startups & enterprises worldwide</span>
          </div>
        </section>

        {/* Right visual with interactive orbit */}
        <InteractiveOrbit />
      </main>

      {/* Footer mini */}
      <div className="mx-auto mb-8 w-full max-w-7xl px-6">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-4 text-xs text-slate-500 backdrop-blur">
          Tip: Move your mouse over the orbit — icons collapse toward the center then spread back out.
        </div>
      </div>
    </div>
  );
}


function InteractiveOrbit() {
  const ICONS = [
    { label: "fb", key: "fb" },
    { label: "ig", key: "ig" },
    { label: "tw", key: "tw" },
    { label: "ld", key: "ld" },
    { label: "tt", key: "tt" },
    { label: "yt", key: "yt" },
    { label: "pt", key: "pt" },
  ];

  type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

  // Instead of fixed numbers → scale with viewport width
  const [radius, setRadius] = React.useState(120);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const computeRadius = React.useCallback((e: any) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // dynamic max radius based on container size
    const maxDist = Math.min(rect.width, rect.height) / 2;
    const t = Math.max(0, Math.min(1, dist / maxDist));

    const MIN_R = rect.width * 0.25; // ~25% of container
    const MAX_R = rect.width * 0.4;  // ~40% of container

    setRadius(MIN_R + t * (MAX_R - MIN_R));
  }, []);

  const handleEnter = React.useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setRadius(rect.width * 0.25);
    }
  }, []);

  const handleLeave = React.useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setRadius(rect.width * 0.3);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseEnter={handleEnter}
      onMouseMove={computeRadius}
      onMouseLeave={handleLeave}
      className="relative mx-auto aspect-square w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[640px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-emerald-300/20 blur-2xl" />

      {/* Center bubble (scales by screen size) */}
      <div
        className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 
        -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-emerald-100"
      >
        <span className="text-xl sm:text-2xl lg:text-4xl font-bold text-emerald-900">
          <svg width="100px" height="100px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48"> <path fill="#7CB342" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/> <path fill="#0277BD" d="M45,24c0,11.7-9.5,21-21,21S3,35.7,3,24S12.3,3,24,3S45,12.3,45,24z M23.8,33.7c0-0.4-0.2-0.6-0.6-0.8 c-1.3-0.4-2.5-0.4-3.6-1.5c-0.2-0.4-0.2-0.8-0.4-1.3c-0.4-0.4-1.5-0.6-2.1-0.8c-0.8,0-1.7,0-2.7,0c-0.4,0-1.1,0-1.5,0 c-0.6-0.2-1.1-1.1-1.5-1.7c0-0.2,0-0.6-0.4-0.6c-0.4-0.2-0.8,0.2-1.3,0c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.6,0.4-1.3,0.8-1.7 c0.6-0.4,1.3,0.2,1.9,0.2c0.2,0,0.2,0,0.4,0.2c0.6,0.2,0.8,1,0.8,1.7c0,0.2,0,0.4,0,0.4c0,0.2,0.2,0.2,0.4,0.2 c0.2-1.1,0.2-2.1,0.4-3.2c0-1.3,1.3-2.5,2.3-2.9c0.4-0.2,0.6,0.2,1.1,0c1.3-0.4,4.4-1.7,3.8-3.4c-0.4-1.5-1.7-2.9-3.4-2.7 c-0.4,0.2-0.6,0.4-1,0.6c-0.6,0.4-1.9,1.7-2.5,1.7c-1.1-0.2-1.1-1.7-0.8-2.3c0.2-0.8,2.1-3.6,3.4-3.1c0.2,0.2,0.6,0.6,0.8,0.8 c0.4,0.2,1.1,0.2,1.7,0.2c0.2,0,0.4,0,0.6-0.2c0.2-0.2,0.2-0.2,0.2-0.4c0-0.6-0.6-1.3-1-1.7c-0.4-0.4-1.1-0.8-1.7-1.1 c-2.1-0.6-5.5,0.2-7.1,1.7s-2.9,4-3.8,6.1c-0.4,1.3-0.8,2.9-1,4.4c-0.2,1-0.4,1.9,0.2,2.9c0.6,1.3,1.9,2.5,3.2,3.4 c0.8,0.6,2.5,0.6,3.4,1.7c0.6,0.8,0.4,1.9,0.4,2.9c0,1.3,0.8,2.3,1.3,3.4c0.2,0.6,0.4,1.5,0.6,2.1c0,0.2,0.2,1.5,0.2,1.7 c1.3,0.6,2.3,1.3,3.8,1.7c0.2,0,1-1.3,1-1.5c0.6-0.6,1.1-1.5,1.7-1.9c0.4-0.2,0.8-0.4,1.3-0.8c0.4-0.4,0.6-1.3,0.8-1.9 C23.8,35.1,24,34.3,23.8,33.7z M24.2,14.3c0.2,0,0.4-0.2,0.8-0.4c0.6-0.4,1.3-1.1,1.9-1.5c0.6-0.4,1.3-1.1,1.7-1.5 c0.6-0.4,1.1-1.3,1.3-1.9c0.2-0.4,0.8-1.3,0.6-1.9c-0.2-0.4-1.3-0.6-1.7-0.8c-1.7-0.4-3.1-0.6-4.8-0.6c-0.6,0-1.5,0.2-1.7,0.8 c-0.2,1.1,0.6,0.8,1.5,1.1c0,0,0.2,1.7,0.2,1.9c0.2,1-0.4,1.7-0.4,2.7c0,0.6,0,1.7,0.4,2.1L24.2,14.3z M41.8,29 c0.2-0.4,0.2-1.1,0.4-1.5c0.2-1,0.2-2.1,0.2-3.1c0-2.1-0.2-4.2-0.8-6.1c-0.4-0.6-0.6-1.3-0.8-1.9c-0.4-1.1-1-2.1-1.9-2.9 c-0.8-1.1-1.9-4-3.8-3.1c-0.6,0.2-1,1-1.5,1.5c-0.4,0.6-0.8,1.3-1.3,1.9c-0.2,0.2-0.4,0.6-0.2,0.8c0,0.2,0.2,0.2,0.4,0.2 c0.4,0.2,0.6,0.2,1,0.4c0.2,0,0.4,0.2,0.2,0.4c0,0,0,0.2-0.2,0.2c-1,1.1-2.1,1.9-3.1,2.9c-0.2,0.2-0.4,0.6-0.4,0.8 c0,0.2,0.2,0.2,0.2,0.4c0,0.2-0.2,0.2-0.4,0.4c-0.4,0.2-0.8,0.4-1.1,0.6c-0.2,0.4,0,1.1-0.2,1.5c-0.2,1.1-0.8,1.9-1.3,2.9 c-0.4,0.6-0.6,1.3-1,1.9c0,0.8-0.2,1.5,0.2,2.1c1,1.5,2.9,0.6,4.4,1.3c0.4,0.2,0.8,0.2,1.1,0.6c0.6,0.6,0.6,1.7,0.8,2.3 c0.2,0.8,0.4,1.7,0.8,2.5c0.2,1,0.6,2.1,0.8,2.9c1.9-1.5,3.6-3.1,4.8-5.2C40.6,32.4,41.2,30.7,41.8,29z"/> </svg>
        </span>
      </div>

      {/* Orbit icons */}
      <div className="orbit absolute left-1/2 top-1/2">
        {ICONS.map((it, i) => {
          const angle = (i / ICONS.length) * 360;
          const styleVars: CSSVars = {
            ["--angle"]: `${angle}deg`,
            ["--r"]: `${radius}px`,
          };
          return (
            <div key={it.key} className="orbiter" style={styleVars}>
              <IconBadge label={it.label} />
            </div>
          );
        })}
      </div>

      {/* Decorative chips (hidden on small) */}
      <div className="absolute right-4 top-6 hidden md:block rotate-12">
        <ShieldChip />
      </div>
      <div className="absolute left-6 bottom-10 hidden md:block -rotate-6">
        <CodeChip />
      </div>
    </section>
  );
}

function IconBadge({ label, className = "" }:any) {
  const palette:any = {
    fb: "bg-[#3b5998]",
    ig: "bg-[#E4405F]",
    tw: "bg-[#1DA1F2]",
    ld: "bg-[#0077B5]",
    tt: "bg-[#000000]",
    yt: "bg-[#FF0000]",
    pt: "bg-[#E60023]",
  };
  const key = (label || "").toLowerCase();
  const bg:any = palette[key] || "bg-slate-700";
  return (
    <div className={`float flex h-14 w-14 items-center justify-center rounded-2xl ${bg} text-white shadow-lg ring-1 ring-black/5 ${className}`}>
      <span className="select-none text-sm font-bold tracking-tight">{label}</span>
    </div>
  );
}

function ShieldChip() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3 py-2 text-emerald-900 ring-1 ring-emerald-300">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 4v6c0 5-3.4 9.4-7 10-3.6-.6-7-5-7-10V6l7-4z"/></svg>
      <span className="text-xs font-medium">Secure</span>
    </div>
  );
}

function CodeChip() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-indigo-100 px-3 py-2 text-indigo-900 ring-1 ring-indigo-300">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 9l-4 3 4 3V9zm8 6l4-3-4-3v6zM13.4 7.6l-2.8 8.8 1.9.6 2.8-8.8-1.9-.6z"/></svg>
      <span className="text-xs font-medium">Developer‑Friendly</span>
    </div>
  );
}