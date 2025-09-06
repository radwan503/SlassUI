import { useState } from "react";
import { Plane, Search, CalendarDays, ChevronDown, User, Menu, X, Globe, DollarSign, Clock, Users, ArrowRight, BedDouble } from "lucide-react";


const HeroSection21 = () => {
  const [tripType, setTripType] = useState("oneway");
  const [menuOpen, setMenuOpen] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date().toISOString().slice(0, 10));


  const FickleFlightLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-7 h-7">
      <path d="M12 19L5 12L12 5L19 12L12 19Z" />
      <path d="M12 12L7 17" />
      <path d="M12 12L17 7" />
    </svg>
  );
  
  // Handles form submission to show functionality
  const handleSearch = (e:any) => {
    e.preventDefault();
    const formData = {
      tripType,
      origin,
      destination,
      departureDate,
      passengers,
    };
    // Log data to console to show that the form is functional
    console.log("Searching for flights with data:", formData);
    // In a real application, you would make an API call here.
  };

  return (
    <div className="relative font-sans text-neutral-900 min-h-screen flex flex-col bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
      {/* Subtle background star pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%), radial-gradient(ellipse at top left, rgba(255,255,255,0.1) 0%, transparent 70%)',
      }}></div>

      {/* Top navigation header */}
      <header className="top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white">
            <FickleFlightLogo />
            <span>FickleFlight</span>
          </div>

          {/* Desktop navigation links */}
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
              <Globe size={16} className="text-white/70 group-hover:text-white transition-colors" />
              <span>Explore</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
              <BedDouble size={16} className="text-white/70 group-hover:text-white transition-colors" />
              <span>Stays</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-white transition-colors group">
              <Plane size={16} className="text-white/70 group-hover:text-white transition-colors" />
              <span>Flights</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group">
              <DollarSign size={16} className="text-white/70 group-hover:text-white transition-colors" />
              <span>Offers</span>
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors">
              <User size={20} />
              <span>Sign In</span>
            </a>
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white/90 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu content */}
        {menuOpen && (
          <nav className="lg:hidden w-full bg-white/10 backdrop-blur-md border-t border-neutral-700 animate-slide-down">
            <ul className="flex flex-col items-center py-4">
              {["Explore", "Stays", "Flights", "Offers"].map((item) => (
                <li key={item} className="w-full">
                  <a href="#" className="block py-3 text-center text-white/90 hover:bg-neutral-800 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li className="w-full mt-2">
                <a href="#" className="block py-3 text-center text-white/90 hover:bg-neutral-800 transition-colors">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero content section */}
      <section className="relative z-10 flex flex-grow items-center justify-center pt-24 pb-12 sm:pb-24 lg:pt-32">
        <div className="relative w-full max-w-7xl px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Find your next flight.
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl font-medium text-white/90 drop-shadow-md">
            Discover and book the perfect flight for your journey.
          </p>

          {/* Search Form */}
          <div className="mt-12 rounded-3xl bg-white/95 p-4 sm:p-8 shadow-2xl ring-1 ring-neutral-200 backdrop-blur-md w-full max-w-5xl mx-auto">
            <form onSubmit={handleSearch}>
              {/* Trip type buttons */}
              <div className="mb-6 flex gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setTripType("return")}
                  className={`py-2 px-6 rounded-full text-sm font-semibold transition-colors ${
                    tripType === "return" ? "bg-blue-600 text-white shadow-lg" : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  Return
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`py-2 px-6 rounded-full text-sm font-semibold transition-colors ${
                    tripType === "oneway" ? "bg-blue-600 text-white shadow-lg" : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  One-way
                </button>
              </div>

              {/* Form grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Origin */}
                <div className="flex flex-col relative">
                  <label htmlFor="origin" className="text-xs font-medium uppercase text-neutral-500 mb-1 absolute -top-4  px-2 rounded-lg">
                    Origin
                  </label>
                  <div className="relative">
                    <input
                      id="origin"
                      type="text"
                      placeholder="City or airport"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full rounded-2xl border-2 bg-white border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                    <Plane size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                  </div>
                </div>
                
                {/* Destination */}
                <div className="flex flex-col relative">
                  <label htmlFor="destination" className="text-xs font-medium uppercase text-neutral-500 mb-1 absolute -top-4  px-2 rounded-lg">
                    Destination
                  </label>
                  <div className="relative">
                    <input
                      id="destination"
                      type="text"
                      placeholder="City or airport"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full rounded-2xl bg-white  border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                    <Plane size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transform rotate-180" />
                  </div>
                </div>
                
                {/* Departure Date */}
                <div className="flex flex-col relative">
                  <label htmlFor="departure-date" className="text-xs font-medium uppercase text-neutral-500 mb-1 absolute -top-4  px-2 rounded-lg">
                    Departure Date
                  </label>
                  <div className="relative">
                    <input
                      id="departure-date"
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full rounded-2xl bg-white  border-2 border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-900 transition-colors"
                    />
                    <CalendarDays size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                  </div>
                </div>

                {/* Passengers dropdown */}
                <div className="flex flex-col relative">
                  <label htmlFor="passengers" className="text-xs font-medium uppercase text-neutral-500 mb-1 absolute -top-4  px-2 rounded-lg">
                    Passengers
                  </label>
                  <div className="relative">
                    <div
                      onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                      className="w-full rounded-2xl border-2  border-neutral-200 px-4 py-3 text-sm bg-white cursor-pointer flex justify-between items-center text-neutral-900"
                    >
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-neutral-400" />
                        <span>{passengers} Adult{passengers > 1 ? 's' : ''}</span>
                      </div>
                      <ChevronDown size={18} className={`text-neutral-400 transform transition-transform ${showPassengerDropdown ? "rotate-180" : ""}`} />
                    </div>
                    {showPassengerDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-neutral-200 z-20">
                        <div className="p-4 flex items-center justify-between">
                          <span className="text-neutral-600">Adults</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setPassengers(Math.max(1, passengers - 1))}
                              className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors"
                            >
                              -
                            </button>
                            <span className="font-semibold text-neutral-900 w-6 text-center">{passengers}</span>
                            <button
                              type="button"
                              onClick={() => setPassengers(passengers + 1)}
                              className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Search button */}
              <div className="mt-6 flex justify-center">
                <button type="submit" className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                  <Search size={20} />
                  <span>Search Flights</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Recent Searches Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8 mb-16">
        <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-white/90">
          <Clock size={20} className="text-white/70" />
          Recent Searches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RecentCard from="NYC" to="LAX" date="Oct 25" />
          <RecentCard from="MIA" to="LHR" date="Nov 12" />
          <RecentCard from="SFO" to="NRT" date="Dec 01" />
          <RecentCard from="DFW" to="ORD" date="Sep 15" />
          <RecentCard from="JFK" to="CDG" date="Oct 05" />
          <RecentCard from="LAX" to="HNL" date="Jan 20" />
        </div>
      </section>
    </div>
  );
};

// Subcomponent for recent search cards
const RecentCard = ({ from, to, date }:any) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white/20 rounded-xl shadow-md backdrop-blur-md hover:bg-white/30 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="bg-white/30 text-white rounded-full p-2">
          <Plane size={18} />
        </div>
        <div className="text-white">
          <div className="flex items-center gap-1 font-semibold text-lg">
            <span>{from}</span>
            <ArrowRight size={16} className="text-white/70" />
            <span>{to}</span>
          </div>
          <div className="text-sm font-medium text-white/80 mt-1">
            <span className="flex items-center gap-1">
              <CalendarDays size={14} className="text-white/60" />
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection21;
