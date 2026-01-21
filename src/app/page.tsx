"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import AnimatedCards from "@/components/AnimatedCards";
import TextRevealSection from "@/components/TextRevealSection";
import DoctorSection from "@/components/DoctorSection";
// import { DoctorCard, PatientCard } from "@/components/FeatureCards";
import ProcessSteps from "@/components/ProcessSteps";
import WaitlistSection from "@/components/WaitlistSection";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // No need to manually refresh ScrollTrigger
    return () => {
      // Cleanup on unmount
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="stacking-container">
      <Logo />
      <HeroSection />
      <AnimatedCards />
      <TextRevealSection />
      <DoctorSection />
      {/* <DoctorCard /> */}
      {/* <PatientCard /> */}
      <ProcessSteps />
      <WaitlistSection />
    </div>
  );
}
