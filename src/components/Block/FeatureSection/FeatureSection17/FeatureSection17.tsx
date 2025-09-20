// app/sections/FeatureSectionNeo.tsx
"use client";

import {
  ArrowRight,
  ArrowUpRight,
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
  Users,
  Star,
  Zap,
} from "lucide-react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";

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
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const tiltIn: Variants = {
  hidden: { opacity: 0, rotateX: 12, y: 14 },
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
 *  Small UI Bits (solid surfaces)
 * -------------------------------------- */
function Badge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs shadow dark:bg-neutral-800">
      <Icon className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
      <span className="font-medium text-neutral-800 dark:text-neutral-200">{text}</span>
    </div>
  );
}

// --- Visual helpers (drop above export default) -----------------------------

function toPath(data: number[], w: number, h: number, p: number) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const span = Math.max(1, max - min);
  const xStep = (w - p * 2) / Math.max(1, data.length - 1);
  const y = (v: number) => h - p - ((v - min) / span) * (h - p * 2);

  const pts = data.map((v, i) => `${p + i * xStep},${y(v)}`);
  const line = `M ${pts[0]} L ${pts.slice(1).join(" ")}`;
  const area = `${line} L ${w - p},${h - p} L ${p},${h - p} Z`;
  return { line, area };
}

function SparkLine({ data }: { data: number[] }) {
  const w = 140, h = 36, p = 6;
  const { line } = toPath(data, w, h, p);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d={line} fill="none" stroke="url(#sparkGrad)" strokeWidth="2" />
    </svg>
  );
}

function AreaChart({ data }: { data: number[] }) {
  const w = 520, h = 160, p = 10;
  const { line, area } = toPath(data, w, h, p);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity={0.9}>
        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="#4f46e5" strokeWidth="2" />
      </g>
      {/* x-axis baseline */}
      <line x1={p} y1={h - p} x2={w - p} y2={h - p} className="stroke-neutral-200 dark:stroke-neutral-800" />
    </svg>
  );
}

function DonutChart({
  segments = [
    { label: "North America", value: 38, color: "#4f46e5" },
    { label: "EMEA", value: 32, color: "#10b981" },
    { label: "APAC", value: 30, color: "#f59e0b" },
  ],
}: {
  segments?: { label: string; value: number; color: string }[];
}) {
  const size = 160;
  const r = 48;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0);
  let offset = 0;

  return (
    <div className="flex items-center gap-4">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-32 w-32 -rotate-90">
        <circle cx={size/2} cy={size/2} r={r} stroke="currentColor" className="text-neutral-200 dark:text-neutral-800" strokeWidth="10" fill="none" />
        {segments.map((s) => {
          const frac = s.value / total;
          const dash = frac * c;
          const el = (
            <circle
              key={s.label}
              cx={size/2}
              cy={size/2}
              r={r}
              stroke={s.color}
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
            />
          );
          offset += dash;
          return el;
        })}
        {/* center dot */}
        <circle cx={size/2} cy={size/2} r={r - 18} fill="white" className="dark:fill-neutral-900" />
        <text x="50%" y="50%" transform="rotate(90,80,80)" textAnchor="middle" dominantBaseline="central" className="fill-neutral-800 dark:fill-neutral-100 text-sm">
          {total}k
        </text>
      </svg>
      <div className="space-y-2 text-sm">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
            <span className="text-neutral-700 dark:text-neutral-300">{s.label}</span>
            <span className="ml-auto font-medium text-neutral-900 dark:text-neutral-100">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiCard({
  label, value, hint, data,
}: {
  label: string; value: string; hint: string; data: number[];
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">{value}</div>
      <div className="text-xs text-emerald-600 dark:text-emerald-400">{hint}</div>
      <div className="mt-2">
        <SparkLine data={data} />
      </div>
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
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">{value}</div>
      <div className="text-[13px] text-neutral-500 dark:text-neutral-400">{label}</div>
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
          opacity="0.95"
        />
      ))}
    </svg>
  );
}

/** ---------------------------------------
 *  Tabs Spec (solid) + extras for content
 * -------------------------------------- */
const TABS: any = [
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
    useCases: ["Reduce churn", "Spot anomalies", "Explain KPIs"],
    sublabel: "Insights • ML • Explainability",
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
    useCases: ["Board updates", "Weekly KPIs", "Client reports"],
    sublabel: "Dashboards • Snapshots • Sharing",
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
    useCases: ["CSAT boost", "Triage faster", "Close loops"],
    sublabel: "Support • Collaboration",
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
    useCases: ["Launch faster", "Scale safely", "Bill usage"],
    sublabel: "Auth • Billing • Limits",
  },
] as const;

type TabKey = (typeof TABS)[number]["key"];

/** ---------------------------------------
 *  TabCard (unchanged visuals)
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
          ? "border-indigo-300 bg-white shadow-[0_12px_40px_-18px_rgba(79,70,229,0.35)] dark:border-indigo-700/60 dark:bg-neutral-900"
          : "border-neutral-200 bg-white hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900",
      ].join(" ")}
    >
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white dark:bg-indigo-500">
          <Icon className="h-4 w-4" />
        </span>
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h4>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
      <ul className="mt-4 grid gap-2 text-sm">
        {bullets.map((b, j) => (
          <li key={j} className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-neutral-700 dark:text-neutral-300">{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
        <MiniBars />
      </div>
    </motion.div>
  );
}

/** ---------------------------------------
 *  Chat Preview chip (unchanged)
 * -------------------------------------- */
function ChatPreview() {
  return (
    <motion.div
      variants={tiltIn}
      custom={3}
      initial="hidden"
      animate="visible"
      className="relative rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="space-y-3">
        <div className="w-fit rounded-xl bg-neutral-100 px-3 py-2 text-[13px] text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
          Hey! Your EU checkout errors dropped <span className="font-semibold text-emerald-600">−82%</span> after the
          edge patch. Great work!
        </div>
        <div className="ml-auto w-fit rounded-xl bg-indigo-600 px-3 py-2 text-[13px] text-white">
          Nice—promote patch to all regions.
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-neutral-500 dark:text-neutral-400">Context-aware • Tone control</div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs text-white hover:opacity-90 dark:bg-white dark:text-neutral-900">
          Reply <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

/** ---------------------------------------
 *  Trust/Use-cases/Matrix/Testimonials (unchanged)
 * -------------------------------------- */
function TrustBar() {
  const items = ["AcmeCo", "Globex", "Umbrella", "Initech", "Soylent", "Stark"];
  return (
    <div className="mt-8">
      <div className="text-center text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        Trusted by product teams at
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-600 dark:text-neutral-300">
        {items.map((n) => (
          <span key={n} className="opacity-80 transition hover:opacity-100">{n}</span>
        ))}
      </div>
    </div>
  );
}

function UseCaseChips({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((u) => (
        <span
          key={u}
          className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          <Zap className="h-3.5 w-3.5 text-amber-500" />
          {u}
        </span>
      ))}
    </div>
  );
}

function FeatureMatrix({ activeKey }: { activeKey: TabKey }) {
  const rows = [
    { k: "ai", items: ["Explainable AI", "Anomaly Alerts", "Churn Predict", "SQL-free"] },
    { k: "reporting", items: ["Snapshots", "Share Links", "PDF Export", "Audit Trail"] },
    { k: "chat", items: ["Tone Profiles", "Quick Actions", "Presence", "Shortcuts"] },
    { k: "stack", items: ["Memberships", "RBAC", "Usage Limits", "Webhooks"] },
  ];
  const current = rows.find((r) => r.k === activeKey)?.items ?? [];
  return (
    <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-2 font-medium text-neutral-900 dark:text-neutral-100">What’s included</div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {current.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialStrip() {
  const cards = [
    { name: "Amira", role: "PM @ AcmeCo", quote: "Cut our reporting prep from hours to minutes." },
    { name: "Liam", role: "Support Lead @ Umbrella", quote: "CSAT up 4 points after rolling out chat." },
    { name: "Rin", role: "Data @ Globex", quote: "AI insights catch things our dashboards miss." },
  ];
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {cards.map((c, i) => (
        <motion.div
          key={c.name}
          variants={tiltIn}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-300">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{c.name}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{c.role}</div>
            </div>
            <div className="ml-auto flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">“{c.quote}”</p>
        </motion.div>
      ))}
    </div>
  );
}

/** ---------------------------------------
 *  NEW: Segmented Carousel Tabs (mobile/tablet)
 * -------------------------------------- */
function SegmentedTabs({
  activeKey,
  setActiveKey,
  onKeyDown,
}: {
  activeKey: TabKey;
  setActiveKey: (k: TabKey) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [pill, setPill] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const updatePill = useCallback(() => {
    const container = containerRef.current;
    const btn = btnRefs.current[activeKey];
    if (!container || !btn) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setPill({ left: bRect.left - cRect.left, width: bRect.width });
  }, [activeKey]);

  useLayoutEffect(() => {
    updatePill();
    const handle = () => updatePill();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [updatePill]);

  useEffect(() => {
    const btn = btnRefs.current[activeKey];
    btn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeKey]);

  const statFor = (k: TabKey) => {
    const t = TABS.find((x: any) => x.key === k);
    return (t?.bullets?.length ?? 0) + (t?.useCases?.length ?? 0);
  };

  return (
    <div
      role="tablist"
      aria-label="Feature tabs"
      ref={containerRef}
      onKeyDown={onKeyDown}
      className="relative mt-8 flex items-center gap-2 overflow-x-auto rounded-2xl border border-neutral-200 bg-white p-1.5 pb-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 lg:hidden"
    >
      {/* animated pill */}
      <motion.div
        layout
        className="pointer-events-none absolute top-1.5 h-[calc(100%-12px)] rounded-xl bg-neutral-900 dark:bg-white"
        style={{ left: pill.left, width: pill.width }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
      {TABS.map((t: any) => {
        const active = t.key === activeKey;
        return (
          <button
            key={t.key}
            ref={(el:any) => (btnRefs.current[t.key] = el)}
            role="tab"
            aria-selected={active}
            aria-controls={`panel-${t.key}`}
            id={`tab-${t.key}`}
            onClick={() => setActiveKey(t.key)}
            className={[
              "relative z-10 flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors",
              active
                ? "text-white dark:text-neutral-900"
                : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
            ].join(" ")}
          >
            <t.icon className="h-4 w-4" />
            <span>{t.label}</span>
            <span
              className={[
                "ml-1 inline-flex items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                active
                  ? "bg-white/20 text-white dark:bg-neutral-900/15 dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
              ].join(" ")}
            >
              {statFor(t.key)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** ---------------------------------------
 *  NEW: Vertical Rail Tabs (desktop)
 *  - Animated background card (layoutId)
 *  - Progress rail
 *  - Sublabel + stat chip
 * -------------------------------------- */
function TabRail({
  activeKey,
  setActiveKey,
  onKeyDown,
}: {
  activeKey: TabKey;
  setActiveKey: (k: TabKey) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}) {
  const statFor = (k: TabKey) => {
    const t = TABS.find((x: any) => x.key === k);
    return (t?.bullets?.length ?? 0) + (t?.useCases?.length ?? 0);
  };

  return (
    <div
      className="sticky top-20 hidden lg:block"
      role="tablist"
      aria-label="Feature tabs"
      onKeyDown={onKeyDown}
    >
      <div className="relative">
        {/* vertical rail line */}
        <div
          aria-hidden
          className="absolute left-4 top-0 h-full w-[2px] rounded bg-neutral-200 dark:bg-neutral-800"
        />
        <div className="space-y-2">
          {TABS.map((t: any) => {
            const active = t.key === activeKey;
            return (
              <div key={t.key} className="relative pl-8">
                {/* node on rail */}
                <span
                  aria-hidden
                  className={[
                    "absolute left-3 top-1/2 z-10 h-2.5 w-2.5 -translate-y-1/2 rounded-full ring-4 transition",
                    active
                      ? "bg-indigo-500 ring-indigo-100 dark:ring-indigo-900/40"
                      : "bg-neutral-300 ring-white dark:bg-neutral-700 dark:ring-neutral-900",
                  ].join(" ")}
                />
                <button
                  id={`tab-${t.key}`}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${t.key}`}
                  onClick={() => setActiveKey(t.key)}
                  className="relative w-full text-left"
                >
                  {/* animated background card */}
                  {active && (
                    <motion.div
                      layoutId="rail-bg"
                      className="absolute inset-0 -z-10 rounded-2xl border border-indigo-500/50 bg-white shadow-md dark:border-indigo-600/40 dark:bg-neutral-900"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center justify-between rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={[
                          "grid h-9 w-9 place-items-center rounded-xl",
                          active
                            ? "bg-indigo-600 text-white"
                            : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
                        ].join(" ")}
                      >
                        <t.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <div
                          className={[
                            "font-medium",
                            active ? "text-neutral-900 dark:text-white" : "text-neutral-800 dark:text-neutral-100",
                          ].join(" ")}
                        >
                          {t.label}
                        </div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.sublabel}</div>
                      </div>
                    </div>
                    <div
                      className={[
                        "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold",
                        active
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"
                          : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
                      ].join(" ")}
                    >
                      {statFor(t.key)} items
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** ---------------------------------------
 *  CTA Row
 * -------------------------------------- */
function CTARow({ items }: { items: { label: string; icon: any }[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(({ label, icon: Icon }, idx) => (
        <button
          key={idx}
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </button>
      ))}
    </div>
  );
}

/** ---------------------------------------
 *  Main Section (modern + unique + responsive + contentful)
 * -------------------------------------- */
export default function FeatureSectionNeo() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<TabKey>("ai");
  const shouldReduce = useReducedMotion();

  // Keyboard nav for a11y (Left/Right, Home/End)
  const tabKeys = TABS.map((t: any) => t.key);
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

  // Optional: auto-rotate on md+ screens (pause on hover)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (shouldReduce) return;
    const mql = typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)") : null;
    if (!mql?.matches) return;
    const id = setInterval(() => {
      if (paused) return;
      setActiveKey((prev: any) => {
        const idx = tabKeys.indexOf(prev);
        return tabKeys[(idx + 1) % tabKeys.length] as TabKey;
      });
    }, 6000);
    return () => clearInterval(id);
  }, [paused, tabKeys, shouldReduce]);

  const activeTab = TABS.find((t: any) => t.key === activeKey)!;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-[#0b1220] dark:via-[#0c1633] dark:to-[#0d1b3a]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-multiply dark:opacity-30"
        style={{
          background:
            "radial-gradient(600px 280px at 10% 5%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(600px 280px at 90% 10%, rgba(16,185,129,0.12), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="text-center">
          <TimelineContent
            as="h2"
            animationNum={0}
            timelineRef={ref}
            customVariants={fadeUp}
            className="text-balance text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl dark:text-white"
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

          {/* Integrations */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            {activeTab.integrations.map((n: any) => (
              <IntegrationChip key={n} name={n} />
            ))}
          </motion.div>

          {/* Trust bar */}
          <TrustBar />
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

        {/* NEW: Segmented carousel (mobile/tablet) */}
        <SegmentedTabs
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          onKeyDown={onKeyDown}
        />

        {/* Content grid */}
        <div className="mt-6 grid grid-cols-12 gap-6">
          {/* NEW: Vertical rail (desktop) */}
          <aside className="col-span-12 lg:col-span-4">
            <TabRail
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              onKeyDown={onKeyDown}
            />
          </aside>

          {/* Panels */}
          <div className="col-span-12 space-y-6 lg:col-span-8">
            {TABS.map((t: any, i: any) => {
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
                      ? "border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
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
                    <UseCaseChips items={t.useCases ?? []} />
                    <div className="mt-4">
                      <CTARow items={t.ctas} />
                    </div>
                    <FeatureMatrix activeKey={t.key} />
                  </div>

                  {/* Visual preview area */}
                  <div className="col-span-12 md:col-span-6">
                    {t.key === "ai" && (
                      <motion.div
                        variants={shouldReduce ? undefined : floatY}
                        initial={shouldReduce ? undefined : "initial"}
                        animate={shouldReduce ? undefined : "animate"}
                        className="grid h-full place-items-center rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950"
                      >
                        <div className="max-w-sm text-center">
                          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-white">
                            <Bot className="h-5 w-5" />
                          </div>
                          <p className="text-sm text-neutral-700 dark:text-neutral-300">
                            “Top drivers for churn this week: <b>slow checkout</b>, <b>coupon conflicts</b>, and
                            <b> stockouts</b>. Predicted risk: <span className="text-amber-600">↑ 12%</span>.”
                          </p>
                          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs text-white hover:bg-indigo-700">
                            Try a sample insight <ArrowUpRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {t.key === "reporting" && (
                      <div className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
                        {/* Header controls */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Revenue dashboard</span>
                            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                              Live snapshot
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
                              Last 30 days
                            </button>
                            <button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
                              <Share2 className="h-3.5 w-3.5" /> Share
                            </button>
                          </div>
                        </div>

                        {/* Charts row */}
                        <div className="mt-5 grid grid-cols-12 gap-4">
                          <div className="col-span-12 md:col-span-8">
                            <AreaChart data={useMemo(() => [28,32,31,35,38,36,40,44,43,48,52,50,54,59,61], [])} />
                            <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Gross MRR</span>
                              <span>•</span>
                              <span>Weekly cadence</span>
                            </div>
                          </div>
                          <div className="col-span-12 md:col-span-4">
                            <DonutChart />
                          </div>
                        </div>

                        {/* KPIs */}
                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                          <KpiCard label="MRR" value="$128k" hint="+6.2% WoW" data={useMemo(() => [82,84,86,90,94,98,102,108,112,116,120,128], [])} />
                          <KpiCard label="ARPA" value="$72" hint="+2.1% MoM" data={useMemo(() => [60,61,61,63,64,66,66,67,69,70,71,72], [])} />
                          <KpiCard label="New logos" value="143" hint="+12 this week" data={useMemo(() => [88,91,96,92,98,101,108,112,118,123,139,143], [])} />
                        </div>

                        {/* Footer */}
                        <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                          <span>Auto-export to PDF & Slack</span>
                          <button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2 py-1 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800">
                            <Share2 className="h-3.5 w-3.5" /> Get a share link
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
                            className="rounded-xl border border-neutral-200 bg-white p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900"
                          >
                            <div className="mb-1 font-medium text-neutral-900 dark:text-neutral-100">{b.k}</div>
                            <div className="text-neutral-500 dark:text-neutral-400">{b.d}</div>
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

        {/* Social proof */}
        <TestimonialStrip />
      </div>
    </section>
  );
}
