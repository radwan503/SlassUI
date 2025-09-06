import { PlayCircle } from "lucide-react";

const HeroSection4 = () => (
  <section className="bg-gray-900 border border-gray-800 min-h-screen grid grid-cols-1 md:grid-cols-2">
    {/* Content Side */}
    <div className="flex items-center justify-center p-8 md:p-16 text-white text-center md:text-left">
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
          See Our Platform in Action
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Watch a quick walkthrough and discover how our solution can
          revolutionize your workflow.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <PlayCircle className="w-5 h-5 mr-2" />
          Watch the Demo
        </a>
      </div>
    </div>

    {/* Video Side */}
    <div className="relative overflow-hidden bg-gray-800 flex items-center justify-center">
      <div className="w-full h-full">
        <iframe
          className="w-full h-full aspect-video"
          src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=0&rel=0"
          title="YouTube video demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Play Button Overlay (Optional, if you want custom play look) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button className="p-4 rounded-full bg-white/20 backdrop-blur-sm text-white transition-transform hover:scale-110">
            <PlayCircle className="w-12 h-12" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection4;
