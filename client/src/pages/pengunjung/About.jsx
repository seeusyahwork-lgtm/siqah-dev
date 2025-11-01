import HeroAbout from "../../components/pengunjung/about/HeroAbout";
import VisiMisi from "../../components/pengunjung/about/VisiMisi";
import StorySection from "../../components/pengunjung/about/StorySection";
import LogoMeaning from "../../components/pengunjung/about/LogoMeaning";
import TeamSection from "../../components/pengunjung/about/TeamSection";
import ValuesSection from "../../components/pengunjung/about/ValuesSection";
import CTASection from "../../components/pengunjung/about/CTASection";

const About = () => {
  return (
    <main className="w-full">
      <HeroAbout />
      <VisiMisi />
      <StorySection />
      <LogoMeaning />
      <TeamSection />
      <ValuesSection />
      <CTASection />
    </main>
  );
};

export default About;
