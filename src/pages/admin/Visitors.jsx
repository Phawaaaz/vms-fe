import React from "react";
import Table from "../../components/common/Table";
import QRCode from "../../components/common/QRCode";
import Card from "../../components/common/Card";
import { Plus, Download, RefreshCw } from "lucide-react";

const mockVisitors = [
  {
    id: 1,
    name: "John Smith",
    department: "HR",
    purpose: "Interview",
    timeIn: "09:30 AM",
    timeOut: "10:45 AM",
    status: "Completed",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    department: "IT",
    purpose: "Meeting",
    timeIn: "10:15 AM",
    timeOut: "11:20 AM",
    status: "Completed",
  },
  {
    id: 3,
    name: "Michael Brown",
    department: "Finance",
    purpose: "Consultation",
    timeIn: "11:00 AM",
    timeOut: "-",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    department: "Marketing",
    purpose: "Presentation",
    timeIn: "01:30 PM",
    timeOut: "-",
    status: "Active",
  },
  {
    id: 5,
    name: "David Wilson",
    department: "Operations",
    purpose: "Delivery",
    timeIn: "02:15 PM",
    timeOut: "02:45 PM",
    status: "Completed",
  },
];

const Visitors = () => {
  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Department", accessorKey: "department" },
    { header: "Purpose", accessorKey: "purpose" },
    { header: "Time In", accessorKey: "timeIn" },
    {
      header: "Time Out",
      accessorKey: "timeOut",
      render: (row) => (
        <span
          className={row.timeOut === "-" ? "text-orange-500" : "text-gray-900"}
        >
          {row.timeOut}
        </span>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "QR Code",
      render: (row) => <QRCode data={`visitor-${row.id}`} size={60} />,
    },
  ];

  const actions = [
    {
      icon: <RefreshCw size={16} />,
      onClick: (row) => console.log("Refresh", row),
      className: "text-gray-600 hover:text-gray-900",
    },
    {
      icon: <Download size={16} />,
      onClick: (row) => console.log("Download", row),
      className: "text-gray-600 hover:text-gray-900",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Visitors</h1>
        <button className="flex items-center px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
          <Plus size={18} className="mr-2" />
          New Visitor
        </button>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">All Visitors</h2>
            <p className="text-sm text-gray-500">
              Manage and track all visitor entries
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search visitors..."
                className="w-full sm:w-64 px-4 py-2 border rounded-lg"
              />
            </div>

            <select className="px-4 py-2 border rounded-lg bg-white">
              <option>All Departments</option>
              <option>HR</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>
        </div>

        <Table columns={columns} data={mockVisitors} actions={actions} />
      </Card>
    </div>
  );
};

export default Visitors;
