import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const [visible, setVisible] = useState(false);

  // Fade-in saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const footer = document.getElementById("footer");
      if (footer && scrollPos > footer.offsetTop + 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className={`relative text-white py-16 px-6 font-sans transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#45624B] to-[#2f4233] z-0"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B9914D]/20 rounded-full blur-3xl z-0"></div>

      {/* Konten utama */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Kolom kiri: Logo & Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <img
              src="https://res.cloudinary.com/dcida9qys/image/upload/v1761097925/Siqah-logo-HD_umjt9e.png"
              alt="Logo Siqah"
              className="w-20 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h3 className="font-cormorant text-2xl text-[#B9914D] font-bold mb-2">
            Siap Aqiqah
          </h3>
          <p className="text-sm text-gray-200/80 max-w-xs leading-relaxed">
            Transparansi, Amanah, dan Keberkahan dalam setiap ibadah aqiqah &
            qurban Anda.
          </p>
        </div>

        {/* Kolom tengah: Navigasi */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
          <h4 className="text-[#B9914D] font-cormorant text-xl font-semibold mb-3">
            Navigasi
          </h4>
          {["Home", "Tentang", "Layanan", "Paket", "Kontak"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="text-gray-200/90 hover:text-[#B9914D] transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Kolom kanan: Kontak & Sosial */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <h4 className="text-[#B9914D] font-cormorant text-xl font-semibold mb-2">
            Hubungi Kami
          </h4>
          <p className="text-sm">📞 +62 812-3456-789</p>
          <p className="text-sm">✉ info@siqah.com</p>

          {/* Ikon Sosial */}
          <div className="flex justify-center md:justify-end gap-4 mt-3 text-2xl">
            <a
              href="https://instagram.com/siqah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B9914D] transition-transform duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B9914D] transition-transform duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:info@siqah.com"
              className="hover:text-[#B9914D] transition-transform duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Garis pemisah & credit */}
      <div className="relative z-10 mt-12 border-t border-white/20 pt-4 text-center text-sm text-gray-200/70">
        © {new Date().getFullYear()} <span className="text-[#B9914D] font-semibold">Siqah</span> — Aqiqah & Qurban Modern 🌙
      </div>
    </footer>
  );
}

export default Footer;
