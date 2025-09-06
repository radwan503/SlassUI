import { UserCog, ShoppingCart, ChartLine, Rocket, Blocks, ShieldCheck, Award } from "lucide-react";

const FloatingIcon = ({ icon: Icon, className, delay }: any) => (
  <div
    className={`absolute text-white/50 opacity-40 z-30 ${className} animate-float`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className="w-10 h-10 md:w-12 md:h-12 drop-shadow-xl" />
  </div>
);

const StatsCard = () => {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.4)] rounded-3xl p-6 md:p-8 flex flex-col relative w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-white tracking-wide flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-400" /> Active Users ✨
        </h3>
        <span className="px-3 py-1 text-xs bg-green-400/20 text-green-300 rounded-full border border-green-400/30">
          Live
        </span>
      </div>

      {/* Graph + Value */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-lg">
          <p className="text-3xl md:text-4xl font-extrabold text-white">478</p>
          <p className="text-sm text-gray-200 text-center">Page views/min</p>
        </div>
        <div className="flex-1 p-4 rounded-xl bg-indigo-600/40 border border-white/20 backdrop-blur-lg relative">
          <svg className="w-full h-24" viewBox="0 0 500 200" preserveAspectRatio="none">
            <path
              d="M0,100 C125,10 250,150 375,50 500,190"
              fill="none"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="478" cy="188" r="8" fill="#fff" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { icon: UserCog, color: "bg-blue-500", label: "Users", value: "36K" },
          { icon: ShoppingCart, color: "bg-pink-500", label: "Clicks", value: "1M" },
          { icon: ChartLine, color: "bg-green-500", label: "Sales", value: "25K" },
          { icon: Rocket, color: "bg-orange-500", label: "Items", value: "25K" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-2 shadow-lg`}>
              <stat.icon className="text-white w-6 h-6" />
            </div>
            <p className="font-bold text-lg text-white">{stat.value}</p>
            <p className="text-xs text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-300 text-center italic">
        Trusted by <span className="text-indigo-300 font-medium">10,000+ companies</span> worldwide 🌍
      </p>
    </div>
  );
};

const HeroSection22 = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-gray-900 text-white">
      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating icons */}
      <FloatingIcon icon={UserCog} className="top-8 left-6 sm:top-16 sm:left-12" delay={0} />
      <FloatingIcon icon={ShoppingCart} className="top-1/4 right-6 sm:right-16" delay={1000} />
      <FloatingIcon icon={Blocks} className="bottom-1/2 left-8 sm:left-40" delay={2000} />
      <FloatingIcon icon={Rocket} className="bottom-8 right-12 sm:bottom-12 sm:right-24" delay={3000} />

      {/* Content */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Build Smarter. <br /> Grow Faster
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 mb-6">
            Empower your team with modern analytics, real-time insights, and a design system built for growth.  
            Experience the <span className="text-indigo-300 font-semibold">next-gen glass UI</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg transition">
              Get Started Free
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium shadow-lg transition">
              Watch Demo
            </button>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto lg:mx-0 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-300 mb-4">
              Join <span className="text-indigo-300 font-semibold">50k+ subscribers</span> & unlock exclusive features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="px-6 py-3 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 opacity-80">
            <Award className="w-6 h-6 text-yellow-400" />
            <p className="text-sm text-gray-300">Award-winning UI & Analytics Platform</p>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <div className="absolute top-1/2 left-1/2 lg:left-[55%] -translate-x-1/2 -translate-y-1/2 w-full max-w-sm lg:max-w-lg">
            <StatsCard />
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection22;
