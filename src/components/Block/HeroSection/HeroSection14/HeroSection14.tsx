import { ArrowDown, Home } from "lucide-react";

const HeroSection14 = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white min-h-screen font-sans flex items-center justify-center p-6">
      {/* Outer container */}
      <div className="max-w-7xl mx-auto w-full md:grid md:grid-cols-5 lg:gap-12 xl:gap-20 items-center">
        
        {/* Left Column */}
        <div className="md:col-span-2 flex flex-col justify-start items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <Home className="h-9 w-9 text-yellow-400" />
            <span className="text-2xl font-extrabold tracking-tight">
              Deco<span className="text-yellow-400">Craft</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Let’s Design Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
              Dream Home
            </span>{" "}
            Easily
          </h1>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-all shadow-lg mb-10 hover:scale-105">
            Get Started
          </button>

          {/* Left Image */}
          <div className="w-full h-72 bg-gray-700 rounded-2xl overflow-hidden relative shadow-xl mb-6">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80"
              alt="Modern living room"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center space-x-2 text-yellow-400 self-center md:self-auto animate-bounce">
            <div className="border border-yellow-400 rounded-full p-2">
              <ArrowDown size={22} />
            </div>
            <span className="text-sm font-semibold">Scroll to explore</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="max-w-xl text-gray-300 mb-10 leading-relaxed text-lg">
            Interior design is the art and science of enhancing the interior of a
            building to create a healthier and more aesthetically pleasing
            environment for the people using the space.
          </p>

          {/* Statistics Row */}
          <div className="flex justify-center md:justify-start space-x-8 md:space-x-14 lg:space-x-20 mb-10">
            <div>
              <p className="text-4xl font-extrabold text-yellow-400 mb-1">400+</p>
              <span className="text-gray-300">Clients</span>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-yellow-400 mb-1">2.5k+</p>
              <span className="text-gray-300">Products</span>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-yellow-400 mb-1">12+</p>
              <span className="text-gray-300">Years Experience</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-[420px] bg-gray-700 rounded-2xl overflow-hidden relative shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=900&auto=format&fit=crop&q=80"
              alt="Cozy modern interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection14;
