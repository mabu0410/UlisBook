import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProblemSection from "@/components/landing/ProblemSection";
import VisionMissionSection from "@/components/landing/VisionMissionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CTASection from "@/components/landing/CTASection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <VisionMissionSection />
        <HowItWorksSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
