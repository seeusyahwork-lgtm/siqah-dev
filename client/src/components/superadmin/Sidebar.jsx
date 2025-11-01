import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Database,
  ClipboardList,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/superadmin" },
  { name: "Data Master", icon: Database, path: "/superadmin/data-master" },
  { name: "Manajemen User", icon: Users, path: "/superadmin/users" },
  { name: "Monitoring", icon: ClipboardList, path: "/superadmin/monitoring" },
  { name: "Laporan", icon: BarChart3, path: "/superadmin/laporan" },
  { name: "Pengaturan", icon: Settings, path: "/superadmin/pengaturan" },
];

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Overlay untuk mobile */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full bg-white border-r border-gray-200 shadow-sm
        flex flex-col w-64 transform transition-transform duration-300 lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-lg font-bold text-primary">Siqah Superadmin</h1>
          <button
            className="lg:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer kecil di sidebar */}
        <div className="p-4 border-t text-xs text-gray-500">
          © {new Date().getFullYear()} Siqah Aqiqah
        </div>
      </aside>

      {/* Tombol buka sidebar di layar kecil */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md border"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>
    </>
  );
}
