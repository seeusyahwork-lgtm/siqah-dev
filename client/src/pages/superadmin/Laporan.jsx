import { useState } from "react";
import Table from "../../components/ui/Table";
import { Card, CardHeader, CardContent } from "../../components/ui/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FileDown } from "lucide-react";

export default function Laporan() {
  const [filter, setFilter] = useState("bulan");

  // Data dummy laporan pembayaran (nanti diganti dari tb_pembayaran + tb_pesanan)
  const laporan = [
    { id: 1, tanggal: "2025-10-29", konsumen: "Ahmad Fauzi", total: 3500000, status: "Lunas" },
    { id: 2, tanggal: "2025-10-30", konsumen: "Budi Santoso", total: 2500000, status: "Pending" },
    { id: 3, tanggal: "2025-11-01", konsumen: "Citra Dewi", total: 4000000, status: "Lunas" },
  ];

  // Data untuk grafik pendapatan bulanan
  const dataChart = [
    { bulan: "September", total: 12000000 },
    { bulan: "Oktober", total: 21000000 },
    { bulan: "November", total: 16500000 },
  ];

  const columns = [
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Nama Konsumen", accessor: "konsumen" },
    {
      header: "Total Pembayaran",
      render: (row) => (
        <span className="font-medium text-gray-700">
          Rp {row.total.toLocaleString("id-ID")}
        </span>
      ),
    },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${
            row.status === "Lunas"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader
          title="Laporan Pembayaran & Aktivitas"
          subtitle="Lihat rekap transaksi dan aktivitas sistem Siqah Aqiqah"
        />

        <CardContent>
          {/* Filter Periode */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex gap-2">
              {["hari", "minggu", "bulan"].map((p) => (
                <button
                  key={p}
                  onClick={() => setFilter(p)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    filter === p
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>

            <button
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => alert("Fitur export ke PDF/Excel sedang dikembangkan.")}
            >
              <FileDown size={18} />
              Export
            </button>
          </div>

          {/* Tabel Laporan */}
          <Table columns={columns} data={laporan} />
        </CardContent>
      </Card>

      {/* Grafik Pendapatan */}
      <Card>
        <CardHeader
          title="Grafik Pendapatan Bulanan"
          subtitle="Visualisasi total pemasukan berdasarkan bulan"
        />
        <CardContent>
          <div className="w-full h-72">
            <ResponsiveContainer>
              <BarChart data={dataChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip
                  formatter={(value) =>
                    `Rp ${value.toLocaleString("id-ID")}`
                  }
                />
                <Bar dataKey="total" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
