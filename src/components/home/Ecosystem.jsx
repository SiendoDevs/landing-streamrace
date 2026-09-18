import { motion as Motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Logo from "../Logo";

export default function Ecosystem() {
  return (
    <section className="py-24 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4 flex flex-wrap items-center justify-center gap-3">
            <span>Ecosistema</span>
            <Logo className="h-7 md:h-10 w-auto object-contain" />
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto">
            No es un único producto. Es una suite conectada para producir, gestionar y seguir cada campeonato.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-(--accent)">Streamrace Broadcast</div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                v2.11.0
              </span>
            </div>
            <h3 className="text-2xl font-black italic uppercase text-white mb-4">Producción profesional</h3>
            <p className="text-white/60 leading-relaxed">
              Overlays, votación, anuncios, banderas y control visual en tiempo real para transmisiones de automovilismo.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-(--accent)">Streamrace Live Timing</div>
              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-300">
                En vivo
              </span>
            </div>
            <h3 className="text-2xl font-black italic uppercase text-white mb-4">Resultados y seguimiento en vivo</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Tiempos, posiciones y datos de sesión actualizados al instante para equipos, relatores, dirección de carrera y audiencia.
            </p>
            <a
              href="https://live.streamrace.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/25"
            >
              Ir a Live Timing
              <ChevronRight className="w-4 h-4" />
            </a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-(--accent)">Streamrace Manager</div>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
                Próximamente
              </span>
            </div>
            <h3 className="text-2xl font-black italic uppercase text-white mb-4">Gestión de campeonatos</h3>
            <p className="text-white/60 leading-relaxed">
              Pilotos, equipos, fechas, reglamentos, sponsors y operación centralizada para organizar cada evento con orden profesional.
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
