import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Menu, X } from "lucide-react";

// Define Card component directly
const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] p-6 ${className}`}>{children}</div>
);

const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const kpiData = [
  { label: "Total Revenue (MTD)", value: "$120K" },
  { label: "Total Revenue (QTD)", value: "$350K" },
  { label: "Total Revenue (YTD)", value: "$1.2M" },
  { label: "Net Profit", value: "$350K" },
  { label: "Gross Margin %", value: "58%" },
  { label: "Operating Expenses", value: "$420K" },
  { label: "Cash on Hand", value: "$900K" },
];

const revenueTrend = [
  { month: "Jan", revenue: 120000, expenses: 80000, profit: 40000 },
  { month: "Feb", revenue: 140000, expenses: 90000, profit: 50000 },
  { month: "Mar", revenue: 160000, expenses: 95000, profit: 65000 },
  { month: "Apr", revenue: 180000, expenses: 110000, profit: 70000 },
  { month: "May", revenue: 200000, expenses: 120000, profit: 80000 },
];

const expenseBreakdown = [
  { name: "HR", value: 180000 },
  { name: "Marketing", value: 120000 },
  { name: "Tech", value: 80000 },
  { name: "Operations", value: 40000 },
];

const cashFlow = [
  { day: "01", cashIn: 20000, cashOut: 15000 },
  { day: "02", cashIn: 25000, cashOut: 20000 },
  { day: "03", cashIn: 30000, cashOut: 18000 },
  { day: "04", cashIn: 28000, cashOut: 22000 },
  { day: "05", cashIn: 35000, cashOut: 25000 },
];

const COLORS = ["#00FFF5", "#FF6EC7", "#FFBB28", "#845EC2"];

const HeroSection27=()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-3xl sticky top-0 z-50 shadow-lg">
        <div className="text-3xl font-extrabold tracking-wide">FinDash</div>
        <div className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </div>
        <nav className={`sm:flex gap-8 ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white/10 backdrop-blur-3xl p-4' : 'hidden sm:flex'}`}>
          <a href="#" className="hover:text-cyan-400 font-medium transition">Dashboard</a>
          <a href="#" className="hover:text-cyan-400 font-medium transition">Reports</a>
          <a href="#" className="hover:text-cyan-400 font-medium transition">Analytics</a>
          <a href="#" className="hover:text-cyan-400 font-medium transition">Settings</a>
        </nav>
      </header>

      <main className="p-8 space-y-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {kpiData.map((kpi, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card>
                <CardContent className="text-center">
                  <p className="text-sm text-white/70 mb-2">{kpi.label}</p>
                  <h2 className="text-2xl font-extrabold text-white">{kpi.value}</h2>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Revenue vs Expenses Line Chart */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">Revenue vs Expenses</h3>
            <ResponsiveContainer width="100%" height={360}>
              <LineChart data={revenueTrend} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                <XAxis dataKey="month" stroke="#ffffffaa" />
                <YAxis stroke="#ffffffaa" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: 'none', color: '#fff' }} />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Line type="monotone" dataKey="revenue" stroke="#00FFF5" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="expenses" stroke="#FF6EC7" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="profit" stroke="#FFBB28" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Expense Breakdown Pie Chart */}
          <Card>
            <h3 className="text-xl font-semibold mb-4">Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={360}>
              <PieChart>
                <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={140} dataKey="value" label={{ fill: '#fff', fontSize: 14, fontWeight: 600 }}>
                  {expenseBreakdown.map((_entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: 'none', color: '#fff' }} />
                <Legend wrapperStyle={{ color: '#fff', fontWeight: 600 }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Cash Flow Bar Chart */}
        <Card>
          <h3 className="text-xl font-semibold mb-4">Cash Flow (Daily)</h3>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={cashFlow} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <XAxis dataKey="day" stroke="#ffffffaa" />
              <YAxis stroke="#ffffffaa" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: 'none', color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#fff' }} />
              <Bar dataKey="cashIn" fill="#00FFF5" />
              <Bar dataKey="cashOut" fill="#FF6EC7" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </main>

      {/* Animated Blobs */}
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/40 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '0s' }} />
      <motion.div className="absolute top-32 right-0 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <motion.div className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-400/30 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <style>{`
        .animate-blob {
          animation: blob 20s infinite;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
export default HeroSection27