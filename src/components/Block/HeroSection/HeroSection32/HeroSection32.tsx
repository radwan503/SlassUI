import { ArrowRight, Play } from "lucide-react";

export default function HeroSection32() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-fuchsia-50 dark:from-[#0b0f1a] dark:via-[#0e1323] dark:to-[#0b0f1a]">
      {/* Decorative background */}
      <style>{`
        @keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes blob {0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(10px,-10px) scale(1.05)}}
        .grid-dots {background-image: radial-gradient(currentColor 1px, transparent 1px); background-size: 18px 18px;}
      `}</style>
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Content */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              New: 30+ courses added this month
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-fuchsia-300">
                Unlock Your Potential
              </span>
              <br />
              with Online Learning
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-300 mx-auto md:mx-0">
              Discover curated courses from top universities and institutions. Learn new skills, earn certificates, and advance your career at your own pace.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="#courses"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-white shadow-lg shadow-purple-600/20 transition hover:shadow-purple-600/30 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:from-purple-500 dark:to-indigo-500"
              >
                Explore All Courses
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#intro"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300/70 bg-white/70 px-6 py-3 text-slate-800 shadow-sm backdrop-blur transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              {[
                { label: "Students", value: "200K+" },
                { label: "Courses", value: "100+" },
                { label: "Instructors", value: "50+" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{s.value}</div>
                  <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span>Trusted by learners from</span>
              <div className="grid-dots text-slate-300 dark:text-slate-700 h-4 w-24 rounded" />
              <span>Harvard • Stanford • MIT • Coursera</span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* floating blobs */}
            <div aria-hidden className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl animate-[blob_8s_ease-in-out_infinite]" />
            <div aria-hidden className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl animate-[blob_9s_ease-in-out_infinite]" />

            <div className="relative rounded-3xl border border-black/5 bg-white/70 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://placehold.co/900x600/6d28d9/ffffff?text=Learning+Together"
                  alt="Students learning online"
                  className="h-auto w-full scale-[1.01] transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* play badge - optional */}
              <a
                href="#intro"
                className="group absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-fuchsia-500/10 backdrop-blur transition hover:shadow-fuchsia-500/20 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
              >
                <Play className="size-4" /> Watch 60s intro
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="pointer-events-none block w-full text-white dark:text-[#0b0f1a]" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,32L60,37.3C120,43,240,53,360,64C480,75,600,85,720,74.7C840,64,960,32,1080,26.7C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  );
}
