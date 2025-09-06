const CardShot = ({ tone = "#eef2ff" }) => (
  <svg viewBox="0 0 340 160" className="w-full h-auto" aria-hidden="true">
    <rect width="340" height="160" rx="12" fill={tone} />
    <rect x="18" y="20" width="110" height="12" rx="6" fill="#ffffff" opacity=".9" />
    <rect x="18" y="44" width="200" height="10" rx="5" fill="#ffffff" opacity=".7" />
    <rect x="18" y="64" width="160" height="10" rx="5" fill="#ffffff" opacity=".7" />
    <rect x="18" y="84" width="120" height="10" rx="5" fill="#ffffff" opacity=".7" />
    <rect x="18" y="116" width="304" height="20" rx="10" fill="#ffffff" opacity=".8" />
  </svg>
);

const Shape = ({ className = "", from = "#a78bfa", to = "#22d3ee" }) => (
  <span
    className={`pointer-events-none absolute -z-10 ${className}`}
    style={{
      background: `linear-gradient(135deg, ${from}, ${to})`,
      filter: "blur(24px)",
      borderRadius: "9999px",
      opacity: 0.25,
    }}
  />
);

const ArrowMini = () => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white ring-1 ring-black/10 shadow-sm text-slate-900 hover:translate-x-0.5 transition">
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  </span>
);

export default function LMSFeaturesSection() {
  const list = [
    {
      title: "Quiz builder",
      desc: "With the intuitive drag‑and‑drop course & quiz builder, design engaging courses and quizzes with multimedia and advanced options.",
      tone: "#eef2ff",
      big: true,
    },
    { title: "Native eCommerce", desc: "Easily sell courses with built‑in support for payment gateways and a smooth eCommerce experience.", tone: "#f1f5f9" },
    { title: "Subscriptions", desc: "Offer subscriptions, bundles, or full‑site memberships — all with recurring revenue options.", tone: "#f1f5f9" },
    { title: "Course bundle", desc: "Group multiple courses together and sell them as a package.", tone: "#f8fafc" },
    { title: "AI Studio", desc: "Generate entire courses with topics, lessons, quizzes, images, and more — all with one AI‑powered click.", tone: "#f8fafc" },
    { title: "Certificates", desc: "Reward learners with customizable certificates upon course completion.", tone: "#eef2ff" },
  ];

  return (
    <section className="relative bg-slate-50">
      {/* header */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Features</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
              Get everything you need
              <br className="hidden sm:block" /> under one LMS
            </h2>
          </div>
          <div className="hidden sm:block">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-black/10 hover:bg-slate-50">
              Browse all features
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        {/* two-column layout: left big card, right 2x2 grid + one extra card */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left column: tall card (spans both rows) */}
          <article className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 lg:col-span-1 lg:row-span-2">
            <Shape className="left-[-30px] top-24 h-24 w-24" from="#22d3ee" to="#a78bfa" />
            <h3 className="text-xl font-semibold text-slate-900">{list[0].title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{list[0].desc}</p>
            <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-black/5 bg-slate-100">
              <CardShot tone={list[0].tone} />
            </div>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/5 bg-slate-100">
              <CardShot tone="#fff1f2" />
            </div>
            <div className="mt-5"><ArrowMini /></div>
          </article>

          {/* Right column: 2x2 grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {list.slice(1,5).map((item) => (
              <article key={item.title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <Shape className="right-6 top-6 h-14 w-14" from="#f472b6" to="#fde047" />
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-black/5">
                  <CardShot tone={item.tone} />
                </div>
              </article>
            ))}
          </div>

          {/* Extra card to make it six items total (sits under right grid on desktop) */}
          {/* <article className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 lg:col-start-2 lg:col-end-4">
            <Shape className="left-10 bottom-6 h-16 w-16" from="#22c55e" to="#60a5fa" />
            <h3 className="text-lg font-semibold text-slate-900">{list[5].title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{list[5].desc}</p>
            <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-black/5">
              <CardShot tone={list[5].tone} />
            </div>
          </article> */}
        </div>

        {/* mobile browse link */}
        <div className="sm:hidden mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-black/10">
            Browse all features
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
