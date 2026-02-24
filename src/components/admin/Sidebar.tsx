import React from "react";
import { 
  BarChart3, 
  Briefcase, 
  Layers, 
  Image, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Users, 
  FileText,
  Star,
  ChevronLeft,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import logo from "@/assets/horizon-bee-tech-logo.png";

const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: BarChart3 },
  { label: "Services", path: "/admin/services", icon: Briefcase },
  { label: "Portfolio", path: "/admin/portfolio", icon: Image },
  { label: "Blogs", path: "/admin/blogs", icon: FileText },
  { label: "Messages", path: "/admin/messages", icon: MessageSquare },
  { label: "Team", path: "/admin/team", icon: Users },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside 
      className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 ease-in-out border-r border-white/5 bg-black/40 backdrop-blur-xl ${
        isOpen ? "w-64" : "w-0 -translate-x-full lg:w-20 lg:translate-x-0"
      }`}
    >
      <div className="p-6 flex items-center justify-between">
        {isOpen && (
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground lg:inline-flex hidden"
        >
          <ChevronLeft className={`w-5 h-5 transition-transform ${isOpen ? "" : "rotate-180"}`} />
        </button>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground lg:hidden"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all group ${
              isActive(item.path) 
                ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" 
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
            }`}
          >
            <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive(item.path) ? "text-amber-500" : "text-muted-foreground group-hover:text-amber-500"}`} />
            <span className={`whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "lg:hidden opacity-0"}`}>
              {item.label}
            </span>
            {isActive(item.path) && isOpen && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_hsl(43_96%_56%)]" />
            )}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/5 transition-all group"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className={`whitespace-nowrap ${isOpen ? "opacity-100" : "lg:hidden opacity-0"}`}>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
