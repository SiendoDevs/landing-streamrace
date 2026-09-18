import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { CloudSun, Radar, Thermometer } from "lucide-react";
import { FeatureItem } from "./ui";

const WIDGET_SCREENS = [
  {
    src: "/landing/SRM_Widget-Temperatura.png",
    alt: "Widget de clima: temperatura de aire",
    label: "Aire",
  },
  {
    src: "/landing/SRM_Wigdet-Temperatura-Pista.png",
    alt: "Widget de clima: temperatura de pista estimada",
    label: "Pista",
  },
];

const BEATS = [
  {
    icon: Radar,
    title: "Radar en overlay",
    text: "Placa al aire: radar, humedad, viento y pronóstico horario.",
  },
  {
    icon: Thermometer,
    title: "Widget en carrera",
    text: "En la esquina del overlay principal. Rota aire y temp. de pista.",
  },
  {
    icon: CloudSun,
    title: "Un toque",
    text: "Ubicación en el panel. El master lo pone al aire.",
  },
];

function GlowFrame({ children, glowClass, className = "", glowOpacity = "opacity-10" }) {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute -inset-1 rounded-2xl blur-xl pointer-events-none ${glowOpacity} ${glowClass}`} />
      <div className="relative">{children}</div>
    </div>
  );
}

function WidgetRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % WIDGET_SCREENS.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <GlowFrame glowClass="bg-sky-500" glowOpacity="opacity-15">
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl leading-none">
        {WIDGET_SCREENS.map((item, i) => (
          <Motion.img
            key={item.src}
            src={item.src}
            alt={item.alt}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.45 }}
            className={`w-full h-auto block ${i === index ? "relative z-[1]" : "absolute top-0 left-0"}`}
          />
        ))}
      </div>
      <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/45 text-center">
        {WIDGET_SCREENS[index].label} · sobre la carrera
      </p>
    </GlowFrame>
  );
}

export default function WeatherShowcase() {
  return (
    <section id="clima" className="py-24 bg-[#050505] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative sm:py-10">
            <div className="sm:w-[88%]">
              <GlowFrame glowClass="bg-(--accent)">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl leading-none">
                  <img
                    src="/landing/Radar-Info.png"
                    alt="Overlay de clima en pista con radar y pronóstico horario"
                    className="w-full h-auto block"
                  />
                </div>
              </GlowFrame>
            </div>
            <div className="mt-4 max-sm:max-w-[340px] max-sm:mx-auto sm:absolute sm:right-0 sm:bottom-4 sm:mt-0 sm:w-[52%] z-20">
              <WidgetRotator />
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Clima y radar</h2>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
            Radar y clima al aire
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            Ubicación del circuito, radar en vivo y pronóstico horario en un overlay. En carrera, el widget rota temperatura de aire y temperatura de pista estimada.
          </p>
          <ul className="space-y-4 italic uppercase mb-10">
            <FeatureItem text="Overlay de clima con radar y pronóstico del día" />
            <FeatureItem text="Widget en el overlay principal: aire y pista" />
            <FeatureItem text="Un toque desde el master para salir al aire" />
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
      </div>
    </section>
  );
}
