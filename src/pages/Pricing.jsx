import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ChevronLeft } from "lucide-react";
import Logo from "../components/Logo";

const ContactModal = React.lazy(() => import("../components/ContactModal"));

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("demo");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpenModal = (type, plan = "") => {
    setModalType(type);
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: "Trial",
      price: "Gratis",
      highlight: false,
      desc: "Sistema Streamrace completo para un solo evento.",
      features: ["Branding de Streamrace", "Setup guiado", "Soporte estándar"],
      cta: "Empezar gratis",
      type: "demo",
    },
    {
      name: "Pro",
      price: "US$ 99/mes",
      highlight: false,
      desc: "Sistema Streamrace completo.",
      features: ["Setup guiado", "Soporte estándar", "Sin instancias simultáneas"],
      cta: "Elegir plan",
      type: "demo",
    },
    {
      name: "Broadcast",
      price: "US$ 249/mes",
      highlight: true,
      desc: "Sistema Streamrace completo.",
      features: ["Setup guiado", "Hasta 4 instancias simultáneas", "Soporte prioritario"],
      cta: "Elegir plan",
      type: "demo",
    },
    {
      name: "Enterprise",
      price: "Setup + US$ 449/mes",
      highlight: false,
      desc: "Streamrace completo con White Label.",
      features: ["Personalización a medida", "Setup guiado", "Hasta 4 instancias simultáneas", "Soporte prioritario"],
      cta: "Hablar con ventas",
      type: "demo",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-(--accent) selection:text-black overflow-x-hidden"
      style={{ "--accent": "#D8552B" }}
    >
      <Suspense
        fallback={
          isModalOpen ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="w-10 h-10 border-4 border-white/10 border-t-(--accent) rounded-full animate-spin" />
            </div>
          ) : null
        }
      >
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialType={modalType} initialPlan={selectedPlan} />
      </Suspense>

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Precios</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none">
              Elegí el plan <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">ideal</span>
            </h1>

            <p className="mt-5 text-white/50 text-lg max-w-2xl">
             Te ofrecemos una version Trial gratis para que pruebes todo el potencial de Streamrace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className={[
                  "relative rounded-2xl p-7 bg-white/5 backdrop-blur-md border transition-all",
                  "shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_70px_rgba(0,0,0,0.55)]",
                  p.highlight ? "border-(--accent)/40" : "border-white/10 hover:border-white/20",
                ].join(" ")}
              >
                {p.highlight && (
                  <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-(--accent)/35 to-purple-600/20 blur opacity-40 pointer-events-none" />
                )}

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/55">{p.name}</div>
                      <div className="mt-3 text-2xl font-black italic uppercase tracking-tight leading-none">{p.price}</div>
                      <div className="mt-3 text-sm text-white/45 leading-relaxed">{p.desc}</div>
                    </div>

                    {p.highlight && (
                      <div className="shrink-0 px-3 py-1 rounded-full bg-(--accent) text-black text-[10px] font-black uppercase tracking-widest">
                        Recomendado
                      </div>
                    )}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-white/70">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className={[
                          "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center",
                          p.highlight ? "bg-(--accent)/15 border border-(--accent)/30" : "bg-white/5 border border-white/10",
                        ].join(" ")}
                        >
                          <Check className={p.highlight ? "w-3.5 h-3.5 text-(--accent)" : "w-3.5 h-3.5 text-white/60"} />
                        </span>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleOpenModal(p.type, `${p.name} (${p.price})`)}
                    className={[
                      "mt-auto pt-8 w-full",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "block w-full py-3 rounded-xl font-black uppercase italic tracking-wider transition-all",
                        p.highlight
                          ? "bg-(--accent) text-black hover:brightness-110 shadow-[0_0_24px_rgba(216,85,43,0.35)]"
                          : "bg-white/5 text-white border border-white/10 hover:bg-white/10",
                      ].join(" ")}
                    >
                      {p.cta}
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

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