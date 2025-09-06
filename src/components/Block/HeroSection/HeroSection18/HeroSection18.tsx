import { useEffect, useMemo, useState, type CSSProperties } from "react";

const HeroSection18=()=> {
  const w = (val: string): CSSProperties => ({ ['--w' as any]: val });

  const formatMoney = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 3,
    }).format(n);

  const [profit, setProfit] = useState(350.24);
  const [revenue, setRevenue] = useState(400.69);
  const [sold, setSold] = useState(200.0);

  // mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setProfit((p) => +(p + (Math.random() - 0.45) * 0.25).toFixed(3));
      setRevenue((r) => +(r + (Math.random() - 0.55) * 0.3).toFixed(3));
      setSold((s) => +(s + (Math.random() - 0.45) * 0.2).toFixed(3));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const tinyBars = useMemo(() => [4, 7, 10, 5, 8, 6, 9, 7], []);

  const lineBars = useMemo(
    () => [
      20, 35, 18, 42, 30, 15, 22, 26, 19, 24, 28, 36, 25, 18, 22, 40, 38, 30, 24, 33, 27, 41, 20, 34, 22, 29, 37, 32, 26, 31, 28, 35, 21, 25, 30, 18, 22, 29, 33, 27,
    ],
    []
  );

  return (
    <div className="min-h-screen w-full bg-[#0A57D0] text-white">
      <style>{`
        @keyframes barPulse { 0%{transform:scaleY(.8)} 50%{transform:scaleY(1.15)} 100%{transform:scaleY(.8)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes growWidth { 0%{width:10%} 60%{width:var(--w)} 100%{width:calc(var(--w) - 6%)} }
      `}</style>

      {/* Header */}
      <header className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Left: Logo + Primary Nav */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Mobile hamburger */}
          <button
            className="mr-2 inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white">
                <path fill="currentColor" d="M11 3h2v6h6v2h-6v6h-2v-6H5V9h6z" />
              </svg>
            </span>
            <span className="font-semibold tracking-tight">Crypt Land</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-white/90 text-sm ml-4">
            {[
              { label: "About us", href: "#" },
              { label: "Platform", href: "#" },
              { label: "Solution", href: "#" },
              { label: "Customer", href: "#" },
            ].map((it) => (
              <a key={it.label} href={it.href} className="hover:text-white transition-colors">
                {it.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Links + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white text-white/90">Price</a>
          <a href="#" className="hover:text-white text-white/90">Contact</a>
          <a href="#" className="hover:text-white text-white/90">Login</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#B3F15A] px-4 py-2 font-medium text-[#0a0a0a] hover:brightness-110 transition">Sign up</a>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full px-4 pt-3 pb-5 transition ${
            menuOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <div className="mx-4 rounded-2xl bg-[#0A57D0]/95 backdrop-blur border border-white/10 p-4 shadow-lg">
            <nav className="flex flex-col gap-3 text-sm">
              {[
                { label: "About us", href: "#" },
                { label: "Platform", href: "#" },
                { label: "Solution", href: "#" },
                { label: "Customer", href: "#" },
              ].map((it) => (
                <a key={it.label} href={it.href} className="text-white/90 hover:text-white">{it.label}</a>
              ))}
            </nav>
            <div className="mt-4 h-px bg-white/10" />
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a href="#" className="text-white/90 hover:text-white">Price</a>
              <a href="#" className="text-white/90 hover:text-white">Contact</a>
              <a href="#" className="text-white/90 hover:text-white">Login</a>
              <a href="#" className="ml-auto inline-flex items-center justify-center rounded-full bg-[#B3F15A] px-4 py-2 font-medium text-[#0a0a0a] hover:brightness-110 transition w-full sm:w-auto">Sign up</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
          The Finance Solutions
          <br className="hidden sm:block" /> For Your Business
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-white/80 text-sm sm:text-base">
          Empower your finance team. The onestop platform for all financial
          management of small and medium-sized business.
        </p>

        {/* Email Input + CTA */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-[420px] rounded-full bg-white/10 placeholder-white/70 text-white px-5 py-3 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/40"
          />
          <button className="rounded-full bg-[#B3F15A] text-[#0a0a0a] px-5 py-3 font-semibold hover:brightness-110 transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Analytics Dashboard Card */}
      <section className="mx-auto mt-10 md:mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-2xl bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 p-4 sm:p-6 lg:p-8">
          {/* Top Row Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Total Profit', value: profit, delta: '+18.23', up: true },
              { title: 'Total Revenue', value: revenue, delta: '-28.35', up: false },
              { title: 'Product sold', value: sold, delta: '+28.35', up: true },
            ].map((s, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{s.title}</p>
                    <p className="mt-2 text-2xl font-bold tabular-nums">{formatMoney(s.value)}</p>
                  </div>
                  <div className="flex items-end gap-1 h-10">
                    {tinyBars.map((h, i) => (
                      <div
                        key={i}
                        className={`w-1.5 origin-bottom rounded-sm ${s.up ? 'bg-lime-500' : 'bg-rose-400'}`}
                        style={{ height: `${h * 3}px`, animation: `barPulse ${1.8 + (i % 3) * 0.3}s ease-in-out ${i * 0.12}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
                <p className={`mt-2 text-xs font-medium ${s.up ? 'text-lime-600' : 'text-rose-500'}`}>{s.delta}</p>
              </div>
            ))}
          </div>

          {/* Bottom grids */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6">
            {/* Left column cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* Balance */}
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Total Balance</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-bold tabular-nums">{formatMoney(350)}</p>
                  <button className="rounded-full bg-[#B3F15A] text-slate-900 px-3 py-1.5 text-xs font-semibold">Transfer</button>
                </div>
              </div>

              {/* Income */}
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Total Income</p>
                <p className="mt-2 text-xl font-bold tabular-nums">{formatMoney(320)}</p>
                {/* animated progress */}
                <div className="mt-3 h-2 w-full rounded bg-slate-100 overflow-hidden">
                  <div className="h-2 rounded bg-lime-500" style={{ ...w('65%'), animation: 'growWidth 3.2s ease-in-out infinite alternate' }} />
                </div>
              </div>

              {/* Expense */}
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Total Expense</p>
                <p className="mt-2 text-xl font-bold tabular-nums">{formatMoney(220)}</p>
                <div className="mt-3 h-2 w-full rounded bg-slate-100 overflow-hidden">
                  <div className="h-2 rounded bg-rose-400" style={{ ...w('45%'), animation: 'growWidth 3s ease-in-out infinite alternate-reverse' }} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide text-slate-500">Spend Overview</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {['Daily', 'Weekly', 'Monthly', 'Yearly'].map((t, i) => (
                    <span key={i} className={`px-2 py-1 rounded ${i === 2 ? 'bg-slate-100 text-slate-700' : ''}`}>{t}</span>
                  ))}
                </div>
              </div>
              {/* Graph */}
              <div className="mt-4 h-48 w-full">
                <div className="relative h-full w-full rounded-lg bg-gradient-to-b from-lime-100/50 to-white border border-slate-200 overflow-hidden">
                  {[20, 40, 60, 80].map((t, i) => (
                    <div key={i} className="absolute left-0 right-0 border-t border-dashed border-slate-200" style={{ top: `${t}%` }} />
                  ))}
                  <div className="absolute inset-x-2 bottom-6 top-2">
                    <div className="flex h-full w-[200%] items-end gap-1 animate-[ticker_16s_linear_infinite]">
                      {[...lineBars, ...lineBars].map((h, i) => (
                        <div key={i} className="w-2 rounded-t bg-lime-500/70" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  {/* X-axis labels */}
                  <div className="absolute bottom-1 left-2 right-2 flex justify-between text-[10px] text-slate-500">
                    {[
                      '12:00',
                      '12:30',
                      '01:00',
                      '01:30',
                      '02:00',
                      '02:30',
                      '03:00',
                      '03:30',
                      '04:00',
                      '04:30',
                      '05:00',
                      '05:30',
                      '06:00',
                      '06:30',
                      '07:00',
                      '07:30',
                      '08:00',
                    ].map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right-side labels / progress blocks */}
            <div className="lg:col-span-1 space-y-4">
              {[
                ['Employee', 68],
                ['Independent Contractor', 52],
                ['Contracted Employee', 40],
                ['Stakeholders', 70],
              ].map(([label, width], idx) => (
                <div key={String(label)} className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs text-slate-500 mb-2">{label as string}</p>
                  <div className="h-2 w-full bg-slate-100 rounded overflow-hidden">
                    <div
                      className={`h-2 rounded ${idx % 2 === 0 ? 'bg-lime-500' : 'bg-blue-500'}`}
                      style={{ ...w(`${width}%`), animation: 'growWidth 4s ease-in-out infinite alternate' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HeroSection18