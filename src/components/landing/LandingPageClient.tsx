"use client";

import { useEffect, useState } from "react";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FormSection from "@/components/landing/FormSection";
import Hero from "@/components/landing/Hero";
import ImageSection from "@/components/landing/ImageSection";
import LandingEffects from "@/components/landing/LandingEffects";
import Navbar from "@/components/landing/Navbar";
import ReviewSection from "@/components/landing/ReviewSection";

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
        <ImageSection />
        <FormSection />
        <ReviewSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
