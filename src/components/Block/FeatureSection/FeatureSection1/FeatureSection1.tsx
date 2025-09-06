import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Zap, Users } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    description:
      "Experience blazing fast load times with optimized performance across all devices.",
    icon: <Zap className="w-8 h-8 text-white" />,
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    title: "Secure by Default",
    description:
      "Your data is protected with enterprise-grade encryption and best security practices.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    title: "Scalable Design",
    description:
      "Built to grow with your business, scaling seamlessly as your user base expands.",
    icon: <Rocket className="w-8 h-8 text-white" />,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    title: "Community Driven",
    description:
      "Join a thriving community of users and developers shaping the future together.",
    icon: <Users className="w-8 h-8 text-white" />,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
];

const FeatureSection1=()=> {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-7xl">
        {/* Fake Code Editor Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-950 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden border border-gray-800"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
       
          </div>

          {/* Inside Editor (Feature Section Rendered) */}
          <div className="bg-gradient-to-tr from-gray-950 via-gray-900 to-black p-12 relative overflow-hidden">
            {/* Animated Gradient Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2, scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 12 }}
              className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-[160px]"
            />

            <section className="relative z-10 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Why Choose Our Platform?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg"
              >
                Discover the features that make our solution unique and modern — designed to deliver value at every step.
              </motion.p>

              {/* Feature Grid */}
              <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
                    className="rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 relative group bg-gray-900 border border-gray-800"
                  >
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl text-left font-semibold mb-3 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-left text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default FeatureSection1