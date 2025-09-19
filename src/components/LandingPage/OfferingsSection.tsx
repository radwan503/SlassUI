'use client';
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, ChevronLeft, ChevronRight, Sparkles, Gauge, Smartphone, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

import { Link } from "react-router";
import {
  Layers2,
  PackagePlus,
  SquaresExclude,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const OfferingsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("ui-blocks");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(
    () => [
      {
        id: "ui-blocks",
        name: "UI Blocks",
        tagline: "160+ copy-paste sections",
        blurb:
          "Ready-to-use, responsive sections — Heroes, Pricing, Testimonials, Footers and more. Built for React + Tailwind, so you ship in minutes.",
        icon: <PackagePlus className="h-6 w-6" strokeWidth={1.25} />,
        preview: <BlocksPreview />,
        features: [
          "Core web vitals friendly",
          "Light/Dark-ready",
          "ARIA + keyboard focus",
          "Copy/paste friendly code",
        ],
        ctas: [
          { label: "Browse Blocks", to: "/blocks" },
          { label: "Docs", to: "/docs/blocks" },
        ],
      },
      {
        id: "templates",
        name: "Templates",
        tagline: "Next.js powered starters",
        blurb:
          "Beautiful, configurable site templates with modern layouts, routing, and best-practice structure. Swap branding and launch fast.",
        icon: <Layers2 className="h-6 w-6" strokeWidth={1.25} />,
        preview: <TemplatesPreview />,
        features: [
          "Type-safe routing",
          "SEO meta helpers",
          "Theming tokens",
          "Production file layout",
        ],
        ctas: [
          { label: "View Templates", to: "/templates" },
          { label: "Starter Guide", to: "/docs/templates" },
        ],
      },
      {
        id: "ui-kit",
        name: "UI Kit",
        tagline: "Foundation & tokens",
        blurb:
          "A flexible starter kit to extend React + Tailwind with consistent design tokens, primitives, and reusable patterns.",
        icon: <SquaresExclude className="h-6 w-6" strokeWidth={1.25} />,
        preview: <UIKitPreview />,
        features: [
          "Design tokens config",
          "Composable primitives",
          "Accessible components",
          "Utility-first presets",
        ],
        ctas: [
          { label: "Explore UI Kit", to: "/ui-kit" },
          { label: "Token Reference", to: "/docs/tokens" },
        ],
      },
    ],
    []
  );

  const active = items.find((x) => x.id === activeId) || items[0];

  // Arrow-key cycling on the whole section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault();
      const idx = items.findIndex((x) => x.id === activeId);
      if (e.key === "ArrowRight") {
        const next = (idx + 1) % items.length;
        setActiveId(items[next].id);
      } else if (e.key === "ArrowLeft") {
        const prev = (idx - 1 + items.length) % items.length;
        setActiveId(items[prev].id);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [activeId, items]);

  // Gentle auto-rotate (stops feeling jumpy due to modulo logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prev) => {
        const idx = items.findIndex((x) => x.id === prev);
        const next = (idx + 1) % items.length;
        return items[next].id;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <section
      ref={containerRef}
      tabIndex={0}
      aria-label="Offerings"
      className="relative bg-gradient-to-b from-[#0b1020] via-[#0b1020] to-[#0e162b] border-t border-darkBg py-18 md:py-28 text-textColor outline-none"
    >
      {/* animated soft backlights */}
      <BackdropFX />

      <div className="container mx-auto px-4 relative z-10">
  
        {/* Headline */}
        <header className="max-w-7xl text-center md:text-left mt-6">
          <Badges />
          <h2 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
              production-ready UI
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-3xl">
            Pick a starting point—<strong className="text-slate-100">Blocks</strong>,{" "}
            <strong className="text-slate-100">Templates</strong>, or the{" "}
            <strong className="text-slate-100">UI Kit</strong>. Each ships with accessible
            patterns, clean React + Tailwind code, and a structure built for performance.
          </p>

          {/* Quick metrics */}
          <MetricsStrip />
        </header>

        {/* Selector + Preview */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Orbital Selector */}
          <div className="lg:col-span-5">
            <OrbitalSelector
              items={items}
              activeId={activeId}
              onChange={setActiveId}
            />
          </div>

          {/* Angled Preview Deck */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-emerald-500/10 blur-2xl" />
              <div className="relative mx-auto w-full">
                <ShowcaseDeck
                  activeId={activeId}
                  items={items}
                  onPick={setActiveId}
                />
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-400/70" /> Live preview
                  <span className="mx-2 h-3 w-px bg-slate-600" />
                  <span>Use ← / → to switch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* “What’s inside” detail for the active item */}
        <InsidePanel item={active} />

        {/* Compare strip */}
        <CompareStrip />

        {/* FAQ */}
        <FAQ />

        {/* Sticky CTA footer */}
        <StickyCTA />
      </div>
    </section>
  );
};

export default OfferingsSection;

/* -------------------------------------------------------------------------- */
/*                               Decorative Bits                              */
/* -------------------------------------------------------------------------- */

const BackdropFX = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
    <div className="absolute bottom-10 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-fuchsia-500/10 blur-3xl" />
    <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
  </div>
);

const Badges = () => (
  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] text-indigo-300/90">
    <span className="inline-flex items-center gap-1 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1">New v1.8</span>
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/60 bg-slate-900/60 px-2.5 py-1">160+ Blocks</span>
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/60 bg-slate-900/60 px-2.5 py-1">12 Templates</span>
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-600/60 bg-slate-900/60 px-2.5 py-1">MIT License</span>
  </div>
);



const MetricsStrip = () => (
  <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
    {[
      ["TypeScript ready", "CheckCircle2"],
      ["Dark mode out of the box", "CheckCircle2"],
      ["ARIA + keyboard navigation", "CheckCircle2"],
      ["Responsive by default", "CheckCircle2"],
    ].map(([label]) => (
      <li key={label} className="flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2 text-slate-300/90">
        <CheckCircle2 className="h-4 w-4 text-indigo-300" /> {label}
      </li>
    ))}
  </ul>
);

/* -------------------------------------------------------------------------- */
/*                              Orbital Selector                               */
/* -------------------------------------------------------------------------- */

const OrbitalSelector: React.FC<{
  items: Array<{
    id: string;
    name: string;
    tagline: string;
    blurb: string;
    icon: React.ReactNode;
    features: string[];
    ctas: { label: string; to: string }[];
  }>;
  activeId: string;
  onChange: (id: string) => void;
}> = ({ items, activeId, onChange }) => {
  return (
    <div
      role="radiogroup"
      aria-label="Select an offering"
      className="flex lg:flex-col gap-4 overflow-x-auto snap-x snap-mandatory pb-2 lg:overflow-visible"
    >
      {items.map((item) => {
        const selected = activeId === item.id;
        return (
          <button
            key={item.id}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.id)}
            className={
              "group relative min-w-[280px] lg:min-w-0 flex-1 text-left rounded-2xl border bg-tab/60 hover:bg-tab transition-colors snap-start " +
              "border-darkBg/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            }
          >
            {/* glow */}
            <div
              className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity ${
                selected ? "opacity-100" : "opacity-0 group-hover:opacity-70"
              }`}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-transparent blur-lg" />
            </div>

            <div className="relative p-5 flex gap-4 items-start">
              <div
                className={
                  "shrink-0 rounded-xl border border-darkBg/60 bg-primary/80 p-3 text-indigo-300 transition-transform " +
                  (selected ? "scale-110" : "group-hover:scale-105")
                }
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  {selected && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-300">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Selected
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-400">{item.tagline}</p>
                <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{item.blurb}</p>

                {/* feature bullets */}
                <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-400">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-300" /> {f}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {item.ctas.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-darkBg/60 bg-primary px-3 py-2 text-sm hover:border-indigo-400/60 hover:text-indigo-300 transition-colors"
                    >
                      {c.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                            “What’s inside” panel                           */
/* -------------------------------------------------------------------------- */

const InsidePanel: React.FC<{
  item: {
    name: string;
    blurb: string;
    features: string[];
    ctas: { label: string; to: string }[];
  };
}> = ({ item }) => {
  return (
    <section className="mt-12 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="md:max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold">{item.name}: What’s inside</h3>
          <p className="mt-2 text-slate-300/90">{item.blurb}</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300/90">
            {item.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300/90" /> {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          {item.ctas.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-500/20 transition"
            >
              {c.label} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                                Compare strip                               */
/* -------------------------------------------------------------------------- */

const CompareStrip = () => (
  <section className="mt-10 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5">
    <div className="text-sm font-medium text-slate-200">Compare options</div>
    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
      {[
        {
          title: "Blocks",
          pts: ["Fastest to ship", "Drop-in sections", "Docs & ARIA baked in"],
        },
        {
          title: "Templates",
          pts: ["Full site skeleton", "Routing + SEO", "Brand & launch fast"],
        },
        {
          title: "UI Kit",
          pts: ["Design tokens", "Primitives & presets", "Scale consistently"],
        },
      ].map((c) => (
        <div
          key={c.title}
          className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4"
        >
          <div className="font-semibold">{c.title}</div>
          <ul className="mt-2 space-y-1 text-slate-300/90">
            {c.pts.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-300" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

const FAQ = () => (
  <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        q: "Do I need Next.js?",
        a: "Blocks and the UI Kit are framework-agnostic React + Tailwind. Templates target Next.js for file-system routing and SEO helpers.",
      },
      {
        q: "Is it accessible?",
        a: "Yes. Components use proper ARIA roles, keyboard order, and focus states out of the box.",
      },
      {
        q: "Can I customize tokens?",
        a: "Absolutely — the UI Kit exposes a token map (colors, radius, spacing) you can extend via Tailwind config.",
      },
      {
        q: "License?",
        a: "MIT — build and ship commercial projects with no attribution required.",
      },
    ].map(({ q, a }) => (
      <details
        key={q}
        className="group rounded-xl border border-slate-700/60 bg-slate-900/50 p-4 open:bg-slate-900/60"
      >
        <summary className="cursor-pointer list-none text-sm font-medium text-slate-200 flex items-center justify-between">
          {q}
          <span className="ml-3 text-xs text-slate-400 group-open:rotate-90 transition">›</span>
        </summary>
        <p className="mt-2 text-sm text-slate-300/90">{a}</p>
      </details>
    ))}
  </section>
);

/* -------------------------------------------------------------------------- */
/*                                  Sticky CTA                                */
/* -------------------------------------------------------------------------- */

const StickyCTA = () => (
  <div className="mt-10 sticky bottom-4">
    <div className="mx-auto max-w-3xl rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-500/15 via-fuchsia-500/10 to-emerald-500/15 px-5 py-4 backdrop-blur">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base text-indigo-100">
          Start with Blocks, scale with Templates, and standardize with the UI Kit.
        </div>
        <div className="flex gap-3">
          <Link
            to="/ui-blocks"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/50 bg-indigo-500/15 px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-500/25 transition"
          >
            Components <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/template"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600/60 bg-slate-900/60 px-4 py-2 text-sm hover:border-indigo-400/60 hover:text-indigo-300 transition"
          >
            Template
          </Link>
        </div>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                             Inline Preview Cards                           */
/* -------------------------------------------------------------------------- */

export const BlocksPreview: React.FC = () => {
  return (
    <div className="h-full w-full p-6 grid gap-6 text-slate-200 bg-slate-950">
      {/* Hero Block */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Beautiful Hero</h2>
        <p className="text-sm text-slate-400 mt-2">
          Headline, subtext & CTAs
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-700 transition">
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-700 transition">
            Live Demo
          </button>
        </div>
      </div>

      {/* Pricing + Testimonials in two cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pricing */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow">
          <h3 className="text-lg font-semibold">Pricing</h3>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            {["Basic", "Pro", "Team"].map((tier) => (
              <div
                key={tier}
                className="rounded-lg border border-slate-700 bg-slate-800 py-3 text-center font-medium hover:bg-slate-700 transition"
              >
                {tier}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow">
          <h3 className="text-lg font-semibold">Testimonials</h3>
          <div className="mt-4 space-y-3 text-sm">
            {[
              "“Super fast to build.”",
              "“Clean & accessible UI.”",
              "“Loved by our team.”",
            ].map((quote, i) => (
              <div
                key={i}
                className="rounded-md bg-slate-800 p-3 italic border border-slate-700"
              >
                {quote}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Misc Blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Features", "FAQ", "Footer", "CTA"].map((t) => (
          <div
            key={t}
            className="rounded-xl border border-slate-800 bg-slate-900 py-6 text-center text-sm font-medium hover:bg-slate-800 transition"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};


export const TemplatesPreview: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-slate-700/60 bg-slate-900/60 px-4 py-3">
        <div className="h-6 w-20 rounded-md bg-slate-800" />
        <div className="h-6 w-16 rounded-md bg-slate-800" />
        <div className="ml-auto h-6 w-32 rounded-md bg-slate-800" />
      </div>

      <div className="grid grid-cols-12 gap-4 p-4 md:p-6 flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-7 w-full rounded-md bg-slate-800/80" />
          ))}
        </aside>

        {/* Main content */}
        <main className="col-span-12 md:col-span-9 space-y-4 overflow-hidden">
          <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-emerald-600/10 p-6">
            <div className="text-lg md:text-xl font-semibold text-slate-200">Launch Template</div>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Next.js routes, SEO helpers & theming tokens.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600/60 bg-slate-900/60 px-3 py-1.5 text-xs">
                Use Template <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600/60 bg-slate-900/60 px-3 py-1.5 text-xs">
                Read Docs
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-7 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
              <div className="h-40 md:h-52 w-full rounded-lg bg-slate-800/80" />
              <div className="mt-3 h-5 w-3/5 rounded-md bg-slate-800" />
              <div className="mt-2 h-4 w-2/5 rounded-md bg-slate-800" />
            </div>
            <div className="col-span-12 md:col-span-5 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-full rounded-md bg-slate-800/80" />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export const UIKitPreview: React.FC = () => {
  return (
    <div className="h-full w-full p-4 md:p-6 grid grid-cols-12 gap-4 text-slate-200">
      {/* Colors */}
      <section className="col-span-12 md:col-span-5 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
        <div className="text-sm font-medium mb-3">Design Tokens</div>
        <div className="grid grid-cols-4 gap-2">
          {["#6366F1", "#A78BFA", "#22D3EE", "#34D399", "#F59E0B", "#EF4444", "#14B8A6", "#60A5FA"].map(
            (c) => (
              <div
                key={c}
                className="aspect-square rounded-lg border border-slate-700/60"
                style={{ background: c }}
                aria-label={c}
              />
            )
          )}
        </div>
        <div className="mt-4 space-y-1 text-xs text-slate-400">
          <div>radius: 16px · shadow: 2xl · spacing scale: 4/6/8</div>
          <div>font: Inter · weights: 400 / 600 / 800</div>
        </div>
      </section>

      {/* Components */}
      <section className="col-span-12 md:col-span-7 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
        <div className="text-sm font-medium mb-3">Primitives</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <button className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2 text-left hover:border-indigo-400/60">
            Button
          </button>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2">Input</div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2">Select</div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2">Badge</div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2">Card</div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-3 py-2">Toast</div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["sm", "md", "lg"].map((s) => (
            <div key={s} className="rounded-lg border border-slate-700/60 bg-slate-800/60 p-3 text-center">
              {s}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export type DeckItem = { id: string; name: string; preview: React.ReactNode };

export const ShowcaseDeck: React.FC<{
  activeId: string;
  items: Array<DeckItem & { icon?: React.ReactNode }>;
  onPick: (id: string) => void;
  intervalMs?: number; // default 7000
}> = ({ activeId, items, onPick, intervalMs = 7000 }) => {
  const idx = Math.max(0, items.findIndex((i) => i.id === activeId));
  const active = items[idx] || items[0];

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [hovering, setHovering] = React.useState(false);
  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);
  const [tick, setTick] = React.useState(0); // for progress bar
  const prefersReducedMotion = useReducedMotion();

  // Autoplay + progress timeline
  React.useEffect(() => {
    if (!isPlaying || hovering) return;
    let raf: number;
    const start = performance.now();
    const loop = (t: number) => {
      const elapsed = (t - start) % intervalMs;
      setTick(elapsed / intervalMs);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const timer = setInterval(() => {
      const next = (idx + 1) % items.length;
      onPick(items[next].id);
    }, intervalMs);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
      setTick(0);
    };
  }, [idx, items, isPlaying, hovering, onPick, intervalMs]);

  const go = (dir: 1 | -1) => {
    const next = (idx + dir + items.length) % items.length;
    onPick(items[next].id);
  };

  return (
    <section
      className="relative w-full select-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Gradient mesh backdrop */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl [background:radial-gradient(60%_60%_at_10%_10%,rgba(99,102,241,.18),transparent_60%),radial-gradient(60%_60%_at_90%_20%,rgba(168,85,247,.14),transparent_60%),radial-gradient(60%_60%_at_50%_90%,rgba(16,185,129,.14),transparent_60%)] blur-2xl" />

      {/* Card shell */}
      <div className="relative rounded-2xl border border-slate-600/60 bg-[#0d1424]/90 shadow-2xl overflow-hidden">
        {/* Top bar with tabs & controls */}
        <div className="flex items-center gap-2 border-b border-slate-700/70 px-2 md:px-3 py-2">
          {/* window dots */}
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 hidden md:block h-6 flex-1 rounded-md bg-slate-800/70" />

          {/* Tabs */}
          <nav className="ml-auto flex items-center gap-1 overflow-x-auto max-w-full" aria-label="Showcase tabs">
            {items.map((i) => {
              const selected = i.id === activeId;
              return (
                <button
                  key={i.id}
                  onClick={() => onPick(i.id)}
                  aria-current={selected ? 'page' : undefined}
                  aria-label={i.name}
                  className={`px-3 py-1.5 rounded-full text-xs transition whitespace-nowrap border focus:outline-none focus:ring-2 focus:ring-indigo-400/60 ${
                    selected
                      ? 'bg-indigo-500/20 text-indigo-200 border-indigo-400/40 shadow-[0_0_0_1px_rgba(129,140,248,.25)]'
                      : 'text-slate-300/90 border-slate-700/60 hover:bg-slate-800/60 hover:text-slate-100'
                  }`}
                >
                  {i.name}
                </button>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="ml-2 hidden sm:flex items-center gap-1">
            <IconBtn onClick={() => go(-1)} ariaLabel="Previous">
              <ChevronLeft className="h-4 w-4" />
            </IconBtn>
            <IconBtn
              onClick={() => setIsPlaying((p) => !p)}
              ariaLabel={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </IconBtn>
            <IconBtn onClick={() => go(1)} ariaLabel="Next">
              <ChevronRight className="h-4 w-4" />
            </IconBtn>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-1 bg-slate-800/60">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400"
            style={{ width: `${tick * 100}%` }}
            aria-hidden
          />
        </div>

        {/* Content grid */}
        <div
          className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-5 p-3"
          onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX == null) return;
            const delta = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(delta) > 48) go(delta > 0 ? -1 : 1);
            setTouchStartX(null);
          }}
        >
          {/* Left: Browser frame with animated preview */}
          <div className="xl:col-span-8">
            <DeviceFrame title={active.name} kind="browser">
              <RightPreviewChrome>
                <div className="relative h-full w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="absolute inset-0"
                    >
                      {active.preview}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </RightPreviewChrome>
            </DeviceFrame>
          </div>

          {/* Right: Phone frame + contentful sidebar */}
          <div className="xl:col-span-4 space-y-4">
            <DeviceFrame title={active.name} kind="phone">
              <PhonePreviewOverlay />
            </DeviceFrame>

            {/* KPI chips */}
            <ul className="grid grid-cols-2 gap-2 text-[11px] md:text-xs">
              {[
                [<Gauge key="g" className="h-3.5 w-3.5" />, '<100ms TTI*', 'Core Web Vitals'],
                [<ShieldCheck key="a" className="h-3.5 w-3.5" />, 'A11y ready', 'ARIA + Focus'],
                [<MonitorSmartphone key="t" className="h-3.5 w-3.5" />, 'Type-safe', 'TS First'],
                [<Sparkles key="d" className="h-3.5 w-3.5" />, 'Dark/Light', 'Theme tokens'],
              ].map(([icon, big, small]) => (
                <li
                  key={String(big)}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-slate-100">
                    {icon as React.ReactNode}
                    {big as string}
                  </div>
                  <div className="text-slate-400">{small as string}</div>
                </li>
              ))}
            </ul>

            {/* Scrolling marquee */}
            <div className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/50">
              <div className="marquee p-3 text-slate-400 text-xs">
                <span className="mx-4">Next.js</span>
                <span className="mx-4">Tailwind</span>
                <span className="mx-4">Framer Motion</span>
                <span className="mx-4">Vite</span>
                <span className="mx-4">Radix</span>
                <span className="mx-4">shadcn/ui</span>
                <span className="mx-4">Next SEO</span>
                <span className="mx-4">Lighthouse 95+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="px-3 pb-3">
          <p className="text-[10px] md:text-[11px] text-slate-500">
            *TTI varies by project & hosting; measured on sample template.
          </p>
        </div>
      </div>

      {/* Pagination dots on mobile */}
      <div className="mt-5 md:hidden flex items-center justify-center gap-2">
        {items.map((i) => (
          <button
            key={i.id}
            onClick={() => onPick(i.id)}
            aria-label={i.name}
            className={`h-2.5 w-6 rounded-full transition ${
              i.id === activeId ? 'bg-indigo-400' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Local keyframes */}
      <style>{`
        .marquee { display:inline-block; white-space:nowrap; animation: marquee 18s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }
      `}</style>
    </section>
  );
};

/* --------------------------------- Helpers -------------------------------- */

const IconBtn: React.FC<React.PropsWithChildren<{ onClick?: () => void; ariaLabel: string }>> = ({
  children,
  onClick,
  ariaLabel,
}) => (
  <button
    aria-label={ariaLabel}
    onClick={onClick}
    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-700/60 bg-slate-900/60 text-slate-200 hover:bg-slate-800/60 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
  >
    {children}
  </button>
);

/* --------------------------------- Frames --------------------------------- */

export const DeviceFrame: React.FC<
  React.PropsWithChildren<{ title?: string; kind?: 'browser' | 'phone' }>
> = ({ children, title, kind = 'browser' }) => {
  const isPhone = kind === 'phone';
  return (
    <div
      className={`relative w-full ${isPhone ? 'max-w-xs mx-auto' : ''} rounded-[20px] border border-slate-600/70 bg-slate-900/50 overflow-hidden`}
    >
      {/* Chrome headers */}
      {isPhone ? (
        <div className="relative h-8 bg-slate-900/70 border-b border-slate-700/70">
          <div className="absolute left-1/2 top-1 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-800/80" />
        </div>
      ) : (
        <div className="flex items-center gap-2 border-b border-slate-700/70 bg-slate-900/60 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 h-6 flex-1 rounded-md bg-slate-800/70" />
          <span className="hidden md:block text-[10px] text-slate-400">{title}</span>
        </div>
      )}
      {/* Content area */}
      <div className={isPhone ? 'aspect-[9/18] bg-slate-900/40' : 'aspect-[16/10] bg-slate-900/40'}>
        {children}
      </div>
    </div>
  );
};

/* -------------------------- Right-side Content Bits ------------------------ */

export const RightPreviewChrome: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Soft grid + spotlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,.08)_1px,transparent_0)] [background-size:22px_22px]"
      />
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Content slot */}
      <div className="relative h-full w-full p-3 md:p-5">{children}</div>

      {/* Floating badges */}
      <div className="pointer-events-none absolute left-3 top-3 flex gap-2">
        {['Accessible', 'Responsive', 'MIT'].map((b) => (
          <span
            key={b}
            className="rounded-full border border-slate-700/60 bg-slate-900/70 px-2.5 py-1 text-[10px] text-slate-300"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};

export const PhonePreviewOverlay: React.FC = () => {
  return (
    <div className="h-full w-full p-3 flex flex-col">
      <div className="rounded-xl border border-slate-700/60 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-emerald-600/10 p-3">
        <div className="text-xs font-semibold text-slate-200 flex items-center gap-1">
          <Smartphone className="h-3.5 w-3.5" /> Quick Actions
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
          {['Browse Blocks', 'Use Template', 'Token Lab'].map((t) => (
            <div
              key={t}
              className="rounded-lg border border-slate-700/60 bg-slate-900/60 px-2 py-2 text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-slate-700/60 bg-slate-900/60 p-3">
        <div className="text-xs font-semibold text-slate-200">Recent Activity</div>
        <ul className="mt-2 space-y-2 text-[11px] text-slate-300/90">
          <li className="flex items-center justify-between">
            <span>Added Pricing block</span>
            <span className="text-slate-500">2m</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Customized tokens</span>
            <span className="text-slate-500">14m</span>
          </li>
          <li className="flex items-center justify-between">
            <span>Exported Template</span>
            <span className="text-slate-500">1h</span>
          </li>
        </ul>
      </div>
    </div>
  );
};




