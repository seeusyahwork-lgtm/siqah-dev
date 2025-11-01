import { Outlet } from "react-router-dom";
import Navbar from "../components/pengunjung/Navbar";
import Footer from "../components/pengunjung/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar Utama */}
      <Navbar />

      {/* Konten Halaman */}
      <main className="flex-1">
        <Outlet /> {/* Halaman publik akan ditampilkan di sini */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
