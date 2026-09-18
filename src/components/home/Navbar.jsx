import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Trophy, LayoutDashboard, DollarSign, Play, Menu, X, QrCode, ChevronRight, CircleHelp, CloudSun, Keyboard } from "lucide-react";
import Logo from "../Logo";

export default function Navbar({ isMenuOpen, setIsMenuOpen, scrollToSection, onOpenModal }) {
  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Logo className="h-[18px] md:h-[25px] w-auto object-contain" />
      </div>

      <div className="hidden lg:flex items-center gap-5 xl:gap-6">
        <a href="#pausa" onClick={scrollToSection("pausa")} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Votación
        </a>
        <a href="#clima" onClick={scrollToSection("clima")} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Clima
        </a>
        <a href="#hardware" onClick={scrollToSection("hardware")} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          MIDI
        </a>
        <a href="#sistema" onClick={scrollToSection("sistema")} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Overlays
        </a>
        <a href="#features" onClick={scrollToSection("features")} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Soluciones
        </a>
        <a href="#faq" onClick={scrollToSection("faq")} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Preguntas
        </a>
        <Link to="/precios" className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          Precios
        </Link>
        <button
          onClick={() => onOpenModal("demo")}
          className="text-xs font-bold uppercase tracking-widest text-(--accent) hover:text-white transition-colors cursor-pointer"
        >
          Solicitar Demo
        </button>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white/80 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 overflow-hidden shadow-2xl lg:hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              <a href="#pausa" onClick={scrollToSection("pausa")} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <QrCode className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Votación</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>

              <a href="#clima" onClick={scrollToSection("clima")} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <CloudSun className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Clima</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>

              <a href="#hardware" onClick={scrollToSection("hardware")} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <Keyboard className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">MIDI</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>

              <a href="#sistema" onClick={scrollToSection("sistema")} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <Trophy className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Overlays</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>

              <a href="#features" onClick={scrollToSection("features")} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <LayoutDashboard className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Soluciones</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>

              <a href="#faq" onClick={scrollToSection("faq")} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <CircleHelp className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Preguntas</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>

              <Link to="/precios" onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                <DollarSign className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Precios</span>
                <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </Link>

              <div className="h-px bg-white/5 my-2 mx-4" />

              <button
                onClick={() => onOpenModal("demo")}
                className="flex items-center gap-4 p-4 w-full text-left rounded-xl hover:bg-white/5 transition-all group"
              >
                <Play className="w-5 h-5 text-(--accent)" />
                <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Solicitar Demo</span>
              </button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}
