"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Simple text fade-in animation
    gsap.fromTo(
      text.querySelectorAll(".hero-text"),
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/vid1.mp4" type="video/mp4" />
        <source src="/videos/vid1.webm" type="video/webm" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/60 to-slate-950/40" />

      {/* Centered Text Content */}
      <div 
        ref={textRef}
        className="relative z-10 h-screen flex flex-col items-center justify-center px-6"
      >
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
            Smarter Healthcare <br />
            <span className="text-primary">Excellencess</span>
          </h1>

          <p className="hero-text text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Secure telemedicine for modern healthcare teams
          </p>

          <div className="hero-text flex flex-wrap gap-4 justify-center pt-6">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
