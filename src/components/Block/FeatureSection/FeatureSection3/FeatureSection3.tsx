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
      "We craft stunning and intuitive web experiences that leave lasting impressions on your users.",
    icon: Monitor,
  },
  {
    title: "Mobile App UI Design",
    description:
      "Beautiful, functional mobile interfaces designed to delight users on both iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    title: "Mobile App UX Design",
    description:
      "Seamless and user-friendly app experiences, optimized for every device and user journey.",
    icon: SmartphoneCharging,
  },
  {
    title: "Dashboard UI Design",
    description:
      "Clean and modern dashboards that transform complex data into simple, actionable insights.",
    icon: LayoutDashboard,
  },
  {
    title: "Dashboard UX Design",
    description:
      "Thoughtfully structured workflows for smooth and efficient user journeys and data management.",
    icon: SquareStack,
  },
  {
    title: "Product Design",
    description:
      "From initial concept to final product, we design with purpose and a focus on user needs.",
    icon: PenTool,
  },
];

const featureIconColors = [
  "from-cyan-400 to-sky-500",
  "from-indigo-400 to-purple-500",
  "from-fuchsia-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-red-500",
];

const FeatureSection3=()=> {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-100 ">      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              A Modern Solution <br className="hidden md:inline" />for Your Growing Business
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We design premium digital products that help your brand stand out and connect with customers in a competitive world.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full shadow-md text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Staggered Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 lg:gap-y-20 gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-3xl bg-white/70 backdrop-blur-lg shadow-xl ring-1 ring-gray-100/70 transition-all duration-500 transform
                ${index % 3 === 1 ? "lg:mt-16" : ""} 
                ${index % 3 === 2 ? "lg:mt-32" : ""}`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${featureIconColors[index]} text-white shadow-lg mb-6`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium text-sm gap-1 hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
export default FeatureSection3;