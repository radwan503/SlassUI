import { useState } from "react";
import { CheckCircle2, LineChart, Users, Menu, X, Layers } from "lucide-react";

const HeroSection15 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#DFF1FF] text-neutral-900">
      {/* Thin top accent bar */}
      <div className="h-1 w-full bg-blue-600/80" />

      {/* HEADER */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight">
            <Layers className="text-blue-600 w-7 h-7" />
            <span className="text-neutral-900">Struct</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-neutral-700">
              {["Demos", "About", "Blog", "Pages", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-neutral-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#trial"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Start Free Trial
            </a>
            <button
              className="md:hidden text-neutral-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4 z-50 md:hidden">
            <ul className="flex flex-col space-y-4 text-center text-neutral-700">
              {["Demos", "About", "Blog", "Pages", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#trial"
                  className="block w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
                >
                  Start Free Trial
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="max-w-xl mx-auto lg:mx-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-neutral-900">
              Modern POS that makes running your business easier
            </h1>

            {/* Checklist */}
            <ul className="mt-6 space-y-3 text-sm sm:text-base">
              <li className="flex items-start justify-center lg:justify-start gap-3">
                <CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" />
                <span>Manage cost savings &amp; payments method</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start gap-3">
                <CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" />
                <span>Analysis inventory and online sales report</span>
              </li>
            </ul>

            {/* Email Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 w-full max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row items-center gap-2 rounded-full bg-white p-1 shadow-sm ring-1 ring-blue-200/60">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 w-full sm:w-auto"
                >
                  Start Free Trial
                </button>
              </div>
            </form>

            <p className="mt-2 text-xs sm:text-sm text-neutral-700">
              Already have an account?{" "}
              <a
                href="#login"
                className="font-medium text-blue-700 hover:underline"
              >
                Log in now
              </a>
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Photo */}
            <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-xl w-full max-w-md sm:max-w-lg lg:max-w-none">
              <img
                alt="Professional viewing a credit card"
                className="h-72 sm:h-96 md:h-[500px] w-full object-cover"
                src="https://images.unsplash.com/photo-1705948354520-08d2557f55b2?w=600&auto=format&fit=crop&q=60"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-10 left-4 sm:left-12">
              <div className="animate-float-slow w-48 sm:w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <div className="mb-2 flex items-center gap-2 text-xs text-green-600">
                  <LineChart className="w-4 h-4" />
                  <span>+4.85%</span>
                </div>
                <div className="text-lg sm:text-xl font-semibold">$36,845.00</div>
                <div className="text-xs text-neutral-500">Total Revenue</div>
              </div>
            </div>
            <div className="absolute -top-10 right-2 sm:right-6">
              <div className="animate-float-fast w-44 sm:w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <div className="mb-1 flex items-center gap-2 text-xs text-blue-600">
                  <Users className="w-4 h-4" />
                  <span>+3.2%</span>
                </div>
                <div className="text-lg sm:text-xl font-semibold">86,590</div>
                <div className="text-xs text-neutral-500">Total Customer</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animations */}
      <style>{`
        @keyframes float1 { 0%{ transform: translateY(0) } 50%{ transform: translateY(-8px) } 100%{ transform: translateY(0) } }
        @keyframes float2 { 0%{ transform: translateY(0) } 50%{ transform: translateY(10px) } 100%{ transform: translateY(0) } }
        .animate-float-slow { animation: float1 6s ease-in-out infinite; }
        .animate-float-fast { animation: float2 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HeroSection15;
