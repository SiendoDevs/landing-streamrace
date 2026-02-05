import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ChevronLeft } from "lucide-react";
import Logo from "./Logo";

export default function PrivacyPolicy() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-(--accent) selection:text-black">
      {/* Navbar Minimalista */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-2" onClick={() => window.location.href = '/'}>
           <Logo className="h-[18px] md:h-[25px] w-auto object-contain cursor-pointer" />
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
            <Shield className="w-4 h-4 text-(--accent)" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-6 leading-none">
            Política de <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Privacidad</span>
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
          {/* Introducción */}
          <Section title="1. Introducción" icon={<FileText />}>
            <p>
              Bienvenido a <strong>Streamrace Solutions®</strong> ("nosotros", "nuestro", "la Plataforma"). Nos tomamos muy en serio la privacidad y seguridad de sus datos. 
              Esta Política de Privacidad describe de manera transparente cómo recopilamos, utilizamos, procesamos y protegemos su información personal y los datos de sus eventos deportivos cuando utiliza nuestro software de gestión y gráficos para transmisiones (el "Servicio").
            </p>
            <p className="mt-4">
              Al acceder o utilizar el Servicio, usted acepta las prácticas descritas en esta política, la cual ha sido diseñada cumpliendo con estándares internacionales de protección de datos.
            </p>
          </Section>

          {/* Recopilación de Datos */}
          <Section title="2. Información que Recopilamos" icon={<Eye />}>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-(--accent)">
              <li>
                <strong>Información de la Cuenta y Registro:</strong> Para la creación de cuentas y gestión de licencias, recopilamos datos de identificación como nombre completo, dirección de correo electrónico corporativa o personal, y credenciales de autenticación (gestionadas de forma segura mediante proveedores externos).
              </li>
              <li>
                <strong>Datos Operativos del Evento:</strong> Recopilamos y procesamos datos en tiempo real de las sesiones de carreras (tiempos, posiciones, nombres de pilotos) exclusivamente para la generación de los gráficos (overlays). Estos datos son propiedad del organizador del evento.
              </li>
              <li>
                <strong>Datos de Uso y Rendimiento:</strong> Recopilamos métricas anónimas sobre el rendimiento de la aplicación, configuraciones de dashboard y estabilidad del sistema (logs de errores) para garantizar la calidad del servicio "TV-Grade".
              </li>
              <li>
                <strong>Información Técnica:</strong> Dirección IP, tipo de navegador, sistema operativo y resolución de pantalla para optimizar la visualización de los gráficos en sus dispositivos.
              </li>
            </ul>
          </Section>

          {/* Uso de la Información */}
          <Section title="3. Uso de la Información" icon={<Lock />}>
            <p>Utilizamos su información con los siguientes propósitos legítimos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-(--accent)">
              <li><strong>Provisión del Servicio:</strong> Para generar y transmitir los gráficos en tiempo real y gestionar las sesiones de carrera.</li>
              <li><strong>Mejora Continua:</strong> Para analizar tendencias de uso y desarrollar nuevas funcionalidades de automatización.</li>
              <li><strong>Seguridad y Soporte:</strong> Para detectar y prevenir fraudes, abusos o incidentes de seguridad, y proporcionar asistencia técnica prioritaria.</li>
              <li><strong>Comunicaciones Comerciales:</strong> Para enviarle notificaciones sobre actualizaciones críticas, vencimientos de licencias o nuevas características (siempre con opción de baja).</li>
            </ul>
            <p className="mt-4 text-white/60 text-sm border-l-2 border-(--accent) pl-4 italic">
              Compromiso de Privacidad: No vendemos, alquilamos ni comercializamos sus datos personales ni los datos de sus competidores a terceros con fines publicitarios.
            </p>
          </Section>

          {/* Compartir Información */}
          <Section title="4. Terceros y Proveedores de Servicios">
            <p>
              Podemos compartir datos estrictamente necesarios con proveedores de infraestructura tecnológica confiables que nos ayudan a operar el Servicio (ej. servicios de hosting en la nube como AWS/Google Cloud, servicios de autenticación, o procesamiento de imágenes con Cloudinary). Todos estos proveedores están obligados contractualmente a proteger sus datos.
            </p>
          </Section>

          {/* Cookies */}
          <Section title="5. Cookies y Almacenamiento Local">
            <p>
              Utilizamos cookies técnicas y almacenamiento local (LocalStorage) esenciales para mantener su sesión activa, recordar sus configuraciones de diseño de gráficos y garantizar una navegación fluida. No utilizamos cookies de rastreo publicitario intrusivo.
            </p>
          </Section>

          {/* Seguridad de Datos */}
          <Section title="6. Seguridad de los Datos">
             <p>
               Implementamos medidas de seguridad técnicas y organizativas robustas (cifrado en tránsito TLS/SSL, controles de acceso estrictos) para proteger sus datos contra acceso no autorizado, alteración o destrucción. Sin embargo, ninguna transmisión por Internet es 100% segura, por lo que garantizamos nuestro máximo esfuerzo y diligencia.
             </p>
          </Section>

          {/* Derechos del Usuario */}
          <Section title="7. Sus Derechos">
             <p>
               Usted conserva todos los derechos sobre sus datos personales. Puede solicitar el acceso, rectificación, cancelación u oposición al tratamiento de sus datos contactando a nuestro equipo de soporte legal.
             </p>
          </Section>

          {/* Contacto */}
          <Section title="8. Contacto Legal">
            <p>
              Para consultas relacionadas con privacidad o términos legales, por favor contáctenos en:
            </p>
            <p className="mt-2 text-var(--accent) font-mono">legal@streamrace.solutions</p>
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
