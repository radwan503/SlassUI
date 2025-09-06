import { useState } from "react";

const HeroSection20 =()=> {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFE0A8] via-[#F9B9C2] to-[#D6B5FF]">
      <style>{`
        @keyframes floatCard { 0%{ transform: translateY(0) } 50%{ transform: translateY(-10px) } 100%{ transform: translateY(0) } }
        @keyframes riseIn { 0%{ opacity:0; transform: translateY(18px) scale(.98) } 100%{ opacity:1; transform: translateY(0) scale(1) } }
        @keyframes fadeSlideDown { 0%{ opacity:0; transform: translateY(-8px) } 100%{ opacity:1; transform: translateY(0) } }
      `}</style>
      {/* soft glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-white/40 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://placehold.co/28x28?text=T&font=inter&bold=true&bg=111&color=fff"
              alt="T logo"
              className="h-7 w-7 rounded-md shadow-sm"
            />
            <span className="text-[19px] font-semibold tracking-tight text-black/90">tona</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-[15px] text-black/80 lg:flex">
            <a className="hover:text-black">Pricing</a>
            <a className="flex items-center gap-1 hover:text-black">
              Use Cases <ChevronDown className="h-4 w-4" />
            </a>
            <a className="flex items-center gap-1 hover:text-black">
              Resources <ChevronDown className="h-4 w-4" />
            </a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <a className="text-[15px] font-medium text-black/70 hover:text-black">Login</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-black/90">
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-20 inline-flex items-center justify-center rounded-md p-2 text-black/80 ring-1 ring-black/10 backdrop-blur lg:hidden"
            aria-label="Toggle Menu"
          >
            <Burger open={open} />
          </button>
        </div>

        {/* Mobile sheet */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-0 z-10 mt-16 px-4 transition-all ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
          style={{ animation: open ? "fadeSlideDown .25s ease-out both" : undefined }}
        >
          <div className="mx-4 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-xl backdrop-blur">
            <div className="grid gap-3 text-sm text-black/80">
              <a className="rounded-lg px-3 py-2 hover:bg-black/5">Pricing</a>
              <a className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5">
                <span>Use Cases</span> <ChevronDown className="h-4 w-4" />
              </a>
              <a className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5">
                <span>Resources</span> <ChevronDown className="h-4 w-4" />
              </a>
              <div className="mt-2 flex items-center justify-between">
                <a className="text-sm font-medium text-black/70">Login</a>
                <a className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-md">
                  Get started <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-12 text-center sm:pt-16 md:pt-24">
        <h1 className="mx-auto max-w-5xl text-[34px] font-extrabold leading-[1.05] text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
          Competitor monitoring
          <br className="hidden sm:block" />
          <span>on autopilot</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:mt-5 sm:text-lg md:text-xl">
          Tona is the fast & easy way to automatically monitor every action of your competitors.
        </p>

        {/* PH badge */}
        <div className="mt-6 flex justify-center">
          <a className="inline-flex items-center gap-2 rounded-lg bg-black/85 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg ring-1 ring-white/10 backdrop-blur transition hover:scale-[1.01] hover:bg-black">
            <img
              src="https://placehold.co/20x20?text=PH&bg=ff6154&color=fff&font=inter&bold=true"
              alt="Product Hunt"
              className="h-5 w-5 rounded"
            />
            <span className="opacity-90">Product Hunt</span>
            <Dot className="h-1.5 w-1.5" />
            <span>#2 Product of the Day</span>
          </a>
        </div>

        {/* Floating dashboard cluster */}
        <section className="relative mx-auto mt-14 max-w-6xl pb-28 sm:mt-16 md:mt-20">
          {/* main board */}
          <div className="relative rounded-3xl border border-black/10 bg-white/70 p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-6 md:p-8" style={{ animation: "riseIn .5s ease-out both" }}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CardSection title="Accounts">
                <PlaceholderLine w="80%" />
                <PlaceholderLine w="60%" />
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Pill />
                  <Pill />
                  <Pill />
                  <Pill />
                </div>
                <div className="mt-3 space-y-2">
                  <PlaceholderLine w="90%" />
                  <PlaceholderLine w="75%" />
                </div>
              </CardSection>

              <CardSection title="Spending Plan">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full border border-black/10 bg-white/80 shadow" />
                  <div className="flex-1 space-y-2">
                    <PlaceholderLine w="70%" />
                    <PlaceholderLine w="40%" />
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <MiniCard />
                  <MiniCard />
                  <MiniCard />
                </div>
                <div className="mt-3 space-y-2">
                  <Progress label="Planned" value={70} />
                  <Progress label="Spent" value={48} />
                </div>
              </CardSection>

              <CardSection title="Bills & Payments">
                <div className="space-y-2">
                  <PlaceholderLine w="85%" />
                  <PlaceholderLine w="65%" />
                  <PlaceholderLine w="50%" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <MiniCard h="32px" />
                  <MiniCard h="32px" />
                </div>
                <div className="mt-3 space-y-2">
                  <PlaceholderLine w="70%" />
                  <PlaceholderLine w="55%" />
                </div>
              </CardSection>
            </div>

            {/* Second row with richer content */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <CardSection title="$679.89 Spent">
                <div className="space-y-2">
                  <Row label="Design" w="75%" />
                  <Row label="Marketing" w="55%" />
                  <Row label="Infra" w="40%" />
                  <Row label="Misc" w="30%" />
                </div>
              </CardSection>
              <CardSection title="Top Spending Categories">
                <div className="space-y-3">
                  <Bar label="SaaS" w="80%" />
                  <Bar label="Ads" w="60%" />
                  <Bar label="Contractors" w="45%" />
                </div>
              </CardSection>
              <CardSection title="Upcoming Payments">
                <div className="space-y-2">
                  <ListItem />
                  <ListItem />
                  <ListItem />
                </div>
              </CardSection>
            </div>
          </div>

          {/* Surround cards */}
          <FloatingCard className="-left-16 -top-10 -rotate-6 hidden sm:flex" label="New SEO Articles" />
          <FloatingCard className="-right-16 -top-6 rotate-6 hidden sm:flex" label="Updated pricing tiers" icon="coin" />
          <FloatingCard className="-left-10 bottom-4 -rotate-3 hidden sm:flex" label="Website redesign" icon="layout" />
          <FloatingCard className="-right-8 bottom-0 rotate-3 hidden sm:flex" label="New SEO Articles" />
          
        </section>
      </main>

      {/* safe bottom space */}
      <div className="h-6 sm:h-10" />
    </div>
  );
}
export default  HeroSection20
/* ------------------- UI bits ------------------- */
function CardSection({ title, children }:any) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/65 p-3 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md sm:p-4">
      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-black/50">
        <span className="inline-flex h-2 w-2 rounded-sm bg-black/40" />
        {title}
      </div>
      {children}
    </div>
  );
}

function Row({ label, w }:any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 text-xs text-black/60">{label}</div>
      <div className="h-2 flex-1 rounded bg-neutral-200/80">
        <div className="h-2 rounded bg-black/20" style={{ width: w }} />
      </div>
    </div>
  );
}

function Bar({ label, w }:any) {
  return (
    <div>
      <div className="mb-1 text-xs text-black/60">{label}</div>
      <div className="h-2 rounded bg-neutral-200/80">
        <div className="h-2 rounded bg-black/25" style={{ width: w }} />
      </div>
    </div>
  );
}

function Progress({ label, value }:any) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px] text-black/60">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded bg-neutral-200/80">
        <div className="h-2 rounded bg-black/25" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function PlaceholderLine({ w = "100%" }) {
  return <div className="h-2 rounded bg-neutral-200/80" style={{ width: w }} />;
}


function MiniCard({ h = "28px" }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white/80 shadow-sm transition-transform hover:scale-[1.015]" style={{ height: h }} />
  );
}

function Pill() {
  return <div className="h-6 rounded-md border border-black/10 bg-white/80 shadow-sm" />;
}

function ListItem() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-xs text-black/70">
      <span>Subscription</span>
      <span className="rounded bg-black/5 px-2 py-0.5">Due in 3d</span>
    </div>
  );
}

function FloatingCard({ label, className = "", icon = "doc" }:any) {
  return (
    <div
      className={
        "pointer-events-none absolute z-0 w-56 items-center justify-center rounded-2xl border border-black/10 bg-white/70 p-4 text-sm text-black/70 shadow-2xl backdrop-blur " +
        className
      }
      style={{ animation: "floatCard 6s ease-in-out infinite" }}
    >
      <div className="flex items-center gap-2">
        {icon === "coin" ? <Coin className="h-5 w-5" /> : icon === "layout" ? <Layout className="h-5 w-5" /> : <Doc className="h-5 w-5" />}
        <span>{label}</span>
      </div>
    </div>
  );
}

/* ------------------- Icons ------------------- */
function ChevronDown({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.2 7.5a1 1 0 0 1 1.4 0L10 10l3.4-2.5a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-1.2 0l-4-3a1 1 0 0 1 0-1.6z" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Dot({ className = "h-2 w-2" }) {
  return <span className={`inline-block rounded-full bg-white/50 ${className}`} />;
}

function Doc({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M7 3.75h6.5L19.5 9v11.25A1.5 1.5 0 0 1 18 21.75H7A1.5 1.5 0 0 1 5.5 20.25V5.25A1.5 1.5 0 0 1 7 3.75z" />
      <path d="M13.5 3.75V9h5.5" />
    </svg>
  );
}

function Coin({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <ellipse cx="12" cy="12" rx="8" ry="8" />
      <path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4m-16 0c0-2.2 3.6-4 8-4s8 1.8 8 4" />
    </svg>
  );
}

function Layout({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M9 4.5v15" />
    </svg>
  );
}

function Burger({ open }:any) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" className="text-black" aria-hidden>
      <rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor" className={`${open ? "opacity-0" : "opacity-100"} transition-opacity`} />
      <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor" />
      <rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor" className={`${open ? "opacity-0" : "opacity-100"} transition-opacity`} />
    </svg>
  );
}
