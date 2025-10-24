import React from "react";
import HeroSection from "../components/services/HeroSection";
import ServicesList from "../components/services/ServicesList";
import ProcessSection from "../components/services/ProcessSection";
import AdvantagesSection from "../components/services/AdvantagesSection";
import CTASection from "../components/services/CTASection";

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
