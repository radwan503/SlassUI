import { useState, useEffect } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import { Sun, Moon,TrendingUp, Clock, List, BarChart2, DollarSign, Rss, Globe } from 'lucide-react';

// Main App Component
const HeroSection31=()=> {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Add or remove the 'dark' class on the document body based on state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Mock data for the components
  const mockMarketData = [
    { name: 'S&P 500', value: 4500, change: 0.52 },
    { name: 'Dow Jones', value: 34567, change: -0.15 },
    { name: 'NASDAQ', value: 14200, change: 1.10 },
    { name: 'BTC', value: 68000, change: 2.51 },
    { name: 'ETH', value: 3500, change: 3.22 },
  ];

  const mockPortfolioData = {
    totalValue: 75000,
    dailyChange: 525,
    dailyChangePercent: 0.7,
    allTimeGain: 15000,
  };

  const mockAssetAllocation = [
    { name: 'Tech', value: 40000, color: '#3B82F6' },
    { name: 'Finance', value: 15000, color: '#10B981' },
    { name: 'Crypto', value: 10000, color: '#F59E0B' },
    { name: 'Healthcare', value: 7000, color: '#EF4444' },
    { name: 'Other', value: 3000, color: '#6B7280' },
  ];

  const mockWatchlist = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.25, change: 0.85, changePercent: 0.49 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 135.50, change: -1.20, changePercent: -0.88 },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 140.75, change: 1.50, changePercent: 1.08 },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 250.10, change: -5.50, changePercent: -2.15 },
  ];

  const mockChartData = [
    { name: 'Jan', price: 40000, volume: 2400 },
    { name: 'Feb', price: 30000, volume: 1398 },
    { name: 'Mar', price: 20000, volume: 9800 },
    { name: 'Apr', price: 27800, volume: 3908 },
    { name: 'May', price: 18900, volume: 4800 },
    { name: 'Jun', price: 23900, volume: 3800 },
    { name: 'Jul', price: 34900, volume: 4300 },
  ];
  
  const mockEconomicData = [
    { month: 'Jan', CPI: 7.5, Unemployment: 4.1 },
    { month: 'Feb', CPI: 7.9, Unemployment: 3.9 },
    { month: 'Mar', CPI: 8.5, Unemployment: 3.8 },
    { month: 'Apr', CPI: 8.3, Unemployment: 3.6 },
    { month: 'May', CPI: 8.6, Unemployment: 3.6 },
    { month: 'Jun', CPI: 9.1, Unemployment: 3.6 },
    { month: 'Jul', CPI: 8.5, Unemployment: 3.5 },
  ];

  const mockSectorData = [
    { sector: 'Technology', performance: 12.5 },
    { sector: 'Finance', performance: 7.2 },
    { sector: 'Healthcare', performance: 5.8 },
    { sector: 'Consumer Goods', performance: -2.1 },
    { sector: 'Energy', performance: 9.3 },
  ];

  const mockNews = [
    { title: 'Market closes higher on tech stocks rally', source: 'Reuters', date: '2 hours ago' },
    { title: 'Bitcoin surges past $68,000 on institutional interest', source: 'CoinDesk', date: '4 hours ago' },
    { title: 'Federal Reserve announces new interest rate decision', source: 'Bloomberg', date: '1 day ago' },
  ];

  // Helper component for widgets
  const Widget = ({ title, children, icon }:any) => (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.01] flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300 p-4 sm:p-8 font-sans">
      
      {/* Header and Theme Toggle */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
          Advanced Dashboard
        </h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </header>
      
      {/* Main Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

        
        {/* Widget: Portfolio Summary */}
        <Widget title="Portfolio Summary" icon={<DollarSign size={24} className="text-green-500" />}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center">
            <div>
              <div className="text-lg text-gray-500 dark:text-gray-400">Total Value</div>
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">${mockPortfolioData.totalValue.toLocaleString()}</div>
            </div>
            <div className="flex-1 max-w-[200px] h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockAssetAllocation}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                  >
                    {mockAssetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">Daily Change</div>
            <div className={`text-xl font-bold ${mockPortfolioData.dailyChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${mockPortfolioData.dailyChange.toLocaleString()} ({mockPortfolioData.dailyChangePercent.toFixed(2)}%)
            </div>
          </div>
        </Widget>
        
        {/* Widget: Stock Watchlist */}
        <Widget title="My Watchlist" icon={<List size={24} className="text-blue-500" />}>
          <div className="space-y-4">
            {mockWatchlist.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{item.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.symbol}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">${item.price.toFixed(2)}</div>
                  <div className={`text-xs ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(2)} ({item.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full text-center py-2 px-4 border border-dashed border-gray-400 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              + Add to Watchlist
            </button>
          </div>
        </Widget>
        
        {/* Widget: Portfolio Performance */}
        <Widget title="Portfolio Performance" icon={<BarChart2 size={24} className="text-teal-500" />}>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" />
                <XAxis dataKey="name" stroke="#6b7280" className="text-xs" />
                <YAxis stroke="#6b7280" className="text-xs" />
                <Tooltip
                  contentStyle={{ backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: isDarkMode ? '#9CA3AF' : '#6B7280' }}
                  itemStyle={{ color: isDarkMode ? '#FFFFFF' : '#1F2937' }}
                />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Widget>

        {/* Widget: Sector Performance Bar Chart */}
        <Widget title="Sector Performance" icon={<TrendingUp size={24} className="text-orange-500" />}>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockSectorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" />
                <XAxis dataKey="sector" stroke="#6b7280" className="text-xs" />
                <YAxis stroke="#6b7280" className="text-xs" />
                <Tooltip
                  contentStyle={{ backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: isDarkMode ? '#9CA3AF' : '#6B7280' }}
                  itemStyle={{ color: isDarkMode ? '#FFFFFF' : '#1F2937' }}
                />
                <Bar dataKey="performance">
                  {mockSectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.performance > 0 ? '#10B981' : '#EF4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Widget>
        
        {/* Widget: Economic Indicators Area Chart */}
        <Widget title="Economic Indicators" icon={<Globe size={24} className="text-purple-500" />}>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockEconomicData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" />
                <XAxis dataKey="month" stroke="#6b7280" className="text-xs" />
                <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" className="text-xs" />
                <YAxis yAxisId="right" orientation="right" stroke="#EF4444" className="text-xs" />
                <Tooltip
                  contentStyle={{ backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: isDarkMode ? '#9CA3AF' : '#6B7280' }}
                  itemStyle={{ color: isDarkMode ? '#FFFFFF' : '#1F2937' }}
                />
                <Area yAxisId="left" type="monotone" dataKey="CPI" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Area yAxisId="right" type="monotone" dataKey="Unemployment" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Widget>

        {/* Widget: Market News */}
        <Widget title="Financial News" icon={<Rss size={24} className="text-indigo-500" />}>
          <div className="space-y-4">
            {mockNews.map((news, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-b-0 last:pb-0">
                <h4 className="text-sm font-semibold">{news.title}</h4>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <Clock size={12} className="mr-1" />
                  <span>{news.date}</span>
                  <span className="mx-2">•</span>
                  <span>{news.source}</span>
                </div>
              </div>
            ))}
          </div>
        </Widget>
        
      </main>
      
      {/* Bottom Ticker */}
      <div className="mt-8 bg-white dark:bg-gray-900 p-3 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
        <div className="flex animate-ticker whitespace-nowrap">
          {mockMarketData.map((item, index) => (
            <div key={index} className="flex items-center mx-4 sm:mx-8">
              <span className="font-bold mr-2 text-sm sm:text-base">{item.name}</span>
              <span className="text-sm sm:text-base mr-2">{item.value.toLocaleString()}</span>
              <span className={`text-xs sm:text-sm ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Styles for the ticker animation */}
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>
      
    </div>
  );
}
export default HeroSection31