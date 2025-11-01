// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import SuperadminLayout from "./layouts/SuperadminLayout";

// Superadmin Pages
import Dashboard from "./pages/superadmin/Dashboard";
// import DataMaster from "@/pages/superadmin/DataMaster";
// import Users from "@/pages/superadmin/Users";
// import Monitoring from "@/pages/superadmin/Monitoring";
// import Laporan from "@/pages/superadmin/Laporan";
// import Pengaturan from "@/pages/superadmin/Pengaturan";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Paket from "./pages/Paket";
import Contact from "./pages/Contact";

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
          {/* <Route path="data-master" element={<DataMaster />} />
          <Route path="users" element={<Users />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="pengaturan" element={<Pengaturan />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
