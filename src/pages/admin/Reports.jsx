import React from "react";
import Card from "../../components/common/Card";
import { BarChart3, PieChart, LineChart, Download, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button className="flex items-center px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
          <Download size={18} className="mr-2" />
          Export Reports
        </button>
      </div>

      <Card className="mb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Generate Reports</h2>
            <p className="text-sm text-gray-500">
              View and export visitor analytics
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <Select>
              <SelectTrigger className="w-[180px] bg-white text-base cursor-pointer">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="this_week">This Week</SelectItem>
                <SelectItem value="this_month">This Month</SelectItem>
                <SelectItem value="this_quarter">This Quarter</SelectItem>
                <SelectItem value="this_year">This Year</SelectItem>
              </SelectContent>
            </Select>

            {/* <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter size={16} className="mr-2" />
              Filters
            </button> */}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Visit Trends" icon={<LineChart size={20} />}>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center text-gray-400">
              <LineChart size={48} />
              <p className="mt-2">Visit Trends Chart</p>
            </div>
          </div>
        </Card>

        <Card title="Department Distribution" icon={<PieChart size={20} />}>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center text-gray-400">
              <PieChart size={48} />
              <p className="mt-2">Department Distribution Chart</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Weekly Visit Summary" icon={<BarChart3 size={20} />}>
        <div className="h-72 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center text-gray-400">
            <BarChart3 size={64} />
            <p className="mt-2">Weekly Visit Summary Chart</p>
          </div>
        </div>
      </Card>

      <Card title="Top Departments">
        <div className="space-y-6">
          {["IT Department", "HR Department", "Marketing", "Finance"].map(
            (dept, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{dept}</span>
                  <span className="text-sm text-gray-600">
                    {30 - index * 5}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#3c73b6] h-2 rounded-full"
                    style={{ width: `${30 - index * 5}%` }}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>
      </Card>
    </div>
  );
};

export default Reports;
