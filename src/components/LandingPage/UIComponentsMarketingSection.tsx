import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ComponentPreviewCard from './ComponentPreviewCard';
import Button from '../../utils/Button';
import { tabContent } from '../../data/landingPageConfig';

const UIComponentsTabbedSection = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  const currentTab = tabContent[activeTab];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      {/* Vertical 'UI BLOCKS' text on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-top-left ml-[-50px] md:ml-[-100px] lg:ml-[-150px] text-white font-bold text-xl uppercase tracking-widest whitespace-nowrap hidden sm:block">
        UI BLOCKS
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-textColor leading-tight mb-6 text-left">
          Ready-to-use UI components <br className="hidden sm:inline" /> for modern projects.
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-textSlate max-w-2xl text-left mb-12">
          Explore a growing collection of 149+ hand-crafted, production-ready components. 
          Save hours of design and development time while keeping full creative control with Tailwind CSS.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-left border-b border-t border-darkBg mb-8 md:mb-12">
          {Object.keys(tabContent).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                py-3 px-6 text-lg font-semibold border-l border-darkBg
                ${activeTab === key
                  ? 'text-textColor bg-darkBg border border-grayBg'
                  : 'text-textSlate hover:text-gray-700'}
                transition-colors duration-200 focus:outline-none
              `}
            >
              {tabContent[key].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentTab.items.map((item: any, index: any) => (
            <ComponentPreviewCard
              key={index}
              image={item.image}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button variant="primary" size="lg" icon={ArrowRight}>
            Browse full library
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UIComponentsTabbedSection;
