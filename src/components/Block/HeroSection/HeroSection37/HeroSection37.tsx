import { ArrowRight, CheckCircle2, Sparkles, PlayCircle, ShieldCheck, Boxes } from "lucide-react";
import { Link } from "react-router";
import Button from "../../../../utils/Button";

const HeroSection37 = () => {
  return (
    <section className="relative overflow-hidden bg-primary/60 border-t border-darkBg py-16 md:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft grid */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0)_60%)]"
        />
        {/* glow blobs */}
        <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-indigo-500/30" />
        <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-emerald-400/30" />
      </div>

      <div className="container mx-auto px-4">
        {/* Top meta / badge */}
        <div className="mx-auto mb-8 max-w-3xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-textSlate backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            NEW in v2.4 — 20 fresh sections & 4 templates
          </span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Left copy */}
          <div>
            <h1 className="text-balance text-4xl leading-tight font-extrabold md:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-indigo-300 bg-clip-text text-transparent">
                Ship modern UIs
              </span>{" "}
              <span className="text-textColor">in minutes, not days.</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-textGray/90">
              Assemble beautiful interfaces from{" "}
              <span className="font-semibold text-textColor">160+ production-ready sections</span> and{" "}
              <span className="font-semibold text-textColor">hand-crafted templates</span>. Built for{" "}
              <span className="font-semibold text-indigo-300">React</span> +{" "}
              <span className="font-semibold text-emerald-300">Tailwind CSS</span>, fully accessible, and easy to
              customize.
            </p>

            {/* Feature bullets */}
            <ul className="mt-6 grid gap-3 text-sm text-textSlate md:grid-cols-2">
              {[
                "Responsive by default",
                "Dark mode ready",
                "ARIA & keyboard friendly",
                "MIT licensed",
                "TypeScript support",
                "Copy-paste snippets",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link to="/ui-blocks" className="sm:w-auto w-full">
                <Button
                  className="w-full text-sm"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Browse Components
                </Button>
              </Link>
              <Link to="/template" className="sm:w-auto w-full">
                <Button
                  className="w-full text-sm"
                  variant="secondary"
                  size="lg"
                  icon={Boxes}
                >
                  Explore Templates
                </Button>
              </Link>
              <Link to="/playground" className="sm:w-auto w-full">
                <Button
                  className="w-full text-sm !bg-white/5 !text-white hover:!bg-white/10 border border-white/10"
                  size="lg"
                  icon={PlayCircle}
                >
                  Try Live Playground
                </Button>
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-textSlate/80">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> MIT License
              </span>
              <span className="h-1 w-1 rounded-full bg-textSlate/40" />
              <span>No signup required</span>
              <span className="h-1 w-1 rounded-full bg-textSlate/40" />
              <span>Copy & paste friendly</span>
            </div>
          </div>

          {/* Right: Code / preview card */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur">
              {/* window chrome */}
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                  Hero.tsx
                </span>
              </div>

              {/* gradient border wrapper */}
              <div className="relative rounded-xl border border-white/10 bg-black/40 p-4">
                <pre className="max-h-[320px] overflow-auto text-[12px] leading-relaxed text-gray-200">
                    {`export default function Hero() {
                      return (
                        <section className="relative py-20">
                          <h1 className="text-5xl font-bold tracking-tight">
                            Build faster with <span className="text-indigo-400">React</span>
                          </h1>
                          <p className="mt-3 max-w-xl text-gray-400">
                            Drop-in sections for hero, pricing, FAQ, testimonials & more.
                          </p>
                          <div className="mt-6 flex gap-3">
                            <button className="btn-primary">Get Started</button>
                            <button className="btn-ghost">Preview</button>
                          </div>
                        </section>
                      )
                    }`}
                  </pre>

                {/* hover hint */}
                <div className="pointer-events-none absolute right-3 top-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  Copy snippet
                </div>
              </div>

              {/* floating highlight */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rotate-12 rounded-2xl bg-gradient-to-br from-indigo-400/30 to-emerald-300/30 blur-2xl" />
            </div>

            {/* Stats strip */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { k: "160+", v: "Sections" },
                { k: "32", v: "Templates" },
                { k: "12", v: "Categories" },
                { k: "~4KB", v: "Avg. per block" },
              ].map(({ k, v }) => (
                <div
                  key={v}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <div className="text-2xl font-bold text-white">{k}</div>
                  <div className="text-xs text-textSlate/80">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo belt (placeholders) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-80">
          <span className="text-[11px] uppercase tracking-widest text-textSlate/70">
            Trusted by developers at
          </span>
          <div className="h-5 w-16 rounded bg-white/10" />
          <div className="h-5 w-16 rounded bg-white/10" />
          <div className="h-5 w-16 rounded bg-white/10" />
          <div className="h-5 w-16 rounded bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection37;
