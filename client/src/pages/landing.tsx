import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import CaseStudies from "@/components/case-studies";
import AISystems from "@/components/ai-systems";
import FAQSection from "@/components/faq-section";
import TrustIndicators from "@/components/trust-indicators";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import CalendlyModal from "@/components/calendly-modal";
import { useState } from "react";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      <Navigation onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <ProblemSection />
      <CaseStudies />
      <AISystems onOpenModal={openModal} />
      <FAQSection />
      <TrustIndicators />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
