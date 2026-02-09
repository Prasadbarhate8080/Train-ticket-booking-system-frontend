import { Home, Settings, Sidebar, Train, TrendingUp, Users, Calendar, Bell } from 'lucide-react';
import { useState } from 'react';
import { MdOutlineConfirmationNumber } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const bookingData = [
  { month: 'Jan', bookings: 320, lastYear: 280 },
  { month: 'Feb', bookings: 280, lastYear: 260 },
  { month: 'Mar', bookings: 410, lastYear: 350 },
  { month: 'Apr', bookings: 360, lastYear: 320 },
  { month: 'May', bookings: 520, lastYear: 420 },
  { month: 'Jun', bookings: 480, lastYear: 460 },
];

const revenueData = [
  { month: 'Jan', revenue: 420000 },
  { month: 'Feb', revenue: 380000 },
  { month: 'Mar', revenue: 610000 },
  { month: 'Apr', revenue: 540000 },
  { month: 'May', revenue: 720000 },
  { month: 'Jun', revenue: 680000 },
];

const routeData = [
  { name: 'Mumbai-Delhi', value: 35 },
  { name: 'Chennai-Bangalore', value: 25 },
  { name: 'Kolkata-Patna', value: 20 },
  { name: 'Others', value: 20 },
];

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6'];

const recentBookings = [
  { id: 'TKT001', passenger: 'Rahul Kumar', route: 'Mumbai → Delhi', time: '2 min ago', status: 'confirmed' },
  { id: 'TKT002', passenger: 'Priya Singh', route: 'Chennai → Bangalore', time: '5 min ago', status: 'confirmed' },
  { id: 'TKT003', passenger: 'Amit Patel', route: 'Kolkata → Patna', time: '12 min ago', status: 'pending' },
  { id: 'TKT004', passenger: 'Sneha Reddy', route: 'Delhi → Jaipur', time: '18 min ago', status: 'confirmed' },
];

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Train, label: 'Manage Trains', active: false },
  { icon: MdOutlineConfirmationNumber, label: 'Bookings', active: false },
  { icon: Users, label: 'Passengers', active: false },
  { icon: Calendar, label: 'Schedule', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

function StatCard({ icon: Icon, title, value, change, changeType, bgColor, iconColor, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">{value}</h2>
        </div>
        <motion.div 
          className={`${bgColor} p-3 rounded-xl`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon size={24} className={iconColor} />
        </motion.div>
      </div>
      <div className="flex items-center gap-1 mt-4">
        <TrendingUp size={14} className={changeType === 'up' ? 'text-emerald-500' : 'text-red-500'} />
        <span className={`text-sm font-medium ${changeType === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-400 ml-1">vs last month</span>
      </div>
    </motion.div>
  );
}

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 80 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white border-r border-gray-200 flex flex-col overflow-hidden"
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-100">
          <motion.div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
              <Train size={22} className="text-white" />
            </div>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="overflow-hidden"
                >
                  <h1 className="font-bold text-xl text-gray-800">EasyTrain</h1>
                  <p className="text-xs text-gray-400">Admin Panel</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveMenu(index)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                activeMenu === index
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} className="shrink-0" />
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Sidebar size={20} className="text-gray-600" />
              </motion.button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, Admin</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative p-2 hover:bg-gray-100 rounded-lg"
              >
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </motion.button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <StatCard icon={Train} title="Total Trains" value="128" change="+8" changeType="up" bgColor="bg-orange-100" iconColor="text-orange-600" delay={0} />
            <StatCard icon={MdOutlineConfirmationNumber} title="Today's Bookings" value="342" change="+12%" changeType="up" bgColor="bg-blue-100" iconColor="text-blue-600" delay={0.1} />
            <StatCard icon={Users} title="Active Users" value="2,845" change="+18%" changeType="up" bgColor="bg-emerald-100" iconColor="text-emerald-600" delay={0.2} />
            <StatCard icon={TrendingUp} title="Monthly Revenue" value="₹8.4L" change="+24%" changeType="up" bgColor="bg-purple-100" iconColor="text-purple-600" delay={0.3} />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bookings Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Booking Trends</h3>
                  <p className="text-sm text-gray-500">Monthly comparison</p>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full" />
                    This Year
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gray-300 rounded-full" />
                    Last Year
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={bookingData}>
                  <defs>
                    <linearGradient id="bookingGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  <Area type="monotone" dataKey="lastYear" stroke="#d1d5db" strokeWidth={2} fill="transparent" />
                  <Area type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={3} fill="url(#bookingGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Revenue Overview</h3>
                  <p className="text-sm text-gray-500">Monthly earnings in ₹</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={1} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `${v/1000}K`} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Route Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-gray-800 mb-4">Popular Routes</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={routeData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={4}>
                    {routeData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                {routeData.map((item, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Recent Bookings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 lg:col-span-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">Recent Bookings</h3>
                <button className="text-sm text-orange-600 font-medium hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {recentBookings.map((booking, i) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {booking.passenger[0]}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{booking.passenger}</p>
                        <p className="text-sm text-gray-500">{booking.route}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {booking.status}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">{booking.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
