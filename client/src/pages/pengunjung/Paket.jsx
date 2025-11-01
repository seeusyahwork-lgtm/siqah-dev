import React from "react";
import HeroSection from "../../components/pengunjung/paket/HeroSection";
import PaketSection from "../../components/pengunjung/paket/PaketSection";
import PaketPilihan from "../../components/pengunjung/paket/PaketPilihan";

const Paket = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <PaketSection />
      <PaketPilihan />
    </main>
  );
};

export default Paket;
