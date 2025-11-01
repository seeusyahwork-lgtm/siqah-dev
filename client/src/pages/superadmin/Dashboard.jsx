import { useEffect, useState } from "react";
import { Users, ShoppingBag, CreditCard, Bell } from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalPayments: 0,
    totalNotifications: 0,
  });

  // Simulasi pengambilan data (nanti diganti API PostgreSQL)
  useEffect(() => {
    setStats({
      totalUsers: 52,
      totalOrders: 37,
      totalPayments: 29,
      totalNotifications: 7,
    });
  }, []);

  // Data contoh untuk chart
  const dataChart = [
    { name: "Pesanan", value: stats.totalOrders },
    { name: "Pembayaran", value: stats.totalPayments },
    { name: "Notifikasi", value: stats.totalNotifications },
  ];

  const COLORS = ["#2563eb", "#22c55e", "#f59e0b"];

  return (
    <div className="space-y-6">
      {/* Judul Halaman */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Superadmin</h1>
        <p className="text-sm text-gray-500">
          Ringkasan aktivitas dan statistik sistem Siqah Aqiqah
        </p>
      </div>

      {/* Statistik Kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          icon={<Users className="text-blue-600" />}
          title="Total Pengguna"
          value={stats.totalUsers}
        />
        <StatCard
          icon={<ShoppingBag className="text-green-600" />}
          title="Total Pesanan"
          value={stats.totalOrders}
        />
        <StatCard
          icon={<CreditCard className="text-yellow-500" />}
          title="Total Pembayaran"
          value={stats.totalPayments}
        />
        <StatCard
          icon={<Bell className="text-red-500" />}
          title="Notifikasi Baru"
          value={stats.totalNotifications}
        />
      </div>

      {/* Grafik */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Distribusi Aktivitas
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={dataChart}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {dataChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// Komponen Kartu Statistik
function StatCard({ icon, title, value }) {
  return (
    <Card className="rounded-2xl shadow-sm border hover:shadow-md transition">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
