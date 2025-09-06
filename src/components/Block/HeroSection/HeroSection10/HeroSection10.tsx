import { ArrowRightIcon } from "lucide-react";

const HeroSection10 = () => {
  return (
    <section
      aria-labelledby="Trusted by teams"
      className="relative isolate overflow-hidden"
    >
      {/* Background media */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" aria-hidden></div>
           {/* Backgroud image */}
            {/* <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
              alt="Designers collaborating around a laptop"
              className="h-full w-full object-cover"
              loading="lazy"
            /> */}

         {/* Backgroud gradient */}
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black" aria-hidden />
        
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-2xl lg:max-w-3xl">
            <p className="mb-3 text-xs font-semibold tracking-widest text-white/80 uppercase">
              Trusted by teams
            </p>
        =

          <h1 id="advanced-hero" className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Ship stunning experiences without the grind
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
            Composable sections, WCAG‑compliant interactions, and delightful motion—all customizable via design tokens.
          </p>
         

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm outline-none transition hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Buy Pro
              <span className="ml-2" aria-hidden>
                <ArrowRightIcon />
              </span>
            </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md outline-none transition hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Documentation
              </a>
            
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:max-w-lg sm:grid-cols-3">
            <div>
              <dt className="text-xs text-white/70">Uptime</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">99.99%</dd>
            </div>
            <div>
              <dt className="text-xs text-white/70">Customers</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">12k+</dd>
            </div>
            <div>
              <dt className="text-xs text-white/70">Integrations</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">30+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection10;