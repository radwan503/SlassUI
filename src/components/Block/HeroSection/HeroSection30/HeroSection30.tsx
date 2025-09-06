import { useState } from "react";

export default function HeroSection30() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const heroImg =
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1600&auto=format&fit=crop"; // replace with your image if needed

  // simple inline icons
  const Leaf = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 12c5-9 15-9 18-9-1 11-7 16-12 16a6 6 0 0 1-6-7Z" fill="currentColor" />
    </svg>
  );
  const ArrowDown = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ArrowOut = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const Phone = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 3h8M9 18h6" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
  const Truck = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 7h11v8H3zM14 9h4l3 3v3h-7zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" />
    </svg>
  );
  const Coin = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="currentColor" />
      <path d="M4 6v8c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
  const Chat = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M21 12a8 8 0 1 1-3.2-6.4L21 6v6Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="11" r="1.2" fill="currentColor" />
      <circle cx="12" cy="11" r="1.2" fill="currentColor" />
      <circle cx="15" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
  const MapPin = (props:any) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* ================== DARK TOP SECTION ================== */}
      <div className="relative bg-[#0e2317] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* -------- NAVBAR (responsive) -------- */}
          <header className="flex items-center justify-between py-6">
            {/* logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
                <Leaf className="h-4 w-4 text-emerald-400" />
              </span>
              <span className="text-lg font-semibold tracking-wide">Agrictech</span>
            </a>

            {/* desktop menu */}
            <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
              {["About", "Project", "Impact", "Agrigate Center", "Blogs"].map((m) => (
                <a key={m} href="#" className="hover:text-white transition-colors">
                  {m}
                </a>
              ))}
              <a href="#" className="group inline-flex items-center gap-1 hover:text-white transition-colors">
                Solutions
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:-rotate-180" />
              </a>
            </nav>

            {/* mobile menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden rounded-lg border border-white/15 bg-white/10 p-2"
              aria-label="Open menu"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          {/* mobile menu panel */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[#0e2317] px-6 py-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
                      <Leaf className="h-4 w-4 text-emerald-400" />
                    </span>
                    <span className="text-base font-semibold">Agrictech</span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg border border-white/15 bg-white/10 p-2"
                    aria-label="Close menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <nav className="mt-6 space-y-1 text-white/90">
                  {["About", "Project", "Impact", "Agrigate Center", "Blogs"].map((m) => (
                    <a
                      key={m}
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 hover:bg-white/10"
                    >
                      {m}
                    </a>
                  ))}
                  {/* Solutions collapsible */}
                  <button
                    onClick={() => setSolutionsOpen((s) => !s)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-white/10"
                    aria-expanded={solutionsOpen}
                  >
                    <span>Solutions</span>
                    <ArrowDown
                      className={`h-3.5 w-3.5 transition-transform ${solutionsOpen ? "-rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden pl-3 transition-[grid-template-rows,opacity] duration-300 ${
                      solutionsOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 space-y-1">
                      {["Market Access", "Price Alerts (SMS)", "Advisory", "Logistics"].map((s) => (
                        <a
                          key={s}
                          href="#"
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-md px-3 py-1 text-sm text-white/80 hover:bg-white/10"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}

          {/* -------- HERO -------- */}
          <section className="relative pb-12 lg:pb-16">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
              {/* left content */}
              <div className="pt-2">
                {/* tiny badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                  <Leaf className="h-3.5 w-3.5" />
                  Best price fast, fair, and simple
                </div>

                {/* headline */}
                <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                  <span className="block">Bringing Markets to</span>
                  <span className="block">
                    Farmer’s{" "}
                    <span className="inline-block -rotate-3 rounded-xl bg-emerald-400/25 px-3 py-1 text-emerald-200 ring-1 ring-emerald-300/50">
                      Doorsteps
                    </span>
                  </span>
                </h1>

                {/* subcopy */}
                <p className="mt-6 max-w-xl text-base/7 text-white/80 sm:text-lg">
                  Agrictech helps farmers sell crops easily and get fair prices. Use our app, send an SMS, or visit a local
                  center. We offer market access, farming advice, and honest support right from your village.
                </p>

                {/* CTA */}
                <div className="mt-7 flex items-center gap-3">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0e2317] shadow hover:bg-neutral-100"
                  >
                    See Our Services
                    <ArrowOut className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* right circular badge */}
              <div className="relative hidden place-items-center lg:grid">
                <div className="relative h-44 w-44">
                  <svg viewBox="0 0 200 200" className="h-full w-full">
                    <defs>
                      <path id="circlePath" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
                    </defs>
                    <circle cx="100" cy="100" r="88" className="fill-[#0e2317] stroke-white/15" strokeWidth="2" />
                    <text className="fill-white/80 text-[12px]">
                      <textPath xlinkHref="#circlePath" startOffset="0%">
                        • Find Nearest Center • Find Nearest Center
                      </textPath>
                    </text>
                    {/* inner marker */}
                    <g transform="translate(100,100)">
                      <circle r="28" className="fill-emerald-400/20 stroke-emerald-300/70" strokeWidth="2" />
                      <path d="M0 -12 a12 12 0 1 0 0.01 0" className="fill-emerald-400" />
                      <circle r="5" className="fill-white" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* hero image with circular arrows */}
            <div className="relative mt-10 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img src={heroImg} alt="Man by water" className="h-[380px] w-full object-cover sm:h-[460px]" />

              {/* bottom-right notch effect */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 [mask-image:radial-gradient(140px_60px_at_calc(100%-60px)_0,black,transparent)]" />

              {/* nav buttons */}
              <div className="absolute bottom-4 right-4 flex items-center gap-3">
                <button
                  aria-label="Previous"
                  className="grid h-10 w-10 place-items-center rounded-full bg-emerald-400 text-[#0e2317] shadow ring-1 ring-emerald-300/60 hover:bg-emerald-300"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  className="grid h-10 w-10 place-items-center rounded-full bg-emerald-400 text-[#0e2317] shadow ring-1 ring-emerald-300/60 hover:bg-emerald-300"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* subtle top spotlight */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,.05),transparent_60%)]" />
      </div>

      {/* ================== LIGHT BOTTOM SECTION ================== */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section: What we do */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
              <Leaf className="h-3.5 w-3.5 text-emerald-700" />
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Tools that bring the market to your village
            </h2>
            <p className="mt-3 text-neutral-600">
              From listing produce and price discovery to logistics and secure payments—Agrictech simplifies every step.
            </p>
          </div>

          {/* Features grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Market Access</h3>
              <p className="mt-1 text-sm text-neutral-600">
                List crops and get connected to buyers nearby or across regions for the best possible price.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Price Alerts (SMS/App)</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Check live rates or receive SMS updates—no smartphone required for core actions.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Chat className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Farming Advisory</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Seasonal guidance, pest alerts, and best practices from agronomists in your language.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Logistics & Collection</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Pickup from farm-gate or drop at our collection hub—tracked and insured.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Coin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Fast Payments</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Same-day settlement to your bank or mobile wallet with digital receipts.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Inputs & Soil Testing</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Access quality seeds, fertilizers, and soil testing through our partner network.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-14 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-semibold">How it works</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { title: "Register", desc: "Create an account in the app, via SMS, or at a local center." },
                { title: "List Your Produce", desc: "Enter quantity and preferred date; we broadcast to buyers." },
                { title: "Get Best Price", desc: "Confirm the offer you like. We manage logistics and payment." },
              ].map((s, i) => (
                <div key={i} className="relative">
                  <div className="text-emerald-700">Step {i + 1}</div>
                  <div className="mt-1 text-lg font-medium">{s.title}</div>
                  <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-10 grid gap-4 rounded-2xl bg-emerald-50 p-6 text-emerald-900 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold">15k+</div>
              <div className="text-sm/6">Farmers onboarded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">120+</div>
              <div className="text-sm/6">Agrigate Centers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">70+</div>
              <div className="text-sm/6">Districts served</div>
            </div>
          </div>

          {/* CTA card */}
          <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">Find your nearest center</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Get price info, list your produce, and access advisory—right from your local hub.
                </p>
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Open Map
                <MapPin className="h-4 w-4 text-white transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
