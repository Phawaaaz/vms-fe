import React, { useState } from "react";
import Table from "../../components/common/Table";
import Card from "../../components/common/Card";
import { CalendarClock, Filter } from "lucide-react";

const mockVisits = [
  {
    id: 1,
    department: "HR Department",
    date: "May 1, 2025",
    time: "10:30 AM - 11:15 AM",
    purpose: "Interview",
    status: "Completed",
  },
  {
    id: 2,
    department: "IT Department",
    date: "Apr 28, 2025",
    time: "2:00 PM - 3:30 PM",
    purpose: "Training",
    status: "Completed",
  },
  {
    id: 3,
    department: "Finance",
    date: "Apr 25, 2025",
    time: "9:00 AM - 9:45 AM",
    purpose: "Document Submission",
    status: "Completed",
  },
  {
    id: 4,
    department: "Marketing",
    date: "Apr 20, 2025",
    time: "1:15 PM - 2:00 PM",
    purpose: "Project Discussion",
    status: "Completed",
  },
  {
    id: 5,
    department: "Operations",
    date: "Apr 15, 2025",
    time: "11:00 AM - 12:30 PM",
    purpose: "Meeting",
    status: "Completed",
  },
  {
    id: 6,
    department: "HR Department",
    date: "Apr 10, 2025",
    time: "3:00 PM - 3:45 PM",
    purpose: "Benefits Review",
    status: "Completed",
  },
];

const MyVisits = () => {
  const [activeTab, setActiveTab] = useState("all");

  const columns = [
    { header: "Department", accessorKey: "department" },
    { header: "Date", accessorKey: "date" },
    { header: "Time", accessorKey: "time" },
    { header: "Purpose", accessorKey: "purpose" },
    {
      header: "Status",
      accessorKey: "status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : row.status === "Upcoming"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Visits</h1>
        <button className="flex items-center px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
          <CalendarClock size={18} className="mr-2" />
          Schedule Visit
        </button>
      </div>

      <Card>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">Visit History</h2>
            <p className="text-sm text-gray-500">
              View all your past and upcoming visits
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "all"
                  ? "bg-[#3c73b6] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Visits
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "upcoming"
                  ? "bg-[#3c73b6] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === "completed"
                  ? "bg-[#3c73b6] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
              <Filter size={16} className="mr-1" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table columns={columns} data={mockVisits} />
        </div>
      </Card>

      <Card title="Visit Stats">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-sm text-gray-500 mb-1">Total Visits</h3>
            <p className="text-2xl font-bold">24</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-sm text-gray-500 mb-1">Most Visited</h3>
            <p className="text-2xl font-bold">HR Dept</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-sm text-gray-500 mb-1">This Month</h3>
            <p className="text-2xl font-bold">6 visits</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyVisits;
