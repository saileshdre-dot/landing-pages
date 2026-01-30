"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountryPhoneDropdown from "../components/CountryPhoneDropdown";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    telephone: "",
    interestedUnitType: "",
  });
  const [phoneCode, setPhoneCode] = useState("+971");
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (sectionRef.current && headerRef.current && formRef.current) {
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

        // Animate form
        gsap.from(formRef.current!.children, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });

        ScrollTrigger.refresh();
      }, sectionRef.current);

      return () => ctx.revert();
    }
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
        <div className="damac_contact_header" ref={headerRef}>
          <h2 className="damac_contact_heading">Interested in Mercedes-Benz Places?</h2>
          <p className="damac_contact_description">
           Get exclusive details, pricing, floor plans, and availability.
          </p>
          <div className="grid_item_wrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p>No obligation</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p>No sales pressure</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p>Personalized consultation</p>
            </div>

          </div>
        </div>

        <form className="damac_contact_form" ref={formRef} onSubmit={handleSubmit}>
          <div className="damac_contact_form_columns">
            <div className="damac_contact_form_column">
              <div className="damac_contact_form_group">
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
                <div className="damac_contact_phone_wrapper">
                  <CountryPhoneDropdown value={phoneCode} onChange={setPhoneCode} />
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
                <select
                  id="contact_unit_type"
                  value={formData.interestedUnitType}
                  onChange={(e) =>
                    setFormData({ ...formData, interestedUnitType: e.target.value })
                  }
                  required
                  className="damac_contact_select"
                >
                  <option value="">Interested Unit Type*</option>
                  <option value="2 Bedroom">2 Bedroom</option>
                  <option value="3 Bedroom">3 Bedroom</option>
                  <option value="4 Bedroom">4 Bedroom</option>
                  <option value="5 Bedroom">5 Bedroom</option>
                </select>
              </div>
            </div>
          </div>

          {/* <div className="damac_contact_consent_group">
            <input
              type="checkbox"
              id="contact_consent"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              required
            />
            <label htmlFor="contact_consent">
              By clicking this checkbox, you accept that your details are shared with our team to contact you back.*
            </label>
          </div> */}

          <div className="damac_contact_recaptcha">
            <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            <p className="damac_contact_recaptcha_text">
              Submit Now | Our expert will contact you shortly
            </p>
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
