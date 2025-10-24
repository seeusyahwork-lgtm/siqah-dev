import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900/60 md:bg-emerald-800/55 backdrop-blur-[2px]"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6 md:px-10 z-10">
        {/* Animasi muncul dari bawah */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            Siap Menjalankan <span className="text-yellow-400">Ibadah Aqiqah</span> 
            Bersama Kami?
          </h2>

          <p className="text-gray-100 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Percayakan momen penuh syukur keluarga Anda kepada 
            <span className="font-semibold text-yellow-400"> Siqah Aqiqah</span>.  
            Kami siap melayani dengan cara yang mudah, syar’i, dan penuh berkah.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="/layanan"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Layanan Kami
            </motion.a>

            <motion.a
              href="/kontak"
              className="bg-white/90 hover:bg-white text-emerald-800 font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Ornamen bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CTASection;
