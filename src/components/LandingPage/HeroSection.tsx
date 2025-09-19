import { ArrowRight, Sparkles, Zap,} from "lucide-react";
import Button from "../../utils/Button";
import { Link } from "react-router";

const DetailsInfo = () => {
  return (
    <section className="relative overflow-hidden bg-primary border-t border-darkBg py-20 md:py-28">
      {/* Decorative background: radial glow + subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-40"
             style={{ background: "radial-gradient(45% 45% at 50% 50%, rgba(99,102,241,.6), transparent)" }} />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]"
             viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Badge */}
        <div className="mx-auto mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm md:mx-0">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-textSlate">
            <Sparkles className="h-3.5 w-3.5" />
            Crafted for React & Tailwind Developers
          </span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14 reve">
          {/* Left: Copy + CTAs + Signals */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-textColor">
              Build stunning UIs
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                in minutes, not days.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm md:text-base text-textGray">
              Access <span className="font-semibold text-textColor">160+ copy-paste sections</span>—from
              hero, pricing, and features to testimonials and footers. Drop them into your app and
              customize instantly with <span className="font-semibold text-indigo-300">React + TailwindCSS</span>.
            </p>

          

            {/* Feature bullets */}
            <ul className="mt-6 grid gap-3 text-sm text-textSlate md:max-w-lg">
              <li className="flex items-start gap-3">
                <Zap className="mt-0.5 h-4 w-4 text-indigo-300" />
                Zero setup friction—drop in, tweak classes, ship.
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-indigo-300" />
                Modern patterns: glass cards, gradients, micro-interactions.
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/ui-blocks" aria-label="Browse UI components library">
                <Button
                  className="text-sm text-textGray dark:text-gray-100"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Browse Components
                </Button>
              </Link>

              <Link to="/template" aria-label="Explore ready templates">
                <Button
                  className="text-sm text-darkBg dark:text-gray-100"
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore Templates
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Glass preview card */}
          <div className="relative">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-2xl"
                 style={{ background: "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,.35), rgba(34,211,238,.25), transparent 60%)" }} />
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
              {/* Window header */}
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="text-xs text-textSlate">/components/sections/Feature.tsx</div>
                <div className="text-xs rounded-full bg-white/5 px-2 py-0.5 text-textSlate ring-1 ring-white/10">
                  Preview
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-3 flex flex-wrap gap-2">
                {["Hero", "Pricing", "Features", "Testimonials", "Footer"].map((t, idx) => (
                  <button
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs ring-1 transition ${
                      idx === 2
                        ? "bg-indigo-500/20 text-indigo-200 ring-indigo-400/30"
                        : "bg-white/5 text-textSlate ring-white/10 hover:bg-white/10"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Mock content */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 h-6 w-40 rounded bg-white/10" />
                <div className="grid gap-3 sm:grid-cols-3">
                  {/* Card 1 */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition group-hover:translate-y-[-1px]">
                    <div className="mb-2 h-4 w-24 rounded bg-white/10" />
                    <div className="h-3 w-32 rounded bg-white/10" />
                    <div className="mt-3 h-8 w-full rounded bg-white/10" />
                  </div>
                  {/* Card 2 */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition group-hover:translate-y-[-1px]">
                    <div className="mb-2 h-4 w-24 rounded bg-white/10" />
                    <div className="h-3 w-32 rounded bg-white/10" />
                    <div className="mt-3 h-8 w-full rounded bg-white/10" />
                  </div>
                  {/* Card 3 */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 ring-1 ring-inset ring-white/10 transition group-hover:translate-y-[-1px]">
                    <div className="mb-2 h-4 w-24 rounded bg-white/10" />
                    <div className="h-3 w-32 rounded bg-white/10" />
                    <div className="mt-3 h-8 w-full rounded bg-white/10" />
                  </div>
                </div>

                {/* Footer chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Accessibility", "Dark mode", "ARIA-ready", "Responsive"].map((c) => (
                    <span key={c} className="rounded-full bg-white/5 px-3 py-1 text-xs text-textSlate ring-1 ring-white/10">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom note */}
              <p className="mt-3 text-xs text-textSlate">
                Tip: Toggle classes, not components. Ship faster with consistent patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsInfo;
