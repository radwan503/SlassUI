import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection2 = () => {
  return (

    <section className="bg-slate-950 text-white font-sans antialiased p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl">
      <div className="mx-auto max-w-screen-xl text-center">
        <a 
          href="#" 
          className="inline-flex items-center justify-between p-1 pr-4 mb-7 text-sm font-medium transition-all duration-300 transform bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 rounded-full"
        >
          <span className="text-xs bg-indigo-600 rounded-full text-white px-4 py-1.5 mr-3 shadow-md">New</span>
          <span className="text-sm font-medium">SlassUI is out! See what's new</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>

        {/* Main heading and sub-heading */}
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
          We build with the world’s potential
        </h1>
        <p className="mb-8 text-base sm:text-lg lg:text-xl font-normal text-slate-400 max-w-3xl mx-auto">
          Here at SlassUI we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row mb-8 lg:mb-16 space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-indigo-600 rounded-full transition-transform duration-200 hover:scale-105 hover:bg-indigo-700 shadow-lg focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
          >
            Learn more
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-slate-300 rounded-full border border-slate-700 transition-transform duration-200 hover:scale-105 hover:bg-slate-800 focus:ring-4 focus:ring-slate-700 shadow-lg"
          >
            <PlayCircle className="mr-2 w-5 h-5" />
            Watch video
          </a>
        </div>

        {/* Featured in logos section */}
        <div className="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg">
          <span className="font-semibold text-slate-500 uppercase tracking-wider">FEATURED IN</span>
          <div className="flex flex-wrap items-center justify-center mt-8 text-slate-400 sm:justify-between space-x-8 sm:space-x-0">
            {/* These SVG logos have been replaced with simple text and icons for a cleaner, more generic design */}
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-white transition-colors">
              <span className="text-2xl font-bold">TechCrunch</span>
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-white transition-colors">
              <span className="text-2xl font-bold">Wired</span>
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-white transition-colors">
              <span className="text-2xl font-bold">Forbes</span>
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-white transition-colors">
              <span className="text-2xl font-bold">The Verge</span>
            </a>
            <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-white transition-colors">
              <span className="text-2xl font-bold">Bloomberg</span>
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default HeroSection2;
