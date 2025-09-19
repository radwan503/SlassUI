// components/TestimonialsSection.tsx
"use client";

import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Quote, ArrowRight, SlidersHorizontal, Search, Sparkles, Inbox } from "lucide-react";

type Testimonial = {
  id: string; // ✅ stable key for React/Framer
  quote: string;
  author: string;
  role?: string;
  company: string;
  avatar: string;
  logo: string;
  tag: "Startups" | "Agencies" | "Enterprise";
  rating?: number; // 1..5
  date?: string;   // ISO for "recent" sort
};

const ALL_TAGS = ["All", "Startups", "Agencies", "Enterprise"] as const;
type Tag = (typeof ALL_TAGS)[number];

/* --------------------------- SAMPLE DATA --------------------------- */
const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Using SlassUI saved us weeks of design and frontend effort. We launched our SaaS faster and got customer feedback immediately.",
    author: "Fahim Karim",
    role: "Co-Founder",
    company: "BlockBulid",
    avatar: "https://placehold.co/64x64/e2e8f0/0f172a?text=FK",
    logo: "https://placehold.co/96x24/e2e8f0/0f172a?text=BlockBulid",
    tag: "Startups",
    rating: 5,
    date: "2025-06-01",
  },
  {
    id: "t2",
    quote:
      "The prebuilt components are a game changer. Instead of worrying about UI, I can focus entirely on product logic and growth.",
    author: "Daniel Gazu",
    role: "Product Lead",
    company: "GazuTech",
    avatar: "https://placehold.co/64x64/e2e8f0/0f172a?text=DG",
    logo: "https://placehold.co/96x24/e2e8f0/0f172a?text=GazuTech",
    tag: "Enterprise",
    rating: 5,
    date: "2025-07-12",
  },
  {
    id: "t3",
    quote:
      "From placeholder to production in days. Motion presets and clean tokens kept our brand consistent across pages.",
    author: "Ayesha Rahman",
    role: "Design Lead",
    company: "PixelNest",
    avatar: "https://placehold.co/64x64/e2e8f0/0f172a?text=AR",
    logo: "https://placehold.co/96x24/e2e8f0/0f172a?text=PixelNest",
    tag: "Agencies",
    rating: 5,
    date: "2025-05-20",
  },
  {
    id: "t4",
    quote:
      "Developer experience is stellar. Composable cards, sane defaults, and accessible patterns out of the box.",
    author: "Md. Rakib Hasan",
    role: "Frontend Engineer",
    company: "Flowssbite",
    avatar: "https://placehold.co/64x64/e2e8f0/0f172a?text=RH",
    logo: "https://placehold.co/96x24/e2e8f0/0f172a?text=Flowssbite",
    tag: "Startups",
    rating: 4.8,
    date: "2025-08-03",
  },
  {
    id: "t5",
    quote:
      "We rebuilt our entire marketing site in a weekend. Lighthouse 100s and a faster iteration loop for the team.",
    author: "Sara Nilsson",
    role: "Head of Web",
    company: "NordicLabs",
    avatar: "https://placehold.co/64x64/e2e8f0/0f172a?text=SN",
    logo: "https://placehold.co/96x24/e2e8f0/0f172a?text=NordicLabs",
    tag: "Enterprise",
    rating: 4.9,
    date: "2025-09-01",
  },
  {
    id: "t6",
    quote:
      "Clients noticed the polish instantly. Animations feel refined, not flashy—exactly the modern vibe we wanted.",
    author: "Jahidul Islam",
    role: "Founder",
    company: "Shorelines Studios",
    avatar: "https://placehold.co/64x64/e2e8f0/0f172a?text=JI",
    logo: "https://placehold.co/96x24/e2e8f0/0f172a?text=Shoreline",
    tag: "Agencies",
    rating: 5,
    date: "2025-07-28",
  },
];

/* --------------------------------- Motion --------------------------------- */
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 16 },
  },
};

const shimmer =
  "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-white/[0.02] before:pointer-events-none";

export default function TestimonialsSection() {
  const [activeTag, setActiveTag] = useState<Tag>("All");
  const [q, setQ] = useState("");
  // ✅ keep select strictly string
  const [minRating, setMinRating] = useState<string>("0");
  const [sortBy, setSortBy] = useState<"recent" | "rating">("rating");

  // Tag counts
  const counts = useMemo(() => {
    const base = { All: TESTIMONIALS.length, Startups: 0, Agencies: 0, Enterprise: 0 } as Record<Tag, number>;
    TESTIMONIALS.forEach((t) => {
      base[t.tag as Exclude<Tag, "All">] += 1;
    });
    return base;
  }, []);

  // ✅ robust, side-effect-free filter/sort
  const filtered = useMemo(() => {
    const min = Number.isNaN(parseFloat(minRating)) ? 0 : parseFloat(minRating);

    const needle = q.trim().toLowerCase();
    const base = TESTIMONIALS.filter((t) => {
      const matchTag = activeTag === "All" ? true : t.tag === activeTag;
      const hay = [t.quote, t.author, t.company, t.role ?? "", t.tag].join(" ").toLowerCase();
      const matchQ = !needle || hay.includes(needle);
      const matchRating = typeof t.rating === "number" ? t.rating >= min : min <= 0;
      return matchTag && matchQ && matchRating;
    });

    if (sortBy === "rating") {
      return [...base].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    }
    return [...base].sort((a, b) => {
      if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });
  }, [activeTag, q, minRating, sortBy]);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0b1020] via-[#0c1426] to-[#0e162b] border-t border-darkBg overflow-hidden">
      <GridBackdrop />
      <AuroraGlow />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }} // ✅ no viewport gating
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-textSlate backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Loved by modern teams
          </span>
         <h2
            className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight 
            bg-gradient-to-r from-white via-sky-300 to-fuchsia-400 bg-clip-text text-transparent"
          >
            Real stories.{" "}
            <span className="bg-gradient-to-r from-white via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              Real impact.
            </span>
          </h2>

          <p className="mt-3 md:mt-4 text-base md:text-lg text-textSlate">
            Ship faster with production-ready React + Tailwind components, motion presets, and accessible patterns.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Stars n={5} />
            <span className="text-sm text-textColor font-semibold">4.9/5</span>
            <span className="text-sm text-textSlate">from 120+ teams</span>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }} // ✅ no viewport gating
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {ALL_TAGS.map((tag) => {
              const active = tag === activeTag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={active}
                  className={[
                    "group relative rounded-full border px-4 py-2 text-sm transition",
                    active
                      ? "border-indigo-400/40 bg-indigo-500/15 text-indigo-100"
                      : "border-white/10 bg-white/5 text-textSlate hover:border-white/20 hover:bg-white/10",
                  ].join(" ")}
                >
                  <span className="relative z-10">
                    {tag} <span className="opacity-60">({counts[tag] ?? 0})</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {/* search */}
            <label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-textSlate focus-within:ring-2 focus-within:ring-indigo-400/50">
              <Search className="h-4 w-4" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search quotes, authors, companies…"
                className="bg-transparent outline-none placeholder:text-textSlate/60"
              />
            </label>

            {/* rating filter (string-safe) */}
            <label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-textSlate">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Min rating</span>
              <select
                value={minRating}
                onChange={(e) => setMinRating(e.target.value)}
                className="bg-transparent outline-none"
              >
                {["0", "3", "4", "4.5", "5"].map((r) => (
                  <option key={r} value={r}>
                    {r === "0" ? "Any" : `${r}+`}
                  </option>
                ))}
              </select>
            </label>

            {/* sort */}
            <label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-textSlate">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "rating")}
                className="bg-transparent outline-none"
              >
                <option value="rating">Highest rated</option>
                <option value="recent">Most recent</option>
              </select>
            </label>

            {/* count */}
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-textSlate">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </motion.div>

        {/* mobile carousel */}
        <div className="mt-8 md:hidden -mx-4 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show" // ✅ no viewport gating
            className="flex snap-x snap-mandatory overflow-x-auto gap-4 pb-2"
          >
            {filtered.map((t) => (
              <motion.div key={t.id} variants={cardVariants} className="snap-center shrink-0 basis-[85%]">
                <TestimonialCardModern t={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* desktop grid OR empty state */}
        {filtered.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show" // ✅ no viewport gating
            className="mt-10 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {filtered.map((t) => (
                <motion.div
                  key={t.id}
                  variants={cardVariants}
                  layout
                  className="h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <TestimonialCardModern t={t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="mt-12 flex flex-col items-center gap-3 text-textSlate">
            <Inbox className="h-8 w-8 opacity-70" />
            <p>No testimonials match your filters.</p>
            <button
              onClick={() => {
                setActiveTag("All");
                setQ("");
                setMinRating("0");
                setSortBy("rating");
              }}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-textColor hover:bg-white/10"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }} // ✅
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-textColor backdrop-blur transition hover:bg-white/10">
            Explore components library
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================== Subcomponents ============================= */

function TestimonialCardModern({ t }: { t: Testimonial }) {
  const setMouse = useCallback((e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  }, []);

  return (
    <article
      onMouseMove={setMouse}
      className={`group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-sm transition ${shimmer}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%)",
        }}
        aria-hidden
      />
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src={t.avatar} alt={t.author} className="h-10 w-10 rounded-full ring-2 ring-white/10" />
          <div>
            <div className="font-semibold text-textColor leading-tight">{t.author}</div>
            <div className="text-xs text-textSlate leading-tight">
              {t.role ? `${t.role} • ` : ""}{t.company}
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-textSlate">
          <ShieldCheck className="h-3.5 w-3.5" />
          Verified
        </span>
      </header>

      <blockquote className="mt-4">
        <Quote className="h-5 w-5 text-textSlate/40" />
        <p className="mt-2 text-sm md:text-base leading-relaxed text-textColor">{t.quote}</p>
      </blockquote>

      {typeof t.rating === "number" && (
        <div className="mt-4 flex items-center gap-2">
          <Stars n={Math.round(t.rating)} />
          <span className="text-xs text-textSlate">{t.rating.toFixed(1)}</span>
        </div>
      )}

      <footer className="mt-5 flex items-center justify-between">
        {/* <img src={t.logo} alt={`${t.company} logo`} className="h-5 opacity-80" /> */}
        <span className="text-[10px] text-textSlate/80 rounded-full border border-white/10 bg-white/5 px-2 py-1">
          {t.tag}
        </span>
      </footer>
    </article>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-current" : "opacity-30"}`} />
      ))}
    </span>
  );
}

function GridBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0">
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        {/* vertical lines */}
        <div className="absolute inset-0 flex justify-between opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-px h-full bg-darkBg" />
          ))}
        </div>
        {/* horizontal lines */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-px w-full bg-darkBg" />
          ))}
        </div>
      </div>
    </div>
  );
}

function AuroraGlow() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl bg-[#76e0a3]/20" />
      <div className="absolute top-1/3 -left-10 h-80 w-80 rounded-full blur-3xl bg-[#7db3ff]/20" />
      <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full blur-3xl bg-[#b287ff]/20" />
    </div>
  );
}
