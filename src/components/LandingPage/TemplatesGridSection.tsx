// components/TemplatesGridSection.tsx
"use client";

import { Layers, Rocket, Palette, GraduationCap, BookOpen, Mic, Smartphone, Calendar, ShieldCheck, Box, Terminal } from "lucide-react";
import ComponentPreviewCard from "./ComponentPreviewCard";
import { timeAgo } from "../../utils/constant";

type TemplateItem = {
  title: string;
  category: string;
  count: number;
  tags: string[];
  icon: React.ElementType;
  href: string;
  updatedAt?: string;
  meta?: string;
  popularity?: number;
};

const templates: TemplateItem[] = [
  {
    title: "Spotlight",
    category: "Portfolio",
    count: 14,
    tags: ["Grid Gallery", "Case Studies", "Dark/Light"],
    icon: Palette,
    href: "/templates/spotlight",
    updatedAt: "2025-09-14T07:20:00Z",
    meta: "New: Masonry grid",
    popularity: 92,
  },
  {
    title: "Radiant",
    category: "SaaS Landing",
    count: 18,
    tags: ["Hero", "Pricing", "Testimonials"],
    icon: Rocket,
    href: "/templates/radiant",
    updatedAt: "2025-09-15T11:05:00Z",
    meta: "Conversion tuned",
    popularity: 98,
  },
  {
    title: "Compass",
    category: "Education",
    count: 16,
    tags: ["Course Cards", "Curriculum", "Checkout"],
    icon: GraduationCap,
    href: "/templates/compass",
    updatedAt: "2025-09-10T10:10:00Z",
    popularity: 88,
  },
  {
    title: "Salient",
    category: "Product Marketing",
    count: 20,
    tags: ["A/B Ready", "Feature Grid", "Blog"],
    icon: ShieldCheck,
    href: "/templates/salient",
    updatedAt: "2025-09-08T18:40:00Z",
    meta: "Fresh hero layouts",
    popularity: 96,
  },
  {
    title: "Studio",
    category: "Agency",
    count: 12,
    tags: ["Case Studies", "Team", "Inquiry"],
    icon: Box,
    href: "/templates/studio",
    updatedAt: "2025-09-12T09:30:00Z",
    popularity: 83,
  },
  {
    title: "Primer",
    category: "B2B",
    count: 15,
    tags: ["Integrations", "Pricing", "Lead Gen"],
    icon: Layers,
    href: "/templates/primer",
    updatedAt: "2025-09-11T14:05:00Z",
    popularity: 90,
  },
  {
    title: "Protocol",
    category: "Docs",
    count: 22,
    tags: ["Sidebar", "Search", "Code Blocks"],
    icon: BookOpen,
    href: "/templates/protocol",
    updatedAt: "2025-09-13T06:55:00Z",
    meta: "AI search ready",
    popularity: 94,
  },
  {
    title: "Commit",
    category: "Changelog",
    count: 8,
    tags: ["Releases", "RSS", "Filters"],
    icon: Terminal,
    href: "/templates/commit",
    updatedAt: "2025-09-07T16:00:00Z",
    popularity: 72,
  },
  {
    title: "Transmit",
    category: "Podcast",
    count: 10,
    tags: ["Episodes", "Subscribe", "Players"],
    icon: Mic,
    href: "/templates/transmit",
    updatedAt: "2025-09-09T20:25:00Z",
    popularity: 79,
  },
  {
    title: "Pocket",
    category: "Mobile App",
    count: 13,
    tags: ["Screens", "Onboarding", "FAQ"],
    icon: Smartphone,
    href: "/templates/pocket",
    updatedAt: "2025-09-12T12:12:00Z",
    popularity: 86,
  },
  {
    title: "Syntax",
    category: "Developer Docs",
    count: 19,
    tags: ["MDX", "Search", "Theming"],
    icon: BookOpen,
    href: "/templates/syntax",
    updatedAt: "2025-09-06T08:10:00Z",
    popularity: 89,
  },
  {
    title: "Keynote",
    category: "Events",
    count: 11,
    tags: ["Schedule", "Speakers", "Tickets"],
    icon: Calendar,
    href: "/templates/keynote",
    updatedAt: "2025-09-10T22:00:00Z",
    popularity: 81,
  },
];

export default function TemplatesGridSection() {
  return (
    <section className="relative overflow-hidden bg-primary border-t border-darkBg py-20 md:py-32">
      {/* Soft section glow */}
      <div className="pointer-events-none absolute -inset-24 opacity-50 blur-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_20%_30%,rgba(59,130,246,.25),transparent),radial-gradient(50%_70%_at_80%_70%,rgba(56,189,248,.18),transparent)]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center md:text-left">
          <h2
              className="mb-4 text-4xl md:text-5xl font-extrabold leading-tight 
              bg-gradient-to-r from-white via-sky-300 to-fuchsia-400 bg-clip-text text-transparent"
            >
              Design Once. Deploy Everywhere.
            </h2>

          <p className="mx-auto max-w-3xl text-sm md:text-base text-textSlate md:mx-0">
            Hand-crafted React & Tailwind CSS templates built for speed, style, and scalability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {templates.map((t) => (
            <ComponentPreviewCard
              key={t.title}
              title={t.title}
              count={t.count}
              category={t.category}
              icon={t.icon}
              tags={t.tags}
              meta={t.updatedAt ? `Updated ${timeAgo(t.updatedAt)}` : t.meta}
              href={t.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------- helpers ------- */

