import { Layers2, PackagePlus, SquaresExclude } from 'lucide-react';
import { useState } from 'react';
import LayoutSketchPlayground from '../Common/LayoutSketchPlayground';
import UIBlockLayoutSketchAltAnimated from '../Common/UIBlockLayoutSketchAltAnimated';
import TemplateSketchUIDark from '../Common/TemplateSketchUIDark';

const OfferingsSection = () => {
  const [activeTab, setActiveTab] = useState('ui-blocks');

  const tabs = [
    {
      id: 'ui-blocks',
      name: 'UI BLOCKS',
      content:
        '149+ ready-to-use, responsive sections — from Heroes and Pricing to Testimonials and Footers. Built with React + TailwindCSS, copy-paste and customize in seconds.',
      icon: <PackagePlus strokeWidth={0.5} className="h-14 w-14 font-thin" />,
      components:<UIBlockLayoutSketchAltAnimated/>
    },
    {
      id: 'templates',
      name: 'TEMPLATES',
      content:
        'Pre-built website templates powered by React & Next.js. Launch faster with beautiful, modern layouts that are easy to adapt for any project.',
      icon: <Layers2 strokeWidth={0.5} className="h-14 w-14" />,
      components:<TemplateSketchUIDark/> ,
    },
    {
      id: 'ui-kit',
      name: 'UI KIT',
      content:
        'A flexible starter kit to build your own component system. Extend React + TailwindCSS with consistent design tokens and reusable patterns.',
      icon: <SquaresExclude strokeWidth={0.5} className="h-14 w-14" />,
      components:<LayoutSketchPlayground/>
    },
  ];

  return (
    <div className="bg-primary border-t border-darkBg dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 md:py-32 antialiased flex flex-col items-center">
      {/* Main Container */}
      <div className="container mx-auto px-4 text-center md:text-left relative z-10">
        <div className="bg-primary dark:bg-gray-800 rounded-0 shadow-lg overflow-hidden">
          {/* Tab navigation buttons */}
          <div className="flex justify-center bg-primary rounded-0">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`
                  flex-1 py-4 px-6 text-left text-lg
                  ${
                    activeTab === tab.id
                      ? 'border-b border-darkBg text-indigo-400 dark:text-indigo-400 bg-tab dark:bg-gray-800'
                      : 'text-white dark:text-gray-300 hover:text-indigo-400 hover:bg-tab dark:hover:bg-gray-600'
                  }
                  focus:outline-none rounded-0
                `}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="bg-transparent p-2">{tab.icon}</div>
                  </div>
                  <div className='hidden md:block'>
                    <p className="font-semibold">{tab.name}</p>
                    <p className="!text-slate-500 dark:text-gray-200 text-left text-sm ">
                      {tab.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6  bg-tab">
            {tabs.map((tab) => (
              <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                {/* <h2 className="text-2xl font-bold text-textColor dark:text-gray-100 mb-6 text-center">
                  {tab.name}
                </h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                    <div
                      className="bg-slate-950 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300"
                    >
                      {tab.components}
                      {/* <div className="p-4 bg-primary">
                        <p className="text-gray-500 dark:text-gray-200 text-center text-sm">
                          {tab.name} Example
                        </p>
                      </div> */}
                    </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
