import { Link, useLocation } from "react-router";
import { Home, Users, Clipboard, CogIcon, X, LogOut } from "lucide-react";
import { cn } from "../../lib/utils";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home },
  { name: "Visitors", href: "/admin/visitors", icon: Users },
  { name: "Reports", href: "/admin/reports", icon: Clipboard },
  { name: "Settings", href: "/admin/settings", icon: CogIcon },
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
        {/* Mobile close button */}
        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={onClose}>
            <X className="size-5 text-gray-500" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center p-4">
          <span className="text-2xl font-bold text-gray-800">VMS</span>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-4 py-3 text-base font-semibold transition-all",
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
            {/* <img
            src="/fawaz.jpg"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          /> */}
            <span className="text-sm">AF</span>
          </div>

          <div>
            <div className="text-sm font-bold text-gray-800">Akinola Fawaz</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}
