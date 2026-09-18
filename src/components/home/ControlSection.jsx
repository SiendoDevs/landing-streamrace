import { motion as Motion } from "framer-motion";
import { LayoutDashboard, Flag, Cloud } from "lucide-react";
import { FeatureItem } from "./ui";

const BEATS = [
  {
    icon: Flag,
    title: "Un toque",
    text: "Banderas, semáforo y overlays. Sin menús escondidos.",
  },
  {
    icon: LayoutDashboard,
    title: "Operador y director",
    text: "El panel es de quien opera gráficas y de quien dirige la señal. No de un desarrollador.",
  },
  {
    icon: Cloud,
    title: "En la cabina",
    text: "Nube: cualquier máquina, misma jornada. Sin instalar nada crítico.",
  },
];

export default function ControlSection() {
  return (
    <section id="panel" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-4">Facilidad de uso</h2>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
            Hecho para operadores gráficos y directores
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            Un panel de control para quien está opera gráficas y quien dirige la señal. Banderas, semáforo, votación, clima y overlays en la misma vista. Se opera en carrera. No se pelea con el software.
          </p>
          <ul className="space-y-4 italic uppercase mb-10">
            <FeatureItem text="Configuración fácil y rápida." />
            <FeatureItem text="Para operador gráfico y director." />
            <FeatureItem text="Desde cualquier máquina de la cabina." />
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BEATS.map((beat) => {
              const Icon = beat.icon;
              return (
                <div key={beat.title} className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <Icon className="w-5 h-5 text-(--accent) mb-3" />
                  <div className="font-black italic uppercase text-sm text-white mb-1">{beat.title}</div>
                  <p className="text-xs text-white/50 leading-relaxed">{beat.text}</p>
                </div>
              );
            })}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-(--accent) blur-xl opacity-10 pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl leading-none">
            <img src="/landing/dashboard.png" alt="Panel de control Streamrace" className="w-full h-auto block" />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
