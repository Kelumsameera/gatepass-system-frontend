import React, { useState } from "react";
import {
  Users,
  Box,
  AlertCircle,
  FileText,
  History,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

function AdminPage() {
  const [activePage, setActivePage] = useState("dashboard");

  const handleLogout = () => {
    console.log("Logging out...");
    alert("Logout functionality would go here");
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Box },
    { id: "approvals", label: "Approvals", icon: AlertCircle },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "logs", label: "Logs", icon: History },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">
                  Total Users
                </h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">1,234</p>
                <p className="text-green-600 text-sm mt-2">
                  ↑ 12% from last month
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">
                  Pending Approvals
                </h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">45</p>
                <p className="text-orange-600 text-sm mt-2">
                  Requires attention
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">Reports</h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">23</p>
                <p className="text-blue-600 text-sm mt-2">5 new today</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-gray-500 text-sm font-medium">
                  Active Sessions
                </h3>
                <p className="text-3xl font-bold text-gray-800 mt-2">789</p>
                <p className="text-green-600 text-sm mt-2">
                  ↑ 8% from yesterday
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-700">New user registration</span>
                  <span className="text-gray-500 text-sm">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-700">Report submitted</span>
                  <span className="text-gray-500 text-sm">15 minutes ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700">Approval completed</span>
                  <span className="text-gray-500 text-sm">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "users":
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Users Management
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="px-4 py-2 border border-gray-300 rounded-lg w-64"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Add User
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Role</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-3 px-4">John Doe</td>
                    <td className="py-3 px-4">john@example.com</td>
                    <td className="py-3 px-4">Admin</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Jane Smith</td>
                    <td className="py-3 px-4">jane@example.com</td>
                    <td className="py-3 px-4">User</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "approvals":
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Pending Approvals
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">45 items pending approval</p>
              <div className="mt-4 space-y-3">
                <div className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">
                      User Registration - Sarah Johnson
                    </h3>
                    <p className="text-sm text-gray-600">
                      Submitted 2 hours ago
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                      Approve
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "reports":
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Reports</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">View and manage system reports</p>
            </div>
          </div>
        );
      case "logs":
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              System Logs
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-600">
                  [2025-10-19 10:45:23] User login successful -
                  admin@example.com
                </div>
                <div className="text-gray-600">
                  [2025-10-19 10:43:15] New user created - user@example.com
                </div>
                <div className="text-gray-600">
                  [2025-10-19 10:40:02] Report generated - monthly_stats.pdf
                </div>
              </div>
            </div>
          </div>
        );
      case "settings":
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Settings</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    defaultValue="Admin Panel"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Notifications
                  </label>
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-gray-600">
                    Enable email notifications
                  </span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <h1>Dashboard</h1>;
    }
  };

  return (
    <div className="w-full h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-[250px] bg-gray-900 h-full flex flex-col shadow-xl">
        <div className="w-full h-[100px] flex items-center text-white pl-4 border-b border-gray-700">
          <div className="h-[60px] w-[60px] bg-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold">
            A
          </div>
          <h1 className="text-2xl font-semibold p-2">Admin</h1>
        </div>

        <nav className="flex-1 text-gray-300 text-lg flex flex-col p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center h-[45px] gap-3 px-4 rounded-lg transition-all duration-200 text-left ${
                  activePage === item.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon className="text-xl" size={20} /> {item.label}
              </button>
            );
          })}
        </nav>

        {/* User Info Section at Bottom */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 text-gray-300 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">Admin User</span>
              <span className="text-xs text-gray-400">admin@example.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full bg-gray-50 overflow-hidden relative">
        {/* Top Header */}
        <div className="sticky top-0 z-20 w-full h-[100px] flex items-center justify-between bg-white px-6 shadow-md border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center px-8 py-2">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 h-[calc(100%-100px)] overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
