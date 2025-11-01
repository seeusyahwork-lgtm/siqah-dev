import { Bell, User } from "lucide-react";

const Topbar = ({ superadminName = "Superadmin" }) => {
  return (
    <header className="bg-white shadow-md flex justify-between items-center px-6 py-3 border-b border-emerald-100">
      {/* Title / Breadcrumb */}
      <h2 className="text-xl font-semibold text-emerald-700 tracking-wide">
        Dashboard Superadmin
      </h2>

      {/* Actions */}
      <div className="flex items-center gap-5">
        {/* Notifikasi */}
        <button className="relative text-emerald-700 hover:text-emerald-900 transition">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-emerald-200 flex items-center justify-center">
            <User className="text-emerald-700" size={20} />
          </div>
          <div className="text-sm">
            <p className="font-medium text-emerald-800">{superadminName}</p>
            <p className="text-emerald-500 text-xs">Superadmin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
