"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextRevealSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContainer = textRef.current;
    const imagesContainer = imagesRef.current;

    if (!section || !textContainer || !imagesContainer) return;

    // Animate text container from left
    gsap.fromTo(
      textContainer,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Get all word spans for color fill effect
    const words = textContainer.querySelectorAll(".reveal-word");

    // Create a timeline for progressive text fill effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 40%",
        end: "bottom 40%",
        scrub: 0.3,
      },
    });

    // Animate all words to fill with color progressively
    words.forEach((word, index) => {
      tl.to(
        word,
        {
          color: "hsl(220, 20%, 10%)",
          duration: 0.1,
        },
        index * 0.05
      );
    });

    // Animate images on right side - pop up staggered
    const images = imagesContainer.querySelectorAll(".image-item");
    images.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0, y: 40, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 40%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stacking-card stacking-card-2 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-foreground">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div ref={textRef} className="space-y-6">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              We&apos;re revolutionizing healthcare by bridging the gap between patients and medical professionals.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              Our platform enable seamless virtual consultations, secure health record management, and personalized care pathways that transform how people access medical expertise.
            </p>
            <ul className="space-y-3 mt-8">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <span className="text-lg text-foreground/80">24/7 Virtual Consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <span className="text-lg text-foreground/80">Secure Health Records</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl mt-1">✓</span>
                <span className="text-lg text-foreground/80">Personalized Care Pathways</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Single Image */}
          <div
            ref={imagesRef}
            className="flex items-center justify-center"
          >
            <div className="image-item w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/20 flex items-center justify-center">
              <img src="/images/image7.png" alt="Illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextRevealSection;
