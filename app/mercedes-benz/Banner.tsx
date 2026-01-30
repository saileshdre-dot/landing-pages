"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerHeader from "./BannerHeader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DamacIslandsBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && contentRef.current && imageRef.current) {
      const ctx = gsap.context(() => {
        // Animate content
        gsap.from(contentRef.current!.children, {
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });

        // Animate image
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Refresh ScrollTrigger after animations are set up
        ScrollTrigger.refresh();
      }, bannerRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="damac_contact_banner_section" ref={bannerRef}>
      <div className="damac_contact_banner_container">
            <BannerHeader />
        <div className="damac_contact_banner_row">
          <div className="damac_contact_banner_content_col">
            <div className="damac_contact_banner_content_wrapper" ref={contentRef}>
              <div className="damac_contact_banner_content_area">
                <p className="damac_contact_banner_subheading">MERCEDES-BENZ PLACES</p>
                <h1 className="damac_contact_banner_heading">
                  BINGHATTI <span className="damac_contact_banner_heading_gold">CITY</span>
                </h1>
                <p className="damac_contact_banner_content_text">
                  A prestigious residential development in Dubai, combining luxury living with world-class amenities. Experience the perfect blend of elegance and modern sophistication.
                </p>
                
                <div className="damac_contact_banner_project_details">
                  <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Location:</span>
                    <span className="damac_contact_banner_detail_value">Dubai, UAE</span>
                  </div>
                  <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Developer:</span>
                    <span className="damac_contact_banner_detail_value">Binghatti Developers</span>
                  </div>
                  <div className="damac_contact_banner_detail_item">
                    <span className="damac_contact_banner_detail_label">Status:</span>
                    <span className="damac_contact_banner_detail_value">Under Construction</span>
                  </div>
                </div>
                
             
              </div>
            </div>
          </div>
          
          <div className="damac_contact_banner_image_col" ref={imageRef}>
        
            <div className="damac_contact_banner_image_wrapper">
              <Image
                src="/images/banner.webp"
                alt="Modern Houses"
                width={1200}
                height={700}
                className="damac_contact_banner_image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
