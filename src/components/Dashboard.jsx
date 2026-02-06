import { Sidebar } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function Dashboard() {
    const data = [
      { name: "Jan", uv: 400, },
      { name: "Feb", uv: 300 },
      { name: "Mar", uv: 500 }, 
      { name: "Apr", uv: 200 },
      { name: "May", uv: 450 },
    ];
    const [sidebarOpen,setSidebarOpen] = useState(true)
  return (
   
      <div className="bg-red-300  min-h-[700px] mt-2 flex p-4">
        <div className={`bg-violet-300 ${sidebarOpen ? "w-56" : "w-10"} transition-all ease-initial duration-300 `}></div>
        <div className="bg-purple-400 flex-grow basis-[200px]">
            <button className="ml-2 mt-1"
            onClick={() => {setSidebarOpen((prev) => setSidebarOpen(!prev))}}
            ><Sidebar /></button>
        </div>
      </div>
    
  );
}

export default Dashboard;
