// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Data Tim
const team = [
  { name: "Ahmad Fauzi", role: "Pendiri & CEO", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Siti Aisyah", role: "Petugas Dapur", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Budi Santoso", role: "Petugas Kandang", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Rina Putri", role: "Kurir", img: "https://i.pravatar.cc/150?img=4" },
];

// Nilai / Filosofi
const values = [
  { title: "Amanah", desc: "Hewan sehat & proses aqiqah sesuai syariat", icon: "🛡️" },
  { title: "Transparansi", desc: "Tracking proses aqiqah online", icon: "🔍" },
  { title: "Kemudahan", desc: "Layanan cepat dan praktis", icon: "⚡" },
  { title: "Keberkahan", desc: "Fokus pada syukur keluarga & ibadah", icon: "🌿" },
];

// Timeline Layanan
const timeline = [
  "Pilih hewan aqiqah atau paket",
  "Proses di kandang & dapur",
  "Pengiriman & dokumentasi",
  "Konsumen menerima & memberikan testimoni"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F6F0] font-montserrat">
      {/* Hero */}
      <section className="bg-[#45624B]/80 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold font-cormorant mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tentang Siqah
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Siqah adalah layanan akikah terpercaya sejak 2025 di Bandung, menghadirkan pengalaman praktis, amanah, dan berkesan bagi setiap keluarga Muslim. Kami hadir untuk memudahkan orang tua menjalankan sunnah aqiqah dengan penuh keberkahan.
        </motion.p>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#B9914D] font-cormorant mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Visi & Misi
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#45624B] mb-2">Visi</h3>
            <p>Menciptakan layanan akikah & qurban terpercaya yang praktis, amanah, dan berkah bagi keluarga Muslim.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#45624B] mb-2">Misi</h3>
            <ul className="list-decimal list-inside space-y-2 text-left">
              <li>Menyediakan hewan aqiqah berkualitas & sehat</li>
              <li>Proses aqiqah sesuai syariat</li>
              <li>Layanan cepat & profesional</li>
              <li>Transparansi & tracking pesanan online</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Nilai / Filosofi */}
      <section className="py-20 px-6 bg-[#45624B]/10 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#B9914D] font-cormorant mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Nilai Kami
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold text-[#45624B] mb-2">{v.title}</h3>
              <p className="text-gray-700">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tim */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#B9914D] font-cormorant mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Tim Kami
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={t.img} alt={t.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-bold text-[#45624B]">{t.name}</h3>
              <p className="text-gray-700">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Layanan */}
      <section className="py-20 px-6 bg-[#45624B]/10 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#B9914D] font-cormorant mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Alur Layanan
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg relative pl-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#B9914D] rounded-full"></div>
              <p className="text-gray-800 font-montserrat">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.button
          className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold py-4 px-10 rounded-lg text-xl"
          whileHover={{ scale: 1.05 }}
        >
          Pesan Aqiqah Sekarang
        </motion.button>
      </section>
    </div>
  );
};

export default About;
