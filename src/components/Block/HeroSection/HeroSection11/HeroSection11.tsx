import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const HeroSection11 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#0a1128] text-white min-h-screen overflow-hidden">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-20">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
          <span className="text-lg font-bold">Brand</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className="hover:text-blue-400 transition">Product</a>
          <a href="#" className="hover:text-blue-400 transition">Features</a>
          <a href="#" className="hover:text-blue-400 transition">Marketplace</a>
          <a href="#" className="hover:text-blue-400 transition">Company</a>
          <a href="#" className="hover:text-blue-400 transition">Log in</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#111b3c] flex flex-col items-start px-8 py-6 gap-6 z-20 md:hidden shadow-lg rounded-b-lg">
            <a href="#" className="text-blue-400 font-medium">Dashboard</a>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2 rounded-md font-medium text-white shadow-md hover:opacity-90 transition">
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-8 py-16 gap-12 z-10">
        {/* Left Side */}
        <div className="flex flex-col space-y-6">
          <div className="bg-[#111b3c] text-gray-300 px-4 py-2 rounded-md w-fit text-sm">
            Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
            <a href="#" className="text-blue-400 font-medium hover:underline">
              Read more →
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Data to enrich <br /> your business
          </h1>

          <p className="text-gray-400 leading-relaxed">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>

          {/* Buttons */}
          <div className="flex items-center space-x-6 pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md font-medium text-white shadow-md hover:opacity-90 transition">
              Get started
            </button>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 font-medium flex items-center gap-1"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>

      {/* Right Side with angled image */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-64 md:h-full clip-path-diagonal z-0">
        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200"
          alt="Laptop user"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Custom clip-path for angle */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }
        @media (max-width: 768px) {
          .clip-path-diagonal {
            clip-path: none; /* remove angle on small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection11;
