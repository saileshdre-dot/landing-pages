"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CountryPhoneDropdown from "./components/CountryPhoneDropdown";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"roi" | "brochure" | "layout">(
    "roi"
  );
  const [formData, setFormData] = useState({ name: "", whatsapp: "" });
  const [formPhoneCode, setFormPhoneCode] = useState("+971");
  const [isChecked, setIsChecked] = useState(true);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [enquiryPhoneCode, setEnquiryPhoneCode] = useState("+971");
  const [isEnquiryChecked, setIsEnquiryChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnquirySubmitting, setIsEnquirySubmitting] = useState(false);
  const [sectionEnquiryData, setSectionEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [sectionEnquiryPhoneCode, setSectionEnquiryPhoneCode] = useState("+971");
  const [isSectionEnquiryChecked, setIsSectionEnquiryChecked] = useState(true);
  const [isSectionEnquirySubmitting, setIsSectionEnquirySubmitting] =
    useState(false);


  const handleWhatsAppChange = (value: string) => {
    // Only allow digits
    const digitsOnly = value.replace(/\D/g, "");
    setFormData({ ...formData, whatsapp: digitsOnly });
  };

  const handlePhoneChange = (
    value: string,
    setter: (data: any) => void,
    currentData: any
  ) => {
    // Only allow digits
    const digitsOnly = value.replace(/\D/g, "");
    setter({ ...currentData, phone: digitsOnly });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const openFormModal = (type: "roi" | "brochure" | "layout") => {
    setModalType(type);
    setIsFormModalOpen(true);
  };

  const getModalHeading = () => {
    switch (modalType) {
      case "roi":
        return "Only 17 premium units offering strong ROI potential. Share your WhatsApp number to receive full details within minutes";
      case "brochure":
        return "DOWNLOAD HADO BY BEYOND BROCHURE...";
      case "layout":
        return "Get HADO by Beyond's detailed floor plans and layouts. Share your WhatsApp number to receive the layouts within minutes.";
      default:
        return "Only 17 premium units offering strong ROI potential. Share your WhatsApp number to receive full details within minutes";
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
                    scrollToSection("home");
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
                    scrollToSection("highlights");
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
                    scrollToSection("why-invest");
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
                    scrollToSection("units");
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
                    scrollToSection("payment-plan");
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
                    scrollToSection("location");
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
                    scrollToSection("amenities");
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
                    scrollToSection("about");
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
                    scrollToSection("contact");
                  }}
                >
                  Contact us
                </a>
              </li>
            </ul>
            <button
              className="mobile_menu_toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={isMobileMenuOpen ? "open" : ""}></span>
              <span className={isMobileMenuOpen ? "open" : ""}></span>
              <span className={isMobileMenuOpen ? "open" : ""}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div
          className="mobile_menu_overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mobile_menu_modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mobile_menu_close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="mobile_nav">
              <ul className="mobile_nav_links">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
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
                      scrollToSection("highlights");
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
                      scrollToSection("why-invest");
                    }}
                  >
                    Why invest?
                  </a>
                </li>
                <li>
                  <a
                    href="#units"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("units");
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
                      scrollToSection("payment-plan");
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
                      scrollToSection("location");
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
                      scrollToSection("amenities");
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
                      scrollToSection("about");
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
                      scrollToSection("contact");
                    }}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      <div id="home" className="banner_section">
        <div className="container">
          <div className="banner_content_wrapper">
            <div className="content_left">
              <h1>6KM BEACH JAPANESE INSPIRED</h1>
              <p>1-4BR LUXURY WATERFRONT APARTMENT</p>
              <div className="buttons">
                <button onClick={() => openFormModal("brochure")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 15V3" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                  Download Brochure
                </button>
                <button
                  onClick={() => openFormModal("roi")}
                  className="call_to_action"
                >
                  {" "}
                  Check Premium Units list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="project_meta_section">
        <div className="meta_section_overlay"></div>
        <div className="container">
          <div className="meta_content_wrapper">
            <h2>
              Miss This Data <br /> Miss The Best Investment
            </h2>
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="get_callback_button"
            >
              <span>GET THE REAL NUMBERS BEFORE YOU INVEST</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <div className="meta_row">
              <div className="meta_item">
                <div className="meta_icon_wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <p className="value">1-4BR</p>
                <p className="label">Apartment</p>
              </div>
              <div className="meta_item">
                <div className="meta_icon_wrapper">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    د.إ
                  </span>
                </div>
                <p className="value">2.4M AED</p>
                <p className="label">Starting Price</p>
              </div>
              <div className="meta_item">
                <div className="meta_icon_wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <p className="value">50/50</p>
                <p className="label">Payment Plan</p>
              </div>
              <div className="meta_item">
                <div className="meta_icon_wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="value">6KM</p>
                <p className="label">Waterfront</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="project_highlights_section">
        <div className="container">
          <div className="project_highlights_card">
            <div className="highlights_badge">PROJECT HIGHLIGHTS</div>
            <div className="highlights_content">
              <div className="highlight_item">
                <span className="highlight_label">Developer</span>
                <span className="highlight_value">Beyond</span>
              </div>
              <div className="highlight_item">
                <span className="highlight_label">Property type</span>
                <span className="highlight_value">Waterfront Apartment</span>
              </div>
              <div className="highlight_item">
                <span className="highlight_label">Property Units</span>
                <span className="highlight_value">1-4BR</span>
              </div>
              <div className="highlight_item">
                <span className="highlight_label">Location</span>
                <span className="highlight_value">Dubai Islands</span>
              </div>
              <div className="highlight_item">
                <span className="highlight_label">Payment Plan</span>
                <span className="highlight_value">50/50</span>
              </div>
              <div className="highlight_item">
                <span className="highlight_label">Handover</span>
                <span className="highlight_value">Q2, 2029</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-invest" className="difference_section">
        <div className="container">
          <div className="section_content">
            <div className="section_image">
              <Image
                src="/images/wcu1.jpg"
                alt="HADO Design"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="section_text">
              <h2>What Makes Different From Other Waterfront Apartments?</h2>
              <div className="accordion_wrapper">
                <div
                  className={`accordion_item ${
                    openAccordion === 0 ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion_header"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 0 ? null : 0)
                    }
                  >
                    <span>
                      Ultra-Japanese Design Philosophy (Rare in Dubai)
                    </span>
                    <span className="accordion_icon">
                      {openAccordion === 0 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="accordion_content">
                    <p>
                      Most waterfront projects focus on luxury only. HADO
                      introduces Japanese principles of simplicity, balance, and
                      calm, where space, light, and nature are intentionally
                      designed to create emotional well-being—not just visual
                      appeal.
                    </p>
                    <p className="difference_note">
                      <strong>Difference:</strong> Lifestyle-led design, not
                      just premium finishes.
                    </p>
                  </div>
                </div>

                <div
                  className={`accordion_item ${
                    openAccordion === 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion_header"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 1 ? null : 1)
                    }
                  >
                    <span>True View Protection & Tower Orientation</span>
                    <span className="accordion_icon">
                      {openAccordion === 1 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="accordion_content">
                    <p>
                      Unlike many waterfront developments where towers block
                      each other over time, HADO's three sculptural towers are
                      positioned so no building obstructs another—ensuring
                      long-term sea, skyline, and open views.
                    </p>
                    <p className="difference_note">
                      <strong>Difference:</strong> Guaranteed light, privacy,
                      and view value.
                    </p>
                  </div>
                </div>

                <div
                  className={`accordion_item ${
                    openAccordion === 2 ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion_header"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 2 ? null : 2)
                    }
                  >
                    <span>Part of the SIØRA Master Development</span>
                    <span className="accordion_icon">
                      {openAccordion === 2 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="accordion_content">
                    <p>
                      HADO is not a standalone building. It sits within SIØRA, a
                      curated waterfront district with:
                    </p>
                    <ul>
                      <li>6 km of beach</li>
                      <li>140,000 sqm of green open spaces</li>
                      <li>Low-density planning</li>
                    </ul>
                    <p className="difference_note">
                      <strong>Difference:</strong> Community-scale waterfront
                      living vs isolated towers.
                    </p>
                  </div>
                </div>

                <div
                  className={`accordion_item ${
                    openAccordion === 3 ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion_header"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 3 ? null : 3)
                    }
                  >
                    <span>Waterfront Proximity + City Access</span>
                    <span className="accordion_icon">
                      {openAccordion === 3 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="accordion_content">
                    <p>
                      Many waterfront projects trade connectivity for seclusion.
                      HADO offers both:
                    </p>
                    <ul>
                      <li>10–12 minutes to Downtown & Burj Khalifa</li>
                      <li>15–20 minutes to DXB Airport</li>
                      <li>Immediate beachfront living</li>
                    </ul>
                    <p className="difference_note">
                      <strong>Difference:</strong> Waterfront without compromise
                      on city access.
                    </p>
                  </div>
                </div>

                <div
                  className={`accordion_item ${
                    openAccordion === 4 ? "active" : ""
                  }`}
                >
                  <button
                    className="accordion_header"
                    onClick={() =>
                      setOpenAccordion(openAccordion === 4 ? null : 4)
                    }
                  >
                    <span>Stronger Investment Fundamentals</span>
                    <span className="accordion_icon">
                      {openAccordion === 4 ? "−" : "+"}
                    </span>
                  </button>
                  <div className="accordion_content">
                    <p>
                      With a AED 2.4M entry point, limited supply, and growing
                      demand in Dubai Islands, HADO offers:
                    </p>
                    <ul>
                      <li>Higher rental appeal for lifestyle tenants</li>
                      <li>Capital appreciation potential pre-handover</li>
                      <li>Flexible 50/50 payment plan until Q3 2029</li>
                    </ul>
                    <p className="difference_note">
                      <strong>Difference:</strong> Balanced appeal for end-users
                      and investors.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="roi_report_btn"
                onClick={() => openFormModal("roi")}
              >
                Download Full ROI Report
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="why_choose_section">
        <div className="container">
          <div className="section_content">
            <div className="section_text">
              <h2>Why Buyers Choose HADO by Beyond?</h2>
              <ul className="benefits_list">
                <li>
                  <strong>Low-Density Waterfront Living</strong>
                  <p>
                    Fewer residences, more open space, and a calm island
                    environment—unlike crowded beachfront towers.
                  </p>
                </li>
                <li>
                  <strong>Future-Ready Island Destination</strong>
                  <p>
                    Dubai Islands is one of the city's next major growth zones,
                    offering early-mover advantage before full maturity.
                  </p>
                </li>
                <li>
                  <strong>Lifestyle + Privacy Balance</strong>
                  <p>
                    Designed for residents who want beachfront living without
                    tourist congestion or short-term rental chaos.
                  </p>
                </li>
                <li>
                  <strong>Spacious, Efficient Layouts</strong>
                  <p>
                    Well-planned interiors with larger usable space, wide
                    balconies, and practical room proportions across all unit
                    types.
                  </p>
                </li>
                <li>
                  <strong>Designed for Long-Term Ownership</strong>
                  <p>
                    Timeless architecture, protected views, and master-planned
                    surroundings that age well and hold value over time.
                  </p>
                </li>
              </ul>
              <button
                className="roi_report_btn"
                onClick={() => openFormModal("roi")}
              >
                Download Full ROI Report
              </button>
            </div>
            <div className="section_image">
              <Image
                src="/images/wcu.jpg"
                alt="HADO Lifestyle"
                width={600}
                height={600}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="units" className="unit_types_section">
        <div className="container">
          <h2 className="section_title">HADO by Beyond - Unit Types & Sizes</h2>
          <div className="unit_types_grid">
            <div className="unit_card">
              <div className="unit_header">
                <h3 className="unit_type">1 Bedroom</h3>
              </div>
              <div className="unit_details">
                <div className="unit_detail_row">
                  <span className="unit_label">Size Range (sq.ft)</span>
                  <span className="unit_value">767 – 1,426 sq.ft</span>
                </div>
              </div>
              <button
                className="view_floor_plan_btn"
                onClick={() => openFormModal("layout")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Download Layout
              </button>
            </div>

            <div className="unit_card">
              <div className="unit_header">
                <h3 className="unit_type">2 Bedroom</h3>
              </div>
              <div className="unit_details">
                <div className="unit_detail_row">
                  <span className="unit_label">Size Range (sq.ft)</span>
                  <span className="unit_value">1,063 – 2,199 sq.ft</span>
                </div>
              </div>
              <button
                className="view_floor_plan_btn"
                onClick={() => openFormModal("layout")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Download Layout
              </button>
            </div>

            <div className="unit_card">
              <div className="unit_header">
                <h3 className="unit_type">3 Bedroom</h3>
              </div>
              <div className="unit_details">
                <div className="unit_detail_row">
                  <span className="unit_label">Size Range (sq.ft)</span>
                  <span className="unit_value">1,631 – 2,714 sq.ft</span>
                </div>
              </div>
              <button
                className="view_floor_plan_btn"
                onClick={() => openFormModal("layout")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Download Layout
              </button>
            </div>

            <div className="unit_card">
              <div className="unit_header">
                <h3 className="unit_type">4 Bedroom Simplex</h3>
              </div>
              <div className="unit_details">
                <div className="unit_detail_row">
                  <span className="unit_label">Size Range (sq.ft)</span>
                  <span className="unit_value">2,425 – 2,809 sq.ft</span>
                </div>
              </div>
              <button
                className="view_floor_plan_btn"
                onClick={() => openFormModal("layout")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Download Layout
              </button>
            </div>

            <div className="unit_card">
              <div className="unit_header">
                <h3 className="unit_type">4 Bedroom Duplex</h3>
              </div>
              <div className="unit_details">
                <div className="unit_detail_row">
                  <span className="unit_label">Size Range (sq.ft)</span>
                  <span className="unit_value">4,784 sq.ft</span>
                </div>
              </div>
              <button
                className="view_floor_plan_btn"
                onClick={() => openFormModal("layout")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Download Layout
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="payment-plan" className="payment_plan_section">
        <div className="container">
          <h2 className="section_title">Payment Plan For HADO by Beyond</h2>
          <div className="payment_timeline">
            <div className="timeline_item">
              <div className="timeline_marker">10%</div>
              <div className="timeline_content">
                <h3 className="timeline_title">On Booking</h3>
              </div>
            </div>
            <div className="timeline_connector"></div>
            <div className="timeline_item">
              <div className="timeline_marker">40%</div>
              <div className="timeline_content">
                <h3 className="timeline_title">During Construction</h3>
              </div>
            </div>
            <div className="timeline_connector"></div>
            <div className="timeline_item">
              <div className="timeline_marker">50%</div>
              <div className="timeline_content">
                <h3 className="timeline_title">On Handover (Q3 2029)</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="location_advantage_section">
        <div className="container">
          <div className="section_content">
            <div className="section_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8!2d55.265167!3d25.274843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzI5LjQiTiA1NcKwMTUnNTQuNiJF!5e0!3m2!1sen!2sae!4v1728123456789&hl=en"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: "8px",
                  minHeight: "500px",
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HADO by Beyond Location"
              ></iframe>
            </div>
            <div className="section_text">
              <h2>Location Advantage</h2>
              <ul className="location_list">
                <li>
                  <span className="location_name">Mina Rashid</span>
                  <span className="location_time">5–7 mins</span>
                </li>
                <li>
                  <span className="location_name">Jumeirah Beach</span>
                  <span className="location_time">10 mins</span>
                </li>
                <li>
                  <span className="location_name">Downtown Dubai</span>
                  <span className="location_time">20 mins</span>
                </li>
                <li>
                  <span className="location_name">DXB Airport</span>
                  <span className="location_time">15–20 mins</span>
                </li>
                <li>
                  <span className="location_name">
                    Dubai Islands Waterfront
                  </span>
                  <span className="location_time">On-site</span>
                </li>
              </ul>
              <button
                className="download_brochure_btn"
                onClick={() => openFormModal("brochure")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="amenities" className="amenities_section">
        <div className="container">
          <h2 className="section_title">Amenities at HADO by Beyond</h2>
          <p className="amenities_description">
            Indulge in a lifestyle of luxury with our carefully curated
            amenities designed for your comfort and convenience.
          </p>
          <div className="amenities_grid">
            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h20M2 12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2M2 12v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4" />
                  <path d="M6 8V6M18 8V6M8 10h8" />
                </svg>
              </div>
              <p className="amenity_name">Infinity Swimming Pool</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12h8M12 8v8" />
                  <path d="M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2" />
                </svg>
              </div>
              <p className="amenity_name">Landscaped Decks & Gardens</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <p className="amenity_name">Wellness Zones</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className="amenity_name">Yoga & Meditation Spaces</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6.5 6.5h11v11h-11z" />
                  <path d="M6.5 17.5L12 12l5.5 5.5" />
                  <path d="M12 12v5.5" />
                </svg>
              </div>
              <p className="amenity_name">Fully Equipped Gym</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                  <path d="M6.5 6.5h11v11h-11z" />
                </svg>
              </div>
              <p className="amenity_name">Outdoor Fitness Area</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M4 12h16M12 4v16" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <p className="amenity_name">Kids Pool</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M8 8h8v8H8z" />
                </svg>
              </div>
              <p className="amenity_name">Kids Play Area</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                  <path d="M8 8h8v8H8z" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <p className="amenity_name">BBQ & Picnic Areas</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M9 9h6v6H9z" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <p className="amenity_name">Relaxation Lounges</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 4v6M16 4v6" />
                  <path d="M9 14h6M9 18h6" />
                </svg>
              </div>
              <p className="amenity_name">Multi-Purpose Community Room</p>
            </div>

            <div className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12h8M12 8v8" />
                  <path d="M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <p className="amenity_name">Common Garden Areas</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Developer</h2>

          <p className="about-text">
            Beyond Developments is a forward-thinking real estate developer
            focused on creating design-led, lifestyle-driven communities in
            prime Dubai locations. With a strong emphasis on architectural
            quality, low-density planning, and long-term value creation, Beyond
            Developments delivers projects that combine modern living with
            thoughtful master planning. Their developments are positioned to
            appeal to both end-users and investors seeking sustainable growth
            and premium waterfront living.
          </p>

          <div className="key-highlights">
            <h3 className="highlights-title">Key Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-box">
                <div className="highlight-value">AED 1B+</div>
                <div className="highlight-label">Development value</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-value">6KM</div>
                <div className="highlight-label">Waterfront</div>
              </div>
              <div className="highlight-box">
                <div className="highlight-value">140,000 sqm</div>
                <div className="highlight-label">Integrated green space</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="enquiry-section">
        <div className="container">
          <div className="enquiry-section-wrapper">
            <div className="enquiry-image-wrapper">
              <Image
                src="/images/banner.webp"
                alt="HADO by Beyond"
                width={600}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="enquiry-logo-overlay">
                <Image
                  src="/images/logo.png"
                  alt="Beyond Logo"
                  width={200}
                  height={200}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "180px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="enquiry-form-wrapper">
              <div className="enquiry-form-content">
                <h2 className="enquiry-section-title">Get in Touch</h2>
                <p className="enquiry-section-subtitle">
                  Direct Call Give You Exclusive Units <br /> & Better Price Act Fast
                </p>
                <div className="enquiry_icons">
                  <a
                    href="tel:+971527543243"
                    className="enquiry_icon_btn call_icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/971527543243?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20premium%20unit%20availability%20and%20the%20best%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="enquiry_icon_btn whatsapp_icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>

                <form
                  className="enquiry_form section_enquiry_form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSectionEnquirySubmitting(true);
                    try {
                      const response = await fetch("/api/submit-enquiry", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          name: sectionEnquiryData.name,
                          email: sectionEnquiryData.email,
                          phone: `${sectionEnquiryPhoneCode}${sectionEnquiryData.phone}`,
                          consent: isSectionEnquiryChecked,
                        }),
                      });
                      const data = await response.json();
                      if (response.ok) {
                        window.location.href = "/thank-you";
                      } else {
                        alert("Error submitting enquiry. Please try again.");
                      }
                    } catch (error) {
                      console.error("Error:", error);
                      alert("Error submitting enquiry. Please try again.");
                    } finally {
                      setIsSectionEnquirySubmitting(false);
                    }
                  }}
                >
                  <div className="form_group">
                    <input
                      type="text"
                      id="section_enquiry_name"
                      placeholder="Name"
                      value={sectionEnquiryData.name}
                      onChange={(e) =>
                        setSectionEnquiryData({
                          ...sectionEnquiryData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form_group">
                    <input
                      type="email"
                      id="section_enquiry_email"
                      placeholder="Email ID"
                      value={sectionEnquiryData.email}
                      onChange={(e) =>
                        setSectionEnquiryData({
                          ...sectionEnquiryData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form_group phone_input_wrapper">
                    <CountryPhoneDropdown
                      value={sectionEnquiryPhoneCode}
                      onChange={setSectionEnquiryPhoneCode}
                    />
                    <input
                      type="tel"
                      id="section_enquiry_phone"
                      placeholder="50 123 4567"
                      value={sectionEnquiryData.phone}
                      onChange={(e) =>
                        handlePhoneChange(
                          e.target.value,
                          setSectionEnquiryData,
                          sectionEnquiryData
                        )
                      }
                      required
                    />
                  </div>

                  <div className="form_checkbox_group">
                    <input
                      type="checkbox"
                      id="section_enquiry_consent"
                      checked={isSectionEnquiryChecked}
                      onChange={(e) =>
                        setIsSectionEnquiryChecked(e.target.checked)
                      }
                      required
                    />
                    <label htmlFor="section_enquiry_consent">
                      I hereby authorize company representatives to reach out to
                      me via Call, SMS, Email, or WhatsApp to share details
                      about their products and offers, regardless of my DNC/NDNC
                      registration.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="enquiry_submit_btn"
                    disabled={isSectionEnquirySubmitting}
                  >
                    {isSectionEnquirySubmitting
                      ? "Submitting..."
                      : "Submit Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {isFormModalOpen && (
        <div
          className="form_modal_overlay"
          onClick={() => setIsFormModalOpen(false)}
        >
          <div className="form_modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="form_modal_close"
              onClick={() => setIsFormModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="form_modal_content">
              <div className="form_header">
                <p className="form_heading">{getModalHeading()}</p>
              </div>

              <form
                className="contact_form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  try {
                    const response = await fetch("/api/submit-form", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: formData.name,
                        whatsapp: `${formPhoneCode}${formData.whatsapp}`,
                        consent: isChecked,
                      }),
                    });
                    const data = await response.json();
                    if (response.ok) {
                      window.location.href = "/thank-you";
                    } else {
                      console.error("Form submission error:", data);
                      alert(
                        `Error: ${
                          data.error ||
                          "Failed to submit form. Please try again."
                        }`
                      );
                    }
                  } catch (error) {
                    console.error("Error:", error);
                    alert(
                      "Error submitting form. Please check console for details."
                    );
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="form_group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form_group phone_input_wrapper">
                  <CountryPhoneDropdown
                    value={formPhoneCode}
                    onChange={setFormPhoneCode}
                  />
                  <input
                    type="tel"
                    id="whatsapp"
                    placeholder="50 123 4567"
                    value={formData.whatsapp}
                    onChange={(e) => handleWhatsAppChange(e.target.value)}
                    required
                  />
                </div>

                <div className="form_checkbox_group">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    required
                  />
                  <label htmlFor="consent">
                    I hereby authorize company representatives to reach out to
                    me via Call, SMS, Email, or WhatsApp to share details about
                    their products and offers, regardless of my DNC/NDNC
                    registration.
                  </label>
                </div>

                <button
                  type="submit"
                  className="form_submit_btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Request Available unit list"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {isEnquiryModalOpen && (
        <div
          className="form_modal_overlay"
          onClick={() => setIsEnquiryModalOpen(false)}
        >
          <div className="enquiry_modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="form_modal_close"
              onClick={() => setIsEnquiryModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="enquiry_modal_content">
              <div className="enquiry_header">
                <h3 className="enquiry_heading">
                  Direct Call Give You Exclusive Units & Better Price Act Fast
                </h3>
                <div className="enquiry_icons">
                  <a
                    href="tel:+971527543243"
                    className="enquiry_icon_btn call_icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/971527543243?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20premium%20unit%20availability%20and%20the%20best%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="enquiry_icon_btn whatsapp_icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <form
                className="enquiry_form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsEnquirySubmitting(true);
                  try {
                    const response = await fetch("/api/submit-enquiry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: enquiryData.name,
                        email: enquiryData.email,
                        phone: `${enquiryPhoneCode}${enquiryData.phone}`,
                        consent: isEnquiryChecked,
                      }),
                    });
                    const data = await response.json();
                    if (response.ok) {
                      window.location.href = "/thank-you";
                    } else {
                      alert("Error submitting enquiry. Please try again.");
                    }
                  } catch (error) {
                    console.error("Error:", error);
                    alert("Error submitting enquiry. Please try again.");
                  } finally {
                    setIsEnquirySubmitting(false);
                  }
                }}
              >
                <div className="form_group">
                  <input
                    type="text"
                    id="enquiry_name"
                    placeholder="Name"
                    value={enquiryData.name}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form_group">
                  <input
                    type="email"
                    id="enquiry_email"
                    placeholder="Email ID"
                    value={enquiryData.email}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form_group phone_input_wrapper">
                  <CountryPhoneDropdown
                    value={enquiryPhoneCode}
                    onChange={setEnquiryPhoneCode}
                  />
                  <input
                    type="tel"
                    id="enquiry_phone"
                    placeholder="50 123 4567"
                    value={enquiryData.phone}
                    onChange={(e) =>
                      handlePhoneChange(
                        e.target.value,
                        setEnquiryData,
                        enquiryData
                      )
                    }
                    required
                  />
                </div>

                <div className="form_checkbox_group">
                  <input
                    type="checkbox"
                    id="enquiry_consent"
                    checked={isEnquiryChecked}
                    onChange={(e) => setIsEnquiryChecked(e.target.checked)}
                    required
                  />
                  <label htmlFor="enquiry_consent">
                    I hereby authorize company representatives to reach out to
                    me via Call, SMS, Email, or WhatsApp to share details about
                    their products and offers, regardless of my DNC/NDNC
                    registration.
                  </label>
                </div>

                <button
                  type="submit"
                  className="enquiry_submit_btn"
                  disabled={isEnquirySubmitting}
                >
                  {isEnquirySubmitting ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Mobile Buttons */}
      <div className="fixed_mobile_buttons">
        <a
          href="https://wa.me/971527543243?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20premium%20unit%20availability%20and%20the%20best%20pricing."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed_nav_item"
        >
          <div className="nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span className="nav_label">WhatsApp</span>
        </a>
        <a href="tel:+971527543243" className="fixed_nav_item call_nav_item">
          <div className="call_popover">
            <span>Direct call gives you premium units & Better price act fast</span>
          </div>
          <div className="nav_icon call_icon_circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span className="nav_label active">Call Now</span>
        </a>
        <button
          className="fixed_nav_item"
          onClick={() => setIsEnquiryModalOpen(true)}
        >
          <div className="nav_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <span className="nav_label">Enquiry</span>
        </button>
      </div>

      <footer className="disclaimer_section">
        <div className="container">
          <div className="footer_content_wrapper">
            <div className="rera_verification_box">
            <div className="rera_qr_code">
                  <Image
                    src="/images/qr_scanner.png"
                    alt="RERA DLD QR Code"
                    width={150}
                    height={150}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                    <h3 className="rera_heading">
                RERA & DLD<br />Verified Project
              </h3>
              </div>
              <div className="rera_content">
            
              <p className="rera_description">
                This project is developed and verified in partnership with the Dubai
                Land Department <span className="dld_link">(DLD)</span> and governed by
                the Real Estate Regulatory Agency (RERA), ensuring legal security and
                buyer confidence.
              </p>
              </div>
            </div>
            <div className="disclaimer_content">
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
            </div>
          </div>
          <div className="footer_links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
