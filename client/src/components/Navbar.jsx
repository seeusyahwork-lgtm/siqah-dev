import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 px-6">
      <div className="flex-1 flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dcida9qys/image/upload/v1757918033/lg-only_dpxxwq.png"
          alt="Logo Siqah"
          className="h-14 w-14"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/80x80?text=Siqah"; }}
        />
        <span className="text-2xl lg:text-3xl font-heading font-bold text-[#B9914D]">Siqah - Siap Aqiqah </span>
      </div>

      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 text-[#B9914D] font-heading font-bold text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#harga">Harga</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </div>

      <div className="flex-none flex items-center gap-2">
        <button
          type="button"
          className="btn bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold px-6 rounded font-heading"
          onClick={() => document.getElementById("modal_login")?.showModal()}
        >
          Login
        </button>

        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} role="button" className="btn btn-ghost ml-2" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#B9914D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 text-lg font-heading font-bold text-[#B9914D] shadow">
            <li><a href="#home">Home</a></li>
            <li><a href="#tentang">Tentang</a></li>
            <li><a href="#harga">Harga</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>
      </div>

      <dialog id="modal_login" className="modal">
        <div className="modal-box rounded-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <h3 className="font-heading font-bold text-2xl text-center text-[#B9914D] mb-4">Login</h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 font-sans">Email</label>
              <input type="email" placeholder="Masukkan email" className="input input-bordered w-full mt-1 font-sans" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 font-sans">Password</label>
              <input type="password" placeholder="Masukkan password" className="input input-bordered w-full mt-1 font-sans" required />
            </div>

            <button type="button" className="w-full btn bg-[#B9914D] hover:bg-[#a37f3e] text-white font-bold font-heading">Masuk</button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-500 font-sans">
            Belum punya akun? <a href="#" className="text-[#B9914D] hover:underline">Daftar Sekarang</a>
          </p>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;
