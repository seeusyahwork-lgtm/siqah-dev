import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PaketSection from "../components/home/PaketSection";
import TimelineSection from "../components/home/TimelineSection";
import HewanSection from "../components/home/HewanSection";
import TestimoniSection from "../components/home/TestimoniSection";
import TimSection from "../components/home/TimSection";
import CTASection from "../components/home/CTASection"

const Home = () => {
  return (
    <main className="w-full font-montserrat text-gray-800">
      <HeroSection />
      <AboutSection />
      <PaketSection />
      <TimelineSection />
      <HewanSection />
      <TestimoniSection />
      <TimSection />
      <CTASection />
    </main>
  );
};

export default Home;
