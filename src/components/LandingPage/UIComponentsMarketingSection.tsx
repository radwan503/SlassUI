// components/UIComponentsTabbedSection.tsx
"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { ArrowRight, Search, SortDesc, Sparkles } from "lucide-react";
import ComponentPreviewCard from "./ComponentPreviewCard";
import Button from "../../utils/Button";
import { tabContent } from "../../data/landingPageConfig";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = keyof typeof tabContent;

export default function UIComponentsTabbedSection() {
  const initialTab = (Object.keys(tabContent)[0] as TabKey) || "marketing";
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"latest" | "popular" | "alpha">("latest");

  // Keyboard nav for tabs (← →)
  const tabsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      const keys = Object.keys(tabContent) as TabKey[];
      const idx = keys.indexOf(activeTab);
      if (e.key === "ArrowRight") {
        const next = keys[(idx + 1) % keys.length];
        setActiveTab(next);
      } else if (e.key === "ArrowLeft") {
        const prev = keys[(idx - 1 + keys.length) % keys.length];
        setActiveTab(prev);
      }
    };
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [activeTab]);

  const current = tabContent[activeTab];

  const items = useMemo(() => {
    if (!current?.items) return [];
    let list = [...current.items];

    // Basic search on title/tags/category
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((it: any) =>
        [it.title, it.category, ...(it.tags || [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    // Simple sorts to feel “real”
    switch (sort) {
      case "alpha":
        list.sort((a: any, b: any) => a.title.localeCompare(b.title));
        break;
      case "popular":
        list.sort((a: any, b: any) => (b.popularity || 0) - (a.popularity || 0));
        break;
      case "latest":
      default:
        list.sort(
          (a: any, b: any) =>
            new Date(b.updatedAt || b.date || 0).getTime() -
            new Date(a.updatedAt || a.date || 0).getTime()
        );
        break;
    }

    return list;
  }, [current, query, sort]);

  const totalCount = current?.items?.length || 0;

  return (
    <section className="relative overflow-hidden bg-primary border-t border-darkBg py-20 md:py-32">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute -inset-32 opacity-60 blur-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_20%_30%,rgba(59,130,246,.25),transparent),radial-gradient(50%_70%_at_80%_70%,rgba(56,189,248,.20),transparent)]" />
      </div>

      {/* Vertical label */}
      <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-top-left sm:block ml-[-120px] text-white/30 font-bold text-xl uppercase tracking-[0.35em] select-none">
        UI BLOCKS
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 
            bg-gradient-to-r from-white via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
            Ready-to-use UI components for modern projects
          </h2>
          <p className="text-lg md:text-base text-textSlate">
            Ship faster with <span className="font-semibold text-white/90">160+</span> handcrafted,
            production-ready blocks. Built with Tailwind CSS for full creative control—drop them in,
            customize, and launch.
          </p>
        </div>

        {/* Tabs + toolbar */}
        <div className="mt-10 md:mt-12 flex flex-col gap-4">
          {/* Tabs */}
          <div
            ref={tabsRef}
            tabIndex={0}
            className="relative rounded border border-white/10 bg-white/[0.02] backdrop-blur-md"
          >
            <div className="flex flex-wrap items-center">
              {(Object.keys(tabContent) as TabKey[]).map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative z-10 px-5 py-3 text-sm md:text-base font-semibold transition-all
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/85"
                    }`}
                    aria-selected={isActive}
                    role="tab"
                  >
                    <span className="flex items-center gap-2">
                      {tabContent[key].emoji ? (
                        <span aria-hidden>{tabContent[key].emoji}</span>
                      ) : (
                        <Sparkles className="h-4 w-4 opacity-70" />
                      )}
                      {tabContent[key].title}
                      <span
                        className={`ml-1 rounded-full border px-2 py-0.5 text-xs ${
                          isActive
                            ? "border-white/20 bg-white/[0.06] text-white/85"
                            : "border-white/10 bg-white/[0.03] text-white/60"
                        }`}
                      >
                        {tabContent[key].items?.length ?? 0}
                      </span>
                    </span>
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="tab-underline"
                        className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-gradient-to-r from-sky-400/80 via-cyan-300/80 to-fuchsia-400/80"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-sm text-white/70">
              <span className="font-medium text-white/90">{items.length}</span> results in{" "}
              <span className="text-white/80">{current?.title}</span>{" "}
              <span className="text-white/50">({totalCount} total)</span>
            </p>

            <div className="flex items-center gap-3">
              {/* Search */}
              <label className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components…"
                  className="w-64 rounded-lg border border-white/10 bg-white/[0.04] px-9 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:border-sky-400/40"
                />
              </label>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as any)}
                  className="appearance-none rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 pr-8 text-sm text-white outline-none focus:border-sky-400/40"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="alpha">A–Z</option>
                </select>
                <SortDesc className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {items.length > 0 ? (
            <motion.div
              key={activeTab + query + sort}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              role="tabpanel"
            >
              {items.map((item: any, idx: number) => (
                <ComponentPreviewCard
                  key={`${item.title}-${idx}`}
                  title={item.title}
                  count={item.count}
                  category={item.category}
                  icon={item.icon}
                  tags={item.tags}
                  meta={item.updatedAt ? `Updated ${timeAgo(item.updatedAt)}` : item.meta}
                  href={item.href}
                />
              ))}
            </motion.div>
          ) : (
            <EmptyState query={query} />
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button className="text-base" variant="primary" size="lg" icon={ArrowRight}>
            Browse full library
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */
function timeAgo(iso: string) {
  const then = new Date(iso).getTime();
  if (!then) return "";
  const diff = Date.now() - then;
  const mins = Math.round(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.round(days / 30);
  return `${months}mo ago`;
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="mt-10 grid place-items-center rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur">
      <div className="mx-auto max-w-md">
        <div className="mx-auto mb-4 h-12 w-12 rounded-xl border border-white/15 bg-white/[0.05] grid place-items-center">
          <Search className="h-6 w-6 text-white/70" />
        </div>
        <h3 className="text-xl font-semibold text-white/90">No matches found</h3>
        <p className="mt-1 text-sm text-white/65">
          {query ? (
            <>
              We couldn’t find components for{" "}
              <span className="font-medium text-white/90">&ldquo;{query}&rdquo;</span>. Try a
              different keyword or clear the search.
            </>
          ) : (
            "Try switching tabs or updating your filters."
          )}
        </p>
      </div>
    </div>
  );
}
