import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Logo from "../components/Logo";
import SEO from "../components/SEO";
import PricingCard from "../components/pricing/PricingCard";
import ContactModal from "../components/ContactModal";
import { cloudPlans, desktopPlans } from "../components/pricing/pricingConfig";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("demo");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpenModal = (type, plan = "") => {
    setModalType(type);
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const desktopUnitPrice = desktopPlans[0]?.unitPrice || 0;

  const renderSectionHeading = (title, subtitle, description, badge = null) => (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {badge && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-(--accent) animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{badge}</span>
        </div>
      )}
      <h2 className="text-3xl font-black italic uppercase tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-(--accent)/90">{subtitle}</p>
      <p className="mt-4 text-base leading-relaxed text-white/50">{description}</p>
    </div>
  );

  const renderCallout = (eyebrow, title, description) => (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">{eyebrow}</div>
          <h3 className="mt-2 text-xl font-black italic uppercase tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/50">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-(--accent) selection:text-black overflow-x-hidden"
      style={{ "--accent": "#D8552B" }}
    >
      <SEO
        title="Planes y Precios de Streamrace - Cloud y Desktop"
        description="Elegí cómo operar Streamrace: Cloud para productoras que buscan flexibilidad y funciones online, o Desktop para operación local y offline en transmisiones profesionales de automovilismo y karting."
        url="https://streamrace.solutions/precios"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Planes y Precios de Streamrace",
          "url": "https://streamrace.solutions/precios",
          "mainEntity": {
            "@type": "Product",
            "@id": "#cloud-plans",
            "name": "Streamrace Cloud",
            "description": "Sistema cloud para streaming de carreras",
            "offers": [
              {
                "@type": "Offer",
                "name": "Founder",
                "priceCurrency": "USD",
                "price": "49"
              },
              {
                "@type": "Offer",
                "name": "Pro",
                "priceCurrency": "USD",
                "price": "79"
              },
              {
                "@type": "Offer",
                "name": "Premium",
                "priceCurrency": "USD",
                "price": "129"
              }
            ]
          }
        }}
      />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialType={modalType} initialPlan={selectedPlan} />

      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-[18px] md:h-[25px] w-auto object-contain cursor-pointer" />
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-4 h-4" /> Volver
          </Link>

          <Link to="/precios" className="hidden sm:block text-xs font-bold uppercase tracking-widest text-(--accent)">
            Precios
          </Link>

          <button
            onClick={() => handleOpenModal("demo", "")}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
          >
            Solicitar Demo
          </button>
        </div>
      </nav>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Precios</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none">
              Elegí cómo <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">operar</span> Streamrace
            </h1>

            <p className="mt-5 text-white/50 text-lg max-w-3xl">
              Cloud para productoras que buscan flexibilidad, colaboración y funciones online. Desktop para organizaciones que necesitan operar desde infraestructura propia, incluso sin conexión a Internet.
            </p>
          </div>

          <section>
            {renderSectionHeading(
              "Streamrace Cloud",
              "Operación flexible con funciones online",
              "Ideal para productoras, campeonatos y equipos que quieren centralizar su operación, acceder a funciones online y escalar su transmisión con una implementación más simple.",
              "Recomendado para productoras"
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {cloudPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} onSelect={handleOpenModal} variant="cloud" />
              ))}
            </div>
          </section>

          {renderCallout(
            "Operación local",
            "¿Necesitás trabajar desde tu propia infraestructura?",
            "Streamrace Desktop está pensado para organizaciones que priorizan una operación local, estable y sin dependencia de Internet para lo crítico."
          )}

          <section className="mt-16">
            {renderSectionHeading(
              "Streamrace Desktop",
              "Licencia Perpetua",
              "Ideal para productoras y organizaciones que necesitan control local, operación offline y una licencia perpetua para trabajar desde su propia infraestructura.",
              "Licencias perpetuas"
            )}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {desktopPlans.map((plan) => (
                <PricingCard key={plan.licenses} plan={plan} onSelect={handleOpenModal} variant="desktop" unitPrice={desktopUnitPrice} />
              ))}
            </div>
          </section>


          <div className="mt-14 md:mt-18 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/35 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Streamrace Solutions®
            </div>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                Privacidad
              </Link>
              <Link to="/terms-of-service" className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
