import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import InquirySection from "@/components/sections/InquirySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PhilosophySection />
      <ExperienceSection />
      <InquirySection />
    </>
  );
}
