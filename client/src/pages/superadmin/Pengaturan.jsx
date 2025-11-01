import { useState } from "react";
import Table from "../../components/ui/Table";
import Modal from "../../components/ui/Modal";
import { Card, CardHeader, CardContent } from "../../components/ui/Card";
import { Edit2, PlusCircle } from "lucide-react";

export default function Pengaturan() {
  const [activeTab, setActiveTab] = useState("profil");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");

  // ------------------ Dummy Data ------------------
  const [profil, setProfil] = useState({
    nama: "Superadmin Siqah",
    email: "superadmin@siqah.id",
    role: "Superadmin",
    avatar: "https://ui-avatars.com/api/?name=Superadmin+Siqah&background=2563eb&color=fff",
  });

  const [roles, setRoles] = useState([
    { id: 1, nama_role: "Superadmin", deskripsi: "Hak akses penuh ke seluruh sistem" },
    { id: 2, nama_role: "Admin", deskripsi: "Kelola pesanan dan pembayaran" },
    { id: 3, nama_role: "Petugas Kandang", deskripsi: "Menginput penyembelihan" },
    { id: 4, nama_role: "Petugas Dapur", deskripsi: "Menginput proses dapur" },
    { id: 5, nama_role: "Petugas Kurir", deskripsi: "Menginput pengantaran" },
    { id: 6, nama_role: "Konsumen", deskripsi: "Melihat pesanan & status" },
  ]);

  const columnsRole = [
    { header: "Nama Role", accessor: "nama_role" },
    { header: "Deskripsi", accessor: "deskripsi" },
    {
      header: "Aksi",
      render: (row) => (
        <button
          onClick={() => handleEditRole(row)}
          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md"
        >
          <Edit2 size={16} />
        </button>
      ),
    },
  ];

  const handleEditRole = (row) => {
    setFormMode("Edit");
    console.log("Edit role:", row);
    setIsModalOpen(true);
  };

  const handleAddRole = () => {
    setFormMode("Tambah");
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader
          title="Pengaturan Sistem"
          subtitle="Atur profil Superadmin dan kelola hak akses pengguna"
        />

        <CardContent>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["profil", "role"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab === "profil" ? "Profil Superadmin" : "Manajemen Role"}
              </button>
            ))}
          </div>

          {/* Tab: Profil Superadmin */}
          {activeTab === "profil" && (
            <div className="max-w-lg space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src={profil.avatar}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full border object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {profil.nama}
                  </h3>
                  <p className="text-gray-600 text-sm">{profil.email}</p>
                  <p className="text-gray-500 text-xs italic">{profil.role}</p>
                </div>
              </div>

              <form className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    defaultValue={profil.nama}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue={profil.email}
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Password Baru
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Tab: Role Management */}
          {activeTab === "role" && (
            <div>
              <div className="flex justify-end mb-3">
                <button
                  onClick={handleAddRole}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <PlusCircle size={18} />
                  Tambah Role
                </button>
              </div>

              <Table columns={columnsRole} data={roles} />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal Tambah/Edit Role */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${formMode} Role`}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Role</label>
            <input
              type="text"
              placeholder="Contoh: Petugas Kandang"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Deskripsi</label>
            <textarea
              rows="3"
              placeholder="Deskripsi hak akses role ini..."
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
