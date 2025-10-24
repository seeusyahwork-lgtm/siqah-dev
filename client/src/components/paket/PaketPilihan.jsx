// client/src/components/paket/PaketPilihan.jsx
import React from "react";
import { motion } from "framer-motion";
import { GiGoat, GiMeatCleaver, GiCookingPot } from "react-icons/gi";

const PaketPilihan = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#45624B]/90 to-[#B9914D]/70 animate-gradient-x"></div>
      {/* Overlay hitam tipis */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Ilustrasi icon/visual */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <motion.div
            className="flex gap-4 text-[#B9914D] text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GiGoat />
            <GiMeatCleaver />
            <GiCookingPot />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-cormorant font-bold text-[#F8F8F5]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Buat Paket Aqiqah Sesuai Keinginan Anda
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl font-montserrat text-gray-100 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Pilih menu, jumlah hewan, dan layanan tambahan sesuai kebutuhan
            keluarga Anda. Kami siap membantu mewujudkan paket aqiqah yang
            sempurna dan sesuai syariat.
          </motion.p>

          <motion.button
            className="mt-4 px-8 py-4 bg-[#B9914D] text-[#45624B] font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Buat Paket Saya
          </motion.button>
        </div>

        {/* Visual tambahan (opsional) */}
        <motion.div
          className="hidden lg:flex flex-1 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://placehold.co/400x400?text=Custom+Paket"
            alt="Custom Paket"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PaketPilihan;
