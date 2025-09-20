// components/BlockPreview.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import ts from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  ArrowUpRight,
  Check,
  Circle,
  Copy,
  Download,
  Clipboard,
  PackagePlus,
  Terminal,
} from "lucide-react";

// Register languages once
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("css", css);

type TabKey = "preview" | "code";
type LayoutMode = "stacked" | "split";
type Pm = "npm" | "yarn" | "pnpm" | "bun";

type Props = {
  code: string;
  children: React.ReactNode;
  language?:
    | "javascript"
    | "typescript"
    | "json"
    | "bash"
    | "xml"
    | "css"
    | string;
  filename?: string;
  showLineNumbers?: boolean;
  accent?: "violet" | "cyan" | "emerald" | "rose" | "amber" | "indigo" | "fuchsia";
  /** initial layout */
  defaultLayout?: LayoutMode;
};

const langToExt: Record<string, string> = {
  javascript: "js",
  typescript: "ts",
  json: "json",
  bash: "sh",
  xml: "html",
  css: "css",
};

const accentToGrad: Record<NonNullable<Props["accent"]>, string> = {
  violet: "from-violet-500 via-fuchsia-500 to-cyan-400",
  cyan: "from-cyan-400 via-sky-500 to-emerald-400",
  emerald: "from-emerald-400 via-teal-400 to-cyan-400",
  rose: "from-rose-500 via-pink-500 to-amber-400",
  amber: "from-amber-400 via-orange-500 to-rose-500",
  indigo: "from-indigo-500 via-violet-500 to-cyan-400",
  fuchsia: "from-fuchsia-500 via-violet-500 to-emerald-400",
};

const INSTALL_CMDS: Record<Pm, { app: string; dev: string; note: string[] }> = {
  npm: {
    app: "npm i react react-dom next lucide-react framer-motion",
    dev: "npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    note: [
      "Create ./styles/globals.css with Tailwind layers:",
      '@tailwind base;',
      '@tailwind components;',
      '@tailwind utilities;',
      "",
      "Add the Tailwind content globs in tailwind.config.js:",
      'content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],',
    ],
  },
  yarn: {
    app: "yarn add react react-dom next lucide-react framer-motion",
    dev: "yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    note: [
      "Create ./styles/globals.css with Tailwind layers (same as npm).",
      "Set Tailwind content globs in tailwind.config.js (same as npm).",
    ],
  },
  pnpm: {
    app: "pnpm add react react-dom next lucide-react framer-motion",
    dev: "pnpm add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    note: [
      "Add Tailwind layers in ./styles/globals.css.",
      "Set Tailwind content globs in tailwind.config.js.",
    ],
  },
  bun: {
    app: "bun add react react-dom next lucide-react framer-motion",
    dev: "bun add -d tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    note: [
      "Add Tailwind layers in ./styles/globals.css.",
      "Set Tailwind content globs in tailwind.config.js.",
    ],
  },
};

export default function BlockPreview({
  code,
  children,
  language = "javascript",
  filename,
  showLineNumbers = false,
  accent = "indigo",
  defaultLayout = "stacked",
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("preview");
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [wrap, setWrap] = useState(true);
  const [numbers, setNumbers] = useState(showLineNumbers);
  const [fontSize, setFontSize] = useState(0.9); // rem
  const [codeHeight, setCodeHeight] = useState(620); // stacked mode height
  const dragRef = useRef<HTMLDivElement | null>(null);

  // NEW: install note state
  const [showInstall, setShowInstall] = useState(false);
  const [pm, setPm] = useState<Pm>("npm");
  const [copiedInstall, setCopiedInstall] = useState<null | "app" | "dev">(null);

  // Clean code & derived
  const cleanCode = useMemo(
    () => (code ?? "").replace(/^.*\?raw.*\n?/gm, "").trim(),
    [code]
  );
  const lines = useMemo(() => cleanCode.split(/\r?\n/).length, [cleanCode]);
  const chars = cleanCode.length;

  const resolvedFilename = useMemo(() => {
    if (filename) return filename;
    const ext = langToExt[language] ?? "txt";
    return `snippet.${ext}`;
  }, [filename, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1100);
    } catch {}
  };

  // NEW: copy install command
  const handleCopyInstall = async (kind: "app" | "dev") => {
    try {
      const text =
        kind === "app"
          ? INSTALL_CMDS[pm].app
          : INSTALL_CMDS[pm].dev;
      await navigator.clipboard.writeText(text);
      setCopiedInstall(kind);
      setTimeout(() => setCopiedInstall(null), 1100);
    } catch {}
  };

  const handleDownload = () => {
    try {
      setDownloading(true);
      const blob = new Blob([cleanCode], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = resolvedFilename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      setTimeout(() => setDownloading(false), 320);
    }
  };

  const handleOpenNewTab = () => {
    const blob = new Blob([cleanCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    // URL revoked by browser on unload; safe to leave
  };

  // Shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "c" && activeTab === "code") {
        e.preventDefault();
        handleCopy();
      } else if (meta && e.key.toLowerCase() === "s" && activeTab === "code") {
        e.preventDefault();
        handleDownload();
      } else if (meta && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setActiveTab((t) => (t === "preview" ? "code" : "preview"));
      } else if (meta && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setLayout((l) => (l === "stacked" ? "split" : "stacked"));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeTab, cleanCode, resolvedFilename]);

  // Drag resize (stacked only)
  useEffect(() => {
    if (layout !== "stacked") return;
    const el = dragRef.current;
    if (!el) return;
    let startY = 0;
    let startH = codeHeight;
    const down = (e: MouseEvent) => {
      startY = e.clientY;
      startH = codeHeight;
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    };
    const move = (e: MouseEvent) => {
      const delta = e.clientY - startY;
      const next = Math.min(Math.max(260, startH + delta), 800);
      setCodeHeight(next);
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    el.addEventListener("mousedown", down);
    return () => {
      el.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [layout, codeHeight]);

  const grad = accentToGrad[accent];
  console.log(grad)

  return (
    <motion.div className="relative [perspective:1200px]">
      {/* Outer halo with conic ring */}
      <div className="relative rounded-2xl p-[1.5px]">
        <div className={`absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br opacity-80 blur`} />
        <div className="absolute inset-0 rounded-2xl [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)] bg-[conic-gradient(from_140deg,rgba(255,255,255,0.12),transparent_40%)]" />
        {/* Cyber grid */}
        <div
          className="absolute inset-0 rounded-2xl opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to_right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Card */}
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black">
          {/* Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/10 backdrop-blur bg-white/5">
            <div className="flex items-center gap-3">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90 shadow-[0_0_12px_rgba(244,63,94,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </div>

              {/* Tabs */}
              <div className="ml-1 flex items-center gap-1.5 p-1 rounded-full bg-white/10">
                {(["preview", "code"] as TabKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={[
                      "px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition",
                      activeTab === key
                        ? "bg-white text-slate-900 shadow"
                        : "text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    {key === "preview" ? "Preview" : "Code"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto md:overflow-auto">
              {/* Language / filename */}
              <span className="hidden md:inline-flex items-center gap-2 text-[11px] sm:text-xs text-white/80 px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                {language} • {activeTab === "code" ? resolvedFilename : "live"}
              </span>

              {/* Options */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={() => setWrap((w) => !w)}
                  className={`px-2.5 py-1.5 text-xs rounded-md border transition ${
                    wrap
                      ? "bg-white/15 text-white border-white/20"
                      : "bg-white/10 text-white/80 hover:bg-white/15 border-white/10"
                  }`}
                  title="Toggle wrap"
                >
                  {wrap ? "Wrap: On" : "Wrap: Off"}
                </button>
                <button
                  onClick={() => setNumbers((n) => !n)}
                  className={`px-2.5 py-1.5 text-xs rounded-md border transition ${
                    numbers
                      ? "bg-white/15 text-white border-white/20"
                      : "bg-white/10 text-white/80 hover:bg-white/15 border-white/10"
                  }`}
                  title="Toggle line numbers"
                >
                  {numbers ? "Lines: On" : "Lines: Off"}
                </button>
                <div className="flex items-center gap-1 px-1.5 py-1.5 text-xs text-white rounded-md bg-white/10 border border-white/10">
                  <button
                    onClick={() => setFontSize((s) => Math.max(0.75, +(s - 0.05).toFixed(2)))}
                    className="px-2 rounded hover:bg-white/10"
                    title="Font size -"
                  >
                    A–
                  </button>
                  <span className="opacity-80 min-w-8 text-center">
                    {Math.round(fontSize * 100)}%
                  </span>
                  <button
                    onClick={() => setFontSize((s) => Math.min(1.25, +(s + 0.05).toFixed(2)))}
                    className="px-2 rounded hover:bg-white/10"
                    title="Font size +"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* NEW: Suggest Install button */}
              <button
                onClick={() => setShowInstall((v) => !v)}
                className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 transition"
                title="Suggested packages for React/Next/Tailwind/Lucide/Framer Motion"
              >
                <PackagePlus size={13} />
                Suggest Install
              </button>

              {/* Actions */}
              <button
                onClick={handleCopy}
                className="items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 transition"
                title="Copy (⌘/Ctrl + C)"
              >
                {copied ? (
                  <div className="flex gap-2 items-center">
                    <Check size={12} /> Copied
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <Copy size={12} /> Copy
                  </div>
                )}
              </button>
              <button
                onClick={handleOpenNewTab}
                className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 transition"
                title="Open code in new tab"
              >
                <ArrowUpRight size={13} /> Open
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium bg-white text-slate-900 hover:bg-slate-100 border border-white/0 transition"
                title="Download (⌘/Ctrl + S)"
              >
                {downloading ? (
                  <div className="flex gap-2 items-center">
                    <Circle className="animate-spin" /> Saving…
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <Download size={12} />
                    Download
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* NEW: Install Note Panel */}
          {showInstall && (
            <div className={`border-b border-white/10`}>
              <div
                className={`px-4 py-4 bg-gradient-to-r ${accentToGrad.indigo} text-white`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} />
                    <h3 className="text-sm sm:text-base font-semibold">
                      Suggested installation for React + Next + TailwindCSS + lucide-react + Framer Motion
                    </h3>
                  </div>

                  {/* PM tabs */}
                  <div className="flex items-center gap-1 bg-white/15 rounded-full p-1">
                    {(["npm", "yarn", "pnpm", "bun"] as Pm[]).map((k) => (
                      <button
                        key={k}
                        onClick={() => setPm(k)}
                        className={[
                          "px-3 py-1.5 text-xs rounded-full transition",
                          pm === k ? "bg-white text-slate-900" : "text-white/90 hover:text-white",
                        ].join(" ")}
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Commands */}
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                  {/* App deps */}
                  <div className="rounded-lg bg-black/25 border border-white/20">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/20">
                      <span className="text-xs font-medium opacity-90">App packages</span>
                      <button
                        onClick={() => handleCopyInstall("app")}
                        className="inline-flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-md transition"
                        title="Copy"
                      >
                        {copiedInstall === "app" ? <Check size={12} /> : <Clipboard size={12} />}
                        Copy
                      </button>
                    </div>
                    <pre className="px-3 py-2 text-[11.5px] whitespace-pre-wrap break-words">
{INSTALL_CMDS[pm].app}
                    </pre>
                  </div>

                  {/* Dev deps + init */}
                  <div className="rounded-lg bg-black/25 border border-white/20">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/20">
                      <span className="text-xs font-medium opacity-90">Tailwind dev setup</span>
                      <button
                        onClick={() => handleCopyInstall("dev")}
                        className="inline-flex items-center gap-1 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-md transition"
                        title="Copy"
                      >
                        {copiedInstall === "dev" ? <Check size={12} /> : <Clipboard size={12} />}
                        Copy
                      </button>
                    </div>
                    <pre className="px-3 py-2 text-[11.5px] whitespace-pre-wrap break-words">
{INSTALL_CMDS[pm].dev}
                    </pre>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-3 rounded-lg bg-black/20 border border-white/20 px-3 py-2">
                  <p className="text-[11.5px] opacity-90">
                    Notes
                  </p>
                  <ul className="mt-1 text-[11.5px] opacity-95 list-disc pl-5 space-y-0.5">
                    {INSTALL_CMDS[pm].note.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Body */}
          <div
            className={[
              "relative z-10",
              layout === "split"
                ? "grid md:grid-cols-2 gap-4 p-3 sm:p-4"
                : "p-0 md:p-4",
            ].join(" ")}
          >
            {/* Preview */}
            {(layout === "split" || activeTab === "preview") && (
              <div className=" bg-white/5 p-0 ">
                {children}
              </div>
            )}

            {/* Code */}
            {(layout === "split" || activeTab === "code") && (
              <div
                className="relative rounded-xl border border-white/10 bg-black/60 overflow-hidden"
                style={layout === "stacked" ? { height: codeHeight } : undefined}
              >
                <div
                  className="h-full overflow-auto [scrollbar-color:theme(colors.slate.500)_transparent] [scrollbar-width:thin]"
                  style={{ whiteSpace: wrap ? "pre-wrap" : "pre", wordBreak: wrap ? "break-word" : "normal" }}
                >
                  <SyntaxHighlighter
                    language={language}
                    style={atomOneDark}
                    showLineNumbers={numbers}
                    customStyle={{
                      margin: 0,
                      padding: "1rem 1.25rem",
                      fontSize: `${fontSize}rem`,
                      background: "transparent",
                    }}
                    wrapLongLines={wrap}
                  >
                    {cleanCode}
                  </SyntaxHighlighter>
                </div>

                {/* Drag handle (stacked only) */}
                {layout === "stacked" && (
                  <div
                    ref={dragRef}
                    className="absolute bottom-0 left-0 right-0 h-3 cursor-ns-resize bg-gradient-to-t from-white/10 to-transparent flex items-center justify-center"
                    title="Drag to resize"
                  >
                    <div className="h-1.5 w-16 rounded-full bg-white/30" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-t border-white/10 bg-white/5 text-[11px] text-white/70">
            <div className="flex items-center gap-3">
              <span>{lines} lines</span>
              <span>•</span>
              <span>{chars} chars</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Font {Math.round(fontSize * 100)}%</span>
            </div>
            <div className="flex items-center gap-3 opacity-80">
              <span>⟵⟶: Split</span>
              <span>⌘/Ctrl+C: Copy</span>
              <span>⌘/Ctrl+S: Download</span>
              <span>⌘/Ctrl+K: Toggle Tab</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
