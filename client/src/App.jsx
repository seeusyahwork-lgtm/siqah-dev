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

//Data Master entitas
import Data from "./pages/data-master/DashboardData"; //import
import DataHewan from "./pages/data-master/kandang/DataHewan";
import DataKandang from "./pages/data-master/kandang/DataKandang";
import DataDapur from "./pages/data-master/dapur/DataDapur";
import DataMenu from "./pages/data-master/dapur/DataMenu";
import DataPaket from "./pages/data-master/dapur/DataPaket";

//Data Master User
import DataUser from "./pages/data-master/DashboardUser"; 
import DataPetugasKandang from "./pages/data-master/petugas/kandang/DataPetugasKandang";
import DataPetugasDapur from "./pages/data-master/petugas/dapur/DataPetugasDapur";
import DataPetugasKurir from "./pages/data-master/petugas/kurir/DataPetugasKurir";
import DataKonsumen from "./pages/data-master/konsumen/DataKonsumen";

//Data Master Pembayaran
import DataPembayaranDashboard from "./pages/data-master/DashboardPembayaran";



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

        {/* 🔹 ROUTE UNTUK SUPERADMIN (LAYOUT KHUSUS SUPER ADMIN) */}
        <Route path="/superadmin" element={<SuperadminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="data-master" element={<DataMaster />} />
          <Route path="users" element={<Users />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="pengaturan" element={<Pengaturan />} /> 
          <Route path="notifikasi" element={<Notifikasi />} />
        </Route>

        {/* 🔹 ROUTE UNTUK ADMIN (LAYOUT KHUSUS ADMIN) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="pesanan" element={<PesananAdmin />} />
          <Route path="pesanan/:id" element={<DetailPesananAdmin />} />
          <Route path="pembayaran" element={<PembayaranAdmin />} />

          <Route path="data" element={<Data />} />
          <Route path="data-master/hewan" element={<DataHewan />} />
          <Route path="data-master/kandang" element={<DataKandang />} />
          <Route path="data-master/dapur" element={<DataDapur />} />
          <Route path="data-master/menu" element={<DataMenu />} />
          <Route path="data-master/paket" element={<DataPaket />} />


          <Route path="datauser" element={<DataUser />} />
          <Route path="data-master/petugas/kandang" element={<DataPetugasKandang />} />
          <Route path="data-master/petugas/dapur" element={<DataPetugasDapur />} />
          <Route path="data-master/petugas/kurir" element={<DataPetugasKurir />} />
          <Route path="data-master/konsumen" element={<DataKonsumen />} />


          <Route path="dashboardpembayaran" element={<DataPembayaranDashboard />} />
          {/* <Route path="pembayaran/pengajuan" element={<Pengajuan />} />
          <Route path="pembayaran/validasi" element={<Validasi />} />
          <Route path="pembayaran/invoice" element={<Invoice />} />
          <Route path="pembayaran/data" element={<DataPembayaran />} />
          <Route path="pembayaran/pelunasan" element={<Pelunasan />} /> */}


        
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
