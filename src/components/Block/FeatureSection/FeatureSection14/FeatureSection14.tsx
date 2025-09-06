import { BarChart2, Layers, User, FileText, Brain, Split } from "lucide-react";

const features = [
  {
    icon: BarChart2,
    title: "Advance analytics",
    desc: "Unlock the full potential of your data with our advanced analytics. Empower yourself with insights and make informed decisions for your business growth.",
  },
  {
    icon: Layers,
    title: "100+ Integrations",
    desc: "Streamline your workflow with ease. Choose from over 100+ integrations and seamlessly connect your tools, for a unified and efficient process.",
  },
  {
    icon: User,
    title: "User Journey",
    desc: "Experience the journey from a user’s perspective. Get a deeper understanding of their behavior and needs, and optimize customer journey for a seamless experience.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    desc: "Effortlessly track your success. Generate automated reports, and stay on top of your key metrics without any manual effort.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Power up your decision-making with machine learning. Let our cutting-edge technology help you drive success and stay ahead in the game.",
  },
  {
    icon: Split,
    title: "A/B Testing",
    desc: "Make informed decisions with A/B testing. Experiment with different variations, and use data-driven insights to optimize and drive success for your business.",
  },
];

const FeatureSection14=()=> {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Simple yet <span className="text-red-500">powerful</span> features
          </h2>
        </div>

        {/* Features grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
          >
            Get started
          </a>
          <a
            href="#"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            See more features
          </a>
        </div>
      </div>
    </section>
  );
}
export default  FeatureSection14