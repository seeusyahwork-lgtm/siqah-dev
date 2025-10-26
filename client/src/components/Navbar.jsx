import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Home", "Tentang", "Layanan", "Paket", "Kontak"];

  // Deteksi scroll untuk ubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setScrolled(true);
      else setScrolled(false);
    };
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
        {/* Kiri: Menu Desktop */}
        <ul className="hidden lg:flex flex-1 justify-start items-center gap-8 font-montserrat font-semibold text-[#45624B]">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#B9914D] transition-colors duration-300"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#B9914D] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Tengah: Logo */}
        <div className="flex-none flex flex-col items-center justify-center mx-4 cursor-pointer group transition-transform duration-300 hover:scale-105">
          <img
            src="https://res.cloudinary.com/dcida9qys/image/upload/v1761098052/Siqah-logo-HD_fpetwm.png"
            alt="Logo Siqah"
            className="w-20 md:w-24"
          />
        </div>

        {/* Kanan: Login & Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {/* Tombol Login */}
          <button
            type="button"
            className="flex items-center gap-2 bg-[#B9914D] hover:bg-[#a37f3e] text-white font-semibold font-montserrat px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("modal_login")?.showModal()}
          >
            <FiLogIn className="w-5 h-5" /> Masuk
          </button>

          {/* Hamburger Mobile */}
          <button
            className="lg:hidden p-2 rounded-md text-[#B9914D] hover:bg-[#B9914D]/10 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#B9914D]/20 p-6 flex flex-col gap-3 text-[#45624B] font-semibold font-montserrat"
        >
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#B9914D] transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Modal Login */}
      <dialog id="modal_login" className="modal">
        <div className="modal-box rounded-2xl bg-gradient-to-b from-white to-[#fefbf7] shadow-2xl p-8">
          <form method="dialog" className="flex justify-end">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>

          <h3 className="font-cormorant font-bold text-3xl text-center text-[#B9914D] mb-6">
            Login ke Siqah
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#45624B] mb-1 font-montserrat">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email"
                className="input input-bordered w-full border-[#B9914D]/40 focus:border-[#B9914D] focus:ring-[#B9914D] font-montserrat"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#45624B] mb-1 font-montserrat">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="input input-bordered w-full border-[#B9914D]/40 focus:border-[#B9914D] focus:ring-[#B9914D] font-montserrat"
                required
              />
            </div>

            <button
              type="button"
              className="w-full bg-[#B9914D] hover:bg-[#a37f3e] text-white font-semibold font-montserrat px-5 py-3 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
            >
              <FiLogIn className="inline-block mr-2" />
              Masuk
            </button>
          </form>

          <p className="text-center text-sm mt-5 text-[#45624B]/80 font-montserrat">
            Belum punya akun?{" "}
            <a href="#" className="text-[#B9914D] hover:underline">
              Daftar Sekarang
            </a>
          </p>
        </div>
      </dialog>
    </motion.nav>
  );
};

export default Navbar;
