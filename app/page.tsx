"use client";

import Image from "next/image";
import Link from "next/link";
import { FormModalProvider, useFormModal } from "./components/FormModalContext";
import FormModal from "./components/FormModal";

function HomePageContent() {
  const { openFormModal } = useFormModal();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      {/* Header with Logo - Same as Privacy Policy */}
      <header className="site_header">
        <div className="container">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="DRE Logo"
              width={150}
              height={50}
              style={{ width: "auto", height: "40px", objectFit: "contain" }}
            />
          </Link>
        </div>
      </header>

      {/* Property Card Section */}
      <div className="homepage-properties-section">
        <div className="container">
          <div className="homepage-single-property">
            <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/desktop hero section.png"
                  alt="HADO by Beyond"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 2.4M*
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="property-details">
                <h2 className="property-name">HADO by Beyond</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Apartments</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>1 to 4 BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7"/>
                      <rect x="14" y="3" width="7" height="7"/>
                      <rect x="14" y="14" width="7" height="7"/>
                      <rect x="3" y="14" width="7" height="7"/>
                    </svg>
                    <span>50/50 Payment Plan</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span>767 Sq. Ft.* Onwards</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Under Construction</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Dubai Islands, Dubai</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/hado-beyond" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormModal />
    </div>
  );
}

export default function HomePage() {
  return (
    <FormModalProvider>
      <HomePageContent />
    </FormModalProvider>
  );
}
