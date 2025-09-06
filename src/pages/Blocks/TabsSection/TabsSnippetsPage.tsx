// Reusable ComponentPreviewCard
const ComponentPreviewCard = ({ image, title, count }:any) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col">
    <div className="relative h-40 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-200">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        onError={(e:any) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x200/f5f7fa/334155?text=${title.replace(/\s/g, '+')}`; }}
      />
    </div>
    <div className="p-4 flex-grow">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {count && <p className="text-sm text-gray-500">{count} components</p>}
    </div>
  </div>
);

const TabsSnippetsPage = () => {
  const pageSections = [
    { title: 'Hero Sections', count: 14, image: 'https://placehold.co/400x200/e0e7ff/4338ca?text=Hero+Section' },
    { title: 'Feature Sections', count: 13, image: 'https://placehold.co/400x200/f0f4f8/334155?text=Feature+Section' },
    { title: 'CTA Sections', count: 12, image: 'https://placehold.co/400x200/dbeafe/1e40af?text=CTA+Section' },
    { title: 'Bento Grids', count: 7, image: 'https://placehold.co/400x200/fefce8/713f12?text=Bento+Grid' },
    { title: 'Pricing Sections', count: 13, image: 'https://placehold.co/400x200/fee2e2/991b1b?text=Pricing+Section' },
    { title: 'Header Sections', count: 8, image: 'https://placehold.co/400x200/e0f2f7/0e7490?text=Header+Section' },
    { title: 'Newsletter Sections', count: 8, image: 'https://placehold.co/400x200/ecfdf5/065f46?text=Newsletter+Section' },
    { title: 'Stats', count: 8, image: 'https://placehold.co/400x200/eef2ff/4f46e5?text=Stats+Section' },
    { title: 'Testimonials', count: 8, image: 'https://placehold.co/400x200/f5f7fa/334155?text=Testimonial' },
    { title: 'Blog Sections', count: 9, image: 'https://placehold.co/400x200/e0e7ff/4338ca?text=Blog+Section' },
    { title: 'Contact Sections', count: 7, image: 'https://placehold.co/400x200/dbeafe/1e40af?text=Contact+Section' },
    { title: 'Team Sections', count: 9, image: 'https://placehold.co/400x200/fefce8/713f12?text=Team+Section' },
    { title: 'Content Sections', count: 12, image: 'https://placehold.co/400x200/fee2e2/991b1b?text=Content+Section' },
    { title: 'Logo Clouds', count: 10, image: 'https://placehold.co/400x200/e0f2f7/0e7490?text=Logo+Cloud' },
    { title: 'FAQs', count: 7, image: 'https://placehold.co/400x200/ecfdf5/065f46?text=FAQs+Section' },
    { title: 'Footers', count: 7, image: 'https://placehold.co/400x200/eef2ff/4f46e5?text=Footer+Section' },
  ];

  const elements = [
    { title: 'Headers', count: 15, image: 'https://placehold.co/400x200/f5f7fa/334155?text=Header+Element' },
    { title: 'Layout Menus', count: 7, image: 'https://placehold.co/400x200/e0e7ff/4338ca?text=Layout+Menu' },
    { title: 'Banners', count: 13, image: 'https://placehold.co/400x200/dbeafe/1e40af?text=Banner+Element' },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Top Section Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            UI BLOCKS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            TABS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Heroes, feature sections, newsletter sign up forms — everything you need to
            build beautiful marketing websites.
          </p>
        </div>

        {/* Page Sections Grid */}
        <div className="mb-16">
          <h2 className="text-base font-semibold text-gray-500 mb-6 uppercase tracking-wide">
            PAGE SECTIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pageSections.map((section, index) => (
              <ComponentPreviewCard
                key={index}
                image={section.image}
                title={section.title}
                count={section.count}
              />
            ))}
          </div>
        </div>

        {/* Elements Grid */}
        <div>
          <h2 className="text-base font-semibold text-gray-500 mb-6 uppercase tracking-wide">
            ELEMENTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {elements.map((element, index) => (
              <ComponentPreviewCard
                key={index}
                image={element.image}
                title={element.title}
                count={element.count}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSnippetsPage;
