// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import SuperadminLayout from "./layouts/SuperadminLayout";
import AdminLayout from "./layouts/AdminLayout";

// admin Pages
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import PesananAdmin from "./pages/admin/PesananAdmin";
import DetailPesananAdmin from "./pages/admin/DetailPesananAdmin";
import PembayaranAdmin from "./pages/admin/PembayaranAdmin";
// import DataMasterAdmin from "./pages/admin/DataMasterAdmin";


// Superadmin Pages
import Dashboard from "./pages/superadmin/Dashboard";
 import DataMaster from "./pages/superadmin/DataMaster";
 import Users from "./pages/superadmin/Users";
 import Monitoring from "./pages/superadmin/Monitoring";
 import Laporan from "./pages/superadmin/Laporan";
 import Pengaturan from "./pages/superadmin/Pengaturan";
 import Notifikasi from "./pages/superadmin/Notifikasi";

// Public Pages
import Home from "./pages/pengunjung/Home";
import About from "./pages/pengunjung/About";
import Services from "./pages/pengunjung/Services";
import Paket from "./pages/pengunjung/Paket";
import Contact from "./pages/pengunjung/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔹 ROUTE UNTUK PENGUNJUNG (LAYOUT UMUM) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/paket" element={<Paket />} />
          <Route path="/kontak" element={<Contact />} />
        </Route>

        {/* 🔹 ROUTE UNTUK SUPERADMIN (LAYOUT KHUSUS) */}
        <Route path="/superadmin" element={<SuperadminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="data-master" element={<DataMaster />} />
          <Route path="users" element={<Users />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="pengaturan" element={<Pengaturan />} /> 
          <Route path="notifikasi" element={<Notifikasi />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="pesanan" element={<PesananAdmin />} />
          <Route path="pesanan/:id" element={<DetailPesananAdmin />} />
          <Route path="pembayaran" element={<PembayaranAdmin />} />
          {/* <Route path="datamasteradmin" element={<DataMasterAdmin />} /> */}
        
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
