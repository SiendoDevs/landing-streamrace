import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, MonitorPlay, Timer, Layers, Flag, Swords, QrCode, Radio, Map, Youtube, Palette } from "lucide-react";
import Logo from "../components/Logo";
import SEO from "../components/SEO";
import PricingCard from "../components/pricing/PricingCard";
import ContactModal from "../components/LazyContactModal";
import { desktopPlans, visibleCloudPlans, CLOUD_INCLUDES, CLOUD_CONDITIONS } from "../components/pricing/pricingConfig";
import { TRADEMARK_MARK } from "../lib/trademark";

const INCLUDE_ICONS = {
  monitor: MonitorPlay,
  timer: Timer,
  layers: Layers,
  flag: Flag,
  swords: Swords,
  qr: QrCode,
  broadcast: Radio,
  map: Map,
  youtube: Youtube,
  palette: Palette,
};

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
        title="Programa Founder — 10 productoras · van 4"
        description="Streamrace Cloud solo se vende a las primeras 10 productoras Founder. Van 4. Founder, Founder Pro y Founder Premium. Desktop se abre al completar esos 10."
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
            "offers": visibleCloudPlans
              .filter((plan) => plan.price !== null)
              .map((plan) => ({
                "@type": "Offer",
                "name": plan.name,
                "priceCurrency": "USD",
                "price": String(plan.price)
              }))
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
            onClick={() => handleOpenModal("access", "")}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
          >
            Solicitar acceso Founder
          </button>
        </div>
      </nav>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">4 / 10 Founder</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none">
              Programa <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Founder</span>
            </h1>

            <p className="mt-5 text-white/50 text-lg max-w-3xl">
              Solo 10 productoras. Tres planes Founder, precio cerrado. Desktop es real: se abre cuando se completen esos 10.
            </p>
          </div>

          <section>
            {renderSectionHeading(
              "Streamrace Cloud",
              "Única venta ahora",
              "Founder, Founder Pro y Founder Premium. Los tres cuentan para los 10 cupos. Co-desarrollo y precio cerrado mientras no te salgas del plan.",
              "4 de 10 productoras"
            )}

            <div className="mb-14 border-y border-white/5 py-10">
              <div className="mb-9 text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">Todos los planes Cloud incluyen</div>
                <p className="mt-2 text-sm text-white/40">Lo que sale al aire. En Founder, Founder Pro y Founder Premium.</p>
              </div>
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
                {CLOUD_INCLUDES.map((item) => {
                  const Icon = INCLUDE_ICONS[item.icon];
                  return (
                    <div key={item.title} className="group flex gap-3">
                      {Icon && <Icon className="mt-0.5 h-4 w-4 shrink-0 text-(--accent)" />}
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest text-white/85 transition-colors group-hover:text-white">
                          {item.title}
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-white/45">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {visibleCloudPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} onSelect={handleOpenModal} variant="cloud" />
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/45">Condiciones</div>
              <ul className="mt-4 space-y-3">
                {CLOUD_CONDITIONS.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-white/50">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-white/35">
                Detalle en los{" "}
                <Link to="/terms-of-service" className="text-white/55 hover:text-white underline underline-offset-4">
                  Términos de Uso
                </Link>
                .
              </p>
            </div>

            <p className="mt-6 text-center text-sm text-white/40">
              ¿Necesitás marca blanca?{" "}
              <button
                type="button"
                onClick={() => handleOpenModal("demo", "Studio - Cloud (Consultar)")}
                className="text-white/70 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Escribinos
              </button>
              .
            </p>
          </section>

          {renderCallout(
            "Operación local",
            "Desktop existe. No se vende todavía.",
            "Licencia perpetua, offline. Precio real. La venta se abre al completar las 10 productoras Founder."
          )}

          <section className="mt-16 opacity-80">
            {renderSectionHeading(
              "Streamrace Desktop",
              "Licencia perpetua. Se abre al completar 10 Founder.",
              "Operación local, sin depender de Internet para lo crítico. Los precios son los de lista. El contrato, después de los 10 Founder.",
              "Próximamente"
            )}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
              {desktopPlans.map((plan) => (
                <PricingCard key={plan.licenses} plan={plan} onSelect={handleOpenModal} variant="desktop" unitPrice={desktopUnitPrice} />
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-white/40">
              Desktop no se contrata hasta completar 10 Founder. Las funciones online (votación, clima, chat) se cotizan aparte sobre Desktop.
            </p>
          </section>


          <div className="mt-14 md:mt-18 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/35 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {TRADEMARK_MARK} Solutions
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
