"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const AnimatedCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const cardData = [
    {
      image: "/images/image1.jpg",
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals instantly from anywhere. Instant video calls with certified doctors and specialists worldwide available 24/7.",
    },
    {
      image: "/images/image2.jpg",
      title: "Smart Records",
      description: "Secure, cloud-based patient record management system. Your complete medical history encrypted and accessible anywhere, anytime.",
    },
    {
      image: "/images/image3.jpg",
      title: "AI Diagnostics",
      description: "Advanced AI-powered preliminary health assessments. Machine learning algorithms provide accurate health insights and analysis.",
    },
    {
      image: "/images/image4.jpg",
      title: "24/7 Support",
      description: "Round-the-clock medical assistance and emergency care. Expert medical team ready to assist you any time of day or night.",
    },
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Healthcare <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for modern telemedicine in one platform
          </p>
        </div>
      </div>

      {/* Continuous Scrolling Cards */}
      <div ref={containerRef} className="relative">
        <div className="flex overflow-hidden">
          <div
            className={`flex gap-8 ${isPaused ? '' : 'animate-scroll'}`}
            style={{
              animation: isPaused ? 'none' : 'scroll 25s linear infinite',
            }}
          >
            {/* First set of cards */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flip-card-container flex-shrink-0"
                style={{ perspective: "900px" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flip-card group">
                  {/* Front Side - Image */}
                  <div className="flip-card-front">
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Back Side - Text/Description */}
                  <div className="flip-card-back">
                    <div className="flex flex-col justify-center items-center gap-4 h-full p-8">
                      <h3 className="back-heading text-2xl font-bold text-center">
                        {card.title}
                      </h3>
                      <p className="text-center text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {cardData.map((card, index) => (
              <div
                key={`duplicate-${index}`}
                className="flip-card-container flex-shrink-0"
                style={{ perspective: "900px" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flip-card group">
                  {/* Front Side - Image */}
                  <div className="flip-card-front">
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>

                  {/* Back Side - Text/Description */}
                  <div className="flip-card-back">
                    <div className="flex flex-col justify-center items-center gap-4 h-full p-8">
                      <h3 className="back-heading text-2xl font-bold text-center">
                        {card.title}
                      </h3>
                      <p className="text-center text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default AnimatedCards;
