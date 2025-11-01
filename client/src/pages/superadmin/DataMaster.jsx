import { useState } from "react";
import Table from "../../components/ui/Table";
import Modal from "../../components/ui/Modal";
import { Card, CardHeader, CardContent } from "../../components/ui/Card";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

export default function DataMaster() {
  const [activeTab, setActiveTab] = useState("hewan");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");

  // Contoh data dummy (nantinya diganti fetch dari backend PostgreSQL)
  const data = {
    hewan: [
      { id: 1, nama: "Kambing Etawa", harga: "3.000.000" },
      { id: 2, nama: "Kambing Jawa", harga: "2.500.000" },
    ],
    menu: [
      { id: 1, nama: "Gule Kambing", kategori: "Masakan Utama" },
      { id: 2, nama: "Sate", kategori: "Lauk" },
    ],
    paket: [
      { id: 1, nama: "Paket Hemat", isi: "1 Ekor + Sate + Gule", harga: "3.500.000" },
      { id: 2, nama: "Paket Premium", isi: "2 Ekor + Sate + Gule + Tongseng", harga: "6.000.000" },
    ],
  };

  const columns = {
    hewan: [
      { header: "Nama Hewan", accessor: "nama" },
      { header: "Harga", accessor: "harga" },
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
    ],
    menu: [
      { header: "Nama Menu", accessor: "nama" },
      { header: "Kategori", accessor: "kategori" },
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
    ],
    paket: [
      { header: "Nama Paket", accessor: "nama" },
      { header: "Isi Paket", accessor: "isi" },
      { header: "Harga", accessor: "harga" },
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
    ],
  };

  const handleAdd = () => {
    setFormMode("Tambah");
    setIsModalOpen(true);
  };

  const handleEdit = (row) => {
    setFormMode("Edit");
    console.log("Edit data:", row);
    setIsModalOpen(true);
  };

  const handleDelete = (row) => {
    if (confirm(`Yakin ingin menghapus ${row.nama}?`)) {
      console.log("Hapus data:", row);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader
          title="Data Master"
          subtitle="Kelola data hewan, menu, dan paket Aqiqah"
        />

        <CardContent>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["hewan", "menu", "paket"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tombol Tambah */}
          <div className="flex justify-end mb-3">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <PlusCircle size={18} />
              Tambah Data
            </button>
          </div>

          {/* Tabel */}
          <Table columns={columns[activeTab]} data={data[activeTab]} />
        </CardContent>
      </Card>

      {/* Modal Tambah/Edit */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${formMode} ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              placeholder={`Nama ${activeTab}`}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Field tambahan tergantung tab */}
          {activeTab === "paket" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Isi Paket</label>
                <input
                  type="text"
                  placeholder="Contoh: 1 Ekor + Sate + Gule"
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Harga</label>
                <input
                  type="number"
                  placeholder="Harga paket"
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                />
              </div>
            </>
          )}

          {activeTab === "hewan" && (
            <div>
              <label className="block text-sm font-medium mb-1">Harga</label>
              <input
                type="number"
                placeholder="Harga hewan"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
              />
            </div>
          )}

          {activeTab === "menu" && (
            <div>
              <label className="block text-sm font-medium mb-1">Kategori</label>
              <input
                type="text"
                placeholder="Masakan utama / Lauk / Lainnya"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
              />
            </div>
          )}

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
