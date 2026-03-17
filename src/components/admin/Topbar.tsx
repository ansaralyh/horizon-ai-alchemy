import React from "react";
import { Menu, Bell, User, Search, Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="h-14 sm:h-16 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 z-30 flex-shrink-0">
      <div className="flex items-center gap-3 sm:gap-6 min-w-0">
        <button 
          onClick={toggleSidebar}
          className="p-2.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors lg:hidden touch-manipulation flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative hidden md:block group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-amber-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search everything..." 
            className="bg-white/5 border border-white/5 rounded-full pl-10 pr-4 py-1.5 text-xs w-64 focus:outline-none focus:border-amber-500/40 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
        <Link 
          to="/" 
          target="_blank"
          className="p-2.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-amber-500 flex items-center gap-2 touch-manipulation"
          title="View Website"
        >
          <Globe className="w-5 h-5" />
          <span className="text-xs font-medium hidden sm:inline">Live Site</span>
        </Link>
        <button className="p-2.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground relative touch-manipulation">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-500 border-2 border-background" />
        </button>
        <div className="h-8 w-px bg-white/10 mx-1 hidden sm:block" />
        <button className="flex items-center gap-2 sm:gap-3 pl-2 rounded-full hover:bg-white/5 transition-all py-1.5 pr-2 sm:pr-3 touch-manipulation min-w-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-amber-500/20 flex-shrink-0">
            AD
          </div>
          <div className="text-left hidden sm:block min-w-0">
            <p className="text-xs font-bold text-foreground leading-none">Admin User</p>
            <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">Super Admin</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
