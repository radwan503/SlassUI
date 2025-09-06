import { useState } from 'react';

const Example1DemoTabs = () => {
  const [activeTab, setActiveTab] = useState('ui-blocks');
  const tabs = [
    {
      id: 'ui-blocks',
      name: 'UI BLOCKS',
      images: [
        'https://placehold.co/400x250/E0F2F7/2C3E50?text=UI+Block+1',
        'https://placehold.co/400x250/B2EBF2/2C3E50?text=UI+Block+2',
        'https://placehold.co/400x250/80DEEA/2C3E50?text=UI+Block+3',
      ],
    },
    {
      id: 'templates',
      name: 'TEMPLATES',
      images: [
        'https://placehold.co/400x250/FFEBEE/2C3E50?text=Template+1',
        'https://placehold.co/400x250/FFCDD2/2C3E50?text=Template+2',
        'https://placehold.co/400x250/EF9A9A/2C3E50?text=Template+3',
      ],
    },
    {
      id: 'ui-kit',
      name: 'UI KIT',
      images: [
        'https://placehold.co/400x250/E8F5E9/2C3E50?text=UI+Kit+1',
        'https://placehold.co/400x250/C8E6C9/2C3E50?text=UI+Kit+2',
        'https://placehold.co/400x250/A5D6A7/2C3E50?text=UI+Kit+3',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans antialiased flex justify-center items-start pt-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200 px-6 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 -mb-px text-sm font-medium transition-all duration-300 ease-in-out border-b-2 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-gray-300'
              } focus:outline-none rounded-t-lg`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tabs.map((tab) => (
            <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">{tab.name} Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.images.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={imageUrl}
                      alt={`${tab.name} Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                      onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x250/CCCCCC/000000?text=Error+Loading+Image`;
                      }}
                    />
                    <div className="p-4">
                      <p className="text-gray-700 text-center text-sm">
                        {tab.name} Item {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example1DemoTabs;
