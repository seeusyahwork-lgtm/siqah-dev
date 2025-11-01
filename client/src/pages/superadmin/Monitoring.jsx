import { useState } from "react";
import Table from "../../components/ui/Table";
import { Card, CardHeader, CardContent } from "../../components/ui/Card";
import { Eye, CheckCircle2, Clock, XCircle } from "lucide-react";

export default function Monitoring() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Data dummy (nantinya diambil dari tb_pesanan dan tb_progress_pesanan)
  const orders = [
    {
      id: 1,
      konsumen: "Ahmad Fauzi",
      paket: "Paket Premium",
      tanggal: "2025-11-01",
      status: "Selesai",
      kandang: "Selesai",
      dapur: "Selesai",
      kurir: "Terkirim",
    },
    {
      id: 2,
      konsumen: "Budi Santoso",
      paket: "Paket Hemat",
      tanggal: "2025-11-01",
      status: "Proses",
      kandang: "Selesai",
      dapur: "Proses",
      kurir: "Menunggu",
    },
    {
      id: 3,
      konsumen: "Citra Dewi",
      paket: "Paket Standar",
      tanggal: "2025-10-30",
      status: "Menunggu",
      kandang: "Menunggu",
      dapur: "Menunggu",
      kurir: "Menunggu",
    },
  ];

  const columns = [
    { header: "Nama Konsumen", accessor: "konsumen" },
    { header: "Paket", accessor: "paket" },
    { header: "Tanggal", accessor: "tanggal" },
    {
      header: "Status Kandang",
      render: (row) => <StatusBadge status={row.kandang} />,
    },
    {
      header: "Status Dapur",
      render: (row) => <StatusBadge status={row.dapur} />,
    },
    {
      header: "Status Kurir",
      render: (row) => <StatusBadge status={row.kurir} />,
    },
    {
      header: "Status Akhir",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: "Aksi",
      render: (row) => (
        <button
          onClick={() => setSelectedOrder(row)}
          className="flex items-center gap-1 text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md transition"
        >
          <Eye size={16} />
          Lihat
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader
          title="Monitoring Proses Aqiqah"
          subtitle="Pantau setiap tahap penyembelihan, pengolahan, dan pengantaran"
        />
        <CardContent>
          <Table columns={columns} data={orders} />
        </CardContent>
      </Card>

      {selectedOrder && (
        <div className="bg-white border rounded-2xl shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Detail Proses — {selectedOrder.konsumen}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StageCard
              title="Penyembelihan"
              status={selectedOrder.kandang}
              detail="Petugas kandang telah mengunggah bukti foto/video."
            />
            <StageCard
              title="Pengolahan"
              status={selectedOrder.dapur}
              detail="Petugas dapur sedang mengolah daging."
            />
            <StageCard
              title="Pengantaran"
              status={selectedOrder.kurir}
              detail="Petugas kurir sedang mengantarkan pesanan."
            />
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setSelectedOrder(null)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------- Komponen Pendukung --------------------

function StatusBadge({ status }) {
  let color =
    status === "Selesai"
      ? "bg-green-100 text-green-700"
      : status === "Proses"
      ? "bg-yellow-100 text-yellow-700"
      : status === "Menunggu"
      ? "bg-gray-100 text-gray-700"
      : status === "Terkirim"
      ? "bg-blue-100 text-blue-700"
      : "bg-red-100 text-red-700";

  const icon =
    status === "Selesai" ? (
      <CheckCircle2 size={14} />
    ) : status === "Proses" ? (
      <Clock size={14} />
    ) : status === "Terkirim" ? (
      <CheckCircle2 size={14} />
    ) : (
      <XCircle size={14} />
    );

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${color}`}
    >
      {icon}
      {status}
    </span>
  );
}

function StageCard({ title, status, detail }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="text-sm text-gray-500">{detail}</p>
      <div className="mt-3">
        <button className="text-sm text-blue-600 hover:underline">
          Lihat Bukti
        </button>
      </div>
    </div>
  );
}
