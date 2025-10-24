import HeroAbout from "../components/about/HeroAbout";
import VisiMisi from "../components/about/VisiMisi";
import StorySection from "../components/about/StorySection";
import LogoMeaning from "../components/about/LogoMeaning";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/ValuesSection";
import CTASection from "../components/about/CTASection";

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
