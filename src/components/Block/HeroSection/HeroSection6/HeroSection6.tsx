import { Code, ArrowRight } from 'lucide-react';


const HeroSection6 = () => (
  <section className="relative min-h-screen flex items-center justify-center p-8 text-white font-sans bg-gray-950 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-950 to-slate-950 animate-glow"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h16v16H0z\' fill=\'none\' /%3E%3Cpath d=\'M8 0v16M0 8h16\' stroke=\'%23334155\' stroke-width=\'0.5\' /%3E%3C/svg%3E')] bg-repeat opacity-20"></div>
    </div>
    
    <div className="relative z-10 w-full max-w-3xl text-center backdrop-blur-sm p-4 md:p-8 transform transition-transform duration-500 animate-fade-in-up">
      <Code className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse-fast" />
      
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">
        Code, Build, & Launch.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
        Create exceptional web experiences with a platform designed for engineers, by engineers.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition-colors">
          Start Building
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
        <a href="#" className="inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full bg-transparent text-gray-300 border border-fuchsia-600 hover:border-fuchsia-400 hover:text-white transition-colors">
          View Docs
        </a>
      </div>
    </div>
     <style>
        {`
          /* Custom glow animation for the background */
          @keyframes glow {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.7;
            }
          }
          .animate-glow {
            animation: glow 8s ease-in-out infinite;
          }
          /* Custom fade-in-up animation for content */
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
          /* Custom pulse-fast animation for the icon */
          @keyframes pulse-fast {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          .animate-pulse-fast {
            animation: pulse-fast 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}
      </style>
  </section>
);

export default HeroSection6;
