import React from "react";
import Card from "../../components/common/Card";
import { Building2, Plus, Users, Edit, Trash } from "lucide-react";

const mockDepartments = [
  { id: 1, name: "Human Resources", employees: 12, location: "Floor 2" },
  { id: 2, name: "Information Technology", employees: 28, location: "Floor 3" },
  { id: 3, name: "Finance", employees: 9, location: "Floor 2" },
  { id: 4, name: "Marketing", employees: 15, location: "Floor 1" },
  { id: 5, name: "Operations", employees: 22, location: "Floor 1" },
  { id: 6, name: "Research & Development", employees: 18, location: "Floor 4" },
];

const DepartmentCard = ({ department }) => (
  <Card className="transition-all duration-300 hover:shadow-md">
    <div className="flex items-start justify-between">
      <div className="flex items-start">
        <div className="p-3 bg-blue-100 rounded-lg text-[#3c73b6]">
          <Building2 size={24} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{department.name}</h3>
          <div className="flex items-center mt-1 text-sm text-gray-500">
            <Users size={14} className="mr-1" />
            <span>{department.employees} employees</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{department.location}</p>
        </div>
      </div>
      <div className="flex space-x-1">
        <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Edit size={16} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors">
          <Trash size={16} />
        </button>
      </div>
    </div>
  </Card>
);

const Departments = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Departments</h1>
        <button className="flex items-center px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
          <Plus size={18} className="mr-2" />
          Add Department
        </button>
      </div>

      <Card className="mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">All Departments</h2>
            <p className="text-sm text-gray-500">
              Manage company departments and locations
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search departments..."
              className="px-4 py-2 border rounded-lg w-full md:w-64"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDepartments.map((department) => (
          <DepartmentCard key={department.id} department={department} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
