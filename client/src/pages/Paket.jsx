import React from "react";
import HeroSection from "../components/paket/HeroSection";
import PaketSection from "../components/paket/PaketSection";
import PaketPilihan from "../components/paket/PaketPilihan";

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
