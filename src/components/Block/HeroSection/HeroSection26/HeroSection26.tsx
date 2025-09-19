import { useEffect, useMemo, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from 'recharts'
import { motion } from 'framer-motion'

// ====== Sample Data ======
const COLORS = ['#4F46E5', '#06B6D4', '#F59E0B', '#EF4444', '#10B981']

const sampleTrend = [
  { month: 'Jan', revenue: 120000, expenses: 80000, profit: 40000 },
  { month: 'Feb', revenue: 150000, expenses: 90000, profit: 60000 },
  { month: 'Mar', revenue: 170000, expenses: 110000, profit: 60000 },
  { month: 'Apr', revenue: 140000, expenses: 95000, profit: 45000 },
  { month: 'May', revenue: 190000, expenses: 100000, profit: 90000 },
  { month: 'Jun', revenue: 220000, expenses: 120000, profit: 100000 },
  { month: 'Jul', revenue: 200000, expenses: 110000, profit: 90000 },
  { month: 'Aug', revenue: 240000, expenses: 130000, profit: 110000 },
  { month: 'Sep', revenue: 230000, expenses: 125000, profit: 105000 },
  { month: 'Oct', revenue: 250000, expenses: 135000, profit: 115000 },
  { month: 'Nov', revenue: 270000, expenses: 140000, profit: 130000 },
  { month: 'Dec', revenue: 300000, expenses: 150000, profit: 150000 },
]

const cashFlow = [
  { month: 'Jan', in: 120000, out: 80000 },
  { month: 'Feb', in: 150000, out: 90000 },
  { month: 'Mar', in: 170000, out: 110000 },
  { month: 'Apr', in: 140000, out: 95000 },
  { month: 'May', in: 190000, out: 100000 },
  { month: 'Jun', in: 220000, out: 120000 },
]

const expenseBreakdown = [
  { name: 'R&D', value: 40000 },
  { name: 'Sales', value: 70000 },
  { name: 'HR', value: 25000 },
  { name: 'Ops', value: 35000 },
]

const revenueByProduct = [
  { name: 'Product A', value: 500000 },
  { name: 'Product B', value: 350000 },
  { name: 'Product C', value: 200000 },
]

const transactions = Array.from({ length: 12 }).map((_, i) => ({
  id: 1000 + i,
  date: `2025-${String(i + 1).padStart(2, '0')}-15`,
  type: i % 3 === 0 ? 'Invoice' : 'Expense',
  party: i % 3 === 0 ? 'Client Co.' : 'Vendor LLC',
  amount: Math.round(Math.random() * 50000 + 5000),
  status: i % 4 === 0 ? 'Overdue' : 'Paid',
}))

// ====== Reusable UI Primitives ======
function Card({ title, description, right, children, className = '' }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 backdrop-blur shadow-[0_6px_30px_-12px_rgba(2,6,23,0.2)] ${className}`}
    >
      {(title || description || right) && (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between p-4 pb-0">
          <div>
            {title && <h3 className="text-sm sm:text-base font-semibold tracking-tight">{title}</h3>}
            {description && <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{description}</p>}
          </div>
          {right && <div className="mt-2 sm:mt-0">{right}</div>}
        </div>
      )}
      <div className="p-4">{children}</div>
    </motion.section>
  )
}

function StatCard({ label, value, delta, hint }: any) {
  const isUp = delta >= 0
  return (
    <Card className="h-full" title={label}>
      <div className="mt-1 flex items-end justify-between gap-3">
        <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">{value}</div>
        <div
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
            isUp ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
          }`}
          aria-label={`Change ${isUp ? 'up' : 'down'} ${Math.abs(delta)} percent`}
        >
          {isUp ? '▲' : '▼'} {Math.abs(delta)}%
        </div>
      </div>
      {hint && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
    </Card>
  )
}

function Segmented({ value, onChange, options }: any) {
  return (
    <div role="tablist" aria-label="Range" className="grid grid-cols-3 rounded-xl bg-slate-200/70 dark:bg-slate-700/50 p-1 text-xs sm:text-sm">
      {options.map((opt: string) => (
        <button
          key={opt}
          role="tab"
          aria-selected={value === opt}
          onClick={() => onChange(opt)}
          className={`relative rounded-lg px-2 py-1.5 font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            value === opt ? 'bg-white dark:bg-slate-800 shadow' : 'opacity-70 hover:opacity-100'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

// ====== Utilities ======
function exportToCSV<T extends Record<string, any>>(rows: T[], filename = 'transactions.csv') {
  if (!rows?.length) return
  const headers = Object.keys(rows[0])
  const csv = [headers.join(','), ...rows.map(r => headers.map(h => JSON.stringify(r[h] ?? '')).join(','))].join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function useThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDark])
  return { isDark, toggle: () => setIsDark(v => !v) }
}

// ====== Main Component ======
export default function ModernFinanceDashboard() {
  const [range, setRange] = useState<'MTD' | 'QTD' | 'YTD'>('MTD')
  const [mode, setMode] = useState<'monthly' | 'yearly'>('monthly')
  const [query, setQuery] = useState('')
  const { isDark, toggle } = useThemeToggle()

  const totalRevenue = useMemo(() => sampleTrend.reduce((s, x) => s + x.revenue, 0), [])
  const totalExpenses = useMemo(() => sampleTrend.reduce((s, x) => s + x.expenses, 0), [])

  const currentRatio = (Math.random() * 2 + 0.5).toFixed(2)
  const debtToEquity = (Math.random() * 1.5).toFixed(2)
  const roi = (Math.random() * 30 + 5).toFixed(1) + '%'

  const filteredTx = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return transactions
    return transactions.filter(t =>
      String(t.id).includes(q) ||
      t.date.toLowerCase().includes(q) ||
      t.type.toLowerCase().includes(q) ||
      t.party.toLowerCase().includes(q) ||
      String(t.amount).includes(q) ||
      t.status.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(79,70,229,0.12),transparent),radial-gradient(900px_800px_at_10%_-20%,rgba(6,182,212,0.12),transparent)] bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* Page chrome */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            <div className="font-extrabold tracking-tight">FinanceDash</div>
            <span className="ml-2 hidden sm:inline text-xs px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-700/60">Demo</span>
          </div>
          <div className="flex items-center gap-3">
            <Segmented value={range} onChange={setRange} options={['MTD', 'QTD', 'YTD']} />
            <button
              onClick={() => setMode(m => (m === 'monthly' ? 'yearly' : 'monthly'))}
              className="rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 px-3 py-1.5 text-xs sm:text-sm font-medium hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-pressed={mode === 'yearly'}
            >
              {mode === 'monthly' ? 'Monthly' : 'Yearly'}
            </button>
            <button
              onClick={toggle}
              className="rounded-lg border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-800/60 px-3 py-1.5 text-xs sm:text-sm font-medium hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Toggle theme"
            >
              {isDark ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 space-y-6">
        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Financial Bidding Dashboard</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">Live overview of revenue, expenses, cashflow & profitability</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => exportToCSV(transactions)}
              className="rounded-xl bg-indigo-600 text-white text-xs sm:text-sm px-4 py-2 font-semibold shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard label={`Total Revenue (${range})`} value={`$${(totalRevenue / 1000).toFixed(1)}K`} delta={12} hint={`Compared to last ${range.toLowerCase()}`} />
          <StatCard label="Net Profit" value={`$${( (totalRevenue - totalExpenses) / 1000 ).toFixed(1)}K`} delta={8} hint="After tax & fees" />
          <StatCard label="Gross Margin %" value={`${(( (totalRevenue - totalExpenses) / totalRevenue) * 100).toFixed(1)}%`} delta={-2} hint="Target 35%+" />
          <StatCard label="Operating Expenses" value={`$${(totalExpenses / 1000).toFixed(1)}K`} delta={5} hint="Monthly burn" />
          <StatCard label="Cash on Hand" value={`$${(Math.round(Math.random() * 200000) + 50000).toLocaleString()}`} delta={3} hint="Liquid assets" />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card
            title={`Revenue vs Expenses (${mode})`}
            className="lg:col-span-2"
          >
            <div className="h-[280px] sm:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2} dot={{ r: 2 }} />
                  <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} dot={{ r: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Expense Breakdown">
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={expenseBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={42}>
                    {expenseBreakdown.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Cash Flow (In vs Out)">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cashFlow} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="in" stackId="a" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="out" stackId="a" fill="#F59E0B" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Revenue by Product">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueByProduct} layout="vertical">
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4F46E5" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card title="Profitability Trend">
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sampleTrend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="profit" stroke="#10B981" fillOpacity={1} fill="url(#profitGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Insights & Ratios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card title="Financial Insights">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">Accounts Receivable</p>
                  <p className="font-semibold">$120,000</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Accounts Payable</p>
                  <p className="font-semibold">$90,000</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500">Burn Rate</p>
                <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="h-3 rounded-full" style={{ width: '38%', background: 'linear-gradient(90deg,#f97316,#ef4444)' }} />
                </div>
                <p className="text-xs text-slate-500 mt-1">Runway: ~6 months</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Budget vs Actual</p>
                <p className="mt-2 text-sm">Revenue budget $1.2M — Actual $1.05M — <span className="text-rose-600 font-medium">Variance -12%</span></p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Forecast (next 3 months)</p>
                <p className="mt-1 text-sm">Revenue expected to grow ~8% month-on-month based on pipeline</p>
              </div>
            </div>
          </Card>

          <Card title="Key Ratios">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Current Ratio</p>
                  <p className="font-medium">{currentRatio}</p>
                </div>
                <span className="text-xs text-slate-400">Liquidity</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Debt‑to‑Equity</p>
                  <p className="font-medium">{debtToEquity}</p>
                </div>
                <span className="text-xs text-slate-400">Risk</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">ROI</p>
                  <p className="font-medium">{roi}</p>
                </div>
                <span className="text-xs text-slate-400">Return</span>
              </div>
            </div>
          </Card>

          <Card title="Alerts & Notifications">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-rose-500" />
                <div>
                  <p className="text-sm font-medium">3 Overdue Invoices</p>
                  <p className="text-xs text-slate-500">Follow up with accounts receivable</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400" />
                <div>
                  <p className="text-sm font-medium">Expenses over budget — Sales</p>
                  <p className="text-xs text-slate-500">Review marketing spend</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-400" />
                <div>
                  <p className="text-sm font-medium">KPI Goal reached: Gross Margin</p>
                  <p className="text-xs text-slate-500">Great job — keep optimizing</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        {/* Transactions */}
        <Card
          title="Transactions"
          right={
            <div className="flex items-center gap-2">
              <input
                className="w-40 sm:w-64 border border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-800/60 rounded-lg px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                placeholder="Search transactions"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search transactions"
              />
            </div>
          }
        >
          {/* Table for md+ screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full table-auto text-left text-sm">
              <thead>
                <tr className="text-xs text-slate-500">
                  <th className="p-2">ID</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Party</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTx.map((t) => (
                  <tr key={t.id} className="border-t border-black/5 dark:border-white/10">
                    <td className="p-2">{t.id}</td>
                    <td className="p-2">{t.date}</td>
                    <td className="p-2">{t.type}</td>
                    <td className="p-2">{t.party}</td>
                    <td className="p-2">${t.amount.toLocaleString()}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${t.status === 'Overdue' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'}`}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for small screens */}
          <div className="md:hidden grid grid-cols-1 gap-3">
            {filteredTx.map((t) => (
              <div key={t.id} className="rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-800/60 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">#{t.id}</p>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${t.status === 'Overdue' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'}`}>{t.status}</span>
                </div>
                <p className="text-xs text-slate-500">{t.date}</p>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span>{t.type} — {t.party}</span>
                  <span className="font-semibold">${t.amount.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-center text-xs text-slate-500">Built with ❤️ — Demo dashboard • SlassUI</p>
      </main>
    </div>
  )
}
