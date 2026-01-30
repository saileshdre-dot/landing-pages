"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Amenity {
  icon: string;
  name: string;
}

const amenities: Amenity[] = [
  { icon: "🏊", name: "Swimming Pool" },
  { icon: "🏋️", name: "Fitness Center" },
  { icon: "🚗", name: "Valet Parking" },
  { icon: "🏢", name: "24/7 Concierge" },
  { icon: "🌳", name: "Landscaped Gardens" },
  { icon: "🍽️", name: "Fine Dining" },
  { icon: "🛍️", name: "Retail Outlets" },
  { icon: "🏥", name: "Medical Center" },
  { icon: "🎓", name: "Schools Nearby" },
  { icon: "✈️", name: "Airport Access" },
  { icon: "🏖️", name: "Beach Access" },
  { icon: "🎯", name: "Entertainment Zone" },
];

export default function AmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && bgImageRef.current && headerRef.current && amenitiesRef.current) {
      const ctx = gsap.context(() => {
        // Parallax effect for background image
        gsap.to(bgImageRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: "30%",
          ease: "none",
        });

        // Animate header
        gsap.from(headerRef.current?.children || [], {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Removed amenities cards animation as requested

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="amenities" className="damac_amenities_section" ref={sectionRef}>
      {/* Background Image with Parallax */}
      <div className="damac_amenities_bg" ref={bgImageRef}>
        <Image
          src="/images/buggati/gallery-2.jpg"
          alt="Amenities Background"
          fill
          className="damac_amenities_bg_image"
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Opaque Overlay */}
        <div className="damac_amenities_overlay"></div>
      </div>

      {/* Content */}
      <div className="damac_amenities_content">
        <div className="container">
          <div className="damac_amenities_header" ref={headerRef}>
            <p className="damac_amenities_subheading">LIFESTYLE</p>
            <h2 className="damac_amenities_heading">AMENITIES</h2>
          </div>
          <div className="damac_amenities_grid" ref={amenitiesRef}>
            {amenities.map((amenity, index) => (
              <div key={index} className="damac_amenity_item amenity-item">
                <div className="damac_amenity_icon">{amenity.icon}</div>
                <span className="damac_amenity_name">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
