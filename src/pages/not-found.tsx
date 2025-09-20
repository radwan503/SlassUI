import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">
        {/* Decorative Gradient Heading */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Subheading */}
        <h2 className="mt-4 text-2xl md:text-3xl font-bold">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-slate-400">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Search Bar */}
        <form
          className="mt-6 mx-auto flex max-w-md items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 p-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Search the site..."
            className="w-full rounded-lg bg-transparent px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
          >
            Search
          </button>
        </form>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
            { label: "Support", href: "/support" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-300 transition-colors hover:border-sky-600 hover:bg-slate-900/90"
            >
              <span className="bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
                {link.label}
              </span>
              <div className="mt-1 h-0.5 w-0 bg-gradient-to-r from-sky-400 to-fuchsia-500 transition-all duration-500 group-hover:w-2/3" />
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
          >
            ← Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-sky-600 hover:bg-slate-900/90"
          >
            Contact Support
          </Link>
        </div>

        {/* Small Tip */}
        <p className="mt-6 text-xs text-slate-500">
          Need help? Report issues via{" "}
          <a
            href="mailto:radwananik.ra@gmail.com"
            className="underline decoration-sky-500 underline-offset-4 hover:text-slate-300"
          >
            support@slassui.com
          </a>
        </p>
      </div>
    </main>
  );
}
