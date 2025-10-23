import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLink =
    "block px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-200";

  return (
    <div className="flex flex-col h-screen bg-primary text-accent">
     
      

      {/* ===== DASHBOARD HEADER ===== */}
      <header className="flex justify-between items-center h-[70px] bg-accent text-primary px-6 shadow-md">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://flexicare.com/wp-content/uploads/Flexicare-Emblem-White.svg"
              alt="Logo"
              className="h-[40px]"
            />
            <h1 className="text-xl font-semibold">Flexi Pass</h1>
          </div>
        </div>

        {/* Right side (Profile or Notifications) */}
        <div className="flex items-center gap-4">
          <button className="hover:text-gold transition-colors">🔔</button>
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </header>

      {/* ===== BODY SECTION ===== */}
      <div className="flex flex-1 overflow-hidden">
        {/* ===== SIDEBAR ===== */}
        <aside
          className={`bg-accent text-primary w-[240px] md:w-[260px] flex-shrink-0 flex flex-col py-6 transition-transform duration-300 fixed md:static inset-y-0 left-0 z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-3 text-xl">
            <Link to="/" className={navLink}><LuLayoutDashboard />
              🏠 Dashborad
            </Link>
            <Link to="/register" className={navLink}>
              📝 Register
            </Link>
            <Link to="/login" className={navLink}>
              🔐 Login
            </Link>
            <Link to="/request-pass" className={navLink}>
              🎫 Request Pass
            </Link>
            <Link to="/approvals" className={navLink}>
              ✅ Approvals
            </Link>
            <Link to="/reports" className={navLink}>
              📊 Reports
            </Link>
            <Link to="/pending" className={navLink}>
              ⏳ Pending
            </Link>
            <Link to="/profile" className={navLink}>
              👤 Profile
            </Link>
            <Link to="/notifications" className={navLink}>
              🔔 Notifications
            </Link>
          </div>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="flex-1 p-6 overflow-y-auto md:ml-0">
          <Outlet />
          <Routes>
            <Route path="/" element={<h1>Dashborad</h1>} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/request-pass" element={<h1>Request Pass</h1>} />
            <Route path="/approvals" element={<h1>Approvals</h1>} />
            <Route path="/reports" element={<h1>Reports</h1>} />
            <Route path="/pending" element={<h1>Pending</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/notifications" element={<h1>Notifications</h1>} />
          </Routes>
        </main>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Layout;
