import { UserCog, ShoppingCart, ChartLine, Rocket, Blocks } from "lucide-react";


const FloatingIcon = ({ icon: Icon, className, delay }: any) => (
  <div
    className={`absolute text-gray-400 opacity-30 z-30 ${className} animate-float`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
  </div>
);


const StatsCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col relative w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium text-gray-900">
          Active Users right now ✨
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Page views */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl">
          <p className="text-xl md:text-2xl font-bold text-gray-900">478</p>
          <p className="text-xs text-gray-500 text-center">
            Page views per minute
          </p>
        </div>
        {/* Graph */}
        <div className="flex-1 p-4 bg-indigo-500 rounded-xl relative">
          <svg
            className="w-full h-24"
            viewBox="0 0 500 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C125,10 250,150 375,50 500,190"
              fill="none"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="478"
              cy="188"
              r="8"
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
            />
            <text
              x="478"
              y="170"
              fill="#fff"
              fontSize="20"
              textAnchor="middle"
              fontWeight="bold"
            >
              478
            </text>
          </svg>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex justify-between items-end gap-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-1">
            <UserCog className="text-white w-6 h-6" />
          </div>
          <p className="font-bold text-xl text-gray-900">36K</p>
          <p className="text-xs text-gray-500">Users</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mb-1">
            <ShoppingCart className="text-white w-6 h-6" />
          </div>
          <p className="font-bold text-xl text-gray-900">1m</p>
          <p className="text-xs text-gray-500">Clicks</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-1">
            <ChartLine className="text-white w-6 h-6" />
          </div>
          <p className="font-bold text-xl text-gray-900">25K</p>
          <p className="text-xs text-gray-500">Sales</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mb-1">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <p className="font-bold text-xl text-gray-900">25K</p>
          <p className="text-xs text-gray-500">Items</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-auto text-center">
        Update your payout method in Settings
      </p>
    </div>
  );
};

// Main Hero Section
const HeroSection1 = () => {
  return (
    <section className="bg-gray-50 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-indigo-50 opacity-50 z-0"></div>

      {/* Floating colored blobs */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/2 w-8 h-8 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Floating icons with varied responsive positions */}
      <FloatingIcon icon={UserCog} className="top-8 left-6 sm:top-16 sm:left-12" delay={0} />
      <FloatingIcon icon={ShoppingCart} className="top-1/4 right-6 sm:right-16" delay={1000} />
      <FloatingIcon icon={Blocks } className="bottom-1/2 left-8 sm:left-40" delay={2000} />
      <FloatingIcon icon={Rocket} className="bottom-8 right-12 sm:bottom-12 sm:right-24" delay={3000} />

      {/* Content */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* Left Text Section */}
        <div className="text-center lg:text-left pl-4 sm:pl-6 lg:pl-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Greatr Team
            <br />
            Best Result.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
            It's crafted with the latest trend of design & coded with all modern
            approaches.
          </p>

          <div className="max-w-md mx-auto lg:mx-0">
            <p className="text-gray-500 mb-4">
              Join the newsletter and get 2 months free with full access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Card Section */}
        <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <div className="relative w-full aspect-square max-w-sm sm:max-w-md md:max-w-lg lg:w-[30rem] 2xl:w-[38rem] lg:h-[38rem]">
            <div className="absolute inset-0 w-full h-full object-contain bg-blue-100" />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute top-1/2 left-1/2 lg:left-[55%] -translate-x-1/2 -translate-y-1/2 w-full max-w-sm lg:max-w-lg">
            <StatsCard />
          </div>
        </div>
      </div>

      {/* -------Style-------- */}
      <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
    </section>
  );
};

export default HeroSection1;
