import React from "react";
import HeroSection from "../../components/pengunjung/home/HeroSection";
import AboutSection from "../../components/pengunjung/home/AboutSection";
import PaketSection from "../../components/pengunjung/home/PaketSection";
import TimelineSection from "../../components/pengunjung/home/TimelineSection";
import HewanSection from "../../components/pengunjung/home/HewanSection";
import TestimoniSection from "../../components/pengunjung/home/TestimoniSection";
import TimSection from "../../components/pengunjung/home/TimSection";
import CTASection from "../../components/pengunjung/home/CTASection"

const Home = () => {
  return (
    <main className="w-full  text-gray-800">
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
