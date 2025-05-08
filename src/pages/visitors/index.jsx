import React from "react";
import Card from "../../components/common/Card";
import { Calendar, Clock, Tag, CheckCircle } from "lucide-react";

const VisitorDashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-[#3c73b6] to-[#4a81c4] text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Fawaz!</h1>
            <p className="text-blue-100">{formattedDate}</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button className="px-6 py-3 bg-white text-[#3c73b6] font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Check In Now
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-blue-100 text-[#3c73b6] mb-4">
              <Calendar size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">Next Visit</h3>
            <p className="text-gray-500">Tomorrow, 10:00 AM</p>
            <p className="text-sm font-medium mt-2">IT Department</p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">Completed Visits</h3>
            <p className="text-gray-500">12 visits this month</p>
            <p className="text-sm text-green-600 font-medium mt-2">
              All check-ins complete
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">Average Visit</h3>
            <p className="text-gray-500">45 minutes</p>
            <p className="text-sm text-purple-600 font-medium mt-2">
              Mostly to HR Department
            </p>
          </div>
        </Card>
      </div>

      <Card title="Upcoming Appointments">
        <div className="space-y-4">
          {[
            {
              department: "IT Department",
              date: "Tomorrow",
              time: "10:00 AM",
              purpose: "Equipment Setup",
              status: "upcoming",
            },
            {
              department: "Marketing",
              date: "May.15, 2025",
              time: "2:30 PM",
              purpose: "Campaign Review",
              status: "upcoming",
            },
            {
              department: "HR Department",
              date: "May.20, 2025",
              time: "11:00 AM",
              purpose: "Quarterly Review",
              status: "upcoming",
            },
          ].map((appointment, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{appointment.department}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Calendar size={14} className="mr-1" />
                  <span>
                    {appointment.date} at {appointment.time}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Tag size={14} className="mr-1" />
                  <span>{appointment.purpose}</span>
                </div>
              </div>
              <div className="mt-3 md:mt-0 flex items-center">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                  Upcoming
                </span>
                <button className="ml-3 px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VisitorDashboard;
