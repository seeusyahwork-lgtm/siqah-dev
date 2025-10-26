// client/src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";



// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Paket from "./pages/Paket"; 
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Tentang" element={<About />} />
          <Route path="/Layanan" element={<Services />} />
          <Route path="/Paket" element={<Paket />} />
          <Route path="/Kontak" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
