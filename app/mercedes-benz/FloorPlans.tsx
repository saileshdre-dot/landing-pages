"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MasterPlan() {
  const [selectedImage, setSelectedImage] = useState<boolean>(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && headerRef.current && imageRef.current) {
      const ctx = gsap.context(() => {
        // Animate header
        gsap.from(headerRef.current!.children, {
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

        // Animate master plan image
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  const openLightbox = () => {
    setSelectedImage(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(false);
    document.body.style.overflow = "unset";
  };

  const openEnquiryModal = () => {
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage && e.key === "Escape") {
        closeLightbox();
      }
      if (enquiryModalOpen && e.key === "Escape") {
        closeEnquiryModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, enquiryModalOpen]);

  return (
    <>
      <section id="master-plan" className="damac_master_plan_section" ref={sectionRef}>
        <div className="container">
          <div className="damac_master_plan_header" ref={headerRef}>
            <p className="damac_master_plan_subheading">MASTER PLAN</p>
            <h2 className="damac_master_plan_heading">PROJECT OVERVIEW</h2>
          </div>

          <div className="damac_master_plan_wrapper" ref={imageRef}>
            <div className="damac_master_plan_image_container">
              <Image
                src="/images/buggati/master.jpg"
                alt="Master Plan"
                width={1200}
                height={800}
                className="damac_master_plan_image"
              />
              <div className="damac_master_plan_overlay">
                <button
                  className="damac_master_plan_overlay_button damac_master_plan_enquire_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openEnquiryModal();
                  }}
                >
                  ENQUIRE NOW
                </button>
                <button
                  className="damac_master_plan_overlay_button damac_master_plan_view_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox();
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  VIEW LARGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="damac_lightbox" onClick={closeLightbox}>
          <button
            className="damac_lightbox_close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="damac_lightbox_content" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/images/buggati/master.jpg"
              alt="Master Plan"
              width={1400}
              height={1000}
              className="damac_lightbox_image"
              priority
            />
            <div className="damac_lightbox_title">Master Plan</div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Master Plan"
      />
    </>
  );
}
