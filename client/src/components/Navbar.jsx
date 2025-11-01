import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/Home" },
    { name: "Tentang", path: "/Tentang" },
    { name: "Layanan", path: "/Layanan" },
    { name: "Paket", path: "/Paket" },
    { name: "Kontak", path: "/Kontak" },
  ];

  // Ubah background saat scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-6 py-3 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-lg border-b border-[#B9914D]/20"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ========== KIRI: MENU DESKTOP ========== */}
        <ul className="hidden lg:flex flex-1 justify-start items-center gap-8 font-montserrat font-semibold text-[#45624B]">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={idx} className="relative group">
                <Link
                  to={item.path}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#B9914D]" : "hover:text-[#B9914D]"
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#B9914D] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* ========== TENGAH: LOGO ========== */}
        <div className="flex-none flex flex-col items-center justify-center mx-4 cursor-pointer group transition-transform duration-300 hover:scale-105">
          <Link to="/Home">
            <img
              src="https://res.cloudinary.com/dcida9qys/image/upload/v1761098052/Siqah-logo-HD_fpetwm.png"
              alt="Siqah Logo"
              className="w-14 h-14 object-contain"
            />
          </Link>
        </div>

        {/* ========== KANAN: LOGIN & MENU MOBILE ========== */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B9914D] text-white font-semibold hover:bg-[#A07E3F] transition-all duration-300">
            <FiLogIn className="text-lg" /> Login
          </button>

          {/* Tombol toggle mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center space-y-1"
          >
            <span
              className={`block h-0.5 w-6 bg-[#45624B] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#45624B] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-[#45624B] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* ========== MENU MOBILE ========== */}
      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden flex flex-col items-center gap-6 mt-4 pb-4 font-semibold text-[#45624B] bg-white/90 backdrop-blur-md rounded-xl shadow-md"
        >
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg ${
                    isActive ? "text-[#B9914D]" : "hover:text-[#B9914D]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#B9914D] text-white font-semibold hover:bg-[#A07E3F] transition-all duration-300">
            <FiLogIn className="text-lg" /> Login
          </button>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
