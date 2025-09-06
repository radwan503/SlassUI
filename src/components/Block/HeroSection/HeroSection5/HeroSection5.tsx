import { Sparkles, BarChart2 } from 'lucide-react';

const HeroSection5 = () => (
  <section className="bg-gray-900 border border-gray-800 min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    <div className="relative flex items-center justify-center p-8 md:p-16">
      <div className="w-full h-full rounded-3xl p-4 md:p-8 relative overflow-hidden flex items-center justify-center shadow-lg transform rotate-3 scale-105 bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse-slow">
        <Sparkles className="absolute top-1/4 left-1/4 w-12 h-12 text-white/50 animate-spin-slow" />
        <BarChart2 className="absolute bottom-1/4 right-1/4 w-12 h-12 text-white/50 animate-bounce" />
        <h2 className="relative z-10 text-white text-3xl font-bold text-center">Data that Pops.</h2>
      </div>
    </div>
    
    {/* Content Side */}
    <div className="flex items-center justify-center p-8 md:p-16 text-white text-center md:text-left">
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Visualize Your Success
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Turn complex data into beautiful, easy-to-understand insights that drive growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            Get Started
            <Sparkles className="w-5 h-5 ml-2" />
          </a>
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-transparent text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white transition-colors">
            See Examples
          </a>
        </div>
      </div>
    </div>
    <style>
        {`
          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1) rotate(3deg);
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            50% {
              transform: scale(1.02) rotate(3deg);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          /* Custom spin animation, slower than Tailwind's default */
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
        `}
      </style>
  </section>
);


export default HeroSection5;
