// import React, { useState } from "react";
// import {
//   Home,
//   FileText,
//   CheckSquare,
//   Shield,
//   Users,
//   Settings,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   Bell,
//   User,
//   BarChart3,
//   Clock,
//   Search,
//   Menu,
//   X,
//   Package,
//   MapPin,
//   UserPlus,
//   QrCode,
//   Download,
//   HelpCircle,
//   Building,
// } from "lucide-react";

// function Sidebar() {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("dashboard");

//   // Mock current user (change based on logged-in user)
//   const currentUser = {
//     name: "Jane Smith",
//     employeeId: "MGR001",
//     role: "manager", // Can be: employee, executive, manager, security, hr_admin
//     department: "Operations",
//     profileImage: null,
//   };

//   // Role-based menu configuration
//   const getMenuItems = (role) => {
//     const commonItems = [
//       { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
//     ];

//     const roleMenus = {
//       employee: [
//         ...commonItems,
//         {
//           id: "my-passes",
//           label: "My Passes",
//           icon: FileText,
//           path: "/my-passes",
//         },
//         {
//           id: "request-pass",
//           label: "Request Pass",
//           icon: UserPlus,
//           path: "/request-pass",
//         },
//         { id: "qr-codes", label: "QR Codes", icon: QrCode, path: "/qr-codes" },
//         { id: "history", label: "History", icon: Clock, path: "/history" },
//       ],
//       executive: [
//         ...commonItems,
//         {
//           id: "pending-approvals",
//           label: "Pending Approvals",
//           icon: Clock,
//           path: "/approvals",
//           badge: 5,
//         },
//         {
//           id: "approved-passes",
//           label: "Approved Passes",
//           icon: CheckSquare,
//           path: "/approved",
//         },
//         {
//           id: "team-requests",
//           label: "Team Requests",
//           icon: Users,
//           path: "/team-requests",
//         },
//         { id: "reports", label: "Reports", icon: BarChart3, path: "/reports" },
//       ],
//       manager: [
//         ...commonItems,
//         {
//           id: "pending-approvals",
//           label: "Pending Approvals",
//           icon: Clock,
//           path: "/approvals",
//           badge: 8,
//         },
//         {
//           id: "approved-passes",
//           label: "Approved Passes",
//           icon: CheckSquare,
//           path: "/approved",
//         },
//         {
//           id: "all-requests",
//           label: "All Requests",
//           icon: FileText,
//           path: "/all-requests",
//         },
//         {
//           id: "team-management",
//           label: "Team Management",
//           icon: Users,
//           path: "/team",
//         },
//         {
//           id: "analytics",
//           label: "Analytics",
//           icon: BarChart3,
//           path: "/analytics",
//         },
//         { id: "reports", label: "Reports", icon: Download, path: "/reports" },
//       ],
//       security: [
//         ...commonItems,
//         { id: "scan-qr", label: "Scan QR Code", icon: QrCode, path: "/scan" },
//         {
//           id: "verify-passes",
//           label: "Verify Passes",
//           icon: Shield,
//           path: "/verify",
//         },
//         {
//           id: "active-passes",
//           label: "Active Passes",
//           icon: FileText,
//           path: "/active-passes",
//         },
//         { id: "exit-log", label: "Exit Log", icon: MapPin, path: "/exit-log" },
//         {
//           id: "equipment-log",
//           label: "Equipment Log",
//           icon: Package,
//           path: "/equipment-log",
//         },
//         {
//           id: "visitor-log",
//           label: "Visitor Log",
//           icon: Users,
//           path: "/visitor-log",
//         },
//       ],
//       hr_admin: [
//         ...commonItems,
//         {
//           id: "user-management",
//           label: "User Management",
//           icon: Users,
//           path: "/users",
//         },
//         {
//           id: "all-passes",
//           label: "All Passes",
//           icon: FileText,
//           path: "/all-passes",
//         },
//         {
//           id: "departments",
//           label: "Departments",
//           icon: Building,
//           path: "/departments",
//         },
//         {
//           id: "analytics",
//           label: "Analytics",
//           icon: BarChart3,
//           path: "/analytics",
//         },
//         { id: "reports", label: "Reports", icon: Download, path: "/reports" },
//         {
//           id: "system-settings",
//           label: "System Settings",
//           icon: Settings,
//           path: "/settings",
//         },
//       ],
//     };

//     return roleMenus[role] || commonItems;
//   };

//   const menuItems = getMenuItems(currentUser.role);

//   const bottomMenuItems = [
//     { id: "help", label: "Help & Support", icon: HelpCircle, path: "/help" },
//     { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
//     { id: "logout", label: "Logout", icon: LogOut, path: "/logout" },
//   ];

//   const handleMenuClick = (itemId) => {
//     setActiveItem(itemId);
//     setIsMobileOpen(false);
//     // Add navigation logic here
//     console.log(`Navigate to: ${itemId}`);
//   };

//   const getRoleBadge = (role) => {
//     const badges = {
//       employee: { label: "Employee", color: "bg-blue-500" },
//       executive: { label: "Executive", color: "bg-purple-500" },
//       manager: { label: "Manager", color: "bg-green-500" },
//       security: { label: "Security", color: "bg-orange-500" },
//       hr_admin: { label: "HR Admin", color: "bg-red-500" },
//     };
//     return badges[role] || badges.employee;
//   };

//   const roleBadge = getRoleBadge(currentUser.role);

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsMobileOpen(!isMobileOpen)}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
//       >
//         {isMobileOpen ? (
//           <X className="w-6 h-6" />
//         ) : (
//           <Menu className="w-6 h-6" />
//         )}
//       </button>

//       {/* Mobile Overlay */}
//       {isMobileOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
//           onClick={() => setIsMobileOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
//           isCollapsed ? "w-20" : "w-64"
//         } ${
//           isMobileOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 flex flex-col`}
//       >
//         {/* Header */}
//         <div className="p-4 border-b border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between">
//             {!isCollapsed && (
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//                   <Shield className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <h1 className="text-lg font-bold text-gray-900 dark:text-white">
//                     Gate Pass
//                   </h1>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     Management
//                   </p>
//                 </div>
//               </div>
//             )}
//             <button
//               onClick={() => setIsCollapsed(!isCollapsed)}
//               className="hidden lg:block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//             >
//               {isCollapsed ? (
//                 <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
//               ) : (
//                 <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* User Profile */}
//         <div className="p-4 border-b border-gray-200 dark:border-gray-700">
//           <div
//             className={`flex items-center ${
//               isCollapsed ? "justify-center" : "space-x-3"
//             }`}
//           >
//             <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
//               {currentUser.profileImage ? (
//                 <img
//                   src={currentUser.profileImage}
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//               ) : (
//                 currentUser.name
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")
//               )}
//             </div>
//             {!isCollapsed && (
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
//                   {currentUser.name}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
//                   {currentUser.employeeId}
//                 </p>
//                 <span
//                   className={`inline-block px-2 py-0.5 mt-1 text-xs font-medium text-white rounded-full ${roleBadge.color}`}
//                 >
//                   {roleBadge.label}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="flex-1 overflow-y-auto py-4 px-2">
//           <div className="space-y-1">
//             {menuItems.map((item) => {
//               const IconComponent = item.icon;
//               const isActive = activeItem === item.id;

//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => handleMenuClick(item.id)}
//                   className={`w-full flex items-center ${
//                     isCollapsed ? "justify-center" : "justify-between"
//                   } px-3 py-3 rounded-lg transition-all duration-200 group ${
//                     isActive
//                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
//                       : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <IconComponent
//                       className={`w-5 h-5 ${
//                         isActive
//                           ? "text-blue-600 dark:text-blue-400"
//                           : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
//                       }`}
//                     />
//                     {!isCollapsed && (
//                       <span className="text-sm font-medium">{item.label}</span>
//                     )}
//                   </div>
//                   {!isCollapsed && item.badge && (
//                     <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
//                       {item.badge}
//                     </span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Bottom Menu */}
//         <div className="border-t border-gray-200 dark:border-gray-700 py-4 px-2">
//           <div className="space-y-1">
//             {bottomMenuItems.map((item) => {
//               const IconComponent = item.icon;
//               const isActive = activeItem === item.id;

//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => handleMenuClick(item.id)}
//                   className={`w-full flex items-center ${
//                     isCollapsed ? "justify-center" : "space-x-3"
//                   } px-3 py-3 rounded-lg transition-all duration-200 group ${
//                     isActive
//                       ? "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
//                       : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//                   } ${
//                     item.id === "logout"
//                       ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
//                       : ""
//                   }`}
//                 >
//                   <IconComponent
//                     className={`w-5 h-5 ${
//                       item.id === "logout"
//                         ? "text-red-600"
//                         : isActive
//                         ? "text-blue-600 dark:text-blue-400"
//                         : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
//                     }`}
//                   />
//                   {!isCollapsed && (
//                     <span className="text-sm font-medium">{item.label}</span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Collapse Button Tooltip */}
//         {isCollapsed && (
//           <div className="absolute left-full top-4 ml-2 hidden lg:block pointer-events-none">
//             <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg">
//               Click to expand
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Main Content Spacer */}
//       <div
//         className={`hidden lg:block transition-all duration-300 ${
//           isCollapsed ? "w-20" : "w-64"
//         }`}
//       />
//     </>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import {
  Home,
  FileText,
  CheckSquare,
  Shield,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  User,
  BarChart3,
  Clock,
  Search,
  Menu,
  X,
  Package,
  MapPin,
  UserPlus,
  QrCode,
  Download,
  HelpCircle,
  Building,
} from "lucide-react";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("request-pass"); // Default to request-pass for EmployeeDashboard

  // Mock current user (customize for employee)
  const currentUser = {
    name: "John Doe",
    employeeId: "EMP001",
    role: "employee", // Set to employee for this dashboard
    department: "Engineering",
    profileImage: null,
  };

  // Role-based menu configuration (unchanged from example)
  const getMenuItems = (role) => {
    const commonItems = [
      { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    ];

    const roleMenus = {
      employee: [
        ...commonItems,
        {
          id: "my-passes",
          label: "My Passes",
          icon: FileText,
          path: "/my-passes",
        },
        {
          id: "request-pass",
          label: "Request Pass",
          icon: UserPlus,
          path: "/request-pass",
        },
        { id: "qr-codes", label: "QR Codes", icon: QrCode, path: "/qr-codes" },
        { id: "history", label: "History", icon: Clock, path: "/history" },
      ],
      executive: [
        ...commonItems,
        {
          id: "pending-approvals",
          label: "Pending Approvals",
          icon: Clock,
          path: "/approvals",
          badge: 5,
        },
        {
          id: "approved-passes",
          label: "Approved Passes",
          icon: CheckSquare,
          path: "/approved",
        },
        {
          id: "team-requests",
          label: "Team Requests",
          icon: Users,
          path: "/team-requests",
        },
        { id: "reports", label: "Reports", icon: BarChart3, path: "/reports" },
      ],
      manager: [
        ...commonItems,
        {
          id: "pending-approvals",
          label: "Pending Approvals",
          icon: Clock,
          path: "/approvals",
          badge: 8,
        },
        {
          id: "approved-passes",
          label: "Approved Passes",
          icon: CheckSquare,
          path: "/approved",
        },
        {
          id: "all-requests",
          label: "All Requests",
          icon: FileText,
          path: "/all-requests",
        },
        {
          id: "team-management",
          label: "Team Management",
          icon: Users,
          path: "/team",
        },
        {
          id: "analytics",
          label: "Analytics",
          icon: BarChart3,
          path: "/analytics",
        },
        { id: "reports", label: "Reports", icon: Download, path: "/reports" },
      ],
      security: [
        ...commonItems,
        { id: "scan-qr", label: "Scan QR Code", icon: QrCode, path: "/scan" },
        {
          id: "verify-passes",
          label: "Verify Passes",
          icon: Shield,
          path: "/verify",
        },
        {
          id: "active-passes",
          label: "Active Passes",
          icon: FileText,
          path: "/active-passes",
        },
        { id: "exit-log", label: "Exit Log", icon: MapPin, path: "/exit-log" },
        {
          id: "equipment-log",
          label: "Equipment Log",
          icon: Package,
          path: "/equipment-log",
        },
        {
          id: "visitor-log",
          label: "Visitor Log",
          icon: Users,
          path: "/visitor-log",
        },
      ],
      hr_admin: [
        ...commonItems,
        {
          id: "user-management",
          label: "User Management",
          icon: Users,
          path: "/users",
        },
        {
          id: "all-passes",
          label: "All Passes",
          icon: FileText,
          path: "/all-passes",
        },
        {
          id: "departments",
          label: "Departments",
          icon: Building,
          path: "/departments",
        },
        {
          id: "analytics",
          label: "Analytics",
          icon: BarChart3,
          path: "/analytics",
        },
        { id: "reports", label: "Reports", icon: Download, path: "/reports" },
        {
          id: "system-settings",
          label: "System Settings",
          icon: Settings,
          path: "/settings",
        },
      ],
    };

    return roleMenus[role] || commonItems;
  };

  const menuItems = getMenuItems(currentUser.role);

  const bottomMenuItems = [
    { id: "help", label: "Help & Support", icon: HelpCircle, path: "/help" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
    { id: "logout", label: "Logout", icon: LogOut, path: "/logout" },
  ];

  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
    setIsMobileOpen(false);
    // Add navigation logic here (e.g., use React Router)
    console.log(`Navigate to: ${itemId}`);
  };

  const getRoleBadge = (role) => {
    const badges = {
      employee: { label: "Employee", color: "bg-blue-500" },
      executive: { label: "Executive", color: "bg-purple-500" },
      manager: { label: "Manager", color: "bg-green-500" },
      security: { label: "Security", color: "bg-orange-500" },
      hr_admin: { label: "HR Admin", color: "bg-red-500" },
    };
    return badges[role] || badges.employee;
  };

  const roleBadge = getRoleBadge(currentUser.role);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg"
      >
        {isMobileOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${
          isCollapsed ? "w-20" : "w-64"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                    Gate Pass
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Management
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isCollapsed ? (
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "space-x-3"
            }`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {currentUser.profileImage ? (
                <img
                  src={currentUser.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                currentUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              )}
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {currentUser.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {currentUser.employeeId}
                </p>
                <span
                  className={`inline-block px-2 py-0.5 mt-1 text-xs font-medium text-white rounded-full ${roleBadge.color}`}
                >
                  {roleBadge.label}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center ${
                    isCollapsed ? "justify-center" : "justify-between"
                  } px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                      }`}
                    />
                    {!isCollapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-4 px-2">
          <div className="space-y-1">
            {bottomMenuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center ${
                    isCollapsed ? "justify-center" : "space-x-3"
                  } px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } ${
                    item.id === "logout"
                      ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      : ""
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 ${
                      item.id === "logout"
                        ? "text-red-600"
                        : isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Collapse Button Tooltip */}
        {isCollapsed && (
          <div className="absolute left-full top-4 ml-2 hidden lg:block pointer-events-none">
            <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg">
              Click to expand
            </div>
          </div>
        )}
      </div>

      {/* Main Content Spacer */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      />
    </>
  );
}

export default Sidebar;
