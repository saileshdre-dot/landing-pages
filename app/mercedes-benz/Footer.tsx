"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current && contentRef.current && imageColRef.current) {
      const ctx = gsap.context(() => {
        // Animate content
        gsap.from(contentRef.current!.children, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        });

        // Animate image
        gsap.from(imageColRef.current, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        ScrollTrigger.refresh();
      }, footerRef.current);

      return () => ctx.revert();
    }
  }, []);

  return (
    <footer className="damac_footer_section" ref={footerRef}>
      <div className="damac_footer_container">
        <div className="damac_footer_row">
          <div className="damac_footer_content_col">
            <div className="damac_footer_content_wrapper" ref={contentRef}>
              <div className="damac_footer_content_area">
                {/* Logo */}
                <div className="damac_footer_logo">
                  <Image
                    src="/images/buggati/bbnn.webp"
                    alt="Logo"
                    width={150}
                    height={60}
                    className="damac_footer_logo_image"
                    priority
                  />
                </div>

                {/* About The Developer */}
                <div className="damac_footer_about_developer">
                  <h3 className="damac_footer_about_developer_title">About The Developer</h3>
                  <p className="damac_footer_about_developer_text">
                    Binghatti Developers, the real estate development arm of Binghatti Holding, operates throughout the UAE with an investment value constituting AED 3.5 Billion across a portfolio of 40 projects, The company currently operates in several areas throughout Dubai including Dubai Silicon Oasis, Jumeirah Village Circle, Liwan, Dubai Land Residence Complex and Business Bay. The company possesses bold plans of expansion in the following years, specifically focusing on the expansion of its real-estate portfolio in Dubai.
                  </p>
                </div>

                {/* Footer Links */}
                <nav className="damac_footer_links">
                  <ul className="damac_footer_links_list">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="damac_footer_image_col" ref={imageColRef}>
            <div className="damac_footer_image_wrapper">
              <Image
                src="/images/buggati/gallery-6.jpg"
                alt="Modern Interior"
                width={1200}
                height={700}
                className="damac_footer_image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
