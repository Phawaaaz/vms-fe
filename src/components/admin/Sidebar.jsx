import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";

import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  Settings as SettingsIcon,
  X,
  LogOut,
} from "lucide-react";

const admin_navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Visitors", href: "/admin/visitors", icon: Users },
  { name: "Departments", href: "/admin/departments", icon: Building2 },
  { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: SettingsIcon },
];

export default function Sidebar({ sidebarOpen, onClose }) {
  const location = useLocation();

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity backdrop-blur-[2px] lg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white border-r transition-transform transform lg:static lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-[#3c73b6]">Admin Portal</h1>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 lg:hidden cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {admin_navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-4 py-3 font-semibold transition-all duration-300",
                  isActive
                    ? "bg-blue-400/10 text-[#3c73b6]"
                    : "hover:bg-gray-100 text-gray-700"
                )}
              >
                <item.icon className="size-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-3">
          <button
            className="w-full flex items-center gap-4 rounded-lg px-4 py-3 text-base font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
            onClick={() => {
              // Add logout logic
              console.log("Logging out...");
            }}
          >
            <LogOut className="size-5" />
            Logout
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 p-4 border-t">
          {/* Profile Picture */}
          <div className="w-8 h-8 flex items-center justify-center rounded-full font-medium bg-gray-300">
            <span className="text-sm">JD</span>
          </div>

          <div>
            <div className="text-sm font-bold text-gray-800">John Doe</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}
