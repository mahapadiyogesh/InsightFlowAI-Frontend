import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;