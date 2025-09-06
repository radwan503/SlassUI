import ComponentPreviewCard from "./ComponentPreviewCard";

const TemplatesGridSection = () => {
  const templates = [
    {
      title: "Spotlight",
      description: "Portfolio template for showcasing personal projects.",
      image: "https://placehold.co/400x250/e0e7ff/4338ca?text=Spotlight+Template",
    },
    {
      title: "Radiant",
      description: "Modern SaaS landing page built for conversions.",
      image: "https://placehold.co/400x250/f0f4f8/334155?text=Radiant+Template",
    },
    {
      title: "Compass",
      description: "Learning and course platform template.",
      image: "https://placehold.co/400x250/dbeafe/1e40af?text=Compass+Template",
    },
    {
      title: "Salient",
      description: "High-converting SaaS product marketing site.",
      image: "https://placehold.co/400x250/fefce8/713f12?text=Salient+Template",
    },
    {
      title: "Studio",
      description: "Creative agency and portfolio template.",
      image: "https://placehold.co/400x250/fee2e2/991b1b?text=Studio+Template",
    },
    {
      title: "Primer",
      description: "Clean and bold B2B product website template.",
      image: "https://placehold.co/400x250/e0f2f7/0e7490?text=Primer+Template",
    },
    {
      title: "Protocol",
      description: "API reference and developer documentation template.",
      image: "https://placehold.co/400x250/ecfdf5/065f46?text=Protocol+Template",
    },
    {
      title: "Commit",
      description: "Changelog and release notes template.",
      image: "https://placehold.co/400x250/eef2ff/4f46e5?text=Commit+Template",
    },
    {
      title: "Transmit",
      description: "Podcast and audio content publishing template.",
      image: "https://placehold.co/400x250/f0f4f8/334155?text=Transmit+Template",
    },
    {
      title: "Pocket",
      description: "Mobile app landing & onboarding template.",
      image: "https://placehold.co/400x250/e0e7ff/4338ca?text=Pocket+Template",
    },
    {
      title: "Syntax",
      description: "Developer-friendly documentation template.",
      image: "https://placehold.co/400x250/dbeafe/1e40af?text=Syntax+Template",
    },
    {
      title: "Keynote",
      description: "Conference & event landing page template.",
      image: "https://placehold.co/400x250/fefce8/713f12?text=Keynote+Template",
    },
  ];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Heading */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textColor leading-tight mb-4">
            Design Once. Deploy Everywhere.
          </h2>
          <p className="text-lg md:text-xl text-textSlate max-w-3xl mx-auto md:mx-0">
            Hand-crafted React & Tailwind CSS templates built for speed, style, and scalability.
          </p>

        </div>

        {/* Grid of Template Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <ComponentPreviewCard
              key={index}
              image={template.image}
              title={template.title}
              description={template.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesGridSection;
