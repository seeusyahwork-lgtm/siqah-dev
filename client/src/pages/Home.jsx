import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
   

      {/* Hero */}
      <section id="home" className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Aqiqah & Qurban Profesional
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8">
            Proses aqiqah dan qurban transparan dari kandang hingga pengiriman. Mudah, cepat, dan terpercaya.
          </p>
          <a href="#services" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition font-heading">
            Lihat Layanan
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-12">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://placehold.co/150" alt="Kandang" className="mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Petugas Kandang</h3>
              <p className="font-sans">Kami merawat hewan dengan penuh perhatian sehingga siap untuk aqiqah atau qurban.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://placehold.co/150" alt="Dapur" className="mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Petugas Dapur</h3>
              <p className="font-sans">Menu diproses oleh tim dapur profesional, higienis, dan lezat.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://placehold.co/150" alt="Kurir" className="mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Kurir & Pengiriman</h3>
              <p className="font-sans">Pesanan sampai ke tangan konsumen dengan aman dan tepat waktu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-12">Paket Pilihan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://placehold.co/300" alt="Paket Aqiqah Premium" className="mb-4 rounded-lg" />
              <h3 className="font-heading text-xl font-semibold mb-2">Paket Aqiqah Premium</h3>
              <p className="font-sans">Berisi sate kambing, gulai, dan nasi kebuli. Semua higienis dan lezat.</p>
              <p className="font-heading font-bold mt-4 text-indigo-600">Rp 3.000.000</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://placehold.co/300" alt="Paket Standard" className="mb-4 rounded-lg" />
              <h3 className="font-heading text-xl font-semibold mb-2">Paket Standard</h3>
              <p className="font-sans">Menu standar yang praktis dan enak untuk keluarga.</p>
              <p className="font-heading font-bold mt-4 text-indigo-600">Rp 2.000.000</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img src="https://placehold.co/300" alt="Paket Ekonomis" className="mb-4 rounded-lg" />
              <h3 className="font-heading text-xl font-semibold mb-2">Paket Ekonomis</h3>
              <p className="font-sans">Solusi hemat tanpa mengurangi kualitas layanan dan rasa.</p>
              <p className="font-heading font-bold mt-4 text-indigo-600">Rp 1.500.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Tentang Siqah</h2>
          <p className="font-sans text-lg mb-4">
            Siqah adalah platform terpercaya untuk aqiqah dan qurban. Dengan sistem tracking transparan, konsumen dapat melihat proses pesanan dari kandang hingga pengiriman.
          </p>
          <p className="font-sans text-lg">
            Kami memadukan profesionalisme petugas, dapur higienis, dan layanan pengiriman cepat demi kepuasan konsumen.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Hubungi Kami</h2>
          <p className="font-sans mb-6">Jl. Raya Siqah No. 1, Bandung | Email: admin@siqah.id | Telp: 081234567890</p>
          <a href="mailto:admin@siqah.id" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition font-heading">
            Kirim Email
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
