"use client";

import { useEffect, useState } from "react";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FormSection from "@/components/landing/FormSection";
import Hero from "@/components/landing/Hero";
import LandingEffects from "@/components/landing/LandingEffects";
import Navbar from "@/components/landing/Navbar";
import ReviewSection from "@/components/landing/ReviewSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import IntroSection from "@/components/landing/IntroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";

export default function LandingPageClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <LandingEffects />
      <Navbar />

      <main>
        <Hero />
        <IntroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ReviewSection />
        <FormSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
