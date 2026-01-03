"use client";

interface FixedMobileButtonsProps {
  onOpenEnquiryModal?: () => void;
}

export default function FixedMobileButtons({ onOpenEnquiryModal }: FixedMobileButtonsProps) {
  return (
    <div className="fixed_mobile_buttons">
      <button
        className="fixed_mobile_cta_button"
        onClick={onOpenEnquiryModal}
      >
        GET AVAILABLE UNITS & PRICE LIST
      </button>
    </div>
  );
}

