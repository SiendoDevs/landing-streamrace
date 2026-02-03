import React from "react";
import { motion } from "framer-motion";
import { Scale, FileSignature, AlertTriangle, Copyright, Gavel, ChevronLeft, Ban } from "lucide-react";
import Logo from "./Logo";

export default function TermsOfService() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-(--accent) selection:text-black">
      {/* Navbar Minimalista */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2" onClick={() => window.location.href = '/'}>
           <Logo className="h-5 md:h-7 w-auto object-contain cursor-pointer" />
        </div>
        <a href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
          <ChevronLeft className="w-4 h-4" /> Volver
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10">
            <Scale className="w-4 h-4 text-(--accent)" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-6 leading-none">
            Términos y <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Condiciones</span>
          </h1>
          <p className="text-white/50 text-lg">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-12 text-gray-300 leading-relaxed"
        >
          {/* Aceptación */}
          <Section title="1. Aceptación de los Términos" icon={<FileSignature />}>
            <p>
              Al acceder y utilizar <strong>StreamRace Solutions</strong> ("el Servicio"), aceptas cumplir y estar legalmente obligado por estos Términos y Condiciones. 
              Si no estás de acuerdo con alguno de estos términos, te rogamos que no utilices el Servicio.
            </p>
          </Section>

          {/* Uso del Servicio */}
          <Section title="2. Uso del Servicio" icon={<Scale />}>
            <p>
              Te concedemos una licencia limitada, no exclusiva e intransferible para utilizar el Servicio con fines personales o comerciales relacionados con la transmisión de eventos de automovilismo y carreras reales.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-(--accent)">
              <li>Eres responsable de mantener la confidencialidad de tu cuenta.</li>
              <li>No debes utilizar el Servicio para actividades ilegales o no autorizadas.</li>
              <li>No debes intentar ingeniería inversa ni extraer el código fuente del Servicio.</li>
            </ul>
          </Section>

          {/* Propiedad Intelectual */}
          <Section title="3. Propiedad Intelectual" icon={<Copyright />}>
            <p>
              El Servicio, incluyendo su diseño, código, gráficos (overlays), logotipos y funcionalidades, es propiedad exclusiva de StreamRace Solutions. 
              El uso del Servicio no te otorga derechos de propiedad sobre el mismo, salvo el derecho de uso limitado descrito anteriormente.
            </p>
          </Section>

          {/* Cancelación y Suspensión */}
          <Section title="4. Cancelación y Suspensión" icon={<Ban />}>
            <p>
              Nos reservamos el derecho de suspender o cancelar tu acceso al Servicio en cualquier momento, sin previo aviso, si detectamos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-(--accent)">
              <li>Violación de estos Términos y Condiciones.</li>
              <li>Uso fraudulento o abusivo del sistema.</li>
              <li>Falta de pago de las tarifas de suscripción (si aplica).</li>
            </ul>
          </Section>

          {/* Renuncia de Garantías */}
          <Section title="5. Renuncia de Garantías" icon={<AlertTriangle />}>
            <p className="uppercase text-xs font-bold tracking-widest text-white/40 mb-2">Aviso Importante</p>
            <p>
              El Servicio se proporciona "tal cual". No garantizamos que el Servicio sea ininterrumpido, seguro o libre de errores. 
              El uso de los datos en tiempo real y superposiciones gráficas es bajo tu propio riesgo. No nos hacemos responsables de interrupciones técnicas durante transmisiones en vivo.
            </p>
          </Section>

          {/* Ley Aplicable */}
          <Section title="6. Ley Aplicable" icon={<Gavel />}>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes vigentes en el país de residencia del propietario de StreamRace Solutions, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
          </Section>

        </motion.div>

        <footer className="mt-20 pt-10 border-t border-white/5 text-center text-xs text-white/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Streamrace Solutions®. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}

function Section({ title, children, icon }) {
  return (
    <section className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
      <div className="flex items-center gap-3 mb-4 text-var(--accent)">
        {icon && React.cloneElement(icon, { className: "w-5 h-5" })}
        <h2 className="text-xl font-bold uppercase italic text-white">{title}</h2>
      </div>
      <div className="text-gray-400 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </section>
  );
}
