import React, { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Layers,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Button from "../../../../utils/Button";

const HeroSection35 = () => {
  const [tab, setTab] = useState<"components" | "templates" | "kits">("components");

  const TabButton = ({
    id,
    label,
    active,
    onClick,
  }: {
    id: string;
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      id={id}
      aria-selected={active}
      role="tab"
      onClick={onClick}
      className={[
        "px-4 py-2 rounded-xl text-sm font-medium transition",
        active
          ? "bg-white/10 text-white ring-1 ring-white/15"
          : "text-textSlate hover:bg-white/5 ring-1 ring-white/10",
      ].join(" ")}
    >
      {label}
    </button>
  );

  return (
    <section className="relative bg-primary border-t border-darkBg py-18 md:py-28 overflow-hidden">
      {/* Background grid + glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(60% 60% at 50% 35%, black 55%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-400/10 blur-[100px]" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Heading + copy + CTAs + stats */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-textSlate">
              <Sparkles className="h-3.5 w-3.5" />
              Crafted for React & Tailwind Developers
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] text-textColor">
              Ship modern UIs{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                in minutes, not days
              </span>
              .
            </h1>

            <p className="mt-4 text-sm md:text-base text-textGray max-w-xl">
              Access <span className="font-semibold text-textColor">160+ pre-built sections</span>—from
              Hero and Pricing to Testimonials and Dashboards. Copy, paste, and customize with{" "}
              <span className="text-indigo-300 font-semibold">React</span> +{" "}
              <span className="text-indigo-300 font-semibold">TailwindCSS</span>. Built with a11y,
              dark mode, and clean semantics.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/ui-blocks">
                <Button
                  className="text-textGray dark:text-gray-200 text-center text-sm"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Browse Components
                </Button>
              </Link>
              <Link to="/template">
                <Button
                  className="text-darkBg dark:text-gray-200 text-center text-sm"
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore Templates
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                ["160+", "Sections"],
                ["28", "Categories"],
                ["Weekly", "Updates"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur text-sm"
                >
                  <div className="text-2xl font-extrabold text-textColor">{k}</div>
                  <div className="text-textSlate">{v}</div>
                </div>
              ))}
            </div>

            {/* Feature chips */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                [<CheckCircle2 key="a" className="h-4 w-4 text-emerald-400" />, "Production-ready", "Copy & ship"],
                [<ShieldCheck key="b" className="h-4 w-4 text-sky-400" />, "Accessible", "WCAG-friendly"],
                [<Gauge key="c" className="h-4 w-4 text-indigo-400" />, "Lightweight", "<2kb per section"],
                [<Layers key="d" className="h-4 w-4 text-cyan-300" />, "Composable", "Headless hooks"],
              ].map(([icon, title, sub]) => (
                <li
                  key={String(title)}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10"
                >
                  {icon as React.ReactNode}
                  <div>
                    <p className="font-semibold text-textColor">{title}</p>
                    <p className="text-textSlate">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Tabbed content panel */}
          <div>
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Library categories"
              className="inline-flex gap-2 rounded-2xl bg-white/5 p-1 ring-1 ring-white/10"
            >
              <TabButton
                id="tab-components"
                label="Components"
                active={tab === "components"}
                onClick={() => setTab("components")}
              />
              <TabButton
                id="tab-templates"
                label="Templates"
                active={tab === "templates"}
                onClick={() => setTab("templates")}
              />
              <TabButton
                id="tab-kits"
                label="Starter Kits"
                active={tab === "kits"}
                onClick={() => setTab("kits")}
              />
            </div>

            {/* Panel */}
            <div
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
              className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur-xl"
            >
              {tab === "components" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["Hero Blocks", "Eye-catching first impression"],
                    ["Pricing", "Tiered cards with toggles"],
                    ["Testimonials", "Social proof layouts"],
                    ["Navbars", "Sticky + mega menus"],
                    ["Dash Cards", "Metrics & charts shells"],
                    ["Footers", "CTA, links, credits"],
                  ].map(([title, sub]) => (
                    <article
                      key={title}
                      className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-textColor">{title}</h3>
                        <Puzzle className="h-4 w-4 text-textSlate group-hover:text-textColor" />
                      </div>
                      <p className="mt-1 text-sm text-textSlate">{sub}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-textSlate">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        Copy-paste ready
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {tab === "templates" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["SaaS Landing", "Hero + Pricing + FAQ"],
                    ["Dashboard Shell", "Sidebar + content + stats"],
                    ["Docs Layout", "Sidebar nav + MDX styles"],
                    ["Auth Pages", "Login, register, reset"],
                  ].map(([title, sub]) => (
                    <article
                      key={title}
                      className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-textColor">{title}</h3>
                        <Layers className="h-4 w-4 text-textSlate group-hover:text-textColor" />
                      </div>
                      <p className="mt-1 text-sm text-textSlate">{sub}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-textSlate">
                        <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                        A11y & dark-mode ready
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {tab === "kits" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["Starter + Vite", "React + Tailwind + ESLint"],
                    ["Starter + Next", "App Router + Tailwind"],
                    ["Charts Kit", "Recharts shells + cards"],
                    ["Forms Kit", "Zod + RHF patterns"],
                  ].map(([title, sub]) => (
                    <article
                      key={title}
                      className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-textColor">{title}</h3>
                        <Rocket className="h-4 w-4 text-textSlate group-hover:text-textColor" />
                      </div>
                      <p className="mt-1 text-sm text-textSlate">{sub}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-textSlate">
                        <Gauge className="h-3.5 w-3.5 text-indigo-400" />
                        Performance-first defaults
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Mini “why us” strip */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-center">
              {[
                ["A+", "Lighthouse UI"],
                ["<2kb", "Per section"],
                ["0 setup", "Copy & paste"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10"
                >
                  <p className="font-semibold text-textColor">{k}</p>
                  <p className="text-textSlate">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row">
          <p className="text-sm text-textSlate">
            New blocks land every week. Join 3,200+ developers building faster with our React + Tailwind library.
          </p>
          <div className="flex gap-3">
            <Link to="/ui-blocks">
              <Button
                className="text-textGray dark:text-gray-200 text-center text-sm"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Start Browsing
              </Button>
            </Link>
            <Link to="/template">
              <Button
                className="text-darkBg dark:text-gray-200 text-center text-sm"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
              >
                See a Full Template
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection35;
