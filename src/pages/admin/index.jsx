import React from "react";
import Card from "../../components/common/Card";
import {
  BarChart3,
  Users,
  Building2,
  Calendar,
  TrendingUp,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <div className="flex items-center">
      <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <Select>
          <SelectTrigger className="w-[180px] bg-white cursor-pointer">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem defaultChecked value="7_days">
              Last 7 days
            </SelectItem>
            <SelectItem value="30_days">Last 30 days</SelectItem>
            <SelectItem value="this_year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-16 h-16 bg-[#3c73b6] rounded-xl flex items-center justify-center text-white">
              <Users size={28} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welcome, Admin!</h2>
            <p className="text-gray-600">
              Here&apos;s what&apos;s happening with your visitor management
              system today.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Visitors"
          value="1,248"
          icon={<Users size={20} className="text-white" />}
          color="bg-blue-500"
        />
        <StatCard
          title="Departments"
          value="16"
          icon={<Building2 size={20} className="text-white" />}
          color="bg-green-500"
        />
        <StatCard
          title="Today's Visits"
          value="42"
          icon={<Calendar size={20} className="text-white" />}
          color="bg-purple-500"
        />
        <StatCard
          title="Growth"
          value="+24%"
          icon={<TrendingUp size={20} className="text-white" />}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Visitor Traffic" icon={<BarChart3 size={20} />}>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="flex flex-col items-center text-gray-400">
              <BarChart3 size={48} />
              <p className="mt-2">Traffic Statistics Chart</p>
            </div>
          </div>
        </Card>

        <Card title="Recent Activity">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#3c73b6]"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium">
                    New visitor checked in to HR Department
                  </p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
