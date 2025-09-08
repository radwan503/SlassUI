const patterns = [
    // Random diagonal line pattern (like your screenshot)
  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.05)_0px,rgba(255,255,255,.05)_1px,transparent_1px,transparent_20px)]",

  // Inverse diagonal (opposite direction)
  "bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,.05)_0px,rgba(255,255,255,.05)_1px,transparent_1px,transparent_20px)]",

  // Dual-layer subtle hatch
  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.03)_0px,rgba(255,255,255,.03)_1px,transparent_1px,transparent_20px),repeating-linear-gradient(-45deg,rgba(255,255,255,.02)_0px,rgba(255,255,255,.02)_1px,transparent_1px,transparent_20px)]",
  // Subtle grid (already present but more contrast)
  "bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:24px_24px]",

  // Soft radial mesh
  "bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.03),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,200,255,.1),transparent_60%)]",

  // Aurora effect
  "bg-[conic-gradient(at_top_left,rgba(255,255,255,.03),rgba(255,255,255,.03),transparent_80%)]",

  // Noise texture (simulated with gradients)
  "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.02)_0px,rgba(255,255,255,.02)_2px,transparent_2px,transparent_4px)]",

  // Waves
  "bg-[repeating-radial-gradient(circle_at_center,rgba(255,255,255,.05)_0,rgba(255,255,255,.05)_1px,transparent_1px,transparent_10px)] bg-[size:50px_50px]",

  // Stripes with glow
  "bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.06)_0px,rgba(255,255,255,.06)_2px,transparent_2px,transparent_12px)]",

  
  
];


const Placeholder = ({ title }: { title: string }) => {
  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  return (
    <div
      className={`relative h-40 rounded-lg flex items-center justify-center text-center text-sm font-semibold text-gray-300 ${randomPattern} overflow-hidden`}
    >
      {/* Animated Glow */}
      <div className="absolute -inset-[40%] bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/20 animate-spin-slow rounded-full blur-3xl" />

      {/* Parallax Floating Glow */}
      <div className="absolute w-[200%] h-[200%] bg-gradient-to-tr from-blue-500/10 via-blue-500/10 to-transparent animate-float-slow blur-2xl" />

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-lg" />

      {/* Title */}
      <p className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:tracking-wide">
        {title}
      </p>
    </div>
  );
};

const ComponentPreviewCard = ({ title, count, category }: any) => (
  <div
    className="bg-darkBg rounded-xl overflow-hidden group flex flex-col border border-white/5 hover:border-blue-500/40 transition-all duration-500 animate-float"
    style={{
      boxShadow: "10px 10px 0 #243a56",
      transform: "translate(-1px, -1px)",
      transition: ".3s ease-in-out",
    }}
  >
    {/* Unique placeholder */}
    <Placeholder title={title} />

    {/* Content */}
    <div className="p-4 flex-grow">
      <h3 className="text-base font-semibold text-textColor transition-colors duration-500">
        {title}
      </h3>
      {count && <p className="text-sm text-gray-500">{count} components</p>}
      {category && <p className="text-sm text-textSlate">{category}</p>}
    </div>
  </div>
);


export default ComponentPreviewCard;
