import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  BarChart3,
  Table2,
  FileText,
  Download,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Upload Data",
    path: "/upload",
    icon: <Upload size={20} />,
  },
  {
    title: "Charts",
    path: "/charts",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Data Table",
    path: "/table",
    icon: <Table2 size={20} />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FileText size={20} />,
  },
  {
    title: "Export",
    path: "/export",
    icon: <Download size={20} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">
          Vision Analytics
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Business Intelligence Suite
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
                isActive
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 p-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-cyan-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>

    </aside>
  );
}

export default Sidebar;