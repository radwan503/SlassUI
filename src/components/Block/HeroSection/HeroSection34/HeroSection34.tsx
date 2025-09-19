import React, { useState } from "react";
import { Brain, Sparkles, Zap, Plug, Rocket, Menu, X, MessageSquare, Bot, Cloud } from "lucide-react";

export default function HeroSection34() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <style>{`
        @keyframes dashmove {
          to { stroke-dashoffset: -1000; }
        }
        .connector {
          stroke-dasharray: 6 10;
          animation: dashmove 12s linear infinite;
        }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_80%_10%,rgba(77,145,255,.08),transparent_40%),radial-gradient(circle_at_20%_30%,rgba(118,169,255,.06),transparent_35%),radial-gradient(circle_at_50%_-10%,rgba(77,145,255,.06),transparent_40%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur border-b border-slate-100">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white font-semibold">A</div>
            <span className="font-semibold">AI Assist</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-blue-600">Pricing</a>
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-blue-600">Features</a>
            <a href="#integrations" className="text-sm font-medium text-slate-700 hover:text-blue-600">Integrations</a>
            <a href="#resources" className="text-sm font-medium text-slate-700 hover:text-blue-600">Resources</a>
            <a href="#get" className="rounded-full border border-blue-500/30 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100">Get Started</a>
          </div>
          <button className="sm:hidden p-2 rounded-md border border-slate-200 text-slate-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-slate-100 shadow-md">
            <nav className="flex flex-col p-4 space-y-3">
              <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-blue-600">Pricing</a>
              <a href="#features" className="text-sm font-medium text-slate-700 hover:text-blue-600">Features</a>
              <a href="#integrations" className="text-sm font-medium text-slate-700 hover:text-blue-600">Integrations</a>
              <a href="#resources" className="text-sm font-medium text-slate-700 hover:text-blue-600">Resources</a>
              <a href="#get" className="rounded-md border border-blue-500/30 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100">Get Started</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-4 pb-10 pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto mb-5 flex w-full max-w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          <Sparkles className="h-4 w-4" />
          Smarter Work
          <span className="mx-1 text-blue-300">•</span>
          Your AI Assistant in One Place
        </div>

        <h1 className="mx-auto max-w-4xl text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-slate-800">AI-Powered</span>{" "}
          <span className="text-blue-600">Virtual Assistant</span>{" "}
          <span className="text-slate-800">for Teams</span>
        </h1>

        <p className="mx-auto mt-3 max-w-4xl text-center text-xl font-semibold">
          <span className="rounded-md bg-black px-2 py-1 text-white">Slack / Teams / Web</span>{" "}
          <span className="text-slate-700">integration in seconds</span>
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          Automate tasks, answer questions, draft emails, and boost productivity with an AI assistant built
          to work seamlessly with your favorite tools.
        </p>

        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-4">
          <FeatureChip icon={<Zap className="h-4 w-4" />} label="Instant Responses" />
          <span className="text-slate-300">|</span>
          <FeatureChip icon={<Plug className="h-4 w-4" />} label="Easy Integrations" />
          <span className="text-slate-300">|</span>
          <FeatureChip icon={<Rocket className="h-4 w-4" />} label="Boost Productivity" />
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <a
            id="get"
            href="#"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get Started
          </a>
          <a
            href="#demo"
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Try Demo
          </a>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">Free trial — no credit card required</p>

        <div className="relative mx-auto mt-10 max-w-6xl rounded-2xl ">
          <div className="grid gap-8 md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 z-30">
            <FlowPill icon={<MessageSquare className="h-4 w-4" />} text="Chat Support" color="rose" />
            <FlowPill icon={<Bot className="h-4 w-4" />} text="Smart Bot" color="blue" />
            <FlowPill icon={<Cloud className="h-4 w-4" />} text="Cloud Sync" color="green" />
          </div>

          <div className="relative mx-auto grid max-w-sm place-items-center py-10 md:py-16">
            <div className="relative grid h-24 w-24 place-items-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-500/30">
              <Brain className="h-10 w-10 text-white" />
              <svg className="pointer-events-none absolute inset-0 -z-10 h-[170%] w-[170%] translate-x-[-35%] translate-y-[-35%] opacity-60" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeDasharray="3 8" className="text-blue-200" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeDasharray="3 8" className="text-blue-100" />
              </svg>
            </div>
          </div>

          <div className="grid gap-8 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 z-30">
            <FlowPill icon={<Zap className="h-4 w-4" />} text="Task Automation" color="amber" align="right" />
            <FlowPill icon={<MessageSquare className="h-4 w-4" />} text="Email Drafts" color="blue" align="right" />
            <FlowPill icon={<Cloud className="h-4 w-4" />} text="File Assistant" color="green" align="right" />
          </div>

          <Connectors />
        </div>
      </section>

      <div className="mx-auto mb-10 mt-6 max-w-5xl px-4 text-center text-xs text-slate-400">
        Add animated AI mascots or product screenshots here for extra visuals.
      </div>
    </div>
  );
}

function FeatureChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      <span className="grid h-5 w-5 place-items-center text-blue-600">{icon}</span>
      {label}
    </div>
  );
}

function FlowPill({ icon, text, color = "blue", align = "left" }: { icon: React.ReactNode; text: string; color?: "rose" | "blue" | "green" | "amber"; align?: "left" | "right" }) {
  const palette: Record<string, string> = {
    rose: "ring-rose-100 bg-rose-50 text-rose-700",
    blue: "ring-sky-100 bg-sky-50 text-sky-700",
    green: "ring-emerald-100 bg-emerald-50 text-emerald-700",
    amber: "ring-amber-100 bg-amber-50 text-amber-700",
  };
  const justify = align === "right" ? "justify-end" : "";
  return (
    <div className={`flex ${justify}`}>
      <div className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 shadow-sm ring-4 ${palette[color]}`}>
        <span className="grid h-6 w-6 place-items-center rounded-md bg-white/80 text-slate-700">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
}

function Connectors() {
  return (
    <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1200 360" preserveAspectRatio="none">
      <path d="M 160 80 C 360 120, 420 140, 580 160" className="connector stroke-blue-400" strokeWidth="2.5" fill="none" />
      <path d="M 160 180 C 360 190, 420 200, 580 180" className="connector stroke-blue-400" strokeWidth="2.5" fill="none" />
      <path d="M 160 280 C 360 240, 420 220, 580 200" className="connector stroke-blue-400" strokeWidth="2.5" fill="none" />

      <path d="M 620 160 C 780 140, 840 120, 1040 80" className="connector stroke-blue-400" strokeWidth="2.5" fill="none" />
      <path d="M 620 180 C 780 200, 840 210, 1040 180" className="connector stroke-blue-400" strokeWidth="2.5" fill="none" />
      <path d="M 620 200 C 780 220, 840 240, 1040 280" className="connector stroke-blue-400" strokeWidth="2.5" fill="none" />
    </svg>
  );
}
