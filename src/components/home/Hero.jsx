import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "./motion";

const HERO_SLIDES = [
  { src: "/landing/hero-1.png", alt: "Torre de tiempos y clima sobre la carrera", label: "Torre" },
  { src: "/landing/hero-2.png", alt: "Pelea por P1 en el overlay", label: "Pelea" },
  { src: "/landing/hero-3.png", alt: "Semáforo y aviso de race control", label: "Control" },
  { src: "/landing/hero-4.png", alt: "Torre con bandera verde", label: "Bandera" },
  { src: "/landing/hero-5.png", alt: "Semáforo de largada", label: "Largada" },
  { src: "/landing/hero-6.png", alt: "Ficha de piloto en el overlay", label: "Piloto" },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="absolute -inset-1 bg-(--accent) rounded-2xl blur-xl opacity-10 pointer-events-none" />
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] leading-none">
        {HERO_SLIDES.map((slide, i) => (
          <Motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-auto block ${i === index ? "relative z-[1]" : "absolute top-0 left-0"}`}
          />
        ))}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={slide.label}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === index ? "w-6 bg-(--accent)" : "w-2 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenModal }) {
  return (
    <div className="relative pt-20 pb-10 md:pt-24 md:pb-12 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-(--accent)/20 rounded-full blur-[120px]"
        />
        <Motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10" />
      </div>

      <Motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="z-20 w-full px-6"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <Motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 mb-5 md:mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
              Gráficas de TV para el deporte motor
            </span>
          </Motion.div>

          <Motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 md:mb-5 leading-[0.95] md:leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-400">
              Tu transmisión a otro nivel
            </span>
          </Motion.h1>

          <Motion.p variants={fadeInUp} className="text-sm sm:text-lg md:text-2xl font-black italic uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500 mb-4">
            Torre de Tiempos, posiciones, peleas y votación con QR.
          </Motion.p>

          <Motion.p variants={fadeInUp} className="text-base sm:text-lg text-white/50 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Un panel de control simple, moderno y eficiente para operar todas tus transmisiones.
          </Motion.p>

          <Motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 md:mb-12">
            <Motion.a
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/watch?v=r3nXvssVXe0&t=8701s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-(--accent) text-black font-bold uppercase italic tracking-wider rounded transition-all shadow-[0_0_40px_rgba(216,85,43,0.3)] hover:shadow-[0_0_60px_rgba(216,85,43,0.5)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              Ver en una carrera
            </Motion.a>
            <Motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenModal("access")}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Solicitar acceso Founder
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Motion.button>
          </Motion.div>
        </div>

        <Motion.div variants={fadeInUp}>
          <HeroSlider />
        </Motion.div>
      </Motion.div>
    </div>
  );
}
