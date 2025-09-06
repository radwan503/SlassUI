const StatsCardSection = () => {
  const stats = [
    {
      value: '24.5K+',
      label: 'Active Users',
      iconBg: 'bg-pink-500',
      // Generic download icon SVG path
      icon: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
    },
    {
      value: '700+',
      label: 'UI Components',
      iconBg: 'bg-green-500',
      // Generic layout icon SVG path
      icon: 'M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2zm2-14h12v2H6V7zm0 4h12v2H6v-2zm0 4h12v2H6v-2z'
    },
    {
      value: '20+',
      label: 'Pre-built Templates',
      iconBg: 'bg-blue-500',
      // Generic document icon SVG path
      icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 4h7v5h5v11H6V4z'
    },
    {
      value: '350+',
      label: 'Github Stars',
      iconBg: 'bg-orange-500',
      // Generic star icon SVG path
      icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
    },
  ];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4  bg-transparent rounded-0 shadow-sm p-8 md:p-16 text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-textColor mb-4">
          Complete UI For Your Next Project
        </h2>
        <p className="text-lg text-textSlate mx-auto mb-12 text-left">
          Massive number of components, templates, open-source version, free perks and more. All in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${stat.iconBg}`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={stat.icon} />
                </svg>
              </div>
              <p className="text-3xl font-bold text-textGray mb-1">{stat.value}</p>
              <p className="text-sm text-textGray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardSection;
