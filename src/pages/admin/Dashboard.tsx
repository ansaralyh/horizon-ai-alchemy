import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Settings, 
  Briefcase, 
  MessageSquare, 
  HelpCircle, 
  TrendingUp, 
  Clock, 
  ShieldCheck 
} from "lucide-react";

const stats = [
  { id: 'services', label: "Total Services", value: 0, icon: Briefcase, color: "hsl(43 96% 56%)", path: "/admin/services" },
  { id: 'projects', label: "Total Projects", value: 48, icon: TrendingUp, color: "hsl(210 100% 66%)", path: "/admin/portfolio" },
  { id: 'messages', label: "Total Messages", value: 156, icon: MessageSquare, color: "hsl(142 70% 50%)", path: "/admin/messages" },
];

import { useData } from "@/context/DataContext";

const Dashboard = () => {
  const { services } = useData();

  return (
    <div className="space-y-8 animate-fade-up">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const displayValue = stat.id === 'services' ? services.length : stat.value;
          return (
            <Link key={stat.label} to={stat.path} className="card-premium p-6 group hover:scale-[1.02] transition-all block cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-white/10"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-md flex items-center gap-1">
                  +12% <TrendingUp className="w-3 h-3" />
                </span>
              </div>
              <h3 className="text-3xl font-bold text-foreground group-hover:text-amber-500 transition-colors">{displayValue}</h3>
              <p className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="card-premium p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              Recent Activity
            </h2>
            <button className="text-xs text-amber-500 hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0 shadow-[0_0_10px_hsl(43_96%_56%)]" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    New message received from <span className="text-amber-500 font-semibold">John Doe</span> regarding "AI Integration".
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="card-premium p-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            System Status
          </h2>
          <div className="space-y-4">
            {[
              { name: "Frontend API", status: "Online", color: "bg-green-500" },
              { name: "AI Inference Engine", status: "Online", color: "bg-green-500" },
              { name: "Content Database", status: "Online", color: "bg-green-500" },
              { name: "Auth Provider", status: "Online", color: "bg-green-500" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <span className="text-sm">{item.name}</span>
                <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  {item.status}
                  <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_currentColor]`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
