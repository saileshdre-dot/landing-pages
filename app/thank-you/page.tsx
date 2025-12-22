"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ThankYouPage() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="main_header">
        <div className="container">
          <nav className="main_nav">
            <div className="nav_logo">
              <Image
                src="/images/logo.png"
                alt="DRE Logo"
                width={120}
                height={40}
                style={{ width: "auto", height: "35px", objectFit: "contain" }}
              />
            </div>
            <ul className="nav_links">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#home";
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#highlights";
                  }}
                >
                  Highlights
                </a>
              </li>
              <li>
                <a
                  href="#why-invest"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#why-invest";
                  }}
                >
                  Why invest
                </a>
              </li>
              <li>
                <a
                  href="#units"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#units";
                  }}
                >
                  Units
                </a>
              </li>
              <li>
                <a
                  href="#payment-plan"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#payment-plan";
                  }}
                >
                  Payment Plan
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#location";
                  }}
                >
                  Location Advantage
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#amenities";
                  }}
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#about";
                  }}
                >
                  About Developer
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#contact";
                  }}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="thank_you_section">
        <div className="container">
          <div className="thank_you_content">
            <div className="thank_you_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1 className="thank_you_title">Thank You!</h1>
            <p className="thank_you_message">
              We have received your enquiry. Our team will contact you shortly.
            </p>
            <p className="thank_you_submessage">
              We appreciate your interest in HADO by Beyond. One of our
              representatives will reach out to you within 24 hours.
            </p>
            <div className="thank_you_actions">
              <Link href="/" className="thank_you_button primary">
                Back to Home
              </Link>
              <a
                href="https://wa.me/971527543243?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20premium%20unit%20availability%20and%20the%20best%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="thank_you_button secondary"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="disclaimer_section">
        <div className="container">
          <p className="disclaimer_text">
            <strong>Disclaimer:</strong> The information provided on this
            website is intended exclusively for informational purposes and
            should not be construed as an offer of services. This site is
            managed by a RERA authorized real estate agency namely DRE Homes
            Real Estate Broker is a company registered in Dubai, United Arab
            Emirates (License No. 599208), We are regulated by the Real Estate
            Regulatory Agency under office number 652.The pricing information
            presented on this website is subject to alteration without advance
            notification, and the assurance of property availability cannot be
            guaranteed. The images showcased on this website are for
            representational purposes only and may not accurately reflect the
            actual properties. We may share your data with Real Estate
            Regulatory Agency (RERA) registered Developers for further
            processing as necessary. Additionally, we may send updates and
            information to the mobile number or email address registered with
            us. All rights reserved. The content, design, and information on
            this website are protected by copyright and other intellectual
            property rights. Any unauthorized use or reproduction of the content
            may violate applicable laws. For accurate and up-to-date information
            regarding services, pricing, availability, and any other details, it
            is recommended to contact us directly through the provided contact
            information on this website. Thank you for visiting our website.
          </p>
          <div className="footer_links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

