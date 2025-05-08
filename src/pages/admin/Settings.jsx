import React from "react";
import Card from "../../components/common/Card";
import Avatar from "../../components/common/Avatar";
import { User, Building, Globe, Bell, Shield } from "lucide-react";

const SettingItem = ({ icon, title, description, children }) => (
  <div className="py-4">
    <div className="flex items-start">
      <div className="p-2 bg-blue-100 rounded-lg text-[#3c73b6]">{icon}</div>
      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{description}</p>
        {children}
      </div>
    </div>
  </div>
);

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-2">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <div className="flex flex-col items-center text-center">
              <Avatar name="Admin User" size="lg" />
              <h2 className="mt-4 text-xl font-semibold">Admin User</h2>
              <p className="text-sm text-gray-500">System Administrator</p>

              <div className="mt-6 flex items-center justify-center gap-2">
                <button className="px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
                  Edit Profile
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Change Password
                </button>
              </div>

              <div className="mt-6 pt-6 border-t w-full">
                <p className="text-sm text-gray-500">
                  Last login: Today at 9:42 AM
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card title="Admin Information">
            <div className="divide-y">
              <SettingItem
                icon={<User size={20} />}
                title="Profile Information"
                description="Update your account's profile information"
              >
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value="Admin User"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value="admin@example.com"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value="(123) 456-7890"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </SettingItem>

              <SettingItem
                icon={<Building size={20} />}
                title="Company Information"
                description="Update your company details"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value="Acme Corporation"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value="123 Business Ave."
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </SettingItem>
            </div>
          </Card>

          <Card title="System Configuration">
            <div className="divide-y">
              <SettingItem
                icon={<Globe size={20} />}
                title="Language & Region"
                description="Set your language and regional preferences"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Language
                    </label>
                    <select className="w-full px-3 py-2 border rounded-lg">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select className="w-full px-3 py-2 border rounded-lg">
                      <option>UTC-8 (Pacific Time)</option>
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (Central European Time)</option>
                    </select>
                  </div>
                </div>
              </SettingItem>

              <SettingItem
                icon={<Bell size={20} />}
                title="Notifications"
                description="Manage your notification preferences"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3c73b6]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Desktop notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3c73b6]"></div>
                    </label>
                  </div>
                </div>
              </SettingItem>

              <SettingItem
                icon={<Shield size={20} />}
                title="Security Settings"
                description="Manage your security preferences"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Two-factor authentication</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3c73b6]"></div>
                    </label>
                  </div>
                  <button className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Change Password
                  </button>
                </div>
              </SettingItem>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
