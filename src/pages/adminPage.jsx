
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="w-full h-full max-h-fullbg-[red] flex bg-accent">
      <div className="w-[300px] h-full bg-accent ml-[20px]">
        <div className="w-f h-[100px] flex items-center text-2xl text-primary gap-[10px]">
          <img src="/logo.png" className="w-[40px]" alt="" />
          <h1>Admin Panel</h1>

        </div>
        <div className="w-full h-[400px] text-primary text-2xl flex flex-col gap-[10px] ">
        <Link to="/admin/dashboard"><h1>Dashboard</h1></Link>
        <Link to="/admin/users"><h1>Users</h1></Link>
        <Link to="/admin/approvals"><h1>Approvals</h1></Link>
        <Link to="/admin/reports"><h1>Reports</h1></Link>
        <Link to="/admin/logs"><h1>Logs</h1></Link>
        <Link to="/admin/settings"><h1>Settings</h1></Link>

        </div>

      </div>
      
      <div className="w-[calc(100%-300px)] h-[100%] overflow-y-scroll  border-[10px] border-accent rounded-2xl bg-primary ">
        <Routes path="/admin/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/users" element={<h1>Users </h1>} />
          <Route path="/approvals" element={<h1>Approvals </h1>} />
          <Route path="/reports" element={<h1>Reports </h1>} />
          <Route path="/logs" element={<h1>Logs </h1>} />
          <Route path="/settings" element={<h1>Settings </h1>} />
        </Routes>

      </div>
      
    </div>
  );
}