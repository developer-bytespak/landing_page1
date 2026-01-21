"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Separate Doctor Card component
export const DoctorCard = () => {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    // Internal parallax for image
    gsap.to(image, {
      y: -60,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={cardRef}
      className="stacking-card stacking-card-3 bg-secondary/30"
    >
      <div className="container mx-auto px-6 lg:px-8 h-full flex items-center py-24">
        <div className="w-full">
          <div className="feature-card">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  For Doctors
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Streamline Your Practice
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Manage appointments, access patient records, and conduct video consultations from a single, intuitive dashboard. Save hours every week.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Smart scheduling system
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    E-prescriptions
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Analytics dashboard
                  </li>
                </ul>
              </div>
              <div ref={imageRef} className="parallax-container h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate Patient Card component
export const PatientCard = () => {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) return;

    // Internal parallax for image
    gsap.to(image, {
      y: -60,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={cardRef}
      className="stacking-card stacking-card-4 bg-muted/50"
    >
      <div className="container mx-auto px-6 lg:px-8 h-full flex items-center py-24">
        <div className="w-full">
          <div className="feature-card">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  For Patients
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Healthcare at Your Fingertips
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Book appointments, consult with specialists, and manage your health records from the comfort of your home. No more waiting rooms.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    24/7 availability
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Secure messaging
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Health tracking
                  </li>
                </ul>
              </div>
              <div ref={imageRef} className="parallax-container h-64 md:h-auto min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
