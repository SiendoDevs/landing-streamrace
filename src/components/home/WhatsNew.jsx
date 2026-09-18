import { motion as Motion } from "framer-motion";
import { Flag, Timer, UserRound, Megaphone } from "lucide-react";

const OVERLAYS = [
  "Live",
  "Parrilla",
  "Resultados",
  "Graphs TV",
  "Pista",
  "Standings",
  "Info",
  "Voto",
  "Clima",
  "Chat",
  "Pantalla de Pausa Interactiva",
];

const JOBS = [
  {
    icon: Flag,
    title: "Control de carrera",
    text: "Banderas, semáforo, Auto de Seguridad (SC, AS, PC, SLOW).",
  },
  {
    icon: Timer,
    title: "Torre al aire",
    text: "Posiciones, gaps, vueltas y estados. Torre modo compacto para ocupar menor espacio en la pantalla.",
  },
  {
    icon: UserRound,
    title: "Gráficas de piloto",
    text: "Ficha, título, sectores, tiempos y peleas por posición.",
  },
  {
    icon: Megaphone,
    title: "Anuncios con IA",
    text: "Anuncios para tus sponsors, patrocinadores y anuncios propios.",
  },
];

export default function WhatsNew() {
  return (
    <section id="sistema" className="py-24 bg-[#060606] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">11 overlays</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4">Lo que el operador necesita al aire</h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-8">
            Once escenas. Un Master. Torre, parrilla, clima, voto, Pantalla de Pausa Interactiva y el resto, sin cambiar de herramienta.
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {OVERLAYS.map((name) => (
              <span
                key={name}
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-widest text-white/70"
              >
                {name}
              </span>
            ))}
          </div>
        </Motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOBS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <Icon className="w-8 h-8 text-(--accent) mb-4" />
                <h3 className="text-lg font-black italic uppercase text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
