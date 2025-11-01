// client/src/layouts/SuperadminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/superadmin/Sidebar";
import Topbar from "../components/superadmin/Topbar";
import Footer from "../components/superadmin/Footer";

export default function SuperadminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* Dynamic page content */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
