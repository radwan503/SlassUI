const DialerSVG = (props:any) => (
  <svg viewBox="0 0 420 220" fill="none" {...props}>
    <rect x="0" y="0" width="420" height="220" rx="16" fill="#0f0b1f" />
    <rect x="28" y="28" width="190" height="72" rx="10" fill="#fff" />
    <rect x="232" y="24" width="160" height="24" rx="6" fill="#1f1538" stroke="#4b5563" />
    {[0,1,2,3,4].map((i)=>(
      <rect key={i} x="232" y={60+i*26} width="160" height="18" rx="6" fill="#1f1538" stroke="#2f2b44"/>
    ))}
    <rect x="240" y="86" width="110" height="14" rx="7" fill="#34d399" />
    <rect x="240" y="60" width="80" height="14" rx="7" fill="#f59e0b" />
    <rect x="240" y="112" width="96" height="14" rx="7" fill="#f472b6" />
    <rect x="44" y="44" width="130" height="14" rx="7" fill="#e5e7eb" />
    <rect x="44" y="66" width="160" height="10" rx="5" fill="#e5e7eb" />
    <rect x="28" y="126" width="180" height="14" rx="7" fill="#312e81" opacity=".45" />
  </svg>
);

const CoachingSVG = (props:any) => (
  <svg viewBox="0 0 420 220" fill="none" {...props}>
    <rect width="420" height="220" rx="16" fill="#335b63" />
    <rect x="30" y="28" width="190" height="88" rx="10" fill="#1f3641" />
    <rect x="50" y="48" width="150" height="12" rx="6" fill="#e5e7eb" />
    <rect x="50" y="66" width="120" height="10" rx="5" fill="#9ca3af" />
    <rect x="260" y="36" width="54" height="54" rx="8" fill="#e6fff1" />
    <text x="270" y="62" fontFamily="monospace" fontSize="22" fill="#065f46">16%</text>
    <rect x="240" y="112" width="150" height="82" rx="10" fill="#1f3641" />
    <rect x="256" y="130" width="118" height="10" rx="5" fill="#c7d2fe" />
    <rect x="256" y="148" width="100" height="10" rx="5" fill="#e5e7eb" />
    <rect x="256" y="166" width="86" height="10" rx="5" fill="#fed7aa" />
  </svg>
);

const LeaderSVG = (props:any) => (
  <svg viewBox="0 0 420 220" fill="none" {...props}>
    <rect width="420" height="220" rx="16" fill="#f7fafc" />
    <circle cx="56" cy="58" r="16" fill="#7c3aed" />
    <rect x="80" y="46" width="150" height="12" rx="6" fill="#111827" opacity=".85" />
    <rect x="80" y="64" width="110" height="10" rx="5" fill="#6b7280" />
    <rect x="30" y="112" width="360" height="38" rx="10" fill="#fff" stroke="#e5e7eb" />
    {/* tiny KPI bars */}
    {[0,1,2,3,4].map((i)=>(
      <rect key={i} x={44+i*68} y="124" width="44" height="8" rx="4" fill={i%2? '#60a5fa':'#f472b6'} />
    ))}
  </svg>
);

const OpsSVG = (props:any) => (
  <svg viewBox="0 0 420 220" fill="none" {...props}>
    <rect width="420" height="220" rx="16" fill="#eefcf3" />
    <rect x="40" y="40" width="80" height="40" rx="8" fill="#0ea5e9" />
    <rect x="180" y="40" width="80" height="40" rx="8" fill="#8b5cf6" />
    <rect x="320" y="40" width="60" height="40" rx="8" fill="#f59e0b" />
    <rect x="110" y="140" width="200" height="40" rx="8" fill="#94a3b8" opacity=".35" />
    {/* connectors */}
    <path d="M80 80 C100 120, 140 120, 180 80" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" fill="none"/>
    <path d="M220 80 C250 120, 290 120, 320 80" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" fill="none"/>
  </svg>
);

const ArrowBtn = () => (
  <button
    className="inline-flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-white hover:bg-slate-700 transition"
    aria-label="Open"
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  </button>
);

export default function PlatformFeatures() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        {/* Eyebrow + Heading */}
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
          Our Platform
        </p>
        <h2 className="mt-2 text-3xl leading-tight sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          THE SALES ENGINE THAT
          <br className="hidden sm:block" />
          HELPS YOU REACH THE TOP
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Orum is the all-in-one platform for all-round better sales. Build on dialers with a suite
          of products for coaching, analytics, and much more.
        </p>

        {/* Feature Grid (60/40 then 40/60) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
          {/* Card 1 — 60% */}
          <article className="md:col-span-7 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-[#0f0b1f] text-white flex flex-col">
            <div className="relative">
              <DialerSVG className="w-full h-auto" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">For Sales Reps</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Automate the hardest parts of outbound calling, find better leads, and get into more
                live conversations.
              </p>
              <div className="mt-4">
                <ArrowBtn />
              </div>
            </div>
          </article>

          {/* Card 2 — 40% */}
          <article className="md:col-span-5 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-[#335b63] text-white flex flex-col">
            <div className="relative">
              <CoachingSVG className="w-full h-auto" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">For Managers</h3>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Set your sales reps up for success. Understand what’s working and what’s not, and
                coach your team with best-in-class examples.
              </p>
              <div className="mt-4">
                <ArrowBtn />
              </div>
            </div>
          </article>

          {/* Card 3 — 40% */}
          <article className="md:col-span-5 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-slate-50 text-slate-900 flex flex-col">
            <div className="relative">
              <LeaderSVG className="w-full h-auto" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">For Sales Leaders</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ensure long-term sales success and meet business objectives with AI-powered sales
                engine insights.
              </p>
              <div className="mt-4">
                <ArrowBtn />
              </div>
            </div>
          </article>

          {/* Card 4 — 60% */}
          <article className="md:col-span-7 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-emerald-50 text-slate-900 flex flex-col">
            <div className="relative">
              <OpsSVG className="w-full h-auto" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">For Sales Operations</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Make sales operations more efficient with tools and processes that fit into your
                existing workflow.
              </p>
              <div className="mt-4">
                <ArrowBtn />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
