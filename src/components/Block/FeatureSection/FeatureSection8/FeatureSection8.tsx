// src/components/FeatureSection.jsx
import { useState } from "react";

/** Simple inline icons (no extra deps) */
const IconClipboard = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="7" y="3" width="10" height="4" rx="2" className="fill-current opacity-20"/>
    <rect x="5" y="5" width="14" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 3.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCog = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19.4 15.5a7.92 7.92 0 0 0 .08-1.5 7.92 7.92 0 0 0-.08-1.5l2.03-1.58a.8.8 0 0 0 .19-1.04l-1.92-3.32a.8.8 0 0 0-1.01-.35L15.9 6.1a6.67 6.67 0 0 0-2.4-1.4l-.36-2.54A.8.8 0 0 0 12.36 1h-3.72a.8.8 0 0 0-.79.66L7.5 4.2a6.67 6.67 0 0 0-2.4 1.4L2.3 4.21a.8.8 0 0 0-1.01.35L-.62 7.88a.8.8 0 0 0 .18 1.04L1.6 10.5c-.05.49-.08.99-.08 1.5 0 .51.03 1.01.08 1.5l-2.04 1.58a.8.8 0 0 0-.18 1.04l1.92 3.32c.2.35.63.49 1.01.35l2.8-1.39c.73.58 1.55 1.04 2.43 1.35l.36 2.54c.06.38.39.66.78.66h3.72c.39 0 .72-.28.78-.66l.36-2.54c.88-.31 1.7-.77 2.43-1.35l2.8 1.39c.38.14.81 0 1.01-.35l1.92-3.32a.8.8 0 0 0-.19-1.04L19.4 15.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);
const IconTailwind = ({ className = "" }) => (
  <svg viewBox="0 0 48 28" className={className} aria-hidden="true">
    <path
      d="M14 10c2.8-5.6 7-8.4 12.6-8.4 8.4 0 9.8 6.3 14 7 3 .5 5.5-.6 7.4-3.4-2.8 5.6-7 8.4-12.6 8.4-8.4 0-9.8-6.3-14-7-3-.5-5.5.6-7.4 3.4Zm-7 12c2.8-5.6 7-8.4 12.6-8.4 8.4 0 9.8 6.3 14 7 3 .5 5.5-.6 7.4-3.4-2.8 5.6-7 8.4-12.6 8.4-8.4 0-9.8-6.3-14-7-3-.5-5.5.6-7.4 3.4Z"
      className="fill-current"
    />
  </svg>
);

/** Demo data for the three tabs */
const TABS = [
  {
    key: "copy",
    title: "Simply Copy & Paste",
    desc: "Drop-in blocks and patterns that just work—no heavy setup required.",
    color: "text-pink-500",
    badge: "Pending",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: "customize",
    title: "Easy to Customize",
    desc: "Utility-first classes and clean markup make tweaks effortless.",
    color: "text-green-500",
    badge: "Active",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    key: "tailwind",
    title: "Made with TailwindCSS",
    desc: "Modern, responsive by default, and production-ready out of the box.",
    color: "text-sky-500",
    badge: "New",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeatureSection8=()=> {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section className="relative isolate font-sans bg-gradient-to-b from-white via-white-500/40 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <p className="text-center text-sm font-bold tracking-[0.25em] text-indigo-600 uppercase">
          130+ Handcrafted Blocks
        </p>

        <h1 className="mt-4 text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Mixland helps you <span className="text-indigo-600">build</span> beautiful websites
        </h1>

        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Powerful, responsive, and modern UI blocks that make building your website faster and more enjoyable.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab)}
                className={`w-full text-left rounded-2xl p-6 transition-all border shadow-md hover:shadow-lg ${
                  active.key === tab.key
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className={`inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 border ${tab.color}`}>
                    {tab.key === "copy" && (
                      <IconClipboard className="w-6 h-6" />
                    )}
                    {tab.key === "customize" && (
                      <IconCog className="w-6 h-6" />
                    )}
                    {tab.key === "tailwind" && (
                      <IconTailwind className="w-8 h-5" />
                    )}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">{tab.title}</h3>
                    <p className="mt-1 text-sm leading-6 opacity-90">{tab.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AppMock image={active.image} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-64 max-w-5xl bg-gradient-to-b from-indigo-200/50 to-transparent blur-3xl opacity-70" />
    </section>
  );
}
export default FeatureSection8
function AppMock({ image }:any) {
  return (
    <div className="rounded-3xl border-4 border-black bg-white shadow-xl shadow-indigo-100 overflow-hidden">
      <img src={image} alt="App Mock" className="w-full h-[440px] object-cover" />
    </div>
  );
}

