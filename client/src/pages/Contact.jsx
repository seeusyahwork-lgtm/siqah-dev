// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const adminData = {
  nama: "Admin Utama Siqah",
  email: "admin@siqah.id",
  no_hp: "081234567890",
  jabatan: "Super Admin",
  foto: "https://placehold.co/400",
  alamat: "Jl. Raya Siqah No. 1, Bandung",
  sosial: {
    instagram: "https://instagram.com/siqah",
    tiktok: "https://tiktok.com/@siqah",
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({ nama: "", email: "", hp: "", pesan: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.email || !formData.pesan) {
      setStatus({ type: "error", message: "Harap isi semua field yang wajib." });
      return;
    }
    setTimeout(() => {
      setStatus({ type: "success", message: "Pesan berhasil dikirim!" });
      setFormData({ nama: "", email: "", hp: "", pesan: "" });
    }, 1000);
  };

  return (
    <section
      className=" w-full py-24 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gradasi lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#45624B]/20 to-white/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/path-to-logo.png" alt="Siqah Logo" className="mx-auto mb-4 w-32" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#45624B] mb-4">Hubungi Siqah</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Kami siap membantu Anda dengan layanan aqiqah & qurban terbaik
          </p>
        </motion.div>

        {/* Info & Form */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Kontak */}
          <motion.div
            className="space-y-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#B9914D] mb-4">Info Kontak</h2>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-[#B9914D]" /> {adminData.alamat}
            </p>
            <p className="flex items-center gap-2">
              <FiMail className="text-[#B9914D]" />{" "}
              <a href={`mailto:${adminData.email}`} className="text-[#45624B] underline">
                {adminData.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-[#B9914D]" />{" "}
              <a href={`tel:${adminData.no_hp}`} className="text-[#45624B] underline">
                {adminData.no_hp}
              </a>
            </p>
            <p><strong>Jam Operasional:</strong> Senin - Jumat: 08:00 - 17:00, Sabtu: 08:00 - 13:00</p>

            {/* Sosial Media */}
            <div className="flex gap-4 mt-4">
              <a href={adminData.sosial.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href={adminData.sosial.tiktok} target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:scale-110 transition">
                <FaTiktok />
              </a>
            </div>
          </motion.div>

          {/* Form Kontak */}
          <motion.div
            className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-md text-gray-900"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-4 text-[#45624B]">Kirim Pesan</h2>
            {status && (
              <div
                className={`p-2 mb-4 rounded ${
                  status.type === "success" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
                }`}
              >
                {status.message}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                value={formData.nama}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
              />
              <input
                type="text"
                name="hp"
                placeholder="Nomor HP"
                value={formData.hp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
              />
              <textarea
                name="pesan"
                placeholder="Pesan Anda"
                rows="4"
                value={formData.pesan}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
              />
              <button
                type="submit"
                className="w-full bg-[#45624B] text-white py-2 rounded hover:bg-[#B9914D] transition"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>

        {/* Peta Lokasi */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Lokasi Kami</h2>
          <div className="w-full h-64 rounded overflow-hidden shadow-md">
            <iframe
              title="Lokasi Siqah"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.75834994036!2d107.5731!3d-6.9032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e63c1b20eecf%3A0xe4c1db9b2e16a6c!2sBandung!5e0!3m2!1sen!2sid!4v1698138640000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Profil Admin */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Tim Siqah</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src={adminData.foto}
                alt={adminData.nama}
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">{adminData.nama}</h3>
              <p>{adminData.jabatan}</p>
              <p>Email: <a href={`mailto:${adminData.email}`} className="text-[#45624B] underline">{adminData.email}</a></p>
              <p>HP: <a href={`tel:${adminData.no_hp}`} className="text-[#45624B] underline">{adminData.no_hp}</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
