"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import WhyInvestSection from "./WhyInvestSection";
import WhyChooseSection from "./WhyChooseSection";
import UnitTypesSection from "./UnitTypesSection";
import LocationSection from "./LocationSection";
import FormModal from "./FormModal";
import EnquiryModal from "./EnquiryModal";
import ContactSection from "./ContactSection";
import FixedMobileButtons from "./FixedMobileButtons";
import { FormModalProvider, useFormModal } from "./FormModalContext";

function HomePageContent() {
  const { openFormModal } = useFormModal();
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Banner onOpenFormModal={openFormModal} />
      <WhyInvestSection onOpenFormModal={openFormModal} />
      <WhyChooseSection onOpenFormModal={openFormModal} />
      <UnitTypesSection onOpenFormModal={openFormModal} />
      <LocationSection onOpenFormModal={openFormModal} />
      <ContactSection />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
      <FixedMobileButtons onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />
    </>
  );
}

export default function HomePageClient() {
  return (
    <FormModalProvider>
      <HomePageContent />
      <FormModal />
    </FormModalProvider>
  );
}

