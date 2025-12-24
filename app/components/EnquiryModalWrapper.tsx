"use client";

import { useState, useEffect } from "react";
import EnquiryModal from "./EnquiryModal";
import FixedMobileButtons from "./FixedMobileButtons";

export default function EnquiryModalWrapper() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
      <FixedMobileButtons onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />
    </>
  );
}

