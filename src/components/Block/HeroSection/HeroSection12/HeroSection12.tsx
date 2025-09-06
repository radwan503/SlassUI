import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../../../../utils/Button";

export default function HeroSection12() {
  return (
    <section className="relative py-8 lg:py-24 flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#1e293b] overflow-hidden">
      {/* Background animated shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-72 h-72 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-purple-600 rounded-full blur-3xl -top-36 -left-36 md:-top-36 md:-left-52"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-64 h-64 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-blue-500 rounded-full blur-3xl -bottom-36 -right-36 md:-bottom-36 md:-right-52"
      />

      {/* Hero content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl px-6">
        
        {/* Left text section */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Vision<span className="text-purple-400">X</span>
            </span>
          </div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight"
          >
            Design Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Future
            </span>{" "}
            With Creative Ideas
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl"
          >
            Build stunning digital experiences with modern UI, smooth animations, 
            and smart layouts that adapt to every device.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-3 rounded-xl shadow-lg w-full sm:w-auto text-center">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-gray-400 text-white text-lg px-6 py-3 rounded-xl w-full sm:w-auto text-center"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right image section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-8 md:mt-0"
        >
          {/* Floating image */}
          <motion.img
            src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=700&auto=format&fit=crop&q=80"
            alt="hero"
            className="rounded-2xl shadow-2xl border border-gray-700 max-w-md object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Decorative glow behind image */}
          <div className="absolute -z-10 inset-0 flex justify-center items-center">
            <div className="w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
