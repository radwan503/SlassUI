// ProDashboardModern.tsx
// A modernized, fully‑responsive, and more functional dashboard component.
// ✨ Upgrades:
// - Sticky translucent navbar with accessible mobile drawer
// - KPI cards with deltas, icons, and motion
// - Range + interval segmented controls (MTD/QTD/YTD • Daily/Weekly)
// - Client‑side search, sort, and pagination for the table
// - CSV export utility
// - Mobile card layout for the table on small screens
// - Consistent card primitives + chart sizing

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts'
import { Menu, X, TrendingUp, Users2, DollarSign, Gauge, Gavel, PieChart as PieIcon, Download } from 'lucide-react'

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']

// ----- Sample Data (from your snippet) -----
const kpis = [
  { title: 'Active Auctions', value: 120, delta: 5, icon: Gavel },
  { title: 'Bids Today', value: 450, delta: 8, icon: TrendingUp },
  { title: 'Revenue', value: '$1.2M', delta: 12, icon: DollarSign },
  { title: 'Avg Bid Value', value: '$120', delta: 4, icon: Gauge },
  { title: 'Registered Bidders', value: 870, delta: 10, icon: Users2 },
  { title: 'Items Sold', value: 340, delta: 7, icon: PieIcon },
]

const bidsOverTime = [
  { day: 'Mon', bids: 40 },
  { day: 'Tue', bids: 55 },
  { day: 'Wed', bids: 60 },
  { day: 'Thu', bids: 70 },
  { day: 'Fri', bids: 50 },
  { day: 'Sat', bids: 80 },
  { day: 'Sun', bids: 90 },
]

const revenueOverTime = [
  { day: 'Mon', revenue: 1200 },
  { day: 'Tue', revenue: 1800 },
  { day: 'Wed', revenue: 1500 },
  { day: 'Thu', revenue: 2200 },
  { day: 'Fri', revenue: 2000 },
  { day: 'Sat', revenue: 2500 },
  { day: 'Sun', revenue: 3000 },
]

const auctionStatus = [
  { name: 'Active', value: 40 },
  { name: 'Upcoming', value: 20 },
  { name: 'Closed', value: 60 },
]

const topBidders = [
  { name: 'Alice', bids: 120 },
  { name: 'Bob', bids: 95 },
  { name: 'Charlie', bids: 75 },
]

const categories = [
  { category: 'Electronics', count: 25 },
  { category: 'Art', count: 15 },
  { category: 'Vehicles', count: 10 },
  { category: 'Collectibles', count: 18 },
]

const recentAuctions = [
  { name: 'Laptop', bid: '$1200', bids: 10, time: '2h', status: 'Active' },
  { name: 'Painting', bid: '$500', bids: 5, time: '1d', status: 'Upcoming' },
  { name: 'Car', bid: '$15000', bids: 8, time: 'Closed', status: 'Closed' },
  { name: 'Camera', bid: '$800', bids: 7, time: '3h', status: 'Active' },
  { name: 'Vintage Clock', bid: '$350', bids: 11, time: '6h', status: 'Active' },
  { name: 'Sculpture', bid: '$1100', bids: 4, time: '2d', status: 'Upcoming' },
]

// ----- Utilities -----
function exportToCSV(rows: any[], filename = 'recent-auctions.csv') {
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

function classNames(...c: (string | false | undefined)[]) { return c.filter(Boolean).join(' ') }

// ----- Primitives -----
function Card({ children, className = '' }: any) {
  return (
    <div className={classNames('rounded-3xl bg-white/60 md:bg-white/40 backdrop-blur-xl border border-black/5 shadow-[0_8px_32px_rgba(2,6,23,0.12)]', className)}>{children}</div>
  )
}
function CardHeader({ title, subtitle, right }: { title?: string; subtitle?: string; right?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 p-5 pb-0">
      <div>
        {title && <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>}
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}
function CardBody({ children, className = '' }: any) { return <div className={classNames('p-5', className)}>{children}</div> }

// ----- Main Component -----
export default function ProDashboardModern() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [range, setRange] = useState<'MTD' | 'QTD' | 'YTD'>('MTD')
  const [interval, setInterval] = useState<'Daily' | 'Weekly'>('Daily')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'bid' | 'bids' | 'time' | 'status'>('name')
  const [page, setPage] = useState(1)
  const pageSize = 4

  // Table compute
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return recentAuctions.filter(a => !q || a.name.toLowerCase().includes(q) || a.status.toLowerCase().includes(q) || a.bid.toLowerCase().includes(q))
  }, [query])

  const sorted = useMemo(() => {
    const copy = [...filtered]
    copy.sort((a, b) => {
      if (sortBy === 'name' || sortBy === 'status' || sortBy === 'time' || sortBy === 'bid') {
        return String(a[sortBy]).localeCompare(String(b[sortBy]))
      }
      if (sortBy === 'bids') return (a.bids as number) - (b.bids as number)
      return 0
    })
    return copy
  }, [filtered, sortBy])

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
  const current = useMemo(() => sorted.slice((page - 1) * pageSize, page * pageSize), [sorted, page])

  return (
    <div className="min-h-screen bg-blue-50 from-indigo-50 via-blue-50 to-purple-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400" />
            <div className="text-2xl font-black tracking-tight">BiddingPro</div>
          </motion.div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
            {['Dashboard', 'Auctions', 'Bidders', 'Reports', 'Settings'].map((item) => (
              <a key={item} href="#" className="opacity-80 hover:opacity-100">{item}</a>
            ))}
          </nav>

          <button className="md:hidden rounded-xl border border-black/10 bg-white/70 p-2" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-black/5">
            <nav className="px-4 py-3 grid gap-2 bg-white/70">
              {['Dashboard', 'Auctions', 'Bidders', 'Reports', 'Settings'].map((item) => (
                <a key={item} href="#" className="rounded-lg px-3 py-2 bg-white/60">{item}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 space-y-6">
        {/* Title + Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">Auctions Dashboard</h1>
            <p className="text-sm text-slate-600">Live overview of bids, revenue, categories & top bidders</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Range segmented */}
            <div role="tablist" aria-label="Range" className="grid grid-cols-3 rounded-xl bg-slate-200/80 p-1 text-xs">
              {(['MTD', 'QTD', 'YTD'] as const).map((r) => (
                <button key={r} role="tab" aria-selected={range === r} onClick={() => setRange(r)} className={classNames('rounded-lg px-2 py-1.5 font-semibold', range === r ? 'bg-white shadow' : 'opacity-70 hover:opacity-100')}>{r}</button>
              ))}
            </div>
            {/* Interval segmented */}
            <div role="tablist" aria-label="Interval" className="grid grid-cols-2 rounded-xl bg-slate-200/80 p-1 text-xs">
              {(['Daily', 'Weekly'] as const).map((it) => (
                <button key={it} role="tab" aria-selected={interval === it} onClick={() => setInterval(it)} className={classNames('rounded-lg px-2 py-1.5 font-semibold', interval === it ? 'bg-white shadow' : 'opacity-70 hover:opacity-100')}>{it}</button>
              ))}
            </div>
            <button onClick={() => exportToCSV(recentAuctions)} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm px-3 py-2 font-semibold shadow hover:shadow-md">
              <Download className="h-4 w-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {kpis.map((k, i) => {
            const Icon = k.icon || TrendingUp
            const up = k.delta >= 0
            return (
              <motion.div key={k.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="h-full">
                  <CardBody className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl grid place-items-center bg-indigo-50">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 truncate">{k.title}</p>
                      <div className="flex items-end gap-2">
                        <p className="text-2xl font-extrabold leading-tight">{k.value}</p>
                        <span className={classNames('text-xs font-medium', up ? 'text-emerald-600' : 'text-rose-600')}>{up ? '▲' : '▼'} {Math.abs(k.delta)}%</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            )
          })}
        </section>

        {/* Charts Row */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader title="Bids Over Time" subtitle={`${interval} trend`} />
            <CardBody>
              <div className="h-[240px] sm:h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bidsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="bids" stroke="#3B82F6" strokeWidth={3} dot={{ r: 2 }} activeDot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader title="Revenue Trend" subtitle={`${range} snapshot`} />
            <CardBody>
              <div className="h-[240px] sm:h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip formatter={(value: any) => `$${value}`} />
                    <Line type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} dot={{ r: 2 }} activeDot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader title="Auction Status" subtitle="Active / Upcoming / Closed" />
            <CardBody>
              <div className="h-[240px] sm:h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={auctionStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3}>
                      {auctionStatus.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Top Bidders & Categories */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader title="Top Bidders" subtitle="Most active users" />
            <CardBody>
              <div className="h-[260px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topBidders}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bids" fill="#10B981" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Category‑wise Auctions" subtitle="Distribution across segments" />
            <CardBody>
              <div className="h-[260px] sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categories}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#F59E0B" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Recent Auctions Table */}
        <section>
          <Card>
            <CardHeader
              title="Recent Auctions"
              right={
                <div className="flex items-center gap-2">
                  <input
                    value={query}
                    onChange={(e) => { setPage(1); setQuery(e.target.value) }}
                    aria-label="Search auctions"
                    placeholder="Search auctions..."
                    className="w-44 sm:w-64 rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <select
                    aria-label="Sort by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-sm"
                  >
                    <option value="name">Name</option>
                    <option value="bid">Highest Bid</option>
                    <option value="bids"># Bids</option>
                    <option value="time">Time</option>
                    <option value="status">Status</option>
                  </select>
                </div>
              }
            />

            <CardBody>
              {/* Table (md+) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full table-auto text-left text-sm">
                  <thead>
                    <tr className="text-xs text-slate-500">
                      <th className="p-2">Auction</th>
                      <th className="p-2">Highest Bid</th>
                      <th className="p-2">Bids</th>
                      <th className="p-2">Time</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.map((a, i) => (
                      <tr key={i} className="border-t border-black/5">
                        <td className="p-2">{a.name}</td>
                        <td className="p-2 font-semibold">{a.bid}</td>
                        <td className="p-2">{a.bids}</td>
                        <td className="p-2">{a.time}</td>
                        <td className={classNames('p-2 font-semibold', a.status === 'Active' ? 'text-emerald-600' : a.status === 'Closed' ? 'text-slate-500' : 'text-indigo-600')}>{a.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards (mobile) */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {current.map((a, i) => (
                  <div key={i} className="rounded-xl border border-black/5 bg-white/80 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{a.name}</p>
                      <span className={classNames('px-2 py-0.5 rounded-full text-[11px]', a.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : a.status === 'Closed' ? 'bg-slate-200 text-slate-700' : 'bg-indigo-100 text-indigo-700')}>{a.status}</span>
                    </div>
                    <p className="text-xs text-slate-500">{a.time}</p>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span>{a.bids} bids</span>
                      <span className="font-semibold">{a.bid}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-slate-600">Page {page} of {totalPages}</p>
                <div className="flex gap-2">
                  <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="rounded-lg border border-black/10 bg-white/80 px-3 py-1 disabled:opacity-50">Prev</button>
                  <button disabled={page === totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))} className="rounded-lg border border-black/10 bg-white/80 px-3 py-1 disabled:opacity-50">Next</button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        <p className="text-center text-xs text-slate-500">Built with ❤️ — Recharts + Tailwind • SlassUI</p>
      </main>
    </div>
  )
}
