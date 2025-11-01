import { useState } from "react";
import Table from "../../components/ui/Table";
import Modal from "../../components/ui/Modal";
import { Card, CardHeader, CardContent } from "../../components/ui/Card";
import { PlusCircle, Edit2, Trash2, Shield } from "lucide-react";

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");

  // Simulasi data user (nanti akan diambil dari tb_user + tb_role)
  const [users, setUsers] = useState([
    { id: 1, nama: "Superadmin Siqah", email: "superadmin@siqah.id", role: "Superadmin" },
    { id: 2, nama: "Admin Aqiqah", email: "admin@siqah.id", role: "Admin" },
    { id: 3, nama: "Petugas Kandang 1", email: "kandang1@siqah.id", role: "Petugas Kandang" },
    { id: 4, nama: "Petugas Dapur 1", email: "dapur1@siqah.id", role: "Petugas Dapur" },
    { id: 5, nama: "Petugas Kurir 1", email: "kurir1@siqah.id", role: "Petugas Kurir" },
    { id: 6, nama: "Konsumen 1", email: "konsumen1@siqah.id", role: "Konsumen" },
  ]);

  const columns = [
    { header: "Nama", accessor: "nama" },
    { header: "Email", accessor: "email" },
    {
      header: "Role",
      render: (row) => (
        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${
            row.role === "Superadmin"
              ? "bg-purple-100 text-purple-700"
              : row.role === "Admin"
              ? "bg-blue-100 text-blue-700"
              : row.role.includes("Petugas")
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {row.role}
        </span>
      ),
    },
    {
      header: "Aksi",
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="p-1.5 text-red-600 hover:bg-red-50 rounded-md"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const handleAdd = () => {
    setFormMode("Tambah");
    setIsModalOpen(true);
  };

  const handleEdit = (row) => {
    setFormMode("Edit");
    console.log("Edit user:", row);
    setIsModalOpen(true);
  };

  const handleDelete = (row) => {
    if (confirm(`Yakin ingin menghapus akun ${row.nama}?`)) {
      console.log("Hapus user:", row);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader
          title="Manajemen User"
          subtitle="Kelola akun pengguna di seluruh sistem Siqah Aqiqah"
        />

        <CardContent>
          {/* Tombol Tambah */}
          <div className="flex justify-end mb-3">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <PlusCircle size={18} />
              Tambah User
            </button>
          </div>

          {/* Tabel User */}
          <Table columns={columns} data={users} />
        </CardContent>
      </Card>

      {/* Modal Tambah/Edit User */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${formMode} User`}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Alamat email"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200">
              <option value="">Pilih Role</option>
              <option>Superadmin</option>
              <option>Admin</option>
              <option>Petugas Kandang</option>
              <option>Petugas Dapur</option>
              <option>Petugas Kurir</option>
              <option>Konsumen</option>
            </select>
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
