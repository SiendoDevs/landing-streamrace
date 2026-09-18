import { motion as Motion } from "framer-motion";
import { Keyboard, Piano, Radio } from "lucide-react";
import { FeatureItem } from "./ui";

const DECK_BUTTONS = [
  { label: "Live", hot: true },
  { label: "Parrilla" },
  { label: "Resultados" },
  { label: "Graphs TV" },
  { label: "Pista" },
  { label: "Clima" },
  { label: "Voto" },
  { label: "Pantalla de Pausa Interactiva" },
];

const MIDI_KEYS = ["C", "D", "E", "F", "G", "A", "B", "C"];

const BEATS = [
  {
    icon: Radio,
    title: "Un botón, una escena",
    text: "Live, parrilla, clima, Pantalla de Pausa Interactiva. El Master cambia sin tocar el mouse.",
  },
  {
    icon: Keyboard,
    title: "Bitfocus Companion",
    text: "Gratis. Stream Deck o cualquier superficie MIDI.",
  },
  {
    icon: Piano,
    title: "MIDI",
    text: "Una nota dispara el mismo botón. Sin otro programa.",
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

function CompanionDeck() {
  return (
    <GlowFrame glowClass="bg-(--accent)">
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0c] p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Bitfocus Companion</div>
            <div className="mt-1 text-sm font-black italic uppercase text-white">Streamrace · Master</div>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-green-300">En aire · Live</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {DECK_BUTTONS.map((btn) => (
            <div
              key={btn.label}
              className={`aspect-square rounded-lg border flex flex-col items-center justify-center text-center px-1 ${
                btn.hot
                  ? "bg-(--accent)/20 border-(--accent) shadow-[0_0_18px_rgba(216,85,43,0.35)]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div className={`h-1 w-6 rounded-full mb-2 ${btn.hot ? "bg-(--accent)" : "bg-white/20"}`} />
              <div className={`font-black italic uppercase leading-tight ${btn.label.length > 16 ? "text-[8px] sm:text-[9px]" : "text-[10px] sm:text-[11px]"} ${btn.hot ? "text-white" : "text-white/70"}`}>
                {btn.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlowFrame>
  );
}

function MidiStrip() {
  return (
    <GlowFrame glowClass="bg-purple-600" glowOpacity="opacity-15">
      <div className="rounded-xl border border-white/10 bg-[#111] px-3 py-3 shadow-2xl">
        <div className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-2 text-center">MIDI · una nota, el mismo botón</div>
        <div className="flex items-end justify-center gap-1 h-14">
          {MIDI_KEYS.map((note, i) => (
            <div
              key={`${note}-${i}`}
              className={`flex-1 max-w-8 h-full rounded-sm border flex items-end justify-center pb-1 ${
                i === 0
                  ? "bg-(--accent) border-(--accent) text-black"
                  : "bg-white/90 border-white/20 text-black/50"
              }`}
            >
              <span className="text-[8px] font-black">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </GlowFrame>
  );
}

export default function HardwareShowcase() {
  return (
    <section id="hardware" className="py-24 bg-[#080808] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Stream Deck y MIDI</h2>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
            Companion en la cabina
          </h3>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
            Bitfocus Companion, gratis. Un botón físico cambia la escena del Master: Live, parrilla, clima, Pantalla de Pausa Interactiva. El teclado MIDI dispara el mismo botón. Sin tocar el mouse a mitad de tanda.
          </p>
          <ul className="space-y-4 italic uppercase mb-10">
            <FeatureItem text="Un botón por escena del overlay" />
            <FeatureItem text="Stream Deck u otra superficie vía Companion" />
            <FeatureItem text="MIDI: una nota, el mismo cambio de escena" />
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
          className="order-1 lg:order-2 relative"
        >
          <div className="relative space-y-4">
            <CompanionDeck />
            <div className="max-sm:max-w-[360px] max-sm:mx-auto sm:w-[85%] sm:ml-auto">
              <MidiStrip />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
