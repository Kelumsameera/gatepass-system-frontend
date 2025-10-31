// ExecutivePage.jsx
import { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { LuLayoutDashboard, LuRefreshCw, LuLogOut } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { UserCircle } from "lucide-react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { HiViewList } from "react-icons/hi";

// ✅ Reusable Section Component (no left padding)
const Section = ({ title, children }) => (
  <section className="w-full">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">{title}</h1>
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      {children}
    </div>
  </section>
);

// ✅ Dashboard Section (aligned left)
const Dashboard = () => (
  <Section title="Manage approvals, view reports, and handle executive tasks.">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eveniet odio amet excepturi repudiandae? Dolores, laborum provident. Beatae sit a deserunt ea repellendus fugit voluptatum, harum ab sequi earum accusamus!</p>
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Recent Activity
      </h2>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        {[
          { text: "New user registration", time: "2 min ago" },
          { text: "Report submitted", time: "15 min ago" },
          { text: "Approval completed", time: "1 hour ago" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-2 border-b last:border-0"
          >
            <span className="text-gray-700">{item.text}</span>
            <span className="text-gray-500 text-sm">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const Requests = () => (
  <Section title="Requests">
    <p>List of all incoming requests awaiting review...</p>
  </Section>
);

const Profile = () => (
  <Section title="Profile">
    <p>Executive profile settings and information.</p>
  </Section>
);

const Pending = () => (
  <Section title="Pending">
    <p>Items pending approval or action.</p>
  </Section>
);

const Reports = () => (
  <Section title="Approval">
    <p>View and approve reports.</p>
  </Section>
);

export default function ExecutivePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname.startsWith(path)
      ? "bg-primary text-accent"
      : "hover:bg-primary hover:text-accent";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-accent overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between h-[70px] bg-accent text-primary px-4 md:px-6 shadow-md z-50">
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsSidebarOpen((v) => !v)}
        >
          <HiViewList />
        </button>

        <div className="flex items-center gap-3">
          <img
            src="https://flexicare.com/wp-content/uploads/Flexicare-Emblem-White.svg"
            alt="Flexi Pass Logo"
            className="h-10"
          />
          <h1 className="text-xl font-semibold hidden sm:block">Flexi Pass</h1>
          <h2 className="text-lg font-bold ml-4">Welcome, Executive</h2>
        </div>

        <button
          aria-label="Logout"
          className="hidden md:block hover:text-red-500 transition"
          onClick={handleLogout}
        >
          <LuLogOut />
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-accent text-primary flex flex-col p-4 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 text-lg">
            <Link
              to="/executive/dashboard"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isActive(
                "/executive/dashboard"
              )}`}
            >
              <LuLayoutDashboard /> Dashboard
            </Link>

            <Link
              to="/executive/requests"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isActive(
                "/executive/requests"
              )}`}
            >
              <MdAddCircleOutline className="text-green-500" /> Requests
            </Link>

            <Link
              to="/executive/profile"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isActive(
                "/executive/profile"
              )}`}
            >
              <UserCircle className="text-blue-500" /> Profile
            </Link>

            <Link
              to="/executive/pending"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isActive(
                "/executive/pending"
              )}`}
            >
              <LuRefreshCw className="text-amber-400" /> Pending
            </Link>

            <Link
              to="/executive/reports"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${isActive(
                "/executive/reports"
              )}`}
            >
              <AiOutlineFileProtect className="text-emerald-500" /> Approval
            </Link>

            <button
              onClick={handleLogout}
              className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary hover:text-accent transition"
            >
              <LuLogOut /> Logout
            </button>
          </nav>
        </aside>

        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* ✅ Main content (no left padding, flush alignment) */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6 md:ml-0">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/executive/dashboard" replace />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
