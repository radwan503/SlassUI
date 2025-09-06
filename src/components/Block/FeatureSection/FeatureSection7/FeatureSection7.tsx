import { useState } from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Modern Sofa", count: 17 },
  { name: "Chairs", count: 12 },
  { name: "Timor Tables", count: 10 },
  { name: "Crafted Racks", count: 8 },
  { name: "Wardrobes", count: 16 },
  { name: "Lamp", count: 18 },
  { name: "Accessories", count: 42 },
  { name: "Office Appliances", count: 24 },
  { name: "Home App", count: 60 },
];

/** Category -> product arrays (first is featured) */
const productsByCategory: Record<string, any[]> = {
  "Modern Sofa": [
    {
      id: "ms_featured",
      title: "Outline Sofa",
      subtitle: "Get 25% Special Discount",
      desc: "Cloud-soft cushions, kiln-dried frame, stain-resistant fabric.",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      bg: "bg-[#7aa0bc]",
      sale: true,
      featured: true,
    },
    {
      id: "ms_oslo",
      title: "Oslo Bench",
      desc: "Solid oak seat with matte legs.",
      price: 210,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
      bg: "bg-gray-300",
    },
    {
      id: "ms_work",
      title: "Work Bench",
      desc: "Leather strap backrest, steel frame.",
      price: 289,
      image:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#79a7c5]",
    },
    {
      id: "ms_crafted",
      title: "Crafted Sofa",
      desc: "Compact two-seater for small spaces.",
      price: 520,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bg: "bg-[#b69e63]",
    },
    {
      id: "ms_modular",
      title: "Modular Sofa",
      desc: "Reconfigurable sections, deep seat.",
      price: 780,
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#c96f4b]",
    },
  ],
  Chairs: [
    {
      id: "ch_featured",
      title: "Maya Lounge Chair",
      subtitle: "Editor’s pick",
      desc: "Curved plywood shell with bouclé upholstery.",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
      bg: "bg-[#93a8b3]",
      featured: true,
    },
    {
      id: "ch_01",
      title: "Wishbone Chair",
      desc: "Papercord seat, beech frame.",
      price: 159,
      image:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#c9d7df]",
    },
    {
      id: "ch_02",
      title: "Café Chair",
      desc: "Stackable metal chair for dining.",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#9fb8c9]",
    },
    {
      id: "ch_03",
      title: "Bar Stool",
      desc: "Adjustable height, footrest included.",
      price: 119,
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#c1ab7a]",
    },
    {
      id: "ch_04",
      title: "Reading Chair",
      desc: "Wide arms, lumbar cushion.",
      price: 175,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#d07a58]",
    },
  ],
  "Timor Tables": [
    {
      id: "tb_featured",
      title: "Timor Coffee Table",
      subtitle: "New Arrival",
      desc: "Teak top with chamfered edges.",
      price: 240,
      image:
        "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bg: "bg-[#8aa0a8]",
      featured: true,
    },
    {
      id: "tb_01",
      title: "Round Bistro",
      desc: "Small-space hero in ash wood.",
      price: 139,
      image:
        "https://images.unsplash.com/photo-1475856034135-5f2c9bcd3a04?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#e5e7eb]",
    },
    {
      id: "tb_02",
      title: "Extendable Dining",
      desc: "Seats 6–8 with butterfly leaf.",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#9bb4c6]",
    },
    {
      id: "tb_03",
      title: "Side Table",
      desc: "Minimal steel base, oak top.",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop",
      bg: "bg-[#c7a76d]",
    },
    {
      id: "tb_04",
      title: "Console Table",
      desc: "Entryway storage with shelf.",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bg: "bg-[#c96f4b]",
    },
  ],
};

const getProducts = (categoryName: string) =>
  productsByCategory[categoryName] || productsByCategory["Modern Sofa"];

function Badge({ children }: any) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
      {children}
    </span>
  );
}

function ArrowButton({ label = "View" }) {
  return (
    <button
      aria-label={label}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/70 backdrop-blur text-white ring-1 ring-white/20 transition hover:scale-105 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
    >
      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function CategoryRail({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="relative mt-4 w-full overflow-x-auto">
      <ul className="flex min-w-max gap-3 px-2 pb-2 sm:gap-4 sm:px-0">
        {categories.map((c) => {
          const active = selected === c.name;
          return (
            <li key={c.name} className="whitespace-nowrap text-slate-700">
              <button
                onClick={() => onSelect(c.name)}
                className={`group rounded-xl border px-4 py-3 text-left shadow-sm transition hover:shadow-md ${
                  active
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p
                  className={`text-[13px] font-medium ${
                    active
                      ? "text-white"
                      : "text-slate-800 group-hover:text-slate-900"
                  }`}
                >
                  {c.name}
                </p>
                <p
                  className={`text-[11px] ${
                    active ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {c.count} Products
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProductCard({ item }: any) {
  const isFeatured = item.featured;
  return (
    <div
      className={`${item.bg} group relative isolate overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5`}
    >
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_60%_0%,rgba(255,255,255,0.2),rgba(255,255,255,0))]" />

      {/* Badge for sale */}
      {item.sale && (
        <div className="absolute right-4 top-4 z-20">
          <Badge>Sale</Badge>
        </div>
      )}

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className={`aspect-[4/3] w-full object-contain p-10 ${
          isFeatured ? "md:aspect-[4/3] lg:aspect-[4/3]" : ""
        }`}
        loading="lazy"
      />

      {/* Base content */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 p-5 text-white ${
          isFeatured ? "pb-6 md:p-7" : ""
        }`}
      >
        {isFeatured && item.subtitle && (
          <p className="mb-2 text-sm font-semibold text-white/90">
            {item.subtitle}
          </p>
        )}
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3
              className={`font-semibold drop-shadow-sm ${
                isFeatured ? "text-xl md:text-2xl" : "text-base"
              }`}
            >
              {item.title}
            </h3>
          </div>
          <ArrowButton />
        </div>
      </div>

      {/* Details Overlay on hover */}
      <div className="absolute inset-0 z-20 grid place-content-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="max-w-sm text-white">
          <p className="text-sm/5 text-white/90">{item.desc}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900">
              ${item.price}
            </span>
            <button className="rounded-full bg-slate-900/80 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-slate-900">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureSection7=()=> {
  const [selectedCat, setSelectedCat] = useState(categories[0].name);
  const products = getProducts(selectedCat);

  return (
    <div className="min-h-svh bg-neutral-50 py-6 text-slate-800">
      {/* Container */}
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">

        {/* Category rail (controls images) */}
        <CategoryRail selected={selectedCat} onSelect={setSelectedCat} />

        {/* Grid */}
        <section className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured takes 2x2 on large screens */}
          <div className="sm:col-span-2 lg:row-span-2">
            <ProductCard item={products[0]} />
          </div>

          {products.slice(1).map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </section>
      </div>

      {/* Utility styles (scoped) */}
      <style>{`
        .icon-btn { @apply inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:shadow-sm active:scale-95; }
      `}</style>
    </div>
  );
}
export default FeatureSection7