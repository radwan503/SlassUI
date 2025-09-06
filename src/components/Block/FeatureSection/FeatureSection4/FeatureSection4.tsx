import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  SmartphoneCharging,
  LayoutDashboard,
  SquareStack,
  PenTool,
} from "lucide-react";

const features = [
  {
    title: "Web UI/UX Design",
    description:
      "We craft stunning and intuitive web experiences that leave lasting impressions.",
    icon: Monitor,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    title: "Mobile App UI Design",
    description:
      "Beautiful, functional mobile interfaces designed to delight your users.",
    icon: Smartphone,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Mobile App UX Design",
    description:
      "Seamless and user-friendly app experiences optimized for every device.",
    icon: SmartphoneCharging,
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Dashboard UI Design",
    description:
      "Clean and modern dashboards that turn complex data into simple insights.",
    icon: LayoutDashboard,
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Dashboard UX Design",
    description:
      "Thoughtfully structured workflows for smooth and efficient user journeys.",
    icon: SquareStack,
    gradient: "from-pink-400 to-pink-600",
  },
  {
    title: "Product Design",
    description:
      "From wireframe to final product, we design with purpose and precision.",
    icon: PenTool,
    gradient: "from-cyan-400 to-cyan-600",
  },
];

const FeatureSection4=()=> {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated gradient accent background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 leading-snug animate-gradient-x">
              Perfect Solution For <br /> Your Business
            </h2>
            <p className="text-gray-300 max-w-lg text-lg">
              We design premium digital products that help brands stand out in a
              competitive world.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/40 animate-pulse-slow">
            Join Us
          </button>
        </div>

        {/* Staggered Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className={`p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-md hover:shadow-2xl transition-all duration-500 ${
                index % 3 === 1 ? "mt-10" : ""
              } ${index % 3 === 2 ? "mt-20" : ""}`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg mb-6 animate-fadeIn`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-blue-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200 hover:text-blue-300"
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeatureSection4