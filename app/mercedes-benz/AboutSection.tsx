"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && backgroundRef.current && contentRef.current) {
      const ctx = gsap.context(() => {
        // Animate background image
        gsap.from(backgroundRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Animate content box
        if (contentRef.current) {
          gsap.from(contentRef.current.children, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            x: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
        }

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="damac_about_section" ref={sectionRef}>
      <div className="container">
        <div className="main_wrapper">
          <div className="damac_about_background" ref={backgroundRef}>
            <Image src="/images/buggati/banner.webp" alt="About Section Background" width={1000} height={1000} />
          </div> 
          <div className="damac_about_content">
            <div className="damac_about_text_wrapper" ref={contentRef}>
              <p className="damac_about_subheading">MERCEDES-BENZ PLACES</p>
              <h2 className="damac_about_heading">LUXURY LIVING REDEFINED</h2>
              
              <div className="damac_about_body">
                <p className="damac_about_paragraph">
                  Mercedes-Benz Places | Binghatti City represents the pinnacle of luxury residential living in Dubai. This exclusive development combines the prestige of the Mercedes-Benz brand with world-class architecture and design.
                </p>
                <p className="damac_about_paragraph">
                  Located in one of Dubai's most prestigious areas, each residence is meticulously crafted to offer unparalleled comfort, sophistication, and a lifestyle that reflects the excellence of the Mercedes-Benz brand.
                </p>
              </div>
              
              <button className="damac_about_button">
                EXPLORE PROPERTIES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
