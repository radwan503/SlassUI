"use client";

import {
  ArrowRight,
  Bot,
  BarChart3,
  MessageSquare,
  Layers,
  Sparkles,
  ShieldCheck,
  Share2,
  Download,
  Link2,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";

/** ---------------------------------------
 *  TimelineContent (local shim)
 * -------------------------------------- */
function TimelineContent({
  as = "div",
  animationNum = 0,
  customVariants,
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: React.RefObject<HTMLElement | HTMLDivElement | null>;
  className?: string;
  children?: React.ReactNode;
}) {
  const Tag = as;
  const MotionTag: any =
    Tag === "h1" ? motion.h1 :
    Tag === "h2" ? motion.h2 :
    Tag === "h3" ? motion.h3 :
    Tag === "p"  ? motion.p  :
    Tag === "span" ? motion.span :
    motion.div;

  return (
    <MotionTag
      variants={customVariants}
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.35, once: true }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** ---------------------------------------
 *  Animation Variants
 * -------------------------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.06 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const tiltIn: Variants = {
  hidden: { opacity: 0, rotateX: 20, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5 },
  }),
};

const floatY: Variants = {
  initial: { y: 0 },
  animate: { y: [0, -6, 0], transition: { repeat: Infinity, duration: 4 } },
};

/** ---------------------------------------
 *  Small UI Bits
 * -------------------------------------- */
function Badge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-xs shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
      <Icon className="h-3.5 w-3.5" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Metric({
  label,
  value,
  hint,
  trend = "up",
}: {
  label: string;
  value: string;
  hint?: string;
  trend?: "up" | "down";
}) {
  const trendColor =
    trend === "up"
      ? "text-emerald-600 dark:text-emerald-400"
      : "text-amber-600 dark:text-amber-400";
  return (
    <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="text-[13px] text-neutral-500">{label}</div>
      {hint ? <div className={`mt-2 text-xs ${trendColor}`}>{hint}</div> : null}
    </div>
  );
}

function IntegrationChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
      <Globe className="h-3 w-3" />
      {name}
    </span>
  );
}

/** ---------------------------------------
 *  Faux Chart (SVG bars)
 * -------------------------------------- */
function MiniBars() {
  const bars = useMemo(
    () =>
      new Array(12).fill(0).map((_, i) => ({
        h: Math.round(20 + Math.random() * 80),
        d: 0.12 * i,
      })),
    []
  );

  return (
    <svg viewBox="0 0 260 80" className="h-24 w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x={12 + i * 20}
          width="12"
          rx="3"
          initial={{ y: 80, height: 0 }}
          animate={{ y: 80 - b.h, height: b.h }}
          transition={{ delay: 0.2 + b.d, type: "spring", stiffness: 120, damping: 18 }}
          fill="url(#g1)"
          opacity="0.9"
        />
      ))}
    </svg>
  );
}

/** ---------------------------------------
 *  Tabs Spec
 * -------------------------------------- */
const TABS:any = [
  {
    key: "ai",
    label: "AI Insights",
    icon: Bot,
    title: "AI-powered insights that spotlight what matters",
    desc:
      "Surface anomalies, predict churn, and identify growth pockets with explainable narratives—no dashboard spelunking required.",
    bullets: ["Explainable results", "Auto-summaries", "Anomaly alerts"],
    ctas: [
      { label: "Try a sample insight", icon: Sparkles },
      { label: "Export as report", icon: Download },
    ],
    integrations: ["Stripe", "Postgres", "Segment", "Shopify"],
  },
  {
    key: "reporting",
    label: "Visual Reporting",
    icon: BarChart3,
    title: "Visual reporting that actually feels alive",
    desc:
      "Composable blocks with animated charts and shareable links. Build once—publish to web, PDF, and Slack without version drift.",
    bullets: ["Blocks & snapshots", "One-click share", "Audit trail"],
    ctas: [
      { label: "Open live snapshot", icon: Share2 },
      { label: "Get a share link", icon: Link2 },
    ],
    integrations: ["Slack", "Notion", "Google Drive"],
  },
  {
    key: "chat",
    label: "Real-time Chat",
    icon: MessageSquare,
    title: "Delightfully contextual chat for product & support",
    desc:
      "Keep conversations in flow with tone controls, quick actions, and presence indicators that match your brand.",
    bullets: ["Tone profiles", "Quick actions", "Presence & typing"],
    ctas: [
      { label: "Start a demo chat", icon: MessageSquare },
      { label: "View transcript", icon: Download },
    ],
    integrations: ["Zendesk", "Linear", "Intercom"],
  },
  {
    key: "stack",
    label: "Composable Stack",
    icon: Layers,
    title: "A composable feature stack, toggled at will",
    desc:
      "Turn on memberships, roles, usage limits, and webhooks without plumbing backend primitives each time.",
    bullets: ["Memberships", "RBAC", "Usage limits"],
    ctas: [
      { label: "Configure modules", icon: Layers },
      { label: "See policy diff", icon: CheckCircle2 },
    ],
    integrations: ["Auth", "Webhook", "Billing", "S3"],
  },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/** ---------------------------------------
 *  Tab Card
 * -------------------------------------- */
function TabCard({
  active,
  icon: Icon,
  title,
  desc,
  bullets,
  i,
}: {
  active: boolean;
  icon: any;
  title: string;
  desc: string;
  bullets: string[];
  i: number;
}) {
  return (
    <motion.div
      variants={tiltIn}
      custom={i}
      initial="hidden"
      animate="visible"
      className={[
        "group relative overflow-hidden rounded-2xl border p-5 transition-all",
        active
          ? "border-indigo-300/50 bg-gradient-to-b from-white to-indigo-50 shadow-[0_10px_35px_-15px_rgba(99,102,241,0.35)] dark:from-neutral-900 dark:to-neutral-900/60 dark:border-indigo-600/30"
          : "border-neutral-200 bg-white hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900",
      ].join(" ")}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
          <Icon className="h-4 w-4" />
        </span>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
      <ul className="mt-4 grid gap-2 text-sm">
        {bullets.map((b, j) => (
          <li key={j} className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-xl border border-neutral-200/70 bg-white/60 p-3 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/50">
        <MiniBars />
      </div>
    </motion.div>
  );
}

/** ---------------------------------------
 *  Chat Preview chip
 * -------------------------------------- */
function ChatPreview() {
  return (
    <motion.div
      variants={tiltIn}
      custom={3}
      initial="hidden"
      animate="visible"
      className="relative rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm ring-1 ring-black/0 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60"
    >
      <div className="absolute inset-x-0 -top-10 mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-emerald-500/30 blur-2xl" />
      <div className="space-y-3">
        <div className="w-fit rounded-xl bg-neutral-100 px-3 py-2 text-[13px] dark:bg-neutral-800">
          Hey! Your EU checkout errors dropped <span className="font-semibold text-emerald-600">−82%</span> after the
          edge patch. Great work!
        </div>
        <div className="ml-auto w-fit rounded-xl bg-indigo-600 px-3 py-2 text-[13px] text-white">
          Nice—promote patch to all regions.
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-neutral-500">Context-aware • Tone control</div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs text-white hover:opacity-90 dark:bg-white dark:text-neutral-900">
          Reply <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

/** ---------------------------------------
 *  CTA Row
 * -------------------------------------- */
function CTARow({
  items,
}: {
  items: { label: string; icon: any }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ label, icon: Icon }, idx) => (
        <button
          key={idx}
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </button>
      ))}
    </div>
  );
}

/** ---------------------------------------
 *  Main Section
 * -------------------------------------- */
export default function FeatureSectionNeo() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<TabKey>("ai");

  // Keyboard nav for a11y (Left/Right, Home/End)
  const tabKeys = TABS.map((t:any) => t.key);
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const i = tabKeys.indexOf(activeKey);
      if (e.key === "ArrowRight") {
        setActiveKey(tabKeys[(i + 1) % tabKeys.length]);
      } else if (e.key === "ArrowLeft") {
        setActiveKey(tabKeys[(i - 1 + tabKeys.length) % tabKeys.length]);
      } else if (e.key === "Home") {
        setActiveKey(tabKeys[0]);
      } else if (e.key === "End") {
        setActiveKey(tabKeys[tabKeys.length - 1]);
      }
    },
    [activeKey, tabKeys]
  );

  // Optional: simple auto-rotate on md+ screens (pause on hover)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const mql = typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)") : null;
    if (!mql?.matches) return;
    const id = setInterval(() => {
      if (paused) return;
      setActiveKey((prev:any) => {
        const idx = tabKeys.indexOf(prev);
        return tabKeys[(idx + 1) % tabKeys.length] as TabKey;
      });
    }, 6000);
    return () => clearInterval(id);
  }, [paused, tabKeys]);

  const activeTab = TABS.find((t:any) => t.key === activeKey)!;

  return (
    <section
      ref={ref}
      className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 dark:from-slate-900 dark:via-gray-900 dark:to-indigo-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Deep backdrop w/ navy gradient for extra depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000,transparent)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
      </div>

      {/* Header */}
      <div className="text-center">
        <TimelineContent
          as="h2"
          animationNum={0}
          timelineRef={ref}
          customVariants={fadeUp}
          className="text-balance text-3xl font-semibold sm:text-4xl md:text-5xl"
        >
          A smarter, calmer feature suite
        </TimelineContent>
        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={ref}
          customVariants={fadeUp}
          className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-neutral-600 sm:text-base dark:text-neutral-400"
        >
          Composable building blocks for memberships, chat, AI insights, and visual reporting—designed to feel fast and
          look beautiful.
        </TimelineContent>

        {/* Badges */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <Badge icon={Sparkles} text="AI-assisted" />
          <Badge icon={Layers} text="Composable" />
          <Badge icon={ShieldCheck} text="Enterprise-ready" />
        </motion.div>

        {/* Integrations ribbon */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          {activeTab.integrations.map((n:any) => (
            <IntegrationChip key={n} name={n} />
          ))}
        </motion.div>
      </div>

      {/* Metrics rail */}
      <motion.div
        className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate="visible"
      >
        <Metric value="10M+" label="Sessions analyzed" hint="+3.2% WoW" trend="up" />
        <Metric value="98.9%" label="CSAT with chat" hint="+0.7% MoM" trend="up" />
        <Metric value="45s" label="Time-to-insight" hint="−12s vs last week" trend="up" />
        <Metric value="15+" label="Building blocks" />
      </motion.div>

      {/* Mobile tab pills */}
      <div
        role="tablist"
        aria-label="Feature tabs"
        onKeyDown={onKeyDown}
        className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden"
      >
        {TABS.map((t:any) => {
          const active = t.key === activeKey;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={active}
              aria-controls={`panel-${t.key}`}
              id={`tab-${t.key}`}
              onClick={() => setActiveKey(t.key)}
              className={[
                "flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm",
                active
                  ? "border-indigo-400 bg-indigo-50 text-indigo-700 dark:border-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300"
                  : "border-neutral-200 bg-white/70 text-neutral-700 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300",
              ].join(" ")}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Content grid */}
      <div className="mt-8 grid grid-cols-12 gap-6">
        {/* Left: Tabs list (desktop) */}
        <motion.aside
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
          className="col-span-12 lg:col-span-4"
        >
          <div
            className="sticky top-20 hidden space-y-2 lg:block"
            role="tablist"
            aria-label="Feature tabs"
            onKeyDown={onKeyDown}
          >
            {TABS.map((t:any) => {
              const active = t.key === activeKey;
              return (
                <button
                  key={t.key}
                  id={`tab-${t.key}`}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${t.key}`}
                  onClick={() => setActiveKey(t.key)}
                  className={[
                    "group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all",
                    active
                      ? "border-indigo-300/60 bg-white shadow-[0_10px_35px_-20px_rgba(99,102,241,0.45)] dark:border-indigo-600/40 dark:bg-neutral-900"
                      : "border-neutral-200 bg-white/70 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{t.label}</span>
                  </span>
                  <ArrowRight
                    className={[
                      "h-4 w-4 transition-transform",
                      active ? "translate-x-0 rotate-0" : "-translate-x-1 group-hover:translate-x-0",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </motion.aside>

        {/* Right: Active panel */}
        <div className="col-span-12 space-y-6 lg:col-span-8">
          {TABS.map((t:any, i:any) => {
            const active = t.key === activeKey;
            return (
              <motion.section
                key={t.key}
                id={`panel-${t.key}`}
                role="tabpanel"
                aria-labelledby={`tab-${t.key}`}
                variants={fadeUp}
                custom={6 + i}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
                className={[
                  "grid grid-cols-12 gap-6 rounded-3xl border p-6 transition-all",
                  active
                    ? "border-neutral-200 bg-white/80 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/70"
                    : "pointer-events-none hidden opacity-0",
                ].join(" ")}
              >
                {/* Copy + bullets + CTAs */}
                <div className="col-span-12 md:col-span-6">
                  <TabCard
                    active
                    icon={t.icon}
                    title={t.title}
                    desc={t.desc}
                    bullets={t.bullets}
                    i={0}
                  />
                  <div className="mt-4">
                    <CTARow items={t.ctas} />
                  </div>
                </div>

                {/* Visual preview area changes per tab */}
                <div className="col-span-12 md:col-span-6">
                  {t.key === "ai" && (
                    <motion.div
                      variants={floatY}
                      initial="initial"
                      animate="animate"
                      className="grid h-full place-items-center rounded-2xl border border-dashed border-indigo-300/50 bg-gradient-to-br from-indigo-50 to-emerald-50 p-6 dark:from-indigo-950/40 dark:to-emerald-950/30"
                    >
                      <div className="max-w-sm text-center">
                        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-white">
                          <Bot className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          “Top drivers for churn this week: <b>slow checkout</b>, <b>coupon conflicts</b>, and
                          <b> stockouts</b>. Predicted risk: <span className="text-amber-600">↑ 12%</span>.”
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {t.key === "reporting" && (
                    <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
                      <MiniBars />
                      <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                        <span>Live snapshot • Shareable link</span>
                        <button className="inline-flex items-center gap-1 rounded-md border px-2 py-1 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800">
                          <Share2 className="h-3.5 w-3.5" /> Share
                        </button>
                      </div>
                    </div>
                  )}

                  {t.key === "chat" && <ChatPreview />}

                  {t.key === "stack" && (
                    <motion.div
                      variants={tiltIn}
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-3"
                    >
                      {[
                        { k: "Memberships", d: "Monthly, trial, yearly" },
                        { k: "RBAC", d: "Roles & permissions" },
                        { k: "Usage", d: "Rate limits & quotas" },
                        { k: "Webhooks", d: "Sync external tools" },
                      ].map((b, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60"
                        >
                          <div className="mb-1 font-medium">{b.k}</div>
                          <div className="text-neutral-500">{b.d}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}


