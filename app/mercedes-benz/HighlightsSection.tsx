"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const highlights = [
  "Official Mercedes-Benz branded residences",
  "Signature architectural design by Binghatti",
  "Premium residences with luxury finishes",
  "Smarthome integration",
  "Iconic skyline and city views",
  "High-demand urban location",
  "World-class lifestyle amenities",
  "Strong rental & capital appreciation potential",
  "Limited-edition luxury living",
  "Ideal for investors & end users"
];

export default function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Removed animations as requested

  return (
    <section id="highlights" className="damac_highlights_section" ref={sectionRef}>
      <div className="container">
        <div className="damac_highlights_main_wrapper">
          <div className="damac_highlights_background" ref={backgroundRef}>
            <Image src="/images/mercedes-benz/banner.webp" alt="Highlights Background" width={1000} height={1000} />
          </div>
          <div className="damac_highlights_content">
            <div className="damac_highlights_text_wrapper" ref={contentRef}>
              <p className="damac_highlights_subheading">WHY CHOOSE US</p>
              <h2 className="damac_highlights_heading">PROJECT HIGHLIGHTS</h2>
              <div className="damac_highlights_list">
                {highlights.map((highlight, index) => (
                  <div key={index} className="damac_highlight_item highlight-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
