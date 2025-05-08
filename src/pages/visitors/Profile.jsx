import React from "react";
import Card from "../../components/common/Card";
import Avatar from "../../components/common/Avatar";
import {
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  Save,
} from "lucide-react";

const ProfileField = ({ icon, label, value, editable = true }) => (
  <div className="mb-4">
    <label className="flex items-center text-sm text-gray-700 mb-1">
      {icon && <span className="mr-2 text-gray-500">{icon}</span>}
      {label}
    </label>
    {editable ? (
      <input
        type="text"
        defaultValue={value}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3c73b6]/50"
      />
    ) : (
      <div className="px-3 py-2 border rounded-lg bg-gray-50">{value}</div>
    )}
  </div>
);

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <div className="flex flex-col items-center text-center">
              <Avatar name="Alex Johnson" size="lg" />
              <h2 className="mt-4 text-xl font-semibold">Alex Johnson</h2>
              <p className="text-sm text-gray-500">Visitor ID: VIS-3492</p>

              <div className="mt-6 w-full">
                <button className="w-full px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
                  Update Profile Photo
                </button>
              </div>

              <div className="mt-6 pt-6 border-t w-full">
                <p className="text-sm text-gray-500">Member since March 2025</p>
              </div>
            </div>
          </Card>

          <Card className="mt-6" title="Quick Info">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">alex.johnson@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone size={18} className="mr-3 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Building size={18} className="mr-3 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium">Johnson & Associates</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card
            title="Personal Information"
            action={
              <button className="flex items-center px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <ProfileField
                icon={<User size={18} />}
                label="First Name"
                value="Alex"
              />
              <ProfileField
                icon={<User size={18} />}
                label="Last Name"
                value="Johnson"
              />
              <ProfileField
                icon={<Mail size={18} />}
                label="Email Address"
                value="alex.johnson@example.com"
              />
              <ProfileField
                icon={<Phone size={18} />}
                label="Phone Number"
                value="(555) 123-4567"
              />
              <ProfileField
                icon={<Building size={18} />}
                label="Company"
                value="Johnson & Associates"
              />
              <ProfileField
                icon={<MapPin size={18} />}
                label="Position"
                value="Marketing Director"
              />
            </div>
          </Card>

          <Card title="Visit Preferences">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 text-gray-500" />
                  <span>Email notifications for visits</span>
                </div>

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
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-gray-500" />
                  <span>Calendar invites for scheduled visits</span>
                </div>

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
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 text-gray-500" />
                  <span>SMS reminders</span>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3c73b6]"></div>
                </label>
              </div>
            </div>
          </Card>

          <Card title="Password & Security">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Current Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    New Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Confirm New Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <button className="px-4 py-2 bg-[#3c73b6] text-white rounded-lg hover:bg-[#3c73b6]/90 transition-colors">
                Update Password
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
