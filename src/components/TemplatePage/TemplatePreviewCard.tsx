"use client";

import { useId } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Eye, Github, Star, ArrowUpRight, Tag as TagIcon } from "lucide-react";

type Props = {
  image: string;
  gallery?: string[];
  title: string;
  subtitle?: string;
  tag?: "Free" | "Pro" | string;
  githubRepo?: string;
  liveLink?: string;
  stars?: number;
  downloads?: number;
  tech?: string[];
  isNew?: boolean;
  onPreview?: () => void;

  // New style controls (all optional)
  stackDepth?: 1 | 2 | 3;      // default 3
  spread?: number;             // default 28
  angle?: number;              // default 12
  accent?: "violet" | "cyan" | "emerald" | "rose" | "amber";
  cutCorner?: boolean;         // default true - cut front-card top-right
  wireframe?: boolean;         // default true - animated grid behind stack
};

export default function TemplatePreviewCard({
  image,
  gallery,
  title,
  subtitle,
  tag = "Free",
  githubRepo,
  liveLink,
  stars,
  downloads,
  tech = [],
  isNew = false,
  onPreview,
  stackDepth = 3,
  spread = 28,
  angle = 12,
  accent = "violet",
  cutCorner = false,
  wireframe = true,
}: Props) {
  const uid = useId();

  // ---- 3D base tilt ----
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useTransform(ry, [-0.6, 0.6], [angle, -angle]);
  const rotateY = useTransform(rx, [-0.6, 0.6], [-angle, angle]);

  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = e.currentTarget as HTMLDivElement;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    rx.set(x);
    ry.set(y);
    // for magnetic buttons / glow hotspot
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(2)}%`);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  // ---- stack data ----
  const imgs = (gallery?.length ? gallery : [image, image, image]).slice(0, stackDepth);
  const depth = [1, 0.62, 0.4]; // parallax weight (front -> back)

  // per-layer transform
  const layerMotion = (i: number) => {
    const k = depth[i] ?? 0.4;
    return {
      rotateX: useTransform(ry, [-0.6, 0.6], [angle * 0.75 * k, -angle * 0.75 * k]),
      rotateY: useTransform(rx, [-0.6, 0.6], [-angle * 0.75 * k, angle * 0.75 * k]),
    };
  };

  // big visible spread
  const L2 = { x: -spread * 1.35, y: spread * 0.9, r: -7, z: -60, s: 0.985, o: 0.9 };
  const L3 = { x:  spread * 1.55, y: spread * 0.65, r:  8, z: -110, s: 0.972, o: 0.85 };

  const badgeStyles =
    (tag || "").toLowerCase() === "pro"
      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
      : "bg-emerald-600/90 text-white";

  const accentRing = {
    violet: "from-violet-500 via-fuchsia-400 to-indigo-400",
    cyan: "from-cyan-400 via-sky-400 to-blue-400",
    emerald: "from-emerald-400 via-teal-400 to-green-400",
    rose: "from-rose-400 via-pink-400 to-fuchsia-400",
    amber: "from-amber-400 via-orange-400 to-yellow-400",
  }[accent];

  // mask for cut corner
  const cutMask = cutCorner
    ? "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)"
    : "none";

  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* neon aura */}
      <div className="pointer-events-none absolute -inset-[2px] rounded-3xl overflow-hidden">
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${accentRing} opacity-25 blur-2xl group-hover:opacity-35 transition-opacity`} />
        {/* hotspot pulse */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
      </div>

      {/* true 3D */}
      <div className="[perspective:1500px]">
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
          whileHover={{ scale: 1.022 }}
          whileTap={{ scale: 0.992 }}
          className="relative rounded-3xl border border-white/10 bg-[#070a16] shadow-[0_50px_140px_-50px_rgba(0,0,0,0.75)]"
          aria-labelledby={`${uid}-title`}
        >
          {/* ===== Wireframe Grid (unique) ===== */}
          {wireframe && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
              style={{
                background:
                  "repeating-linear-gradient(90deg, transparent 0 38px, rgba(255,255,255,0.06) 38px 39px), repeating-linear-gradient(0deg, transparent 0 38px, rgba(255,255,255,0.06) 38px 39px)",
                mask:
                  "radial-gradient(100% 120% at 50% 10%, rgba(0,0,0,0.8), transparent 70%)",
              }}
            />
          )}

          {/* ===== Header strip with micro-tag ===== */}
          <div className="relative flex items-center gap-2 rounded-t-3xl px-5 pt-4 pb-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] text-slate-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              {tag}
            </div>
            {isNew && (
              <div className="inline-flex items-center rounded-full bg-amber-400/90 px-2 py-1 text-[11px] font-semibold text-black">
                New
              </div>
            )}
            <div className="ml-auto h-[10px] w-28 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1.6px)] bg-[length:10px_10px] opacity-40" />
          </div>

          {/* ===== Stacked media (strong spread) ===== */}
          <div className="relative h-64 w-full overflow-visible px-5 pb-3">
            {imgs[2] && (
              <motion.div
                className="absolute left-12 right-12 top-12 h-44 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-2xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" as const, ...layerMotion(2) }}
                initial={{ x: L3.x, y: L3.y, rotate: L3.r, scale: L3.s, opacity: L3.o, z: L3.z }}
                whileHover={{ x: L3.x - 5, y: L3.y - 5, rotate: L3.r - 2, z: L3.z - 20 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <img src={imgs[2]} alt="" className="h-full w-full" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              </motion.div>
            )}

            {imgs[1] && (
              <motion.div
                className="absolute left-7 right-7 top-7 h-44 rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" as const, ...layerMotion(1) }}
                initial={{ x: L2.x, y: L2.y, rotate: L2.r, scale: L2.s, opacity: L2.o, z: L2.z }}
                whileHover={{ x: L2.x - 4, y: L2.y - 3, rotate: L2.r + 1, z: L2.z - 18 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
              >
                <img src={imgs[1]} alt="" className="h-full w-full" loading="lazy" />
              </motion.div>
            )}

            {/* Front: cut-corner glass + neon edge */}
            <motion.div
              className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_36px_96px_-28px_rgba(0,0,0,0.6)]"
              style={{
                transformStyle: "preserve-3d" as const,
                ...layerMotion(0),
                clipPath: cutMask,
              }}
              whileHover={{ y: -6, z: 26 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              {/* neon edge for cut corner */}
              {cutCorner && (
                <div className="absolute -right-6 -top-6 h-24 w-24 rotate-45 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              )}

              <img
                src={imgs[0] || image}
                alt={title}
                className="h-full w-full transition-transform duration-700"
                loading="lazy"
              />

              {/* gloss sweep */}
              <span className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-xl animate-[sheen_1.1s_ease-in-out]" />
              </span>

              {/* corner badges */}
              <div className="absolute left-3 top-3 flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ${badgeStyles}`}>
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </span>
                {isNew && (
                  <span className="inline-flex rounded-full bg-amber-500/90 px-2 py-1 text-[11px] font-semibold text-black">
                    New
                  </span>
                )}
              </div>

              {/* action overlay + magnetic buttons */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-400/100 via-black/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 px-3 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {githubRepo && (
                  <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex h-9 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-sm text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    style={{
                      transform: "translate(calc((var(--mx,50%) - 50%)*0.08), calc((var(--my,50%) - 50%)*0.08))",
                    }}
                  >
                    <Github className="h-4 w-4" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
                {(liveLink || onPreview) && (
                  <a
                    href={liveLink || "#"}
                    onClick={(e) => { if (onPreview) { e.preventDefault(); onPreview(); } }}
                    target={liveLink ? "_blank" : undefined}
                    rel={liveLink ? "noopener noreferrer" : undefined}
                    className="pointer-events-auto inline-flex h-9 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    style={{
                      transform: "translate(calc((var(--mx,50%) - 50%)*0.08), calc((var(--my,50%) - 50%)*0.08))",
                    }}
                  >
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">Preview</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* ===== Content ===== */}
          <div className="space-y-4 px-5 pb-5">
            <header className="space-y-1.5">
              <h3 id={`${uid}-title`} className="line-clamp-1 text-[15px] font-semibold tracking-tight text-white"
              style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}>
                {title}
              </h3>
              {subtitle && (
                <p className="line-clamp-2 text-[13px] leading-snug text-slate-300/90" style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}>
                  {subtitle}
                </p>
              )}
            </header>

            {(stars || downloads) && (
              <div className="flex items-center gap-3 text-xs text-slate-300/90">
                {typeof stars === "number" && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                    <Star className="h-3.5 w-3.5" />
                    <strong className="font-medium">{formatCompact(stars)}</strong>
                    <span className="opacity-80">stars</span>
                  </span>
                )}
                {typeof downloads === "number" && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    <strong className="font-medium">{formatCompact(downloads)}</strong>
                    <span className="opacity-80">installs</span>
                  </span>
                )}
              </div>
            )}

            {tech.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {tech.slice(0, 6).map((t) => (
                  <li key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300/90">
                    {t}
                  </li>
                ))}
                {tech.length > 6 && (
                  <li className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300/90">
                    +{tech.length - 6} more
                  </li>
                )}
              </ul>
            )}

            <div className="flex items-center justify-between pt-2">
              <div className="text-[11px] text-slate-400">
                <span className="opacity-80">License:</span>{" "}
                <span className="text-slate-200">{tag === "Pro" ? "Commercial" : "MIT / Free"}</span>
              </div>

              <div className="flex items-center gap-2">
                {githubRepo && (
                  <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center justify-center rounded-md border border-white/10 bg-white/5 px-2 text-xs text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <Github className="mr-1 h-3.5 w-3.5" />
                    Code
                  </a>
                )}
                {(liveLink || onPreview) && (
                  <a
                    href={liveLink || "#"}
                    onClick={(e) => { if (onPreview) { e.preventDefault(); onPreview(); } }}
                    target={liveLink ? "_blank" : undefined}
                    rel={liveLink ? "noopener noreferrer" : undefined}
                    className="inline-flex h-8 items-center justify-center rounded-md bg-white px-3 text-xs font-semibold text-black hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                  >
                    <Eye className="mr-1 h-3.5 w-3.5" />
                    Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* local keyframes */}
      <style>{`
        @keyframes sheen {
          0% { transform: translateX(0); opacity: 0; }
          25% { opacity: .9; }
          100% { transform: translateX(260%); opacity: 0; }
        }
      `}</style>
    </motion.article>
  );
}

/* -------------------- helpers -------------------- */
function formatCompact(n: number) {
  return Intl.NumberFormat("en", { notation: "compact" }).format(n);
}
