import { Outlet } from "react-router-dom";
import Sidebar from "../components/superadmin/Sidebar";
import Topbar from "../components/superadmin/Topbar";
import Footer from "../components/superadmin/Footer";

export default function SuperadminLayout() {
  return (
    <div
      className="min-h-screen flex text-siqah-dark"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #fefbf7, #f9f6ef)",
      }}
    >
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-white/90 backdrop-blur-md border-r border-[#e7e1d8] shadow-md">
        <Sidebar />
      </aside>

      {/* Konten utama */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
          <Topbar />
        </header>

        {/* Isi Halaman */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white/70 text-center py-4 text-sm border-t border-[#e7e1d8]">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
