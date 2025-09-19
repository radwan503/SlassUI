import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection3 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      const { clientX, clientY } = event;
      // Get the center of the viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Calculate the offset from the center
      const offsetX = (clientX - centerX) / 20; // Reduce the sensitivity
      const offsetY = (clientY - centerY) / 20;
      setMousePosition({ x: offsetX, y: offsetY });
    };

    // Add the event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-slate-950 text-white font-sans antialiased relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 opacity-40"></div>
      
      {/* This is the animated background shape */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-blob-one"></div>
      <div className="absolute top-1/4 right-1/4 transform -translate-x-1/4 -translate-y-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-indigo-500/30 rounded-full filter blur-3xl opacity-50 animate-blob-two"></div>
      <div className="absolute bottom-1/4 left-1/4 transform translate-x-1/4 translate-y-1/4 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-blue-500/30 rounded-full filter blur-3xl opacity-50 animate-blob-three"></div>
      
      {/* The main content, which moves with the mouse for a unique parallax feel */}
      <div 
        className="relative z-10 text-center max-w-4xl mx-auto transition-transform duration-100 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${-mousePosition.x}deg)`
        }}
      >
        
        <a 
          href="#" 
          className="inline-flex items-center justify-between p-1 pr-4 mb-7 text-sm font-medium transition-all duration-300 transform bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 rounded-full shadow-md"
        >
          <span className="text-xs bg-indigo-600 rounded-full text-white px-4 py-1.5 mr-3 shadow-md">New</span>
          <span className="text-sm font-medium">The future is here. See what's next.</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Reimagine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovation</span> with SlassUI
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          From groundbreaking concepts to polished products, our platform empowers you to build with unparalleled creativity and efficiency.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 shadow-xl hover:shadow-indigo-500/50"
          >
            Start Building
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-transparent text-slate-300 border border-slate-700 transition-all duration-300 hover:border-slate-500 hover:text-white hover:scale-105"
          >
            Explore Features
          </a>
        </div>
      </div>

      {/* -------Style-------- */}
      <style>{`
        @keyframes blob-one {
          0%, 100% {
            transform: scale(1) translate(0, 0);
          }
          30% {
            transform: scale(1.1) translate(20px, 10px) rotate(10deg);
          }
          60% {
            transform: scale(0.9) translate(-10px, -20px) rotate(-15deg);
          }
        }
        @keyframes blob-two {
          0%, 100% {
            transform: scale(1) translate(0, 0);
          }
          40% {
            transform: scale(1.2) translate(-15px, 25px) rotate(-5deg);
          }
          75% {
            transform: scale(0.8) translate(15px, -15px) rotate(20deg);
          }
        }
        @keyframes blob-three {
          0%, 100% {
            transform: scale(1) translate(0, 0);
          }
          25% {
            transform: scale(0.95) translate(10px, -10px) rotate(5deg);
          }
          80% {
            transform: scale(1.15) translate(-25px, 10px) rotate(-10deg);
          }
        }
        .animate-blob-one {
          animation: blob-one 15s infinite alternate ease-in-out;
        }
        .animate-blob-two {
          animation: blob-two 18s infinite alternate ease-in-out;
        }
        .animate-blob-three {
          animation: blob-three 13s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection3;
