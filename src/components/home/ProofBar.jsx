import { motion as Motion } from "framer-motion";
import { Users, Tv, Vote, Eye } from "lucide-react";
import { fadeInUp, staggerContainer } from "./motion";

const STATS = [
  { icon: Users, value: "4", label: "Clientes Founder" },
  { icon: Tv, value: "50+", label: "Transmisiones" },
  { icon: Vote, value: "10.000+", label: "Votos en una jornada" },
  { icon: Eye, value: "100.000+", label: "Espectadores" },
];

export default function ProofBar() {
  return (
    <section className="relative z-20 px-6 pb-8 md:pb-10">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
      >
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Motion.div
              key={stat.label}
              variants={fadeInUp}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-(--accent) mx-auto mb-3" />
              <div className="text-xl md:text-2xl font-black italic text-white">{stat.value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 mt-1">{stat.label}</div>
            </Motion.div>
          );
        })}
      </Motion.div>
    </section>
  );
}
