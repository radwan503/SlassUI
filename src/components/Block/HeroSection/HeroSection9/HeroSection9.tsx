import { ArrowRightIcon, PlayCircle, Drone } from "lucide-react";

const HeroSection9 = () => {
  return (
    <section
      aria-labelledby="hero-section"
      className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-black/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Drone  className="h-10 w-10 text-yellow-300 drop-shadow-lg" />
          <span className="text-2xl font-extrabold tracking-tight drop-shadow-sm">
            LudiChart
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-white/80">
            🚀 Version 1.0 Released
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Supercharge your workflow <br />
            with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              stunning components
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Production-ready React & Tailwind blocks designed for blazing speed,
            sleek design, and accessibility—so you can build beautiful apps
            faster than ever.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-purple-700 shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection9;
