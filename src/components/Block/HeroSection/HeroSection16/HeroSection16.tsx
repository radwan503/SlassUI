import { useState } from "react";
import { Mail, Menu, X, Check } from "lucide-react";

const AscendLogo = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white w-7 h-7"
  >
    <path
      d="M12 2L2 22H22L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      className="text-neutral-200"
    />
    <path
      d="M12 2L17 12H7L12 2Z"
      fill="currentColor"
      className="text-blue-500"
    />
    <path
      d="M12 2L17 12H7L12 2ZM7 12L2 22H22L17 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection16 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative font-sans text-neutral-900 min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden dark:text-neutral-100">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-80 dark:opacity-60 z-0"></div>
      
      <div className="relative max-w-7xl mx-auto w-full p-4 sm:p-8 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md rounded-3xl shadow-xl z-10">
        
        <header className="flex items-center justify-between mb-16 relative">
          <div className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight">
            <AscendLogo />
            <span className="text-white dark:text-neutral-100">Ascend</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block flex-grow text-center">
            <ul className="flex justify-center space-x-8">
              {["Features", "Pricing", "Case Studies", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-neutral-300 dark:hover:text-white transition-colors font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white dark:bg-neutral-800 rounded-lg shadow-xl mt-4 p-6 z-50 md:hidden animate-fade-in">
              <ul className="flex flex-col space-y-4 text-center">
                {["Features", "Pricing", "Case Studies", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-full transition-colors shadow-lg">
                    Get Started
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* --- Main Content Section --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-6xl  font-extrabold leading-tight mb-6 text-white dark:text-white drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white dark:from-blue-500 dark:to-white">
                Elevate
              </span>{" "}
               Your Business with a Modern POS
            </h1>

            <p className="text-xl text-neutral-100 dark:text-neutral-200 mb-8">
              A powerful, all-in-one solution to manage your sales, inventory, and customer relationships with ease.
            </p>

            <ul className="space-y-4 mb-8 text-neutral-200 text-lg">
              <li className="flex items-start justify-center lg:justify-start space-x-2">
                <Check className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <span>Streamline payments and track cost savings effortlessly.</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start space-x-2">
                <Check className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <span>Gain real-time insights with powerful sales and inventory reports.</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start space-x-2">
                <Check className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                <span>Enhance customer loyalty with integrated CRM tools.</span>
              </li>
            </ul>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="relative w-full sm:w-auto flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/80 dark:bg-neutral-700/80 text-neutral-900 dark:text-white placeholder-neutral-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
              <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full lg:w-2/5 mt-12 lg:mt-0 p-4 sm:p-8 flex justify-center items-center">
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop&q=80"
                alt="Modern POS system and payment terminal"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-1/4 left-0 -translate-x-1/4 -translate-y-1/4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-xl w-[150px] sm:w-[220px] animate-pulse-slow">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Weekly Sales</p>
              <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">$12,450</p>
            </div>
            
            {/* Floating Card 2 */}
            <div className="absolute bottom-1/4 right-0 translate-x-1/4 translate-y-1/4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl shadow-xl w-[150px] sm:w-[220px] animate-pulse-slow animation-delay-500">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">New Customers</p>
              <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">450+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection16;
