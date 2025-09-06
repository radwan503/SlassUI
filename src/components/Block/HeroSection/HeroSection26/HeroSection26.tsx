import { useState, useMemo } from 'react'
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
  amount: Math.round((Math.random() * 50000) + 5000),
  status: i % 4 === 0 ? 'Overdue' : 'Paid',
}))

function KPI({ title, value, delta, hint }:any) {
  const deltaColor = delta >= 0 ? 'text-green-500' : 'text-red-400'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/60 dark:bg-slate-800/60 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-slate-700"
    >
      <div className="text-sm font-medium text-slate-600 dark:text-slate-300">{title}</div>
      <div className="mt-2 flex items-end gap-3">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-sm ${deltaColor}`}>{delta > 0 ? `+${delta}%` : `${delta}%`}</div>
      </div>
      {hint && <div className="mt-2 text-xs text-slate-500">{hint}</div>}
    </motion.div>
  )
}

// const Navbar = () => {
//   const [open, setOpen] = useState(false)
//   return (
//     <nav className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-4 text-white">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div className="font-bold text-xl">💰 FinanceDash</div>
//         </div>
//         <div className="hidden md:flex gap-6 items-center">
//           <a href="#" className="hover:underline">Dashboard</a>
//           <a href="#" className="hover:underline">Reports</a>
//           <a href="#" className="hover:underline">Analytics</a>
//           <a href="#" className="hover:underline">Settings</a>
//         </div>
//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>
//       {open && (
//         <div className="md:hidden mt-2 flex flex-col gap-2 px-4">
//           <a href="#" className="hover:underline">Dashboard</a>
//           <a href="#" className="hover:underline">Reports</a>
//           <a href="#" className="hover:underline">Analytics</a>
//           <a href="#" className="hover:underline">Settings</a>
//         </div>
//       )}
//     </nav>
//   )
// }

const HeroSection26=()=> {
  const [range, setRange] = useState('MTD')
  const [mode, setMode] = useState('monthly')

  const totalRevenue = useMemo(() => sampleTrend.reduce((s, x) => s + x.revenue, 0), [])
  const totalExpenses = useMemo(() => sampleTrend.reduce((s, x) => s + x.expenses, 0), [])
  const netProfit = totalRevenue - totalExpenses

  const currentRatio = (Math.random() * 2 + 0.5).toFixed(2)
  const debtToEquity = (Math.random() * 1.5).toFixed(2)
  const roi = (Math.random() * 30 + 5).toFixed(1) + '%'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6">
      <header className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Financial Bidding Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">Overview of financial health — daily, monthly & yearly insights</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="rounded-md border px-3 py-2 bg-white/70"
            >
              <option>MTD</option>
              <option>QTD</option>
              <option>YTD</option>
            </select>
            <button
              onClick={() => setMode(mode === 'monthly' ? 'yearly' : 'monthly')}
              className="px-3 py-2 rounded-md bg-indigo-600 text-white"
            >
              {mode === 'monthly' ? 'Switch to Yearly' : 'Switch to Monthly'}
            </button>
          </div>
        </div>
      </header>

      {/* <Navbar/> */}

      <main className="max-w-7xl mx-auto grid gap-6">
        {/* KPI cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <KPI title={`Total Revenue (${range})`} value={`$${(totalRevenue/1000).toFixed(1)}K`} delta={12} hint={`Compared to last ${range.toLowerCase()}`} />
          <KPI title="Net Profit" value={`$${(netProfit/1000).toFixed(1)}K`} delta={8} hint="After tax & fees" />
          <KPI title="Gross Margin %" value={`${((netProfit/totalRevenue)*100).toFixed(1)}%`} delta={-2} hint="Target 35%+" />
          <KPI title="Operating Expenses" value={`$${(totalExpenses/1000).toFixed(1)}K`} delta={5} hint="Monthly burn" />
          <KPI title="Cash on Hand" value={`$${(Math.round(Math.random()*200000)+50000).toLocaleString()}`} delta={3} hint="Liquid assets" />
        </section>

        {/* Middle charts grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-semibold mb-3">Revenue vs Expenses ({mode})</h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={sampleTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-semibold mb-3">Expense Breakdown</h3>
            <div style={{ width: '100%', height: 260 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={expenseBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={40}>
                    {expenseBreakdown.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h4 className="font-semibold mb-2">Cash Flow (In vs Out)</h4>
              <div style={{ width: '100%', height: 180 }}>
                <ResponsiveContainer>
                  <BarChart data={cashFlow} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="in" stackId="a" fill="#06B6D4" />
                    <Bar dataKey="out" stackId="a" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h4 className="font-semibold mb-2">Revenue by Product</h4>
              <div style={{ width: '100%', height: 180 }}>
                <ResponsiveContainer>
                  <BarChart data={revenueByProduct} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4F46E5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
              <h4 className="font-semibold mb-2">Profitability Trend</h4>
              <div style={{ width: '100%', height: 180 }}>
                <ResponsiveContainer>
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
            </div>
          </div>
        </section>

        {/* Insights, Ratios and Alerts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-semibold mb-3">Financial Insights</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-slate-500">Accounts Receivable</div>
                  <div className="font-medium">$120,000</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Accounts Payable</div>
                  <div className="font-medium">$90,000</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Burn Rate</div>
                <div className="w-full bg-slate-200 rounded-full h-3 mt-2 overflow-hidden">
                  <div className="h-3 rounded-full" style={{ width: '38%', background: 'linear-gradient(90deg,#f97316,#ef4444)' }} />
                </div>
                <div className="text-xs text-slate-500 mt-1">Runway: ~6 months</div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Budget vs Actual</div>
                <div className="mt-2 text-sm">Revenue budget $1.2M — Actual $1.05M — <span className="text-red-500">Variance -12%</span></div>
              </div>

              <div>
                <div className="text-sm text-slate-500">Forecast (next 3 months)</div>
                <div className="mt-1 text-sm">Revenue expected to grow ~8% month-on-month based on pipeline</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-semibold mb-3">Key Ratios</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Current Ratio</div>
                  <div className="font-medium">{currentRatio}</div>
                </div>
                <div className="text-xs text-slate-400">Liquidity</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Debt-to-Equity</div>
                  <div className="font-medium">{debtToEquity}</div>
                </div>
                <div className="text-xs text-slate-400">Risk</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">ROI</div>
                  <div className="font-medium">{roi}</div>
                </div>
                <div className="text-xs text-slate-400">Investment Return</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
            <h3 className="font-semibold mb-3">Alerts & Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1" />
                <div>
                  <div className="text-sm font-medium">3 Overdue Invoices</div>
                  <div className="text-xs text-slate-500">Follow up with accounts receivable</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1" />
                <div>
                  <div className="text-sm font-medium">Expenses over budget — Sales</div>
                  <div className="text-xs text-slate-500">Review marketing spend</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-1" />
                <div>
                  <div className="text-sm font-medium">KPI Goal reached: Gross Margin</div>
                  <div className="text-xs text-slate-500">Great job — keep optimizing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom: transactions table and export */}
        <section className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Transactions</h3>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Export CSV</button>
              <input className="border rounded-md px-3 py-2" placeholder="Search transactions" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
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
                {transactions.map((t) => (
                  <tr key={t.id} className="border-t">
                    <td className="p-2">{t.id}</td>
                    <td className="p-2">{t.date}</td>
                    <td className="p-2">{t.type}</td>
                    <td className="p-2">{t.party}</td>
                    <td className="p-2">${t.amount.toLocaleString()}</td>
                    <td className="p-2"><span className={`px-2 py-1 rounded-full text-xs ${t.status === 'Overdue' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{t.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="text-center text-xs text-slate-400 mt-6">Built with ❤️ — Demo dashboard • SnapKit</footer>
      </main>
    </div>
  )
}
export default HeroSection26;
