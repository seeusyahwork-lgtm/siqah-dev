// client/src/components/paket/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
      }}
    >
      {/* Overlay khas Siqah: hijau gelap transparan */}
      <div className="absolute inset-0 bg-[#45624B]/90"></div>

      <motion.div
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4 text-[#B9914D]">
          Pilih Paket Aqiqah Terbaik untuk Keluarga Anda
        </h1>
        <p className="text-lg md:text-xl font-montserrat text-gray-100">
          Disiapkan oleh dapur profesional, disembelih sesuai syariat, dan
          dikirim dengan amanah.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
