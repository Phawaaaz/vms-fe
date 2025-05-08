import React, { useState } from "react";
import { Outlet } from "react-router";
import VisitorSidebar from "../../components/visitor/Sidebar";
import VisitorNavbar from "../../components/visitor/Navbar";

export default function VisitorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <VisitorSidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <VisitorNavbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto px-5 py-6 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
