// client/src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden ">
      {/* Navbar tetap di atas */}
      <Navbar />

      {/* Main content */}
      <main className="flex w-full mt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
