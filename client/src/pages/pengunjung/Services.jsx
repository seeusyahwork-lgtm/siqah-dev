import React from "react";
import HeroSection from "../../components/pengunjung/services/HeroSection";
import ServicesList from "../../components/pengunjung/services/ServicesList";
import ProcessSection from "../../components/pengunjung/services/ProcessSection";
import AdvantagesSection from "../../components/pengunjung/services/AdvantagesSection";
import CTASection from "../../components/pengunjung/services/CTASection";

const Services = () => {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <ServicesList />
      <ProcessSection />
      <AdvantagesSection />
      <CTASection />
    </main>
  );
};

export default Services;
