// HeroSection27.tsx
// Modernized, fully responsive UI for your FinDash dashboard
// - Glass cards, sticky translucent header, animated gradient blobs
// - Accessible mobile nav with aria states
// - KPI grid with icons and subtle motion
// - Charts sized for small screens, donut pie, and improved tooltips
// - Reuses your data; no external changes required

import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
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
} from 'recharts'
import { Menu, X, Wallet, TrendingUp, PiggyBank, Percent, CreditCard, Banknote } from 'lucide-react'

// ---- Primitives ----
const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(2,6,23,0.35)] ${className}`}>{children}</div>
)

const CardHeader = ({ title, subtitle, right }: { title?: string; subtitle?: string; right?: ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 p-6 pb-0">
    <div>
      {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
      {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
    </div>
    {right}
  </div>
)

const CardContent = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
)

// ---- Data (unchanged from your snippet) ----
const kpiData = [
  { label: 'Total Revenue (MTD)', value: '$120K', icon: TrendingUp },
  { label: 'Total Revenue (QTD)', value: '$350K', icon: TrendingUp },
  { label: 'Total Revenue (YTD)', value: '$1.2M', icon: TrendingUp },
  { label: 'Net Profit', value: '$350K', icon: PiggyBank },
  { label: 'Gross Margin %', value: '58%', icon: Percent },
  { label: 'Operating Expenses', value: '$420K', icon: CreditCard },
  { label: 'Cash on Hand', value: '$900K', icon: Wallet },
]

const revenueTrend = [
  { month: 'Jan', revenue: 120000, expenses: 80000, profit: 40000 },
  { month: 'Feb', revenue: 140000, expenses: 90000, profit: 50000 },
  { month: 'Mar', revenue: 160000, expenses: 95000, profit: 65000 },
  { month: 'Apr', revenue: 180000, expenses: 110000, profit: 70000 },
  { month: 'May', revenue: 200000, expenses: 120000, profit: 80000 },
]

const expenseBreakdown = [
  { name: 'HR', value: 180000 },
  { name: 'Marketing', value: 120000 },
  { name: 'Tech', value: 80000 },
  { name: 'Operations', value: 40000 },
]

const cashFlow = [
  { day: '01', cashIn: 20000, cashOut: 15000 },
  { day: '02', cashIn: 25000, cashOut: 20000 },
  { day: '03', cashIn: 30000, cashOut: 18000 },
  { day: '04', cashIn: 28000, cashOut: 22000 },
  { day: '05', cashIn: 35000, cashOut: 25000 },
]

const COLORS = ['#00FFF5', '#FF6EC7', '#FFBB28', '#845EC2']

// ---- Component ----
const HeroSection27 = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(124,58,237,0.22),transparent),radial-gradient(900px_800px_at_10%_-20%,rgba(236,72,153,0.16),transparent)] bg-gray-950 text-white relative overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
            <div className="text-2xl font-black tracking-tight">FinDash</div>
            <span className="hidden sm:inline text-[10px] px-2 py-0.5 rounded-full bg-white/10">Demo</span>
          </div>
          <nav aria-label="Primary" className="hidden sm:flex items-center gap-8 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100">Dashboard</a>
            <a href="#" className="opacity-80 hover:opacity-100">Reports</a>
            <a href="#" className="opacity-80 hover:opacity-100">Analytics</a>
            <a href="#" className="opacity-80 hover:opacity-100">Settings</a>
          </nav>
          <button
            className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {/* Mobile drawer */}
        {menuOpen && (
          <div className="sm:hidden border-t border-white/10">
            <nav className="px-4 py-3 grid gap-3 bg-white/10 backdrop-blur-xl">
              <a href="#" className="rounded-lg px-3 py-2 bg-white/5">Dashboard</a>
              <a href="#" className="rounded-lg px-3 py-2 bg-white/5">Reports</a>
              <a href="#" className="rounded-lg px-3 py-2 bg-white/5">Analytics</a>
              <a href="#" className="rounded-lg px-3 py-2 bg-white/5">Settings</a>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 space-y-8">
        {/* Title Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Financial Overview</h1>
            <p className="text-sm text-white/70">MTD, QTD & YTD snapshots at a glance</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-500 px-4 py-2 text-sm font-semibold shadow">Export</button>
            <button className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 text-sm">Schedule</button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {kpiData.map((kpi, i) => {
            const Icon = kpi.icon || Banknote
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card>
                  <CardContent className="flex items-center gap-3">
                    <div className="shrink-0 h-9 w-9 rounded-xl grid place-items-center bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-white/70 truncate">{kpi.label}</p>
                      <p className="text-xl font-extrabold leading-tight">{kpi.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <Card>
            <CardHeader title="Revenue vs Expenses" subtitle="Last 5 months" />
            <CardContent>
              <div className="h-[260px] sm:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueTrend} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                    <XAxis dataKey="month" stroke="#ffffffb3" />
                    <YAxis stroke="#ffffffb3" />
                    <Tooltip contentStyle={{ background: 'rgba(3,7,18,0.9)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                    <Legend wrapperStyle={{ color: '#fff' }} />
                    <Line type="monotone" dataKey="revenue" stroke="#00FFF5" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="expenses" stroke="#FF6EC7" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="profit" stroke="#FFBB28" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Donut Pie */}
          <Card>
            <CardHeader title="Expense Breakdown" subtitle="Cost drivers" />
            <CardContent>
              <div className="h-[260px] sm:h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={expenseBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3}>
                      {expenseBreakdown.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: 'rgba(3,7,18,0.9)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                    <Legend wrapperStyle={{ color: '#fff' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <Card>
          <CardHeader title="Cash Flow (Daily)" subtitle="Cash in vs out" right={<span className="text-xs text-white/60">Last 5 days</span>} />
          <CardContent>
            <div className="h-[260px] sm:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cashFlow} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                  <XAxis dataKey="day" stroke="#ffffffb3" />
                  <YAxis stroke="#ffffffb3" />
                  <Tooltip contentStyle={{ background: 'rgba(3,7,18,0.9)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  <Legend wrapperStyle={{ color: '#fff' }} />
                  <Bar dataKey="cashIn" fill="#00FFF5" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="cashOut" fill="#FF6EC7" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Animated Blobs */}
      <motion.div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl animate-blob" />
      <motion.div className="pointer-events-none absolute top-24 -right-10 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <motion.div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-pink-500/25 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <style>{`
        .animate-blob { animation: blob 22s infinite; }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(24px, -36px) scale(1.08); }
          66% { transform: translate(-18px, 16px) scale(0.96); }
        }
      `}</style>
    </div>
  )
}

export default HeroSection27
