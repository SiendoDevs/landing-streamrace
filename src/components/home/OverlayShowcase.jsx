import { motion as Motion } from "framer-motion";
import { Zap } from "lucide-react";
import { FeatureItem } from "./ui";

export default function OverlayShowcase() {
  return (
    <>
      <section id="showcase" className="py-24 bg-[#080808] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative group"
          >
            <div className="absolute -inset-1 bg-(--accent) rounded-2xl blur-xl opacity-10 pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
              <img src="/landing/overlay-principal.png" alt="Overlay Principal" className="w-full h-auto" />
            </div>
            <Motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-[#111] p-4 rounded-xl border border-white/10 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-white/40 font-bold">Latencia</div>
                  <div className="text-xl font-mono font-bold text-white">0.02s</div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Al aire</h2>
            <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
              El overlay principal
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              Cronometraje en vivo, banderas y clima en el mismo overlay. El operador no cambia de herramienta a mitad de manga.
            </p>
            <ul className="space-y-4 italic uppercase">
              <FeatureItem text="Timing integrado a la señal" />
              <FeatureItem text="Banderas y estados en un solo toque" />
              <FeatureItem text="Una operación. Toda la jornada." />
            </ul>
          </Motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4">Crea Graphs en tiempo real</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Lower thirds, noticias y sponsors. El operador los saca al aire sin tapar la carrera.
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
            >
              <img src="/landing/Graph-Titulos.png" alt="Graph Títulos" className="w-full h-auto" />
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl"
            >
              <img src="/landing/Noticias.png" alt="Noticias" className="w-full h-auto" />
            </Motion.div>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl md:col-span-2"
            >
              <img src="/landing/Graph-Info.png" alt="Graphs de Streamrace en tiempo real" className="w-full h-auto" />
            </Motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
