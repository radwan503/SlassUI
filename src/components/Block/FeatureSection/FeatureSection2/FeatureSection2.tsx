"use client";

import { 
  LayoutDashboard, 
  Plug, 
  BarChart3, 
  Workflow, 
  Database, 
  Users 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "CUSTOM DASHBOARDS",
    description:
      "Create and personalize your own dashboards to display real-time data and insights that matter most to your business.",
    icon: LayoutDashboard,
  },
  {
    title: "INTEGRATIONS",
    description:
      "Easily integrate with popular tools like Slack, Google Drive, Salesforce, and more to streamline your workflow.",
    icon: Plug,
  },
  {
    title: "ADVANCED ANALYTICS",
    description:
      "Access detailed analytics and generate comprehensive reports to track your performance and business growth.",
    icon: BarChart3,
  },
  {
    title: "AUTO WORKFLOWS",
    description:
      "Automate repetitive tasks to customizable workflows to save time and reduce human error.",
    icon: Workflow,
  },
  {
    title: "DATA MANAGEMENT",
    description:
      "Protect your data with enterprise-grade security features including encryption, access controls, and regular backups.",
    icon: Database,
  },
  {
    title: "COLLABORATION",
    description:
      "Collaborate with your team in real time with shared documents, instant messaging, and project tracking tools.",
    icon: Users,
  },
];

const FeaturesSection2=()=> {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            POWERFUL FEATURES <br />
            DESIGNED FOR EFFICIENCY
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/40 transition-all"
          >
            View all features
          </motion.button>
        </motion.div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-yellow-500/20 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-orange-500 mb-5 shadow-md group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">
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
export default FeaturesSection2
