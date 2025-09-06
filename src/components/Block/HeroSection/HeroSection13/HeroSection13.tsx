import { useState } from "react";
import { Menu, X, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection13 =()=> {
   const [menuOpen, setMenuOpen] = useState(false);

 return (
    <div className="relative bg-[#0a1128] text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-20">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
          <span className="text-lg font-bold">Brand</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className="hover:text-blue-400 transition">Product</a>
          <a href="#" className="hover:text-blue-400 transition">Features</a>
          <a href="#" className="hover:text-blue-400 transition">Marketplace</a>
          <a href="#" className="hover:text-blue-400 transition">Company</a>
          <a href="#" className="hover:text-blue-400 transition">Log in</a>
        </div>
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
        <motion.div 
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#111b3c] text-gray-300 px-4 py-2 rounded-md w-fit text-sm shadow-md">
            ✨ New release: Get started with premium tools.{" "}
            <a href="#" className="text-blue-400 font-medium hover:underline">
              Read more →
            </a>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              Data that empowers
            </span>{" "}
            <br /> your <span className="text-blue-400">business</span>
          </h1>

          <p className="text-gray-300 leading-relaxed max-w-lg text-lg opacity-90">
            Turn insights into action with next-gen analytics, custom dashboards,
            and AI-powered reporting. Everything you need to scale faster.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle2 className="text-blue-400" size={20} /> Real-time data
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle2 className="text-blue-400" size={20} /> AI Insights
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle2 className="text-blue-400" size={20} /> 24/7 Support
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-6 pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl font-medium text-white shadow-lg hover:scale-105 transform transition">
              Get started
            </button>
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 font-medium flex items-center gap-1"
            >
              Learn more →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side with new angled image */}
      <motion.div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-64 md:h-full clip-path-angle2 z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=1200"
          alt="Laptop user"
          className="w-full h-full object-cover"
        />
      </motion.div>

    </div>
  );
}

export default HeroSection13