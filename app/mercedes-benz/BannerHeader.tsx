"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function BannerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isListingsOpen, setIsListingsOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsListingsOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    closeMenu();
    
    // Wait for menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = 100; // Offset for fixed header
        const targetY = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        const startY = window.pageYOffset;
        
        // Create an object to animate
        const scrollObj = { y: startY };
        
        // Use GSAP to animate scroll position with smooth easing
        gsap.to(scrollObj, {
          y: targetY,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: function() {
            window.scrollTo(0, scrollObj.y);
          }
        });
      }
    }, 300); // Wait for drawer animation to complete
  };

  return (
    <>
      <header className="damac_banner_header">
        <div className="damac_banner_header_container">
          <div className="damac_banner_header_logo">
            <Image
              src="/images/mercedes-benz/bbnn.webp"
              alt="Logo"
              width={150}
              height={60}
              className="damac_banner_header_logo_image"
              priority
            />
          </div>
          
          <div className="damac_banner_header_right">
            <button className="damac_banner_header_button">
              GET IN TOUCH
            </button>
            <button 
              className="damac_banner_header_hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={isMenuOpen ? "open" : ""}></span>
              <span className={isMenuOpen ? "open" : ""}></span>
              <span className={isMenuOpen ? "open" : ""}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer */}
      <div className={`damac_banner_drawer_overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
        <div className="damac_banner_drawer" onClick={(e) => e.stopPropagation()}>
          <div className="damac_banner_drawer_header">
            <div className="damac_banner_drawer_contact">
              <a href="tel:+971505786682">+971 50 578 6682</a>
              <a href="mailto:Drevendor1@gmail.com">DREVENDOR1@GMAIL.COM</a>
            </div>
            <button 
              className="damac_banner_drawer_close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="damac_banner_drawer_nav">
            <ul className="damac_banner_drawer_nav_list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("overview"); }}>OVERVIEW</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("highlights"); }}>HIGHLIGHTS</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("gallery"); }}>GALLERY</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("master-plan"); }}>MASTER PLAN</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("amenities"); }}>AMENITIES</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("location"); }}>LOCATION</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSectionClick("contact"); }}>CONTACT</a>
              </li>
            </ul>
          </nav>

          <div className="damac_banner_drawer_footer">
            <button className="damac_banner_drawer_button" onClick={(e) => { e.preventDefault(); handleSectionClick("contact"); }}>
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
