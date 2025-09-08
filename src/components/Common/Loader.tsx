const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="relative flex flex-col items-center">
        {/* Animated Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
          SlassUI
        </h1>

        {/* Modern Loader Ring */}
        <div className="mt-8 relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute w-full h-full border-4 border-transparent border-b-pink-500 rounded-full animate-[spin_1.5s_linear_reverse_infinite]"></div>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-gray-400 text-sm animate-pulse">
          Crafting UI with style...
        </p>
      </div>
    </div>
  );
};

export default Loader;
