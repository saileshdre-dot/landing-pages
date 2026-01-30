"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OverviewSection() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Removed animations as requested

  const openEnquiryModal = () => {
    setIsEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="overview" className="damac_overview_section" ref={sectionRef}>
        <div className="container">
          <div className="damac_overview_content" ref={contentRef}>
            <div className="damac_overview_header">
              <p className="damac_overview_subheading">PROJECT OVERVIEW</p>
              <h2 className="damac_overview_heading">ABOUT THE DEVELOPMENT</h2>
            </div>
            <div className="damac_overview_text">
              <p>
                Mercedes-Benz Places | Binghatti City represents a new era of luxury living in Dubai. 
                This exclusive residential development combines the prestige of the Mercedes-Benz brand 
                with Binghatti's commitment to architectural excellence and innovative design.
              </p>
              <p>
                Located in one of Dubai's most sought-after areas, the development offers a range of 
                meticulously designed apartments and penthouses, each crafted to the highest standards 
                of quality and luxury. Residents will enjoy world-class amenities, stunning views, and 
                an unparalleled lifestyle experience.
              </p>
              <p>
                The project features state-of-the-art facilities including swimming pools, fitness centers, 
                landscaped gardens, and premium retail spaces. With its prime location and exceptional 
                design, Mercedes-Benz Places | Binghatti City sets a new benchmark for luxury living 
                in Dubai.
              </p>
            </div>
            <button className="damac_overview_button" onClick={openEnquiryModal}>
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Mercedes-Benz Places | Binghatti City"
      />
    </>
  );
}
