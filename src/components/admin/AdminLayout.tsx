import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const LG_BREAKPOINT = 1024;

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= LG_BREAKPOINT
  );

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT) setSidebarOpen(true);
      else setSidebarOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-background flex w-full overflow-x-hidden">
      {/* Sidebar - overlay on mobile when open, static on desktop */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content - full width on mobile when sidebar closed */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-hidden">
        <Topbar toggleSidebar={() => setSidebarOpen((o) => !o)} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 md:p-8 lg:p-10 custom-scrollbar">
          <div className="max-w-6xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile overlay: when sidebar is open on small screens, tap outside to close */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default AdminLayout;
