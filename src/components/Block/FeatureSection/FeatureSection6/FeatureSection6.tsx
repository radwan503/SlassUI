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
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scale effortlessly with our secure and reliable cloud platform designed for modern businesses.",
    icon: Cloud,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
  },
  {
    title: "Advanced Analytics",
    description:
      "Visualize performance with interactive dashboards and predictive analytics at your fingertips.",
    icon: LineChart,
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks with intelligent workflows to save time and reduce human error.",
    icon: Bot,
    gradient: "from-yellow-400 via-orange-500 to-pink-500",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your data with enterprise-grade security protocols, encryption, and compliance.",
    icon: ShieldCheck,
    gradient: "from-red-400 via-rose-500 to-pink-500",
  },
  {
    title: "Team Collaboration",
    description:
      "Empower your teams with real-time collaboration, messaging, and project tracking tools.",
    icon: Users,
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
  },
];

const FeatureSection6=()=> {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
        >
          Next-Gen Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Unlock the full potential of your business with intelligent tools
          designed for speed, scalability, and seamless collaboration.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg mb-6`}
            >
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          Explore Platform
        </motion.button>
      </div>
    </section>
  );
}
export default  FeatureSection6