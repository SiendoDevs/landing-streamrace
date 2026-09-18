import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { TRADEMARK_MARK, TRADEMARK_SHORT } from "../../lib/trademark";

export default function FooterCTA({ onOpenModal }) {
  return (
    <footer className="py-24 relative overflow-hidden flex flex-col items-center text-center">
      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-3xl px-6"
      >
        <h2 className="text-2xl md:text-4xl font-black italic uppercase mb-8 leading-tight">
          ¿Listo para subir de nivel?
        </h2>
        <p className="text-xl font-light text-white/60 mb-10">
          Cuatro productoras Founder ya diferencian su transmisión. Cupos limitados.
        </p>
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onOpenModal("access")}
          className="px-10 py-5 bg-white text-black font-black uppercase italic tracking-wider rounded text-lg shadow-2xl cursor-pointer"
        >
          Solicitar Acceso Founder
        </Motion.button>
      </Motion.div>

      <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8 gap-6">
          <div className="text-left">
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
              &copy; {new Date().getFullYear()} {TRADEMARK_MARK} Solutions
            </div>
            <div className="text-[10px] text-white/20 max-w-md">
              Todos los derechos reservados. {TRADEMARK_SHORT}{" "}
              El software está protegido por leyes de derechos de autor y tratados internacionales.
            </div>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
              Privacidad
            </Link>
            <Link to="/terms-of-service" className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">
              Términos de Uso
            </Link>
            <span
              onClick={() => onOpenModal("demo")}
              className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
            >
              Contacto
            </span>
          </div>
        </div>
        <div className="text-sm text-white/10 font-mono w-full text-center border-t border-white/5 pt-4">
          Hecho en Argentina <span className="mx-1">🇦🇷</span> Potenciado por Pasión Automovilística
        </div>
      </div>
    </footer>
  );
}
