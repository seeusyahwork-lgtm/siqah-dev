// client/src/components/paket/PaketSection.jsx
import React from "react";
import { motion } from "framer-motion";

const PaketSection = () => {
  const paketList = [
    {
      id: "PKT-001",
      nama: "Paket Aqiqah Premium",
      deskripsi: "Berisi sate kambing, gulai, dan nasi kebuli.",
      harga: 3000000,
      foto: "https://placehold.co/400",
    },
    {
      id: "PKT-002",
      nama: "Paket Aqiqah Hemat",
      deskripsi: "Paket ekonomis dengan cita rasa lezat.",
      harga: 2000000,
      foto: "https://placehold.co/400",
    },
    {
      id: "PKT-003",
      nama: "Paket Aqiqah Keluarga",
      deskripsi: "Paket lengkap untuk keluarga besar.",
      harga: 4000000,
      foto: "https://placehold.co/400",
    },
  ];

  return (
    <section
      className="relative w-full py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
      }}
    >
      {/* Overlay gelap tipis untuk kontras card */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-cormorant font-bold text-center text-[#F8F8F5] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Daftar Paket Aqiqah Siqah
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paketList.map((paket, index) => (
            <motion.div
              key={paket.id}
              className="bg-white bg-opacity-90 rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56">
                <img
                  src={paket.foto}
                  alt={paket.nama}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-cormorant text-[#45624B] mb-2">
                  {paket.nama}
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {paket.deskripsi}
                </p>
                <p className="text-xl font-bold text-[#B9914D] mb-4">
                  Rp {paket.harga.toLocaleString("id-ID")}
                </p>
                <button className="px-6 py-2 bg-[#45624B] text-white rounded-full hover:bg-[#36503a] transition-colors duration-300">
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaketSection;
