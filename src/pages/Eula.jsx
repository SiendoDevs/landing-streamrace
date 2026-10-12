import { Link } from "react-router-dom";
import { ChevronLeft, ScrollText } from "lucide-react";
import Logo from "../components/Logo";
import SEO from "../components/SEO";
import EulaSections from "../components/legal/EulaSections";
import { EULA_UPDATED } from "../content/eula";
import { TRADEMARK_MARK } from "../lib/trademark";

export default function Eula() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-(--accent) selection:text-black">
      <SEO
        title="Acuerdo de licencia — Streamrace"
        description="Acuerdo de licencia de usuario final de Streamrace. Founder, escritorio por hardware y Connect."
        url="https://streamrace.solutions/eula"
      />
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2" onClick={() => { window.location.href = "/"; }}>
          <Logo className="h-[18px] md:h-[25px] w-auto object-contain cursor-pointer" />
        </div>
        <a href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4" /> Volver
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
            <ScrollText className="w-4 h-4 text-(--accent)" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-6 leading-none">
            Acuerdo de <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">licencia</span>
          </h1>
          <p className="text-white/50 text-lg">
            EULA · Última actualización: {EULA_UPDATED}
          </p>
          <p className="mt-4 text-white/40 text-sm max-w-2xl">
            Este acuerdo forma parte de los términos. Los importes están en la página de precios.
          </p>
        </div>

        <div className="space-y-12">
          <EulaSections />
        </div>

        <p className="mt-12 text-sm text-white/40">
          También en los{" "}
          <Link to="/terms-of-service" className="text-white/60 underline underline-offset-4">
            Términos de Uso
          </Link>
          {" "}y en la{" "}
          <Link to="/privacy-policy" className="text-white/60 underline underline-offset-4">
            Política de Privacidad
          </Link>
          .
        </p>

        <footer className="mt-20 pt-10 border-t border-white/5 text-center text-xs text-white/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {TRADEMARK_MARK} Solutions. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}
