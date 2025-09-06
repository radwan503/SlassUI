import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Server } from "lucide-react";

const FeatureListItem = ({ name, description, icon }: any) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-white">
        <span className="absolute left-1 top-1 text-indigo-400">{icon}</span>
        {name}
      </dt>
      <dd className="inline text-gray-300"> {description}</dd>
    </div>
  );
};

const FeatureSection13 = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // %
    const y = ((e.clientY - top) / height) * 100; // %
    setPosition({ x, y });
  };

  const features = [
    {
      name: "Real-time collaboration.",
      description:
        "Work seamlessly with your team on a single source of truth. Changes update instantly across all dashboards.",
      icon: <Cloud size={20} />,
    },
    {
      name: "Robust security.",
      description:
        "Your data is protected with end-to-end encryption and enterprise-grade security protocols.",
      icon: <Shield size={20} />,
    },
    {
      name: "Scalable infrastructure.",
      description:
        "Our platform is built on a resilient cloud architecture that scales with your business needs.",
      icon: <Server size={20} />,
    },
  ];

  return (
    <div
      className="relative rounded-3xl p-[2px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Moving Gradient Background */}
      <motion.div
        animate={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, #6366f1, #0f172a, #000000)`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
        className="absolute inset-0"
      />

      {/* Inner Content */}
      <div className="relative bg-gray-900 rounded-3xl py-24 sm:py-32 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-400">
                  Enhance your workflow
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  A better way to build.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Our all-in-one development platform simplifies your workflow,
                  from initial design to final deployment. Focus on what you do
                  best while we handle the rest.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  {features.map((feature) => (
                    <FeatureListItem
                      key={feature.name}
                      name={feature.name}
                      description={feature.description}
                      icon={feature.icon}
                    />
                  ))}
                </dl>
              </div>
            </div>
            <motion.img
              src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product UI Screenshot"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl   sm:w-[57rem] md:-ml-4 lg:-ml-0"
              animate={{
                x: (position.x - 50) / 5, // subtle parallax
                y: (position.y - 50) / 5,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection13;
