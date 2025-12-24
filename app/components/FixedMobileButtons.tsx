"use client";

interface FixedMobileButtonsProps {
  onOpenEnquiryModal?: () => void;
}

export default function FixedMobileButtons({ onOpenEnquiryModal }: FixedMobileButtonsProps) {
  return (
    <div className="fixed_mobile_buttons">
      <a
        href="https://wa.me/971527543243?text=Hello%2C%20I%20would%20like%20to%20receive%20complete%20details%20for%20this%20property%2C%20including%20availability%20and%20the%20best%20pricing."
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
          <span>Call for available units and pricing details</span>
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

