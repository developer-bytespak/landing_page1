'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DoctorSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    earnings: 0,
    doctors: 0,
    support: 0,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const hasAnimated = useRef(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
    gsap.to(cardsRef.current[index], {
      scale: 1.05,
      y: -10,
      boxShadow: '0 20px 40px rgba(45, 212, 191, 0.15)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleCardHoverEnd = (index: number) => {
    setHoveredIndex(null);
    gsap.to(cardsRef.current[index], {
      scale: 1,
      y: 0,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const animateCounters = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1.5; // 1.5 seconds - faster animation
    const targets = { 
      patients: 5, 
      earnings: 20, 
      doctors: 10, 
      support: 24 
    } as const;
    type TargetKey = keyof typeof targets;

    (Object.keys(targets) as TargetKey[]).forEach((key) => {
      gsap.to({ value: 0 }, {
        value: targets[key],
        duration: duration,
        ease: 'power2.out',
        onUpdate: function() {
          setCounters(prev => ({ ...prev, [key]: Math.floor(this.targets()[0].value) }));
        }
      });
    });
  };

  useEffect(() => {
    if (!statsRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Header animation - simple fade and slide
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 0.5,
            markers: false,
          },
        }
      );
    }

    // Cards smooth animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.inOut',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 65%',
            end: 'top 35%',
            scrub: 0.5,
            markers: false,
          },
        }
      );
    });

    // Stats smooth animation
    gsap.fromTo(
      statsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 75%',
          end: 'top 45%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    const trigger = ScrollTrigger.create({
      trigger: statsRef.current,
      start: 'top 75%',
      onEnter: () => {
        animateCounters();
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
            For Doctors
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 font-serif">
            Efficiently Manage and
            <br />
            Grow{' '}
            <span className="relative inline-block">
              Your Practice
              <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full"></span>
            </span>
          </h2>
        </div>

        {/* Three Cards */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Left Card */}
          <div 
            ref={(el) => { cardsRef.current[0] = el; }} 
            onMouseEnter={() => handleCardHover(0)}
            onMouseLeave={() => handleCardHoverEnd(0)}
            className="doctor-card bg-card rounded-2xl p-8 border border-border flex flex-col cursor-pointer transition-all"
          >
            <div className="mb-6">
              {/* Avatar group image */}
              <div className="w-full h-40 bg-muted rounded-xl flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/images/image.png" 
                  alt="Avatar Images"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Join Us And Take Your Medical Practice To New Heights
            </h3>
            <p className="text-muted-foreground text-sm">
              With our user-friendly application, you can efficiently serve a larger number of patients while increasing your earnings.
            </p>
          </div>

          {/* Center Card - Featured */}
          <div 
            ref={(el) => { cardsRef.current[1] = el; }} 
            onMouseEnter={() => handleCardHover(1)}
            onMouseLeave={() => handleCardHoverEnd(1)}
            className="doctor-card bg-card rounded-2xl p-8 border border-border md:col-span-1 lg:-mx-4 lg:scale-105 z-10 cursor-pointer transition-all"
          >
            <div className="mb-6">
              {/* Doctor image */}
              <div className="w-full h-56 bg-muted rounded-xl flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/images/img5.jpg" 
                  alt="Doctor Image"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Our platform offers doctors the opportunity to expand their practice like never before
            </h3>
            <p className="text-muted-foreground text-sm">
              Reach more patients and grow your medical practice with our comprehensive platform.
            </p>
          </div>

          {/* Right Card */}
          <div 
            ref={(el) => { cardsRef.current[2] = el; }} 
            onMouseEnter={() => handleCardHover(2)}
            onMouseLeave={() => handleCardHoverEnd(2)}
            className="doctor-card bg-card rounded-2xl p-8 border border-border flex flex-col cursor-pointer transition-all"
          >
            <div className="mb-6 relative h-40">
              {/* Scattered avatars image */}
              <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/images/image6.png" 
                  alt="Scattered Avatars"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Care For More Patients From Home
            </h3>
            <p className="text-muted-foreground text-sm">
              Provide remote care to a larger patient base without geographical limitations.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div ref={statsRef} id="doctor-stats" className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.patients}+</div>
            <p className="text-muted-foreground">Million Patient Visits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.earnings}%</div>
            <p className="text-muted-foreground">Increase in Earnings</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.doctors}k+</div>
            <p className="text-muted-foreground">Registered Doctors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{counters.support}/7</div>
            <p className="text-muted-foreground">Accessibility</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
