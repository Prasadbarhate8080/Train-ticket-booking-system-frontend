import { Home, Settings, Sidebar, Train } from 'lucide-react';
import { useState } from 'react';
import { MdOutlineConfirmationNumber } from 'react-icons/md';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
function Dashboard() {
  const bookingData = [
    { month: 'Jan', bookings: 320 },
    { month: 'Feb', bookings: 280 },
    { month: 'Mar', bookings: 410 },
    { month: 'Apr', bookings: 360 },
    { month: 'May', bookings: 520 },
  ];
  const revenueData = [
    { month: 'Jan', revenue: 420000 },
    { month: 'Feb', revenue: 380000 },
    { month: 'Mar', revenue: 610000 },
    { month: 'Apr', revenue: 540000 },
    { month: 'May', revenue: 720000 },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarVariants = {
    open: {
      width: 224,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    closed: {
      width: 56,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1 },
    closed: { opacity: 1 },
  };

  const textVariants = {
    open: {
      opacity: 1,
      width: 'auto',
    },
    closed: {
      opacity: 0,
      width: 0,
    },
  };

  return (
    <div className=" min-h-[700px] mt-2 flex p-4">
      <motion.div
        className={`bg-zinc-100 p-2 rounded-l-lg overflow-hidden  `}
        variants={sidebarVariants}
        initial="open"
        animate={sidebarOpen ? 'open' : 'closed'}
      >
        <motion.h3
          className={`w-full flex gap-2 p-0.5 font-semibold text-xl overflow-hidden text-gray-600
             ${sidebarOpen ? ' mt-2' : 'mt-0'}  rounded-lg
              indent-1 `}
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e63900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3h8a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z"></path>
            <line x1="8" y1="16" x2="8.01" y2="16"></line>
            <line x1="16" y1="16" x2="16.01" y2="16"></line>
            <path d="M7 8h10"></path>
            <path d="M7 12h10"></path>
          </svg>
          <motion.span
            className="overflow-hidden  whitespace-nowrap origin-left inline-block"
            variants={textVariants}
          >
            Easy Train
          </motion.span>
        </motion.h3>
        <motion.button
          className="flex gap-3 mt-1 w-full overflow-hidden rounded-lg hover:bg-gray-200 p-2 items-center"
          variants={itemVariants}
        >
          <Home size={18} className="shrink-0" />
          {/* {sidebarOpen && "Home"} */}
          <motion.span
            className="overflow-hidden  whitespace-nowrap origin-left inline-block"
            variants={textVariants}
          >
            Home
          </motion.span>
        </motion.button>
        <motion.button
          className="flex gap-3 mt-1 w-full overflow-hidden rounded-lg hover:bg-gray-200 p-2 items-center"
          variants={itemVariants}
        >
          <Train size={18} className="shrink-0" />
          {/* {sidebarOpen && "Add Train"} */}
          <motion.span
            variants={textVariants}
            className=" whitespace-nowrap overflow-hidden origin-left inline-block"
          >
            Add Train
          </motion.span>
        </motion.button>
        <motion.button
          className="flex gap-3 mt-1 w-full overflow-hidden rounded-lg hover:bg-gray-200 p-2 items-center"
          variants={itemVariants}
        >
          <MdOutlineConfirmationNumber size={18} className="shrink-0" />
          {/* {sidebarOpen && "Bookings"} */}
          <motion.span
            variants={textVariants}
            className=" whitespace-nowrap overflow-hidden origin-left inline-block"
          >
            Bookings
          </motion.span>
        </motion.button>
        <motion.button
          className="flex gap-3 mt-1 w-full overflow-hidden rounded-lg hover:bg-gray-200 p-2 items-center"
          variants={itemVariants}
        >
          <Settings size={18} className="shrink-0" />
          {/* {sidebarOpen && "Bookings"} */}
          <motion.span variants={textVariants}>Setting</motion.span>
        </motion.button>
      </motion.div>
      <div className="bg-zinc-200 flex-grow basis-[200px] rounded-r-lg">
        <div>
          <button
            className="ml-2 mt-1"
            onClick={() => {
              setSidebarOpen((prev) => !prev);
            }}
          >
            <Sidebar size={20} />
          </button>
        </div>
        <div className="p-2">
          <div
            className="grid gap-4 p-2"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {/* Total Trains */}
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Trains</p>
                  <h2 className="text-2xl font-bold text-gray-800">128</h2>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Train size={22} className="text-orange-600" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+8 added this month</p>
            </div>

            {/* Today's Bookings */}
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Today’s Bookings</p>
                  <h2 className="text-2xl font-bold text-gray-800">342</h2>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MdOutlineConfirmationNumber
                    size={22}
                    className="text-blue-600"
                  />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+12% vs yesterday</p>
            </div>

            {/* Available Seats */}
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Available Seats</p>
                  <h2 className="text-2xl font-bold text-gray-800">1,420</h2>
                </div>
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Home size={22} className="text-emerald-600" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Across all active trains
              </p>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Monthly Revenue</p>
                  <h2 className="text-2xl font-bold text-gray-800">₹ 8.4L</h2>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Settings size={22} className="text-purple-600" />
                </div>
              </div>
              <p className="text-xs text-green-600 mt-2">+18% this month</p>
            </div>
          </div>
          <div
            className="grid gap-4 p-2 grid-cols-1 md:grid-cols-2"
          >
            <div className="bg-white rounded-xl p-4 shadow-sm h-72">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Monthly Bookings
              </h3>

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bookingData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="bookings"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm h-72">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                Monthly Revenue (₹)
              </h3>

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#16a34a"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
