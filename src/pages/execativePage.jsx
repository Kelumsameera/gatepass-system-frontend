import { useState } from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard, LuRefreshCw } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { User, UserCircle } from "lucide-react";
import { FcApproval, FcRefresh } from "react-icons/fc";
import { AiOutlineFileProtect } from "react-icons/ai";

export default function ExecutivePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full flex flex-col h-screen bg-primary text-accent">
      {/* 🔹 Top Navbar */}
      <div className="flex justify-between items-center h-[70px] bg-accent text-primary px-6 shadow-md">
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://flexicare.com/wp-content/uploads/Flexicare-Emblem-White.svg"
            alt="Logo"
            className="h-[40px]"
          />
          <h1 className="text-xl font-semibold">Flexi Pass</h1>
          <h2 className="text-2xl font-bold ml-6">Welcome, Executive 👋</h2>
        </div>
      </div>

      {/* 🔹 Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`bg-accent text-primary text-xl w-[240px] flex flex-col p-4 space-y-2 transition-all duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex flex-col gap-2">
            <Link
              to="/executive/dashboard"
              className="flex items-center gap-2 hover:bg-primary hover:text-accent rounded-lg px-3 py-2 transition"
            >
              <LuLayoutDashboard className="text-2xl text-white" />
              Dashboard
            </Link>

            <Link
              to="/executive/requests"
              className="flex items-center gap-2 hover:bg-primary hover:text-accent rounded-lg px-3 py-2 transition"
            >
              <MdAddCircleOutline className="text-2xl text-green" />
              Requests
            </Link>

            <Link
              to="/executive/profile"
              className="flex items-center gap-2 hover:bg-primary hover:text-accent rounded-lg px-3 py-2 transition"
            >
              <UserCircle className="text-2xl text-blue-500" />
              Profile
            </Link>

            <Link
              to="/executive/pending"
              className="flex items-center gap-2 hover:bg-primary hover:text-accent rounded-lg px-3 py-2 transition"
            >
              {/* Fc icons keep their original color automatically */}
              <LuRefreshCw className="text-2xl text-amber-300" />
              Pending
            </Link>

            <Link
              to="/executive/reports"
              className="flex items-center gap-2 hover:bg-primary hover:text-accent rounded-lg px-3 py-2 transition"
            >
              <AiOutlineFileProtect className="text-2xl text-emerald-500" />
              Approval
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 hover:bg-primary hover:text-accent rounded-lg px-3 py-2 transition"
            >
              <User className="text-2xl text-white" />
              Logout
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 bg-primary overflow-y-auto p-6">
          <p className="mt-4 text-accent/80">
            Here you can manage approvals, view reports, and handle executive
            tasks.
          </p>
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
              <div className="space-y-3 text-xl">
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
        </main>
      </div>
    </div>
  );
}
