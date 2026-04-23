import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { BrainCircuit, Activity, Target, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';

interface DashboardData {
  gain: string;
  drawdown: string;
  profit: string;
  balance: string;
}

const equityData = [
  { time: 'Jan 2023', balance: 3200 },
  { time: 'Feb', balance: 3800 },
  { time: 'Mar', balance: 5200 },
  { time: 'Apr', balance: 6100 },
  { time: 'May', balance: 7500 },
  { time: 'Jun', balance: 7200 },
  { time: 'Jul', balance: 8800 },
  { time: 'Aug', balance: 9500 },
  { time: 'Sep', balance: 10800 },
  { time: 'Oct', balance: 12100 },
  { time: 'Nov', balance: 13334.44 },
];

const monthlyReturns = [
  { month: 'Aug', value: 21.5 },
  { month: 'Sep', value: 14.8 },
  { month: 'Oct', value: 18.2 },
];

const pairData = [
  { name: 'GBPUSD', value: 100 },
];

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b'];

export const TradingDashboard = () => {
  return (
    <div className="w-full h-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-4 lg:p-6 overflow-hidden font-sans border border-gray-100 flex flex-col gap-4 animate-fade-in max-h-[85vh]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-b border-gray-50 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
             <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 leading-none">
              HORIZON <span className="text-emerald-500 underline decoration-2 underline-offset-4">BEE QUANT</span>
            </h2>
            <p className="text-[9px] text-gray-400 mt-1 font-medium tracking-wide uppercase">Institutional Algorithmic System</p>
          </div>
        </div>
        
        <div className="flex gap-3">
           <div className="px-4 py-2 bg-gray-50/80 rounded-lg border border-gray-100">
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Account</p>
              <p className="text-xs font-bold text-gray-800">Real (USD)</p>
           </div>
           <div className="px-4 py-2 bg-gray-50/80 rounded-lg border border-gray-100">
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mb-0.5">Broker</p>
              <p className="text-xs font-bold text-gray-800">BlackBull MT5</p>
           </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Gain', value: '+320.70%', color: 'text-emerald-500', icon: TrendingUp },
          { label: 'Max Drawdown', value: '30.14%', color: 'text-red-500', icon: Activity },
          { label: 'Profit', value: '$3,334.44', color: 'text-emerald-600', icon: DollarSign },
          { label: 'Balance', value: '$13,334.44', color: 'text-blue-600', icon: Target }
        ].map((stat, i) => (
          <div key={i} className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-6 h-6 rounded bg-gray-50 group-hover:bg-white transition-colors flex items-center justify-center">
                  <stat.icon className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" />
               </div>
               <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
            </div>
            <p className={`text-base lg:text-xl font-black tracking-tighter ${stat.color} leading-none`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Middle Section: Equity Curve */}
      <div className="flex-grow min-h-[180px] bg-white border border-gray-100 rounded-2xl p-4 flex flex-col shadow-sm">
        <div className="flex items-center justify-between mb-4">
           <h3 className="text-sm font-extrabold text-gray-800 tracking-tight flex items-center gap-2">
             <Activity className="w-4 h-4 text-emerald-500" />
             Equity Growth Curve
           </h3>
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-[10px] font-bold text-gray-500">Live Growth</span>
           </div>
        </div>
        <div className="flex-grow w-full max-h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={equityData}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 9, fill: '#94a3b8', fontWeight: 600}} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 9, fill: '#94a3b8', fontWeight: 600}}
                tickFormatter={(val) => `$${val/1000}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '10px' }}
                itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="#10b981" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorBalance)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Monthly Analytics */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <h3 className="text-[10px] font-bold text-gray-800 mb-3 uppercase tracking-widest border-b border-gray-50 pb-2">Monthly</h3>
          <div className="h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyReturns}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 9, fill: '#64748b', fontWeight: 600}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} label={{ position: 'top', fontSize: 9, fill: '#64748b', fontWeight: 'bold', formatter: (val: number) => `+${val}%` }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trading Pairs (100% GBPUSD) */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
          <h3 className="text-[10px] font-bold text-gray-800 mb-3 uppercase tracking-widest border-b border-gray-50 pb-2 w-full text-center">Pairs</h3>
          <div className="relative w-full h-[120px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pairData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pairData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
              <p className="text-base font-black text-emerald-500 leading-none">100%</p>
              <p className="text-[8px] font-bold text-gray-400 tracking-tighter mt-0.5 uppercase">GBPUSD</p>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <h3 className="text-[10px] font-bold text-gray-800 mb-3 uppercase tracking-widest border-b border-gray-50 pb-2">Risk</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
            <div>
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Avg. Win</p>
              <p className="text-sm font-extrabold text-emerald-500 leading-none">62%</p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Avg. Loss</p>
              <p className="text-sm font-extrabold text-red-500 leading-none">38%</p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Sharpe</p>
              <p className="text-xs font-extrabold text-gray-800 leading-none">1.89</p>
            </div>
            <div>
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Sortino</p>
              <p className="text-xs font-extrabold text-gray-800 leading-none">2.45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
