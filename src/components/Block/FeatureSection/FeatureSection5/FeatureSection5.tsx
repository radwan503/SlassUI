import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  LineChart,
  Bot,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Insights",
    description:
      "Leverage machine learning to uncover trends, optimize workflows, and make data-driven decisions faster.",
    icon: Cpu,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scale effortlessly with our secure and reliable cloud platform designed for modern businesses.",
    icon: Cloud,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Advanced Analytics",
    description:
      "Visualize performance with interactive dashboards and predictive analytics at your fingertips.",
    icon: LineChart,
    gradient: "from-green-400 to-emerald-600",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks with intelligent workflows to save time and reduce human error.",
    icon: Bot,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your data with enterprise-grade security protocols, encryption, and compliance.",
    icon: ShieldCheck,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Team Collaboration",
    description:
      "Empower your teams with real-time collaboration, messaging, and project tracking tools.",
    icon: Users,
    gradient: "from-teal-400 to-cyan-600",
  },
];

const FeatureSection5=()=> {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Next-Gen Features <br /> Built for Growth
          </h2>
          <p className="text-lg text-gray-300 max-w-lg mb-8">
            Unlock the full potential of your business with intelligent tools
            designed for speed, scalability, and seamless collaboration.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/40">
            Explore Platform
          </button>
        </div>

        {/* Right side features */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg mb-4`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default  FeatureSection5