import { useEffect, useMemo, useState } from "react";
import {
  LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area
} from "recharts";
import { Sun, Moon, TrendingUp, Clock, List, BarChart2, DollarSign, Rss, Globe, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function MarketDashboard() {
  const [isDark, setIsDark] = useState(false);

  // Persist theme
  useEffect(() => {
    const stored = localStorage.getItem("md_theme");
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(stored ? stored === "dark" : systemPrefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("md_theme", isDark ? "dark" : "light");
  }, [isDark]);

  // ---------- Mock Data (plug your API later) ----------
  const marketData = [
    { name: 'S&P 500', value: 4500, change: 0.52 },
    { name: 'Dow Jones', value: 34567, change: -0.15 },
    { name: 'NASDAQ', value: 14200, change: 1.10 },
    { name: 'BTC', value: 68000, change: 2.51 },
    { name: 'ETH', value: 3500, change: 3.22 },
  ];

  const portfolio = {
    totalValue: 75000,
    dailyChange: 525,
    dailyChangePercent: 0.7,
    allTimeGain: 15000,
  };

  const allocation = [
    { name: 'Tech', value: 40000, color: '#3B82F6' },
    { name: 'Finance', value: 15000, color: '#10B981' },
    { name: 'Crypto', value: 10000, color: '#F59E0B' },
    { name: 'Healthcare', value: 7000, color: '#EF4444' },
    { name: 'Other', value: 3000, color: '#6B7280' },
  ];

  const watchlist = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.25, change: 0.85, changePercent: 0.49 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 135.5, change: -1.2, changePercent: -0.88 },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 140.75, change: 1.5, changePercent: 1.08 },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 250.1, change: -5.5, changePercent: -2.15 },
  ];

  const series = [
    { name: 'Jan', price: 40000, volume: 2400 },
    { name: 'Feb', price: 30000, volume: 1398 },
    { name: 'Mar', price: 20000, volume: 9800 },
    { name: 'Apr', price: 27800, volume: 3908 },
    { name: 'May', price: 18900, volume: 4800 },
    { name: 'Jun', price: 23900, volume: 3800 },
    { name: 'Jul', price: 34900, volume: 4300 },
  ];

  const economics = [
    { month: 'Jan', CPI: 7.5, Unemployment: 4.1 },
    { month: 'Feb', CPI: 7.9, Unemployment: 3.9 },
    { month: 'Mar', CPI: 8.5, Unemployment: 3.8 },
    { month: 'Apr', CPI: 8.3, Unemployment: 3.6 },
    { month: 'May', CPI: 8.6, Unemployment: 3.6 },
    { month: 'Jun', CPI: 9.1, Unemployment: 3.6 },
    { month: 'Jul', CPI: 8.5, Unemployment: 3.5 },
  ];

  const sectors = [
    { sector: 'Technology', performance: 12.5 },
    { sector: 'Finance', performance: 7.2 },
    { sector: 'Healthcare', performance: 5.8 },
    { sector: 'Consumer Goods', performance: -2.1 },
    { sector: 'Energy', performance: 9.3 },
  ];

  const news = [
    { title: 'Market closes higher on tech stocks rally', source: 'Reuters', date: '2 hours ago' },
    { title: 'Bitcoin surges past $68,000 on institutional interest', source: 'CoinDesk', date: '4 hours ago' },
    { title: 'Federal Reserve announces new interest rate decision', source: 'Bloomberg', date: '1 day ago' },
  ];

  // ---------- Utils ----------
  const fCurrency = (n:any) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  const fNum = (n:any, d = 2) => n.toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: n % 1 ? d : 0 });

  const tickerData = useMemo(() => [...marketData, ...marketData], [marketData]); // duplicate for seamless loop

  // ---------- UI Primitives ----------
  const Card = ({ title, icon, children }:any) => (
    <section className="group relative h-full rounded-2xl border border-white/10 dark:border-white/5 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-5 shadow-[0_1px_0_#ffffff4d,0_20px_40px_-20px_rgba(0,0,0,.3)] transition hover:shadow-[0_1px_0_#ffffff66,0_30px_60px_-20px_rgba(0,0,0,.4)]">
      <header className="mb-4 flex items-center gap-2">
        {icon}
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      </header>
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5" />
    </section>
  );

  const BadgeDelta = ({ value }:any) => {
    const up = value >= 0;
    const Icon = up ? ArrowUpRight : ArrowDownRight;
    return (
      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${up ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300'}`}>
        <Icon size={14} /> {Math.abs(value).toFixed(2)}%
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Inline styles & keyframes */}
      <style>{`
        @keyframes ticker {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .ticker:hover .ticker-track{animation-play-state:paused}
        @media (prefers-reduced-motion: reduce){.ticker-track{animation:none}}
      `}</style>

      {/* Topbar */}
      <div className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-black/5 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-500">
            Advanced Market Dashboard
          </h1>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setIsDark(v => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/15 transition"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">

        {/* Portfolio Summary */}
        <Card title="Portfolio Summary" icon={<DollarSign size={18} className="text-emerald-500" /> }>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Value</p>
              <p className="text-3xl sm:text-4xl font-bold">{fCurrency(portfolio.totalValue)}</p>
              <div className="flex items-center gap-2">
                <BadgeDelta value={portfolio.dailyChangePercent} />
                <span className="text-sm text-slate-500 dark:text-slate-400">Daily +{fNum(portfolio.dailyChange)}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">All‑time gain {fCurrency(portfolio.allTimeGain)}</p>
            </div>

            <div className="w-full sm:w-1/2 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={allocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                    {allocation.map((a, i) => (<Cell key={i} fill={a.color} />))}
                  </Pie>
                  <Tooltip contentStyle={{ background: isDark ? '#0f172a' : '#ffffff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {allocation.map((a) => (
              <div key={a.name} className="flex items-center justify-between rounded-lg border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2">
                <span className="truncate">{a.name}</span>
                <span className="font-medium">{fCurrency(a.value)}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Watchlist */}
        <Card title="My Watchlist" icon={<List size={18} className="text-blue-500" /> }>
          <div className="space-y-3">
            {watchlist.map((it) => (
              <div key={it.symbol} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="truncate font-medium">{it.name}</p>
                    <span className="text-xs text-slate-500">{it.symbol}</span>
                  </div>
                  <p className="text-xs text-slate-500">Last price</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-semibold">${fNum(it.price, 2)}</p>
                  <p className={`text-xs flex items-center gap-1 ${it.change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {it.change >= 0 ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {it.change.toFixed(2)} ({it.changePercent.toFixed(2)}%)
                  </p>
                </div>
                {/* Inline sparkline using the shared series just for demo */}
                <div className="h-12 w-full sm:w-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={series} margin={{ top: 2, right: 2, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="price" stroke={it.change >= 0 ? '#10B981' : '#EF4444'} fill={it.change >= 0 ? '#10B981' : '#EF4444'} fillOpacity={0.15} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400 hover:bg-white/70 dark:hover:bg-white/10 transition">
              <Plus size={16}/> Add to Watchlist
            </button>
          </div>
        </Card>

        {/* Portfolio Performance */}
        <Card title="Portfolio Performance" icon={<BarChart2 size={18} className="text-teal-500" /> }>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={series}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#0b1220' : '#e5e7eb'} />
                <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ background: isDark ? '#0f172a' : '#ffffff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }} />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Sector Performance */}
        <Card title="Sector Performance" icon={<TrendingUp size={18} className="text-orange-500" /> }>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectors}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#0b1220' : '#e5e7eb'} />
                <XAxis dataKey="sector" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ background: isDark ? '#0f172a' : '#ffffff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }} />
                <Bar dataKey="performance">
                  {sectors.map((s, i) => (
                    <Cell key={i} fill={s.performance > 0 ? '#10B981' : '#EF4444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Economic Indicators */}
        <Card title="Economic Indicators" icon={<Globe size={18} className="text-purple-500" /> }>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={economics} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#0b1220' : '#e5e7eb'} />
                <XAxis dataKey="month" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="left" orientation="left" stroke="#3B82F6" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" stroke="#EF4444" tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ background: isDark ? '#0f172a' : '#ffffff', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)' }} />
                <Area yAxisId="left" type="monotone" dataKey="CPI" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.35} />
                <Area yAxisId="right" type="monotone" dataKey="Unemployment" stroke="#EF4444" fill="#EF4444" fillOpacity={0.25} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* News */}
        <Card title="Financial News" icon={<Rss size={18} className="text-indigo-500" /> }>
          <ul className="divide-y divide-black/5 dark:divide-white/10">
            {news.map((n, i) => (
              <li key={i} className="py-3">
                <h4 className="text-sm font-semibold leading-5">{n.title}</h4>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Clock size={12}/> <span>{n.date}</span> <span>•</span> <span>{n.source}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

      </main>

      {/* Bottom Ticker */}
      <div className="ticker mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5">
          <div className="ticker-track flex w-[200%] animate-[ticker_30s_linear_infinite]">
            {tickerData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-6 py-3 whitespace-nowrap">
                <span className="font-semibold">{item.name}</span>
                <span className="opacity-70">{fNum(item.value)}</span>
                <span className={`${item.change>0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'} text-sm font-medium`}>
                  {item.change>0?'+':''}{item.change.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
