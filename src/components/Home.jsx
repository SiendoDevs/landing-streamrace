import React, { useState } from "react";
import ContactModal from "./ContactModal";
import SEO from "./SEO";
import Navbar from "./home/Navbar";
import Hero from "./home/Hero";
import ProofBar from "./home/ProofBar";
import ClientLogos from "./home/ClientLogos";
import VotingShowcase from "./home/VotingShowcase";
import WeatherShowcase from "./home/WeatherShowcase";
import HardwareShowcase from "./home/HardwareShowcase";
import ControlSection from "./home/ControlSection";
import WhatsNew from "./home/WhatsNew";
import OverlayShowcase from "./home/OverlayShowcase";
import Ecosystem from "./home/Ecosystem";
import FeaturesGrid from "./home/FeaturesGrid";
import FaqSection, { FAQ_ITEMS } from "./home/FaqSection";
import FooterCTA from "./home/FooterCTA";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("demo");

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div 
      className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-(--accent) selection:text-black overflow-x-hidden"
      style={{ "--accent": "#D8552B" }}
    >
      <SEO
        title="Streamrace — Overlays de TV para transmisiones de automovilismo"
        description="Overlays de TV para transmisiones de automovilismo. Un panel para operadores gráficos y directores. 4 clientes Founder. Cupos limitados."
        url="https://streamrace.solutions/"
        schemaData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "Streamrace",
              description:
                "Overlays de TV para transmisiones de automovilismo. Un panel para operadores gráficos y directores. 4 clientes Founder.",
              url: "https://streamrace.solutions",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Windows, macOS, Web",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "49",
                highPrice: "129",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ],
        }}
      />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialType={modalType} />

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        onOpenModal={handleOpenModal}
      />
      <Hero onOpenModal={handleOpenModal} />
      <ProofBar />
      <ClientLogos />
      <VotingShowcase />
      <WeatherShowcase />
      <HardwareShowcase />
      <ControlSection />
      <WhatsNew />
      <OverlayShowcase />
      <Ecosystem />
      <FeaturesGrid />
      <FaqSection />
      <FooterCTA onOpenModal={handleOpenModal} />
    </div>
   );
}
