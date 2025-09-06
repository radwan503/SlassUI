"use client";

import  { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

// Sample Data
const kpis = [
  { title: "Active Auctions", value: 120, delta: 5 },
  { title: "Bids Today", value: 450, delta: 8 },
  { title: "Revenue", value: "$1.2M", delta: 12 },
  { title: "Avg Bid Value", value: "$120", delta: 4 },
  { title: "Registered Bidders", value: 870, delta: 10 },
  { title: "Items Sold", value: 340, delta: 7 },
];

const bidsOverTime = [
  { day: "Mon", bids: 40 },
  { day: "Tue", bids: 55 },
  { day: "Wed", bids: 60 },
  { day: "Thu", bids: 70 },
  { day: "Fri", bids: 50 },
  { day: "Sat", bids: 80 },
  { day: "Sun", bids: 90 },
];

const revenueOverTime = [
  { day: "Mon", revenue: 1200 },
  { day: "Tue", revenue: 1800 },
  { day: "Wed", revenue: 1500 },
  { day: "Thu", revenue: 2200 },
  { day: "Fri", revenue: 2000 },
  { day: "Sat", revenue: 2500 },
  { day: "Sun", revenue: 3000 },
];

const auctionStatus = [
  { name: "Active", value: 40 },
  { name: "Upcoming", value: 20 },
  { name: "Closed", value: 60 },
];

const topBidders = [
  { name: "Alice", bids: 120 },
  { name: "Bob", bids: 95 },
  { name: "Charlie", bids: 75 },
];

const categories = [
  { category: "Electronics", count: 25 },
  { category: "Art", count: 15 },
  { category: "Vehicles", count: 10 },
  { category: "Collectibles", count: 18 },
];

const recentAuctions = [
  { name: "Laptop", bid: "$1200", bids: 10, time: "2h", status: "Active" },
  { name: "Painting", bid: "$500", bids: 5, time: "1d", status: "Upcoming" },
  { name: "Car", bid: "$15000", bids: 8, time: "Closed", status: "Closed" },
];

export default function ProDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-blue-50 to-purple-100 p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white/40 backdrop-blur-lg shadow-xl rounded-xl mb-6">
        <motion.div className="text-3xl font-bold text-indigo-700"
          initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          BiddingPro
        </motion.div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["Dashboard", "Auctions", "Bidders", "Reports", "Settings"].map((item, i) => (
            <motion.li key={i} whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-indigo-600">{item}</motion.li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-3xl">☰</button>
        </div>
      </nav>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
        {kpis.map((kpi, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/30 backdrop-blur-xl p-5 rounded-3xl shadow-2xl cursor-pointer">
            <h3 className="text-gray-500">{kpi.title}</h3>
            <p className="text-3xl font-bold mt-2">{kpi.value}</p>
            <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
              className={`mt-1 text-sm ${kpi.delta >= 0 ? "text-green-500" : "text-red-500"}`}>
              {kpi.delta >= 0 ? `+${kpi.delta}%` : `${kpi.delta}%`} vs last period
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <motion.div className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl" initial={{ y: 20 }} animate={{ y: 0 }}>
          <h3 className="text-gray-700 font-semibold mb-4">Bids Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={bidsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bids" stroke="#3B82F6" strokeWidth={3} animationDuration={1500} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="text-gray-700 font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value:any) => `$${value}`} />
              <Line type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} animationDuration={1500} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-gray-700 font-semibold mb-4">Auction Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={auctionStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={30} label>
                {auctionStatus.map((_entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Top Bidders & Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl" initial={{ y: 20 }} animate={{ y: 0 }}>
          <h3 className="text-gray-700 font-semibold mb-4">Top Bidders</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topBidders}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bids" fill="#10B981" animationDuration={1500} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="text-gray-700 font-semibold mb-4">Category-wise Auctions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categories}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F59E0B" animationDuration={1500} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Auctions Table */}
      <motion.div className="bg-white/40 backdrop-blur-xl p-5 rounded-3xl shadow-2xl mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h3 className="text-gray-700 font-semibold mb-4">Recent Auctions</h3>
        <table className="min-w-full text-left rounded-lg overflow-hidden">
          <thead className="bg-gray-100/50">
            <tr>
              <th className="px-4 py-2">Auction</th>
              <th className="px-4 py-2">Highest Bid</th>
              <th className="px-4 py-2">Bids</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentAuctions.map((a, i) => (
              <motion.tr key={i} whileHover={{ scale: 1.02 }} className="border-b hover:bg-gray-50/50 transition-all">
                <td className="px-4 py-2">{a.name}</td>
                <td className="px-4 py-2 font-semibold">{a.bid}</td>
                <td className="px-4 py-2">{a.bids}</td>
                <td className="px-4 py-2">{a.time}</td>
                <td className={`px-4 py-2 font-semibold ${a.status === "Active" ? "text-green-500" : a.status === "Closed" ? "text-gray-500" : "text-blue-500"}`}>
                  {a.status}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
