import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const FAQ_ITEMS = [
  {
    q: "¿Funciona con OBS o vMix?",
    a: "Sí. Streamrace usa el motor de navegador de OBS y de vMix para poner los gráficos al aire en 1920×1080. 4K, pronto.",
  },
  {
    q: "¿Cómo toma los datos de cronometraje?",
    a: "Por la URL pública de Speedhive o Race Monitor: la pegás y el sistema lee los tiempos. También se conecta por red (TCP/IP) a un servidor MYLAPS Orbits: host y puerto en Scoreboard Settings; el 50000 suele estar disponible. Protocolo RMonitor.",
  },
  {
    q: "¿Hay delay?",
    a: "Imperceptible. Unos 150 ms en la conexión de datos por URL.",
  },
  {
    q: "¿Necesito una PC potente?",
    a: "No. Lo operás desde casi cualquier computadora de la cabina.",
  },
  {
    q: "¿Lo puedo usar en eventos simultáneos?",
    a: "Sí. Como Founder tenés tu instancia independiente, activa 24/7, y podés solicitar hasta 3 instancias extra por año.",
  },
  {
    q: "¿Puedo usar el logo de mi productora o del campeonato?",
    a: "Sí. Logos en todos los overlays: el de tu productora y el del campeonato o categoría que estés transmitiendo.",
  },
  {
    q: "¿Puedo cambiar los colores?",
    a: "Sí. El color primario de todos los overlays.",
  },
  {
    q: "¿Hay más de un diseño de overlays?",
    a: "Dos temas hoy: Original y Carbon Pro. Vienen más. También marca blanca para productoras.",
  },
  {
    q: "¿Los pilotos salen con foto e información?",
    a: "Sí. Cargás la base y el sistema los reconoce cuando hay que mostrarlos.",
  },
  {
    q: "¿Puedo mostrar publicidad?",
    a: "Sí. Cargás patrocinadores y los disparás en el momento preciso.",
  },
  {
    q: "¿Puedo cargar circuitos?",
    a: "Sí. Hay una sección y un overlay dedicados.",
  },
  {
    q: "¿Puedo cargar la info del evento?",
    a: "Sí. Hay una sección y un overlay dedicados.",
  },
  {
    q: "¿Tiene clima?",
    a: "Sí. Overlay de clima con radar y pronóstico horario por ubicación, más widget en carrera con temperatura de aire y temperatura aproximada de pista.",
  },
  {
    q: "¿Tiene Stream Deck o MIDI?",
    a: "Sí. Bitfocus Companion (gratis) dispara las escenas del Master: un botón o una nota MIDI cambia Live, parrilla, clima, Pantalla de Pausa Interactiva y el resto. OBS tiene que estar en la URL del Master.",
  },
  {
    q: "¿Cómo aprendo a usarlo y configurarlo para mi transmisión?",
    a: "Reunión de demostración, soporte y videotutoriales a disposición.",
  },
  {
    q: "¿Existe una versión de escritorio?",
    a: "Sí. Para quien necesita operar offline, con licencia perpetua.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
              Preguntas frecuentes
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4">
            Lo que preguntan antes de salir al aire
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Cronometraje, mixer, cabina y gráfica. Respuestas cortas.
          </p>
        </Motion.div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.24) }}
                className={`rounded-xl border overflow-hidden transition-colors ${
                  isOpen ? "border-white/15 bg-white/5" : "border-white/5 bg-white/[0.03]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-sm md:text-base font-black italic uppercase tracking-tight text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-(--accent) transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm md:text-base text-white/60 font-light leading-relaxed">
                        {item.a}
                      </p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
