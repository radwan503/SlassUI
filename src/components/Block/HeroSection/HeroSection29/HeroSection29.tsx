// App.jsx
import React from "react";

const HeroSection29=()=> {
  const Bar = ({ h }:any) => (
    <div
      className="w-full rounded-sm bg-emerald-400/70"
      style={{ height: `${h}%` }}
    />
  );

  const paths = {
    grid: "M3 3h8v8H3V3m10 0h8v8h-8V3M3 13h8v8H3v-8m10 0h8v8h-8v-8",
    chart: "M5 19v-6m6 6V5m6 14v-9M4 21h16a1 1 0 0 0 1-1V4",
    swap: "M16 17l-4 4-4-4m4 4V3m8 4l-4-4-4 4m4-4v18",
    gear: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m8 4-2 1 1 2-2 2-2-1-2 1-2-1-2 1-2-2 1-2-2-1 2-2 1-2 2 1 2-1 2 1 2-1 2 2Z",
    life: "M12 21c-4.5 0-9-3-9-8.5S7.5 4 12 4s9 3 9 8.5S16.5 21 12 21Zm0-10v6m-3-3h6",
    dot:  "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  } as const;

  type IconName = keyof typeof paths;

  const Icon: React.FC<{ name: IconName; className?: string }> = ({ name, className = "" }) => {
    const d = paths[name] ?? paths.dot; // name is now a safe union
    return (
      <svg viewBox="0 0 24 24" className={className + " text-white/70"}>
        <path fill="currentColor" d={d} />
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      {/* ===== HERO ===== */}
      <section
        className="
          relative isolate overflow-hidden
          px-6 sm:px-8
          pt-15 sm:pt-15 lg:pt-20
          pb-28 lg:pb-40
          text-center
        "
      >
        {/* Subtle moving grain/dots */}
        <div
          className="
            pointer-events-none absolute inset-0
            [background:radial-gradient(circle_at_20%_10%,rgba(34,197,94,.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,.18),transparent_45%),radial-gradient(1200px_500px_at_50%_0%,rgba(255,255,255,.06),transparent)]
            [mask-image:radial-gradient(100%_100%_at_50%_20%,black,transparent)]
          "
        />

        {/* Logo / mark */}
        <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white/80">
            <path
              fill="currentColor"
              d="M7.1 3.6 3.6 7.1a3.5 3.5 0 0 0 0 5l3.5 3.5a3.5 3.5 0 0 0 5 0l.8-.8.8.8a3.5 3.5 0 0 0 5 0l3.5-3.5a3.5 3.5 0 0 0 0-5l-3.5-3.5a3.5 3.5 0 0 0-5 0l-.8.8-.8-.8a3.5 3.5 0 0 0-5 0Z"
            />
          </svg>
        </div>

        <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Trade successfully,
          <br />
          regardless of market conditions
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base/7 sm:text-lg text-zinc-300">
          Automated DCA investing platform, spreading investments over time to
          reduce risk and grow wealth steadily.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-white/20">
            Get Started
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10">
            Learn More
          </button>
        </div>

        {/* Glow bar behind dashboard card */}
        <div
          className="
            pointer-events-none absolute left-1/2 top-[82%] h-24 w-[1200px] -translate-x-1/2 rounded-[28px]
            bg-gradient-to-r from-amber-500/35 via-white/5 to-emerald-500/35 blur-2xl
            [mask-image:radial-gradient(60%_140%_at_50%_0%,black,transparent)]
          "
        />
      </section>

      {/* ===== DASHBOARD ===== */}
      <section className="relative mx-auto -mt-24 w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40">
          {/* Neon rim */}
          <div
            className="
              relative rounded-3xl p-[2px]
              before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl
              before:bg-[conic-gradient(from_0deg,theme(colors.amber.500/45),theme(colors.emerald.400/45),theme(colors.emerald.400/0))]
              before:[mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)]
              before:[mask-composite:exclude] before:p-[2px]
            "
          >
            <div className="relative rounded-[22px] bg-zinc-950/70 ring-1 ring-white/10">
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                {/* Sidebar */}
                <aside className="hidden md:block border-r border-white/10 p-5">
                  <div className="mb-4">
                    <label className="sr-only">Search</label>
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/60">
                        <path
                          fill="currentColor"
                          d="M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12m8.32 12.9-2.93-2.93a8 8 0 1 0-1.41 1.41l2.93 2.93a1 1 0 0 0 1.41-1.41Z"
                        />
                      </svg>
                      <input
                        placeholder="Search..."
                        className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <nav className="space-y-1 text-sm">
                    <a
                      href="#"
                      className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/10 text-white"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="grid" className="h-4 w-4" />
                        Dashboard
                      </span>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="chart" className="h-4 w-4" />
                        Analytics
                      </span>
                      <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px]">
                        3
                      </span>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="swap" className="h-4 w-4" />
                        Transactions
                      </span>
                    </a>

                    <div className="mt-6 text-xs uppercase tracking-wider text-white/40">
                      More
                    </div>

                    <a
                      href="#"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="gear" className="h-4 w-4" />
                        Settings
                      </span>
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                      <span className="flex items-center gap-2">
                        <Icon name="life" className="h-4 w-4" />
                        Support
                      </span>
                    </a>
                  </nav>
                </aside>

                {/* Main panel */}
                <div className="p-5 md:p-6 lg:p-8">
                  <header className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">Dashboard</h2>
                      <p className="text-xs text-white/50">
                        Overview of balances, strategy and performance
                      </p>
                    </div>
                    <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-white/10">
                      Export
                    </button>
                  </header>

                  {/* Metrics */}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Total balance</div>
                      <div className="mt-1 text-2xl font-semibold">$74,503.00</div>
                      <div className="mt-2 text-xs text-emerald-300">
                        +4.21% vs last month
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Your strategy</div>
                      <div className="mt-1 text-2xl font-semibold">$2,500</div>
                      <div className="text-xs text-white/50">Monthly</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Next deposit</div>
                      <div className="mt-1 text-2xl font-semibold">14 days</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Total invested</div>
                      <div className="mt-1 text-2xl font-semibold">$59,963.79</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Earned with DCA</div>
                      <div className="mt-1 text-2xl font-semibold">+$14,539.21</div>
                    </div>
                  </div>

                  {/* Investment Overview */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Investment overview</h3>
                      <span className="text-xs text-white/50">
                        Auto DCA · Portfolio split
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Row 1 */}
                      <div className="grid grid-cols-[96px_1fr_auto] items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[10px] font-semibold">
                            ETH
                          </div>
                          <div className="text-sm">Ethereum</div>
                        </div>
                        <div className="relative h-2 w-full rounded-full bg-white/10">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400/80 via-emerald-400/90 to-emerald-300/80"
                            style={{ width: "62%" }}
                          />
                        </div>
                        <div className="text-sm tabular-nums text-white/80">
                          $2,250
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-[96px_1fr_auto] items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[10px] font-semibold">
                            BTC
                          </div>
                          <div className="text-sm">Bitcoin</div>
                        </div>
                        <div className="relative h-2 w-full rounded-full bg-white/10">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400/80 via-emerald-400/90 to-emerald-300/80"
                            style={{ width: "22%" }}
                          />
                        </div>
                        <div className="text-sm tabular-nums text-white/80">
                          $750
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="grid grid-cols-[96px_1fr_auto] items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[10px] font-semibold">
                            USDT
                          </div>
                          <div className="text-sm">Tether</div>
                        </div>
                        <div className="relative h-2 w-full rounded-full bg-white/10">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400/80 via-emerald-400/90 to-emerald-300/80"
                            style={{ width: "16%" }}
                          />
                        </div>
                        <div className="text-sm tabular-nums text-white/80">
                          $500
                        </div>
                      </div>
                    </div>

                    {/* Tiny bar chart mimic */}
                    <div className="mt-5 h-20 w-full rounded-xl border border-white/10 bg-zinc-900/60 p-3">
                      <div className="flex h-full items-end gap-1">
                        {Array.from({ length: 24 }).map((_, i) => {
                          const h =
                            Math.max(12, (Math.sin(i / 2) + 1) * 30); // 12%–60%
                          return <Bar key={i} h={h} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Main panel */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-24" />
    </div>
  );
}

export default HeroSection29 
