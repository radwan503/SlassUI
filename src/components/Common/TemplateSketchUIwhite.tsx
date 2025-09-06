import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const NAV_ITEMS = ["Home", "Features", "Pricing", "Contact"];
const SAMPLE_CARDS = [
  { title: "Street Bites", desc: "3-min video script + shots list" },
  { title: "Wok Magic", desc: "Sizzle + closeups template" },
  { title: "Sweet Stop", desc: "Dessert hero + overlay" },
  { title: "Spice Route", desc: "Spice-close shots + B-roll" },
];

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-indigo-500 flex items-center justify-center text-white font-bold">S</div>
        <div className="font-semibold text-lg">SketchKit</div>
      </div>
      <ul className="hidden md:flex gap-6 text-sm text-gray-700">
        {NAV_ITEMS.map((n) => (
          <li key={n} className="hover:text-indigo-600 cursor-pointer">
            {n}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-md border border-gray-200 text-sm">Sign in</button>
        <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Get started</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Beautiful UI template
          <span className="block text-indigo-600">React + Tailwind + Motion</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          A small collection of layout building blocks: navbar, hero, feature grid, card
          carousel and footer — ready to copy into your project and iterate on.
        </p>
        <div className="mt-6 flex gap-3">
          <button className="px-4 py-2 rounded-md bg-indigo-600 text-white">Use template</button>
          <button className="px-4 py-2 rounded-md border">Preview</button>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <div className="p-6">
            <h3 className="font-semibold">Quick preview</h3>
            <p className="mt-2 text-sm text-gray-500">Cards rotate automatically with a motion transition.</p>

            <CardCarousel cards={SAMPLE_CARDS} />
          </div>
        </div>
      </div>
    </header>
  );
}

function Card({ item }:any) {
  return (
    <div className="p-4 rounded-xl border min-w-[220px] bg-gradient-to-br from-white to-gray-50">
      <h4 className="font-semibold">{item.title}</h4>
      <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
      <div className="mt-4 text-xs text-gray-500">Prototype • 3 cards</div>
    </div>
  );
}

function CardCarousel({ cards = [] }:any) {
  const [active, setActive] = useState(0);

  // auto-rotate every 3s
  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % cards.length), 3000);
    return () => clearInterval(id);
  }, [cards.length]);

  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={active}
            initial={{ x: 50, opacity: 0, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -50, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="w-full"
          >
            <Card item={cards[active]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex items-center gap-2">
        {cards.map((_:any, i:any) => (
          <button
            key={i}
            aria-label={`Go to ${i}`}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full ${i === active ? "bg-indigo-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureGrid() {
  const features = [
    { title: "Responsive", desc: "Mobile-first layout ready" },
    { title: "Accessible", desc: "Semantic markup & keyboard focus" },
    { title: "Composable", desc: "Small components to mix" },
    { title: "Animated", desc: "Framer Motion interactions" },
  ];

  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f) => (
        <div key={f.title} className="p-4 rounded-xl border bg-white">
          <h5 className="font-semibold">{f.title}</h5>
          <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 py-6 border-t">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} SketchKit</div>
        <div className="flex gap-3 text-sm text-gray-600">
          <a className="hover:text-indigo-600">Privacy</a>
          <a className="hover:text-indigo-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default function TemplateSketch() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-12 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        <FeatureGrid />
        <Footer />
      </div>
    </div>
  );
}
