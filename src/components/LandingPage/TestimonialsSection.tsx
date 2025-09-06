import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Using SnapKit saved us weeks of design and frontend effort. We launched our SaaS faster and got customer feedback immediately.",
      author: "Fahim Karim",
      company: "Co-Founder of BlockBulid",
      avatar: "https://placehold.co/48x48/e2e8f0/64748b?text=SK", // Placeholder avatar
      logo: "https://placehold.co/60x16/e2e8f0/64748b?text=BlockBulid" // Placeholder logo
    },
    {
      quote: "The prebuilt components are a game changer. Instead of worrying about UI, I can focus entirely on product logic and growth.",
      author: "Daniel Gazu",
      company: "Product Lead at GazuTech",
      avatar: "https://placehold.co/48x48/e2e8f0/64748b?text=DB", // Placeholder avatar
      logo: "https://placehold.co/60x16/e2e8f0/64748b?text=GazuTech" // Placeholder logo
    },

  ];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-px opacity-50">
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg hidden lg:block"></div>
        <div className="border-b border-darkBg hidden lg:block"></div>
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg hidden lg:block"></div>
        <div className="border-b border-darkBg hidden lg:block"></div>
      </div>
      <div className="absolute inset-0 grid grid-rows-2 gap-px opacity-50">
        <div className="border-b border-darkBg"></div>
        <div className="border-b border-darkBg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              avatar={testimonial.avatar}
              logo={testimonial.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
