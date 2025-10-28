import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaListAlt,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";

export default function EmployeePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start closed on mobile

  return (
    <div className="w-full h-screen flex flex-col bg-primary">
      {/* Header */}
      <div className="w-full h-[100px] bg-accent flex items-center justify-between text-primary px-4 md:px-8 shadow-md relative z-50">
        {/* Hamburger - Mobile Only */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="bg-[url(/logo.svg)] bg-cover bg-center bg-no-repeat w-[50px] h-[50px]" />
          <h1 className="text-2xl font-semibold">Flexi Pass</h1>
        </div>

        {/* Logout */}
        <div className="cursor-pointer hover:text-red-500 transition-colors duration-200">
          <LuLogOut size={28} />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-row flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-[300px] bg-accent flex flex-col text-primary text-lg px-6 py-8 space-y-4 shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <Link
            to="/employee/dashboard"
            className="flex items-center gap-3 hover:bg-secondary/20 rounded-lg px-3 py-2 transition-all duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaHome className="text-blue-500" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/employee/request"
            className="flex items-center gap-3 hover:bg-secondary/20 rounded-lg px-3 py-2 transition-all duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaFileAlt className="text-green-500" />
            <span>Request</span>
          </Link>

          <Link
            to="/employee/approvals"
            className="flex items-center gap-3 hover:bg-secondary/20 rounded-lg px-3 py-2 transition-all duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaCheckCircle className="text-emerald-500" />
            <span>Approvals</span>
          </Link>

          <Link
            to="/employee/pending"
            className="flex items-center gap-3 hover:bg-secondary/20 rounded-lg px-3 py-2 transition-all duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaClock className="text-orange-500" />
            <span>Pending</span>
          </Link>

          <Link
            to="/employee/profile"
            className="flex items-center gap-3 hover:bg-secondary/20 rounded-lg px-3 py-2 transition-all duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaUser className="text-purple-500" />
            <span>Profile</span>
          </Link>

          <Link
            to="/employee/logs"
            className="flex items-center gap-3 hover:bg-secondary/20 rounded-lg px-3 py-2 transition-all duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaListAlt className="text-red-500" />
            <span>Logs</span>
          </Link>
        </div>

        {/* Overlay - Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-accent">Main Content</h2>
          <p className="text-gray-600">
            This is where your employee dashboard content will go.
          </p>
        </div>
      </div>
    </div>
  );
}