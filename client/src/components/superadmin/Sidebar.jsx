// client/src/components/superadmin/Sidebar.jsx
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
        className={`fixed z-40 top-0 left-0 h-full w-64 transform transition-transform duration-300 lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}
        bg-white/90 backdrop-blur-md border-r border-[#e7e1d8] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#eee6da] bg-gradient-to-r from-[#fefbf7] to-[#f9f6ef]">
          <h1 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
            <span className="text-[#e2b97f] font-bold">Siqah</span> Admin
          </h1>
          <button
            className="lg:hidden p-2 rounded hover:bg-[#f9f6ef]"
            onClick={() => setOpen(false)}
          >
            <X size={20} className="text-[#3b3b3b]" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#e2b97f]/90 text-white shadow-sm"
                      : "text-[#3b3b3b] hover:bg-[#f9f6ef] hover:text-[#e2b97f]"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer kecil di sidebar */}
        <div className="p-4 border-t border-[#eee6da] text-xs text-[#7a7368] bg-white/60 text-center">
          © {new Date().getFullYear()} <span className="font-semibold">Siqah Aqiqah</span>
        </div>
      </aside>

      {/* Tombol buka sidebar di layar kecil */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-md p-2 rounded-md shadow-md border border-[#e7e1d8]"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} className="text-[#3b3b3b]" />
      </button>
    </>
  );
}
