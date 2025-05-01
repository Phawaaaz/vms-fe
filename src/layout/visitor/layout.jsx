import React, { useState } from "react";
import { Outlet } from "react-router";

import { AlignJustify } from "lucide-react";
import VisitorSidebar from "../../component/visitor/Sidebar";

export default function VisitorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <VisitorSidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white p-4 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-700 hover:text-gray-900"
          >
            <AlignJustify className="size-5" />
          </button>

          <div className="text-lg font-bold text-gray-800">Visitor Portal</div>

          <div className="w-8 h-8 flex items-center justify-center rounded-full font-medium bg-gray-300">
            {/* <img
            src="/fawaz.jpg"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          /> */}
            <span className="text-sm">AF</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
