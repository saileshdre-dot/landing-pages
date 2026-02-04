"use client";

import { useState, useRef, useEffect } from "react";
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    interestedUnitType: "",
  });
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-detect country on mount - run immediately
  useEffect(() => {
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
      setPhoneCode(detectedCode || "+971");
    };

    detectCountry();
  }, []);

  const handlePhoneChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setFormData({ ...formData, telephone: digitsOnly });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${phoneCode}${formData.telephone}`,
          unitType: formData.interestedUnitType,
          consent: consentChecked,
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="damac_contact_section" ref={sectionRef}>
      <div className="container">
        <div className="damac_contact_header">
          <h2 className="damac_contact_heading">Interested in Mercedes-Benz Places?</h2>
          <p className="damac_contact_description">
           Get exclusive details, pricing, floor plans, and availability.
          </p>
          <div className="damac_contact_checklist_wrapper">
            <div className="damac_contact_checklist_item">
              <div className="damac_contact_checklist_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="damac_contact_checklist_text">No obligation</p>
            </div>
            <div className="damac_contact_checklist_item">
              <div className="damac_contact_checklist_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="damac_contact_checklist_text">No sales pressure</p>
            </div>
            <div className="damac_contact_checklist_item">
              <div className="damac_contact_checklist_icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="damac_contact_checklist_text">Personalized consultation</p>
            </div>
          </div>
        </div>

        <form className="damac_contact_form" onSubmit={handleSubmit}>
          <div className="damac_contact_form_columns">
            <div className="damac_contact_form_column">
              <div className="damac_contact_form_group">
                <label htmlFor="contact_full_name">Full Name</label>
                <input
                  type="text"
                  id="contact_full_name"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="damac_contact_form_group">
                <label htmlFor="contact_email">Email Address</label>
                <input
                  type="email"
                  id="contact_email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="damac_contact_form_column">
              <div className="damac_contact_form_group">
                <label htmlFor="contact_telephone">Phone Number</label>
                <div className="damac_contact_phone_wrapper">
                  <CountryPhoneDropdown value={phoneCode || "+971"} onChange={setPhoneCode} />
                  <input
                    type="tel"
                    id="contact_telephone"
                    placeholder="Phone Number*"
                    value={formData.telephone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="damac_contact_form_group">
                <label htmlFor="contact_unit_type">Interested Unit Type</label>
                <select
                  id="contact_unit_type"
                  value={formData.interestedUnitType}
                  onChange={(e) =>
                    setFormData({ ...formData, interestedUnitType: e.target.value })
                  }
                  required
                  className="damac_contact_select"
                >
                  <option value="">Select Unit Type*</option>
                  <option value="Studio">Studio</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedroom">2 Bedroom</option>
                  <option value="3 Bedroom">3 Bedroom</option>
                  <option value="4 Bedroom">4 Bedroom</option>
                  <option value="5 Bedroom">5 Bedroom</option>
                </select>
              </div>
            </div>
          </div>

          <div className="damac_contact_consent_group">
            <input
              type="checkbox"
              id="contact_consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              required
            />
            <label htmlFor="contact_consent">
              I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to share details about their products and offers, regardless of my DNC/NDNC registration.
            </label>
          </div>


          <button
            type="submit"
            className="damac_contact_submit_btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "SEND"}
          </button>
        </form>
      </div>
    </section>
  );
}
