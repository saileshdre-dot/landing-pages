"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";

// Country code to calling code mapping
const COUNTRY_TO_CALLING_CODE: Record<string, string> = {
  AE: "+971", // United Arab Emirates
  SA: "+966", // Saudi Arabia
  KW: "+965", // Kuwait
  QA: "+974", // Qatar
  OM: "+968", // Oman
  BH: "+973", // Bahrain
  IN: "+91",  // India
  PK: "+92",  // Pakistan
  BD: "+880", // Bangladesh
  US: "+1",   // United States
  GB: "+44",  // United Kingdom
  CA: "+1",   // Canada
  AU: "+61",  // Australia
  DE: "+49",  // Germany
  FR: "+33",  // France
  IT: "+39",  // Italy
  ES: "+34",  // Spain
  NL: "+31",  // Netherlands
  BE: "+32",  // Belgium
  CH: "+41",  // Switzerland
  SE: "+46",  // Sweden
  NO: "+47",  // Norway
  DK: "+45",  // Denmark
  FI: "+358", // Finland
  PL: "+48",  // Poland
  RU: "+7",   // Russia
  CN: "+86",  // China
  JP: "+81",  // Japan
  KR: "+82",  // South Korea
  SG: "+65",  // Singapore
  MY: "+60",  // Malaysia
  TH: "+66",  // Thailand
  PH: "+63",  // Philippines
  ID: "+62",  // Indonesia
  VN: "+84",  // Vietnam
  EG: "+20",  // Egypt
  JO: "+962", // Jordan
  LB: "+961", // Lebanon
  TR: "+90",  // Turkey
  ZA: "+27",  // South Africa
  NG: "+234", // Nigeria
  KE: "+254", // Kenya
  BR: "+55",  // Brazil
  AR: "+54",  // Argentina
  MX: "+52",  // Mexico
  NZ: "+64",  // New Zealand
};

interface FloorPlanEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlanTitle?: string;
  buttonText?: string;
}

export default function FloorPlanEnquiryModal({
  isOpen,
  onClose,
  floorPlanTitle,
  buttonText = "ENQUIRE NOW",
}: FloorPlanEnquiryModalProps) {
  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const countryDetectedRef = useRef(false);

  // Auto-detect country on mount (only once)
  useEffect(() => {
    if (countryDetectedRef.current) return;
    
    const detectCountry = async () => {
      let detectedCode: string | null = null;

      // Method 1: Try IP geolocation (multiple services for reliability)
      const ipServices = [
        "https://ipapi.co/json/",
        "https://ip-api.com/json/?fields=countryCode",
      ];

      for (const service of ipServices) {
        try {
          const response = await fetch(service, {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            // ipapi.co returns country_code, ip-api.com returns countryCode
            const countryCode = data.country_code || data.countryCode;

            if (countryCode && COUNTRY_TO_CALLING_CODE[countryCode]) {
              detectedCode = COUNTRY_TO_CALLING_CODE[countryCode];
              break;
            }
          }
        } catch (error) {
          // Try next service
          continue;
        }
      }

      // Method 2: Try browser timezone (more reliable than locale)
      if (!detectedCode) {
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          // Map common timezones to countries
          const timezoneToCountry: Record<string, string> = {
            // India
            "Asia/Kolkata": "IN",
            "Asia/Calcutta": "IN",
            "Asia/New_Delhi": "IN",
            "Asia/Mumbai": "IN",
            "Asia/Chennai": "IN",
            // UAE
            "Asia/Dubai": "AE",
            // UK
            "Europe/London": "GB",
            // US
            "America/New_York": "US",
            "America/Los_Angeles": "US",
            "America/Chicago": "US",
            "America/Denver": "US",
            // Germany
            "Europe/Berlin": "DE",
            // France
            "Europe/Paris": "FR",
            // Singapore
            "Asia/Singapore": "SG",
            // Japan
            "Asia/Tokyo": "JP",
            // Australia
            "Australia/Sydney": "AU",
            "Australia/Melbourne": "AU",
            // Canada
            "America/Toronto": "CA",
            "America/Vancouver": "CA",
            // Saudi Arabia
            "Asia/Riyadh": "SA",
            // Pakistan
            "Asia/Karachi": "PK",
            // Bangladesh
            "Asia/Dhaka": "BD",
            // China
            "Asia/Shanghai": "CN",
            "Asia/Beijing": "CN",
          };

          const countryCode = timezoneToCountry[timezone];
          if (countryCode && COUNTRY_TO_CALLING_CODE[countryCode]) {
            detectedCode = COUNTRY_TO_CALLING_CODE[countryCode];
          }
        } catch (error) {
          console.log("Timezone detection failed");
        }
      }

      // Method 3: Try browser locale as last resort
      if (!detectedCode) {
        try {
          const locale = navigator.language || (navigator as any).userLanguage;
          const countryCode = locale.split("-")[1]?.toUpperCase();
          
          if (countryCode && COUNTRY_TO_CALLING_CODE[countryCode]) {
            detectedCode = COUNTRY_TO_CALLING_CODE[countryCode];
          }
        } catch (error) {
          console.log("Locale detection failed");
        }
      }

      // Set detected code or default to UAE
      if (detectedCode) {
        setPhoneCode(detectedCode);
        countryDetectedRef.current = true;
      } else {
        setPhoneCode("+971");
      }
    };

    detectCountry();
  }, []);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      document.body.style.overflow = "hidden";
      
      const ctx = gsap.context(() => {
        gsap.from(modalRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.from(contentRef.current, {
          scale: 0.9,
          y: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.1,
        });
      }, modalRef.current);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setEnquiryData({ ...enquiryData, phone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: enquiryData.name,
          email: enquiryData.email,
          phone: `${phoneCode}${enquiryData.phone}`,
          message: `Enquiry for: ${floorPlanTitle || "Floor Plan"}`,
          consent: isChecked,
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="damac_floor_plan_enquiry_modal_overlay"
      onClick={onClose}
      ref={modalRef}
    >
      <div
        className="damac_floor_plan_enquiry_modal"
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        <button
          className="damac_floor_plan_enquiry_modal_close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="damac_floor_plan_enquiry_modal_content">
          <div className="damac_floor_plan_enquiry_header">
            <p className="damac_floor_plan_enquiry_subtitle">{buttonText}</p>
            <div className="damac_floor_plan_enquiry_header_buttons">
              <a
                href="https://wa.me/971505786682?text=Hello%2C%20I%20would%20like%20to%20understand%20the%20growth%20potential%20of%20Mercedes-Benz%20Palace%2C%20Bhighatti%20City.%20Thank%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="damac_floor_plan_enquiry_header_btn damac_floor_plan_enquiry_header_btn_whatsapp"
                aria-label="WhatsApp"
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                Contact Us Directly
                
              </a>
            </div>
          </div>

          <form className="damac_floor_plan_enquiry_form" onSubmit={handleSubmit}>
            <div className="damac_floor_plan_enquiry_form_group">
              <label htmlFor="floor_plan_name">Full Name</label>
              <input
                type="text"
                id="floor_plan_name"
                placeholder="Enter your full name"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="damac_floor_plan_enquiry_form_group">
              <label htmlFor="floor_plan_email">Email Address</label>
              <input
                type="email"
                id="floor_plan_email"
                placeholder="Enter your email address"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="damac_floor_plan_enquiry_form_group">
              <label htmlFor="floor_plan_phone">Phone Number</label>
              <div className="damac_floor_plan_enquiry_phone_wrapper damac_floor_plan_phone_dropdown_black">
                <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                <input
                  type="tel"
                  id="floor_plan_phone"
                  placeholder="50 123 4567"
                  value={enquiryData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="damac_floor_plan_enquiry_checkbox_group">
              <input
                type="checkbox"
                id="floor_plan_consent"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                required
              />
              <label htmlFor="floor_plan_consent">
                I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.
              </label>
            </div>

            <button
              type="submit"
              className="damac_floor_plan_enquiry_submit_btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="damac_floor_plan_enquiry_spinner" width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="32" strokeDashoffset="32">
                      <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite"/>
                      <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Now"
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
