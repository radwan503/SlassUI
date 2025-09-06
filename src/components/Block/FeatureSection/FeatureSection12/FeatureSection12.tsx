
import {
  Briefcase,
  Users,
  Lightbulb,
  FileText
} from 'lucide-react';

const FeatureCard = ({ title, description, icon, isLarge = false }:any) => {
  return (
    <div className={`
      p-8 rounded-3xl transition-all duration-300 transform relative overflow-hidden group
      ${isLarge ? 'lg:col-span-2 bg-black text-white' : 'bg-white text-gray-900'} 
      ${isLarge ? 'shadow-[0_20px_50px_rgba(0,0,0,0.1)]' : 'shadow-[0_10px_30px_rgba(0,0,0,0.05)]'}
      h-full flex flex-col
    `}>
      {/* Gradient Overlay for hover effect */}
      <div className={`
        absolute inset-0 transition-opacity duration-500 
        ${isLarge ? 'bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-20' : 'bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-20'}
      `}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={`
          ${isLarge ? 'mb-8' : 'mb-4'}
          `}>
          {isLarge ? (
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              {title}
            </h2>
          ) : (
            <div className="mb-4 text-lime-500">
              {icon}
            </div>
          )}
        </div>
        {!isLarge && (
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
        )}
        <p className={`flex-grow ${isLarge ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        {isLarge && (
          <a href="#" className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-lime-400 hover:bg-lime-500 transition-colors duration-200">
            See all features
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 sm:p-16 flex items-center justify-center font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Powerful features for your business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl text-left">
            Our comprehensive accounting software simplifies your financial tasks, giving you more time to focus on growth.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            title="Accounting software that handles it all."
            description="Our platform provides a single source of truth for all your financial data, automating tedious tasks and giving you a clear overview of your business performance. From invoicing to payroll, we've got you covered."
            isLarge
          />
          <FeatureCard
            title="Easy Invoicing"
            description="Automate recurring invoices and save time by using pre-built templates. Get paid on time, every time, with automated reminders."
            icon={<Briefcase size={48} strokeWidth={1.25} />}
          />
          <FeatureCard
            title="Manage Expenses"
            description="Snap and categorize receipts in seconds, and link your bank account for real-time tracking. Say goodbye to manual data entry."
            icon={<FileText size={48} strokeWidth={1.25} />}
          />
          <FeatureCard
            title="Streamline Payroll"
            description="Set up payroll and bonuses for all your employees in a few clicks. Ensure your team is paid accurately and on time, every time."
            icon={<Lightbulb size={48} strokeWidth={1.25} />}
          />
          <FeatureCard
            title="Complete Visibility"
            description="Gain real-time visibility into every expense and payment with a neat, customizable dashboard. Make informed decisions with accurate financial data."
            icon={<Users size={48} strokeWidth={1.25} />}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
