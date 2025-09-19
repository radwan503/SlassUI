"use client";

import React, { useMemo } from "react";
import { ArrowRight,  Layers, Puzzle,  } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  count?: number;
  category?: string;
  icon?: React.ElementType;
  tags?: string[];
  href?: string;
  meta?: string;
};

const patterns = [
  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.05)_0px,rgba(255,255,255,.05)_1px,transparent_1px,transparent_20px)]",
  "bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,.05)_0px,rgba(255,255,255,.05)_1px,transparent_1px,transparent_20px)]",
  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.03)_0px,rgba(255,255,255,.03)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(-45deg,rgba(255,255,255,.02)_0px,rgba(255,255,255,.02)_1px,transparent_1px,transparent_20px)]",
  "bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:24px_24px]",
  "bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.03),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,200,255,.10),transparent_60%)]",
  "bg-[conic-gradient(at_top_left,rgba(255,255,255,.03),rgba(255,255,255,.03),transparent_80%)]",
  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.02)_0px,rgba(255,255,255,.02)_2px,transparent_2px,transparent_4px)]",
  "bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,.05)_0,rgba(255,255,255,.05)_1px,transparent_1px,transparent_10px)] bg-[size:50px_50px]",
  "bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.06)_0px,rgba(255,255,255,.06)_2px,transparent_2px,transparent_12px)]",
];

const Placeholder = ({ title, Icon }: { title: string; Icon: React.ElementType }) => {
  const random = useMemo(() => patterns[Math.floor(Math.random() * patterns.length)], []);
  return (
    <div className={`relative h-40 overflow-hidden rounded-xl ${random} isolate`}>
      {/* Soft aurora glow */}
      <div className="pointer-events-none absolute -inset-1 opacity-80 [filter:blur(24px)]">
        <div className="absolute inset-0 animate-slow-pan bg-[radial-gradient(40%_60%_at_20%_30%,rgba(59,130,246,.25),transparent),radial-gradient(50%_70%_at_80%_70%,rgba(56,189,248,.18),transparent)]" />
      </div>

      {/* Shimmer sweep on hover */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[120%]" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center gap-3 px-4">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur">
          <Icon className="h-6 w-6 text-white/80" />
        </div>
        <div>
          <p className="text-sm font-medium tracking-wide text-white/90">{title}</p>
          <p className="text-xs text-white/60">Beautifully crafted UI block</p>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

// Gradient border mask helper class (no Tailwind plugin required)
const gradientBorder =
  "relative before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px] before:[background:linear-gradient(120deg,rgba(59,130,246,.7),rgba(56,189,248,.6),rgba(168,85,247,.6))] before:[-webkit-mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] before:[-webkit-mask-composite:xor] before:mask-composite:exclude";

const StackLayer = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute inset-0 rounded-2xl bg-black/20 ring-1 ring-white/10 backdrop-blur-sm ${className}`}
    aria-hidden
  />
);

export default function ComponentPreviewCard({
  title,
  count,
  //category,
  icon: Icon = Layers,
  tags = [],
  href,
 // meta,
}: Props) {
  const IconToUse = Icon ?? Layers;

  const Card = (
    <motion.div
      whileHover={{ y: -2, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={`group ${gradientBorder}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Stack illusion (layers behind the main card) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <StackLayer className="translate-x-1 translate-y-1 opacity-70" />
        <StackLayer className="translate-x-2 translate-y-2 opacity-40" />
        <StackLayer className="translate-x-3 translate-y-3 opacity-20" />
      </div>

      {/* Main card body */}
      <div className="relative rounded-2xl bg-slate-900 text-slate-100 ring-1 ring-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
        {/* Top media/visual */}
        <div className="p-3">
          <Placeholder title={title} Icon={IconToUse} />
        </div>

        {/* Content */}
        <div className="px-4 pb-4 pt-1">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold leading-tight" style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}>{title}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-400 py-1">
                {count != null && <span className="inline-flex items-center gap-1"><Puzzle className="h-4 w-4" /> {count} components</span>}
               
                {/* {meta && <p className="inline-flex items-center gap-2"><Folder size={14}/> {meta}</p>} */}
    
              </div>
            </div>

            {/* CTA pill */}
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200 transition-colors group-hover:border-sky-400/40 group-hover:bg-sky-400/10">
                Preview
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {/* For < xl → show only 1 */}
              <div className="flex xxl:hidden flex-wrap gap-2">
                <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                  {tags[0]}
                </span>
                {tags.length > 1 && (
                  <span className="rounded-md border border-white/10 bg-white/[0.08] px-2.5 py-1 text-xs text-slate-400">
                    +{tags.length - 1} more
                  </span>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Inline keyframes & utilities used by this card */}
      <style>{`
        @keyframes slow-pan {
          0% { transform: translate3d(0,0,0) }
          50% { transform: translate3d(-5%, -5%, 0) }
          100% { transform: translate3d(0,0,0) }
        }
        .animate-slow-pan { animation: slow-pan 14s ease-in-out infinite; }
      `}</style>

      {href ? (
        <a href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70">
          {Card}
        </a>
      ) : (
        Card
      )}
    </>
  );
}
