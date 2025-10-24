// client/src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";



// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Paket from "./pages/Paket"; 

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Paket" element={<Paket />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
