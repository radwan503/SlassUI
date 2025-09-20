// components/Navbar.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu, X, Search,
  Github, Linkedin,
  RedoDot,
} from "lucide-react";
// import { useTheme } from "../utils/ThemeContext";

type Props = {
  toggleSidebar?: () => void;
  toggleNav?: () => void;
  navOpen?: boolean;
};

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Docs", to: "/docs" },
  { label: "Templates", to: "/templates" },
  { label: "Components", to: "/components" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

const Navbar: React.FC<Props> = ({ toggleSidebar, toggleNav, navOpen }) => {
  // const { toggleTheme } = useTheme();
  const { pathname } = useLocation();
  // const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [pct, setPct] = useState(0);

  // detect theme (for icon)
  // useEffect(() => {
  //   if (typeof document !== "undefined") {
  //     setDark(document.documentElement.classList.contains("dark"));
  //   }
  // }, []);

  // page scroll effects (elevate bar + progress line)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 6);
      setPct(h > 0 ? Math.min(100, Math.round((y / h) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const progressStyle = useMemo(
    () => ({ width: `${pct}%` }),
    [pct]
  );

  // const handleTheme = () => {
  //   toggleTheme?.();
  //   // best-effort reflect icon quickly
  //   setDark((d) => !d);
  // };

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "backdrop-blur-xl",
        "border-b border-white/10",
        "text-white",
        // Blue-dark glass gradient
        "bg-[rgba(0,30,107,0.6)]",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-10",
        //"before:bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(900px_500px_at_90%_-20%,rgba(14,165,233,0.12),transparent_60%)]",
        scrolled ? "shadow-[0_8px_30px_rgba(2,6,23,0.35)]" : "shadow-none",
      ].join(" ")}
    >
      {/* top progress line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500"
          style={progressStyle}
        />
      </div>

      <div className="mx-auto flex h-16  items-center justify-between px-3 sm:px-6">
        {/* left: sidebar trigger + logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="2xl:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          <Link to="/" aria-label="Brand home" className="group inline-flex items-center gap-3">
            <LogoBadge />
            <span className="hidden sm:inline text-lg font-semibold tracking-tight">
              SlassUI
            </span>
          </Link>
        </div>

        {/* center: nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "relative rounded-xl px-3 py-2 text-sm transition",
                  "hover:bg-white/10 hover:text-white",
                  active ? "text-white bg-white/10" : "text-white/80",
                ].join(" ")}
              >
                {item.label}
                {/* underline accent on hover */}
                <span className="pointer-events-none absolute inset-x-3 -bottom-[2px] h-[2px] scale-x-0 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 transition-all group-hover:opacity-100 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* right: actions */}
        <div className="flex items-center gap-2">
          {/* Search (cosmetic) */}
          <button
            className="hidden sm:inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white/80 hover:bg-white/10"
            aria-label="Search"
          >
            <Search size={16} />
            <span className="hidden lg:inline">Search</span>
          </button>

          {/* socials */}
          <IconLink href="https://github.com/your-org" label="GitHub">
            <Github size={18} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/your-handle" label="LinkedIn">
            <Linkedin size={18} />
          </IconLink>
          <IconLink href="https://www.reddit.com/r/yourSubreddit" label="Reddit">
            <RedoDot size={18} />
          </IconLink>

          {/* theme */}
          {/* <button
            onClick={handleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            title="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}

          {/* mobile menu */}
          <button
            onClick={toggleNav}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* CTA */}
          <Link
            to="/get-started"
            className="hidden md:inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* mobile drawer */}
      {navOpen && (
        <div className="md:hidden border-t border-white/10 bg-[rgba(9,14,28,0.85)] backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl gap-1 p-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 grid grid-cols-3 gap-2">
              <a
                href="https://github.com/your-org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://www.reddit.com/r/yourSubreddit"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                <RedoDot size={16} /> Reddit
              </a>
            </div>

            <Link
              to="/get-started"
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

/* --- Bits --- */

function IconLink({
  href,
  label,
  children,
}: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition"
      title={label}
    >
      {children}
    </a>
  );
}

function LogoBadge() {
  return (
    <div className="relative h-11 w-11">
      <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.5),transparent_60%)] blur-[10px]" />
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SlassUI icon">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"  stop-color="var(--logo-start, #38BDF8)"/>
              <stop offset="100%" stop-color="var(--logo-end, #6366F1)"/>
            </linearGradient>
            <radialGradient id="s" cx="50%" cy="38%" r="65%">
              <stop offset="0%"   stop-color="var(--logo-sheen, #7DD3FC)" stop-opacity=".9"/>
              <stop offset="70%"  stop-color="var(--logo-mid, #6366F1)"   stop-opacity=".35"/>
              <stop offset="100%" stop-color="transparent"/>
            </radialGradient>
          </defs>

          <rect x="0" y="0" width="40" height="40" rx="12" fill="url(#s)"/>
          <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="11.25" fill="none" stroke="url(#g)" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="10.5" fill="none" stroke="url(#g)" stroke-width="2" opacity=".95"/>
          <circle cx="28" cy="15.5" r="3" fill="var(--logo-start, #38BDF8)"/>
          <circle cx="13.5" cy="25.5" r="2.2" fill="var(--logo-end, #6366F1)" opacity=".9"/>
          <path d="M13.2,17.8 C14.8,15.0 18.0,13.6 21.2,14.2
                  C24.0,14.7 25.9,16.6 25.8,18.6
                  C25.7,21.4 22.7,22.1 20.2,22.7
                  C17.2,23.4 14.6,24.1 14.5,26.7
                  C14.4,29.3 17.0,31.0 20.1,31.0
                  C22.8,31.0 25.1,29.9 26.5,28.1"
                fill="none" stroke="url(#g)" stroke-width="2.4" stroke-linecap="round"/>
        </svg>

    </div>
  );
}

export default Navbar;
