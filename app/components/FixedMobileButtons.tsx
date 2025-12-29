"use client";

import Image from "next/image";

interface FixedMobileButtonsProps {
  onOpenEnquiryModal?: () => void;
}

export default function FixedMobileButtons({ onOpenEnquiryModal }: FixedMobileButtonsProps) {
  return (
    <div className="fixed_mobile_buttons">
      <a
        href="tel:971527543243"
        className="fixed_nav_item"
      >
        <div className="nav_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
        </div>
        <span className="nav_label">Call</span>
      </a>
      <a
       href="https://wa.me/971527543243?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20availability%20and%20the%20best%20pricing."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed_nav_item call_nav_item"
      >
        <div className="call_popover">
          <span>WhatsApp for available units and pricing details</span>
        </div>
        <div className="nav_icon call_icon_circle">
          <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} />
        </div>
        <span className="nav_label active">WhatsApp Now</span>
      </a>
      <button
        className="fixed_nav_item"
        onClick={onOpenEnquiryModal}
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
  );
}

