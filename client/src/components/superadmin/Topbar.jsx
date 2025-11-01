import { Bell, LogOut } from "lucide-react";
import { useState } from "react";
import NotificationDropdown from "./NotificationDropdown";

export default function Topbar() {
  const [openNotif, setOpenNotif] = useState(false);

  // Data superadmin dummy (nanti dihubungkan ke API / tb_user)
  const superadmin = {
    name: "Superadmin Siqah",
    email: "superadmin@siqah.id",
    avatar: "https://ui-avatars.com/api/?name=Superadmin+Siqah&background=0D8ABC&color=fff",
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm sticky top-0 z-20">
      {/* Left Section - Judul Halaman */}
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold text-gray-800">Panel Superadmin</h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Notifikasi */}
        <div className="relative">
          <button
            onClick={() => setOpenNotif((prev) => !prev)}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Bell size={20} />
            {/* Badge */}
            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5">
              3
            </span>
          </button>
          {openNotif && <NotificationDropdown onClose={() => setOpenNotif(false)} />}
        </div>

        {/* Profil */}
        <div className="flex items-center gap-3">
          <img
            src={superadmin.avatar}
            alt="avatar"
            className="w-9 h-9 rounded-full border object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium">{superadmin.name}</p>
            <p className="text-xs text-gray-500">{superadmin.email}</p>
          </div>
        </div>

        {/* Logout */}
        <button
          className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition"
          onClick={() => console.log("Logout clicked")}
        >
          <LogOut size={18} />
          <span className="hidden sm:inline text-sm">Logout</span>
        </button>
      </div>
    </header>
  );
}
