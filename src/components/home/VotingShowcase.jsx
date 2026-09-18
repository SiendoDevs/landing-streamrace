import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Pause, QrCode, ShieldCheck } from "lucide-react";
import { FeatureItem } from "./ui";

const PAUSE_SCREENS = [
  {
    src: "/landing/BRB.png",
    alt: "Pantalla Enseguida volvemos",
    label: "Enseguida volvemos",
  },
  {
    src: "/landing/votacion-qr.png",
    alt: "Ranking y QR durante la pausa",
    label: "Ranking en vivo",
  },
];

const BEATS = [
  {
    icon: Pause,
    title: "Enseguida volvemos",
    text: "La pausa se ve profesional. Identidad, redes, interacción.",
  },
  {
    icon: QrCode,
    title: "QR en pausa y en carrera",
    text: "El widget también va encima de la pista. Escanean y votan sin salir del stream.",
  },
  {
    icon: ShieldCheck,
    title: "Se quedan",
    text: "Más de 10.000 votos en una jornada. El ranking sigue en vivo mientras esperan.",
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

function PauseScreenRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % PAUSE_SCREENS.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <GlowFrame glowClass="bg-(--accent)">
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl leading-none">
        {PAUSE_SCREENS.map((item, i) => (
          <Motion.img
            key={item.src}
            src={item.src}
            alt={item.alt}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.45 }}
            className={`w-full h-auto block ${i === index ? "relative z-[1]" : "absolute top-0 left-0"}`}
          />
        ))}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {PAUSE_SCREENS.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={item.label}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-(--accent)" : "w-2 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </GlowFrame>
  );
}

export default function VotingShowcase() {
  return (
    <section id="pausa" className="py-24 bg-[#080808] border-y border-white/5 relative">
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
              <PauseScreenRotator />
            </div>
            <GlowFrame
              className="mt-4 max-sm:max-w-[260px] max-sm:mx-auto sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:w-[32%] sm:-translate-y-1/2 z-20"
              glowClass="bg-purple-600"
              glowOpacity="opacity-10"
            >
              <img
                src="/landing/QR-Widget.png"
                alt="Widget QR Piloto del Día, en pausa o sobre la carrera"
                className="w-full h-auto block rounded-xl border border-white/10 shadow-2xl"
              />
              <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/45 text-center">
                En Pausa o sobre la carrera
              </p>
            </GlowFrame>
          </div>
          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-2 left-2 sm:bottom-12 sm:left-2 bg-[#111] p-4 rounded-xl border border-white/10 shadow-xl hidden md:block z-30"
          >
            <div className="text-[10px] uppercase text-white/40 font-bold">Pico real</div>
            <div className="text-xl font-mono font-bold text-white">10.000+</div>
            <div className="text-[10px] uppercase text-white/40 font-bold mt-1">votos / jornada</div>
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Enseguida volvemos</h2>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
            La pantalla de pausa ahora tiene sentido
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            Entre mangas, bandera roja, corte comercial: la gente se iba. Ahora «Enseguida Regresamos» pasa a Piloto del Día. La Votación con QR también puede ir sobre la carrera y hasta en un overlay independiente.
          </p>
          <ul className="space-y-4 italic uppercase mb-10">
            <FeatureItem text="Pausa con identidad y redes, no pantalla muerta" />
            <FeatureItem text="Votación QR en la pausa, sobre la carrera y en un overlay independiente" />
            <FeatureItem text="Más de 10.000 votos en una jornada" />
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
