import { type ReactNode } from "react";
import {
  Plug,
  Workflow,
  Settings2,
  LineChart,
  PiggyBank,
  Infinity as InfinityIcon,
  GitBranch,
  Shuffle,
  Database,
  MousePointer2,
  Layers3,
  NotebookPen,
} from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  tone?:
    | "emerald"
    | "cyan"
    | "violet"
    | "lime"
    | "rose"
    | "sky"
    | "amber"
    | "slate";
  children?: ReactNode;
};

export default function FeatureSection16() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-100">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-semibold tracking-wide text-indigo-600">
            Experience Next‑Gen Automation
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Features Flows Actions
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Supercharge your workflows with AI‑powered automation, a sleek visual
            canvas, and limitless integrations. Save time, reduce costs, and
            scale effortlessly.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card
            title="Seamless Integrations"
            icon={<Plug className="h-5 w-5" />}
            tone="emerald"
            description="Connect with 300+ apps including Slack, Shopify, Google Suite, and CRMs — all in one place."
          >
            <IconsPile />
          </Card>

          <Card
            title="Visual Flow Builder"
            icon={<MousePointer2 className="h-5 w-5" />}
            tone="cyan"
            description="Design workflows with an intuitive drag‑and‑drop canvas — no coding required."
          >
            <MiniCanvas />
          </Card>

          <Card
            title="Custom Logic & Actions"
            icon={<Settings2 className="h-5 w-5" />}
            tone="violet"
            description="Tailor triggers and actions to perfectly fit your business operations."
          >
            <TriggerAction />
          </Card>

          <Card
            title="Affordable Scaling"
            icon={<PiggyBank className="h-5 w-5" />}
            tone="lime"
            description="Automate without limits while keeping costs lower than competitors."
          >
            <PriceRow />
          </Card>

          <Card
            title="Smart Monitoring"
            icon={<LineChart className="h-5 w-5" />}
            tone="rose"
            description="Gain real‑time insights with detailed logs and analytics dashboards."
          >
            <LogsPreview />
          </Card>

          <Card
            title="Unlimited Workflows"
            icon={<InfinityIcon className="h-5 w-5" />}
            tone="sky"
            description="Launch, scale, and iterate workflows without hitting execution limits."
          >
            <InfinityStrip />
          </Card>

          <Card
            title="Advanced Conditions"
            icon={<GitBranch className="h-5 w-5" />}
            tone="amber"
            description="Use dynamic logic to build intelligent branching and decisions."
          >
            <ConditionsPanel />
          </Card>

          <Card
            title="Pro Tools Suite"
            icon={<Layers3 className="h-5 w-5" />}
            tone="slate"
            description="Access advanced modules like Router, Iterator, Delay, and Repeater."
          >
            <ToolChips />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, icon, tone = "emerald", children }: CardProps) {
  const toneRing = {
    emerald: "ring-emerald-300/70",
    cyan: "ring-cyan-300/70",
    violet: "ring-violet-300/70",
    lime: "ring-lime-300/70",
    rose: "ring-rose-300/70",
    sky: "ring-sky-300/70",
    amber: "ring-amber-300/70",
    slate: "ring-slate-300/70",
  }[tone];

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-inset transition-all hover:scale-[1.02] hover:shadow-lg backdrop-blur ${toneRing}`}
    >
      {/* Top */}
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 text-white shadow">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
      </div>
      {/* Content */}
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* ---------- Mini UI widgets (with tiny animated connectors) ---------- */
function MiniCanvas() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Trigger", color: "bg-emerald-100 text-emerald-700" },
          { label: "Filter", color: "bg-amber-100 text-amber-700" },
          { label: "Action", color: "bg-cyan-100 text-cyan-700" },
        ].map((b, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-md border border-slate-200 px-2 py-3 text-xs font-medium ${b.color}`}
          >
            {b.label}
          </div>
        ))}
      </div>
      {/* animated path */}
      <svg className="pointer-events-none absolute inset-0" viewBox="0 0 400 120">
        <defs>
          <style>{`.dash { stroke-dasharray: 6 6; animation: dash 2.4s linear infinite; } @keyframes dash { to { stroke-dashoffset: -60; } }`}</style>
        </defs>
        <path d="M60 45 C 140 10, 260 10, 340 45" strokeWidth="2" className="dash" stroke="#0ea5e9" fill="none" />
        <path d="M60 75 C 140 110, 260 110, 340 75" strokeWidth="2" className="dash" stroke="#22c55e" fill="none" />
      </svg>
    </div>
  );
}

function TriggerAction() {
  return (
    <div className="relative rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center justify-between gap-3">
        <Badge icon={<NotebookPen className="h-4 w-4" />}>Trigger</Badge>
        <ArrowConnector />
        <Badge icon={<Settings2 className="h-4 w-4" />}>Action</Badge>
      </div>
    </div>
  );
}

function PriceRow() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs">
      <span className="font-medium text-slate-700">Your Cost</span>
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-emerald-100 px-2 py-1 font-semibold text-emerald-700">$</span>
        <span className="rounded-md bg-emerald-100 px-2 py-1 font-semibold text-emerald-700">$$</span>
        <span className="rounded-md bg-emerald-100 px-2 py-1 font-semibold text-emerald-700">$$$</span>
      </div>
    </div>
  );
}

function LogsPreview() {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs">
      <div className="grid grid-cols-5 gap-2">
        {["Time", "Flow", "Status", "Dur", "ID"].map((h) => (
          <div key={h} className="text-[10px] font-semibold text-slate-500">
            {h}
          </div>
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <>
            <div key={`t${i}`}>12:{10 + i}2</div>
            <div key={`f${i}`}>Order Sync</div>
            <div key={`s${i}`} className="text-emerald-600">OK</div>
            <div key={`d${i}`}>142ms</div>
            <div key={`i${i}`}>#{237 + i}</div>
          </>
        ))}
      </div>
    </div>
  );
}

function InfinityStrip() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center gap-2 text-xs text-slate-700">
        <span className="rounded-md bg-sky-100 px-2 py-1">Trigger</span>
        <span className="rounded-md bg-slate-200 px-2 py-1">→</span>
        <span className="rounded-md bg-sky-100 px-2 py-1">Step</span>
        <span className="rounded-md bg-slate-200 px-2 py-1">→</span>
        <span className="rounded-md bg-sky-100 px-2 py-1">Action</span>
        <span className="rounded-md bg-slate-200 px-2 py-1">→</span>
        <span className="rounded-md bg-sky-100 px-2 py-1">…∞</span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 animate-pulse bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
    </div>
  );
}

function ConditionsPanel() {
  return (
    <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-slate-500">Condition:</span>
        <select className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs">
          <option>amount</option>
          <option>country</option>
          <option>email</option>
        </select>
        <select className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs">
          <option>&gt;</option>
          <option>&lt;</option>
          <option>=</option>
        </select>
        <input className="w-20 rounded-md border border-slate-300 px-2 py-1" defaultValue={100} />
        <button className="rounded-md border border-emerald-300 bg-emerald-50 px-2 py-1 font-medium text-emerald-700">Add</button>
      </div>
      <div className="rounded-md border border-dashed border-slate-300 p-2">
        <div className="flex items-center gap-2"><span className="rounded bg-amber-100 px-2 py-0.5 text-amber-700">if amount &gt; 100</span><span>→</span><span className="rounded bg-cyan-100 px-2 py-0.5 text-cyan-700">Send Email</span></div>
      </div>
    </div>
  );
}

function ToolChips() {
  const tools = [
    { label: "Router", icon: <Shuffle className="h-4 w-4" /> },
    { label: "Iterator", icon: <Workflow className="h-4 w-4" /> },
    { label: "Delay", icon: <Database className="h-4 w-4" /> },
    { label: "Conditions", icon: <GitBranch className="h-4 w-4" /> },
    { label: "Repeater", icon: <Layers3 className="h-4 w-4" /> },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <span
          key={t.label}
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
        >
          {t.icon}
          {t.label}
        </span>
      ))}
    </div>
  );
}

function IconsPile() {
  return (
    <div className="relative mx-auto mt-1 h-28 w-full max-w-[360px]">
      <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow ring-1 ring-slate-200">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecloud.svg" className="h-5 w-5" alt="gcloud" />
      </div>
      <div className="absolute left-20 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow ring-1 ring-slate-200">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg" className="h-5 w-5" alt="shopify" />
      </div>
      <div className="absolute left-36 top-9 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow ring-1 ring-slate-200">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" className="h-5 w-5" alt="telegram" />
      </div>
      <div className="absolute left-12 top-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow ring-1 ring-slate-200">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlesheets.svg" className="h-5 w-5" alt="sheets" />
      </div>
      <div className="absolute left-32 top-20 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow ring-1 ring-slate-200">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mailchimp.svg" className="h-5 w-5" alt="mailchimp" />
      </div>
      {/* orbiting connector */}
      <svg className="pointer-events-none absolute inset-0" viewBox="0 0 220 120">
        <defs>
          <style>{`.orbit { transform-origin: 110px 60px; animation: spin 18s linear infinite; } @keyframes spin { to { transform: rotate(360deg) } } .dash{stroke-dasharray:5 6; animation: dash 3s linear infinite;} @keyframes dash{to{stroke-dashoffset:-60}}`}</style>
        </defs>
        <circle cx="110" cy="60" r="52" className="dash" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
        <circle cx="110" cy="60" r="36" className="dash" stroke="#22c55e" strokeWidth="1.5" fill="none" />
        <g className="orbit">
          <circle cx="110" cy="8" r="3" fill="#22c55e" />
        </g>
      </svg>
    </div>
  );
}

function Badge({ icon, children }:any) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700">
      {icon}
      {children}
    </span>
  );
}

function ArrowConnector() {
  return (
    <svg width="80" height="28" viewBox="0 0 80 28" className="text-slate-400">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 Z" fill="#22c55e" />
        </marker>
        <style>{`.d{stroke-dasharray:6 6; animation: d 2s linear infinite;} @keyframes d{to{stroke-dashoffset:-48}}`}</style>
      </defs>
      <path d="M2 14 Q 38 2, 76 14" fill="none" stroke="#22c55e" strokeWidth="2" className="d" markerEnd="url(#arrow)" />
    </svg>
  );
}
