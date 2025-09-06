import { useState } from "react";
import { Upload, Menu, X } from "lucide-react";


const wallpapers = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&h=800&fit=crop",
];

export default function HeroSection7() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#010d20] text-white font-sans relative">
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-r from-green-400 to-cyan-400 rounded-md"></div>
          <h1 className="text-xl font-bold">
            Wall<span className="text-green-400">Craft</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="text-green-400">
            Home
          </a>
          <a href="#">PC</a>
          <a href="#">Mobile</a>
          <a href="#">4K</a>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-400 to-cyan-400 px-5 py-2 rounded-lg font-semibold text-black hover:opacity-90 transition">
          <Upload size={18} /> Upload
        </button>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#02152d] flex flex-col items-center py-6 gap-6 z-20 md:hidden shadow-lg rounded-b-lg">
            <a href="#" className="text-green-400 font-medium">
              Home
            </a>
            <a href="#">PC</a>
            <a href="#">Mobile</a>
            <a href="#">4K</a>
            <button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-cyan-400 px-5 py-2 rounded-lg font-semibold text-black hover:opacity-90 transition">
              <Upload size={18} /> Upload
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 relative z-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Discover <span className="text-green-400">Stunning 4K</span>{" "}
            Wallpapers
          </h2>
          <p className="text-base md:text-lg mt-3 font-medium">
            Handpicked backgrounds for your{" "}
            <span className="text-cyan-400">phone, PC & beyond</span>.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Explore thousands of high-quality wallpapers shared by a passionate
            community. Make your screen come alive!
          </p>

          <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg text-black font-semibold hover:opacity-90 transition">
              Explore Wallpapers
            </button>
            <a
              href="#"
              className="underline underline-offset-4 hover:text-green-400"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Side - Infinite Scrolling Wallpapers */}
        <div className="relative overflow-hidden max-h-svh">
          <div className="animate-scroll-slow grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...wallpapers, ...wallpapers].map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition"
              >
                <img
                  src={src}
                  alt={`Wallpaper ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010d20]/90 via-[#010d20]/80 to-[#010d20] -z-10"></div>

      {/* Style */}
      <style>{`
        @keyframes scroll-slow {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
