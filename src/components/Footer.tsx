// components/Footer.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Twitter, Github, Linkedin, Youtube, Globe, ArrowUp } from "lucide-react";

type Props = {
  /** If your app uses a custom scrollable wrapper, pass its element id */
  scrollContainerId?: string; // e.g. <div id="app-scroll" class="overflow-y-auto h-screen">...</div>
};

export default function Footer({ scrollContainerId }: Props) {
  const year = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [scrollEl, setScrollEl] = useState<Window | HTMLElement | null>(null);

  // Resolve the scroll target on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = scrollContainerId ? document.getElementById(scrollContainerId) : null;
    setScrollEl(el || window);
  }, [scrollContainerId]);

  // Update percentage + visibility based on the active scroll target
  useEffect(() => {
    if (!scrollEl) return;

    const getY = () =>
      scrollEl instanceof Window
        ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
        : scrollEl.scrollTop;

    const getH = () =>
      scrollEl instanceof Window
        ? (document.documentElement.scrollHeight - window.innerHeight)
        : (scrollEl.scrollHeight - (scrollEl as HTMLElement).clientHeight);

    const onScroll = () => {
      const y = getY();
      const h = Math.max(0, getH());
      const pct = h > 0 ? Math.min(100, Math.round((y / h) * 100)) : 0;
      setScrollPct(pct);
      setShowScroll(y > 400);
    };

    // init + listen
    onScroll();
    scrollEl.addEventListener("scroll", onScroll as any, { passive: true } as any);
    return () => scrollEl.removeEventListener("scroll", onScroll as any);
  }, [scrollEl]);

  // Smoothly scroll the active target to top
  function scrollToTop() {
    if (!scrollEl) return;
    if (scrollEl instanceof Window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Element scroller
      try {
        scrollEl.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        (scrollEl as HTMLElement).scrollTop = 0; // fallback
      }
    }
  }

  const progressStyle = useMemo(
    () => ({
      background: `conic-gradient(#60a5fa ${scrollPct * 3.6}deg, rgba(99,102,241,.25) ${scrollPct * 3.6}deg)`,
    }),
    [scrollPct]
  );

  return (
    <>
      <footer
        className={[
          "relative isolate overflow-hidden",
          "bg-[#0B1020] text-white",
          "before:absolute before:inset-0 before:-z-10",
          "before:bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(900px_500px_at_90%_-20%,rgba(14,165,233,0.14),transparent_60%)]",
          "after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:mix-blend-overlay",
          "after:bg-[url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'140\\' height=\\'140\\'><path d=\\'M0 139h140v1H0zM139 0v140h1V0z\\' fill=\\'%23ffffff10\\'/></svg>')]",
        ].join(" ")}
      >
        <div className="mx-auto w-full container py-8">
          <div className="">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <Link to="/" aria-label="SlassUI home" className="group inline-flex items-center gap-3">
                <LogoBadge />
                <span className="text-lg font-semibold tracking-tight">SlassUI</span>
              </Link>

              <nav aria-label="Social links" className="flex items-center gap-2">
                <SocialLink href="https://twitter.com" label="Twitter"><Twitter className="h-4 w-4" /></SocialLink>
                <SocialLink href="https://github.com" label="GitHub"><Github className="h-4 w-4" /></SocialLink>
                <SocialLink href="https://www.linkedin.com" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
                <SocialLink href="https://youtube.com" label="YouTube"><Youtube className="h-4 w-4" /></SocialLink>
                <SocialLink href="https://slassui.dev" label="Website"><Globe className="h-4 w-4" /></SocialLink>
              </nav>
            </div>

            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
              <p className="text-xs text-white/70">
                © {year} <span className="font-medium text-white/90">SlassUI</span>. All rights reserved.
              </p>
              <p className="text-xs text-white/60">Crafted with ❤️ for React, Next.js & Tailwind.</p>
            </div>
          </div>

          {/* <div className="pointer-events-none mx-auto mt-6 h-[1px] w-full max-w-7xl bg-gradient-to-r from-transparent via-sky-400/30 to-transparent blur-[1px]" /> */}
        </div>
      </footer>

      {/* Scroll-to-top (portal-like fixed, very high z-index) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={[
          "fixed bottom-6 right-6 z-[9999]",
          "grid h-12 w-12 place-items-center rounded-full text-slate-900 shadow-xl ring-4 transition",
          "bg-white ring-white/50 hover:scale-110 active:scale-95",
          "dark:bg-slate-800 dark:text-white dark:ring-slate-900/60",
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
        ].join(" ")}
        style={progressStyle}
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white">
          <ArrowUp size={18} />
        </span>
      </button>
    </>
  );
}

/* -- bits -- */
function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10",
        "bg-white/[0.05] px-3 py-2 text-sm text-white/90 shadow-sm backdrop-blur",
        "transition-[transform,background,border] hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/20 active:translate-y-0",
      ].join(" ")}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
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
