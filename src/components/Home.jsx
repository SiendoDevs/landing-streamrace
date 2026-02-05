import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary";
import Logo from "./Logo";
const ContactModal = React.lazy(() => import("./ContactModal"));
import { 
  Zap,  Tv, 
  Trophy, 
  LayoutDashboard, 
  Cloud, 
  ChevronRight,
  Menu,
  X,
  Play
} from "lucide-react";

const WHATSAPP_NUMBER = "5491168005239"; // REEMPLAZA CON TU NUMERO (Formato Internacional sin +)

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("demo");

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // Ajuste para el header sticky
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Preload del modal para mejorar la velocidad de apertura
  React.useEffect(() => {
    const timer = setTimeout(() => {
      import("./ContactModal");
    }, 1500); // Pre-carga después de 1.5s para no bloquear la carga inicial
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-(--accent) selection:text-black overflow-x-hidden"
      style={{ "--accent": "#D8552B" }}
    >
      
      {/* Modal - Lazy Loaded con Fallback visual */}
      <Suspense fallback={
        isModalOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
             <div className="w-10 h-10 border-4 border-white/10 border-t-(--accent) rounded-full animate-spin"></div>
          </div>
        ) : null
      }>
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          initialType={modalType}
        />
      </Suspense>

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <Logo className="h-[18px] md:h-[25px] w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#showcase" onClick={scrollToSection('showcase')} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Showcase</a>
          <a href="#features" onClick={scrollToSection('features')} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">Soluciones</a>
          <button 
            onClick={() => handleOpenModal('demo')}
            className="text-xs font-bold uppercase tracking-widest text-(--accent) hover:text-white transition-colors cursor-pointer"
          >
            Solicitar Demo
          </button>
          <motion.a 
            href="https://app.streamrace.solutions" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
          >
            Acceso Clientes
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white/80 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 overflow-hidden shadow-2xl md:hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                  <a href="#showcase" onClick={scrollToSection('showcase')} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                      <Trophy className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                      <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Showcase</span>
                      <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                  </a>

                  <a href="#features" onClick={scrollToSection('features')} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
                      <LayoutDashboard className="w-5 h-5 text-white/40 group-hover:text-(--accent) transition-colors" />
                      <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Soluciones</span>
                      <ChevronRight className="ml-auto w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                  </a>
                  
                  <div className="h-px bg-white/5 my-2 mx-4" />

                  <button 
                    onClick={() => handleOpenModal('demo')}
                    className="flex items-center gap-4 p-4 w-full text-left rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <Play className="w-5 h-5 text-(--accent)" />
                    <span className="text-lg font-black uppercase italic tracking-wider text-white group-hover:pl-2 transition-all">Solicitar Demo</span>
                  </button>
                  
                  <a 
                    href="https://app.streamrace.solutions" 
                    className="flex items-center justify-center gap-3 w-full py-4 mt-2 bg-(--accent) text-black font-black uppercase italic tracking-wider rounded-xl transition-all hover:brightness-110 hover:scale-[1.02] shadow-[0_0_20px_rgba(216,85,43,0.3)]"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Acceso Clientes
                  </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 md:pt-40 md:pb-32 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-(--accent)/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10" />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="z-20 max-w-5xl w-full px-6"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
              <span className="sm:hidden">Broadcasting Pro</span>
              <span className="hidden sm:inline">Innovación en Broadcasting para Carreras</span>
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 md:mb-10 leading-[0.95] md:leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-400">
              Gráficas en Tiempo Real
            </span><br />
            <span className="text-xl sm:text-2xl md:text-4xl block mt-2 text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-500">
              Para Transmisiones de Automovilismo
            </span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mb-8 md:mb-10 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(216,85,43,0.1)] hover:bg-white/10 transition-colors">
              <Tv className="hidden md:block w-5 h-5 text-(--accent)" />
              <span className="text-[10px] md:text-base font-bold text-white/90 uppercase">
                Calidad <span className="text-(--accent)">“TV-Grade”</span> + Automatización Total
              </span>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-white/50 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Convierte cualquier transmisión local en un espectáculo televisivo — sin operadores extra y con superposiciones automáticas que actualizan al instante.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05, brightness: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/live/bbmD2Mqvq5E?si=SrfcX5wRw3PFoZvf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-(--accent) text-black font-bold uppercase italic tracking-wider rounded transition-all shadow-[0_0_40px_rgba(216,85,43,0.3)] hover:shadow-[0_0_60px_rgba(216,85,43,0.5)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              Demo en Vivo
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSection('features')}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 group"
            >
              Explorar Características
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature Showcase 1: The Visual Impact (Overlay) */}
      <section id="showcase" className="py-24 bg-[#080808] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative group"
          >
             <div className="absolute -inset-1 bg-linear-to-r from-(--accent) to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <img src="/landing/overlay-principal.png" alt="Overlay Principal" className="w-full h-auto" />
             </div>
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 bg-[#111] p-4 rounded-xl border border-white/10 shadow-xl hidden md:block"
             >
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-green-500/20 rounded-lg text-green-500"><Zap className="w-5 h-5" /></div>
                   <div>
                      <div className="text-[10px] uppercase text-white/40 font-bold">Latencia</div>
                      <div className="text-xl font-mono font-bold text-white">0.02s</div>
                   </div>
                </div>
             </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-(--accent) uppercase tracking-widest mb-4">Experiencia de Espectador</h2>
            <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
              Producción de Nivel <br/>Internacional
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              Tus patrocinadores merecen verse bien. Ofrece una experiencia visual idéntica a las grandes categorías mundiales, sin los costos de un estudio de TV.
            </p>
            <ul className="space-y-4 italic uppercase">
               <FeatureItem text="Animaciones Fluidas a 60 FPS" />
               <FeatureItem text="Sincronización milimétrica con Cronometraje" />
               <FeatureItem text="Diseño limpio que no tapa la acción" />
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase 2: Control (Dashboard) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-4">Control Total</h2>
            <h3 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-6">
              El cerebro de tu <br/>transmisión
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
              Un Dashboard diseñado para directores y relatores. Gestiona Overlays, banderas, semáforo y datos de la sesión sin perder de vista la acción en pista.
              Todo centralizado, todo en tiempo real.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 uppercase italic text-gray-400">
               <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <LayoutDashboard className="w-12 h-12 text-gray-400 mb-2" />
                  <div className="font-black text-lg">Panel Intuitivo</div>
               </motion.div>
               <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <Cloud className="w-12 h-12 text-gray-400 mb-2" />
                  <div className="font-black text-lg">100% en la Nube</div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group perspective-1000"
          >
             <div className="absolute -inset-1 bg-linear-to-l from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <motion.div 
               whileHover={{ rotateY: 5, rotateX: 5 }}
               className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]"
             >
                <img src="/landing/dashboard.png" alt="Dashboard de Control" className="w-full h-auto" />
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grid of Features */}
      <section id="features" className="py-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4">Ecosistema Integral</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Cada aspecto de la competición, cubierto por módulos especializados.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             {/* Card 1: Pilotos */}
             <BentoCard 
               image="/landing/SRM_Registrar-Pilotos-2.png"
               title="Gestión de Pilotos"
               desc="Base de datos persistente. Actualiza fotos, equipos y estadísticas una sola vez para todo el campeonato."
               badge="Base de Datos"
             />
             {/* Card 2: Publicidad */}
             <BentoCard 
               image="/landing/SRM_Gestion-Publicitaria.png"
               title="Monetización Integrada"
               desc="Módulo dedicado para gestionar sponsors. Rota banners publicitarios automáticamente en el overlay."
               badge="Ingresos"
               accent="green"
             />
             {/* Card 3: Banderas */}
             <BentoCard 
               image="/landing/SRM_Control-Banderas.png"
               title="Control de Banderas"
               desc="Gestión de seguridad en pista. Despliega banderas con un solo clic."
               badge="Dirección de Carrera"
               accent="orange"
             />
             {/* Card 4: Semáforo */}
             <BentoCard 
               image="/landing/SRM_Control-Semaforo.png"
               title="Semáforo Virtual"
               desc="Sincronización visual precisa para largadas limpias. Secuencia automática y control de aborto."
               badge="Largada"
             />
             {/* Card 5: Clima */}
             <BentoCard 
               image="/landing/SRM_Widget-Temperatura.png"
               title="Widgets Climáticos"
               desc="Visualización profesional de condiciones de pista y ambiente en tiempo real."
               badge="Live Data"
               accent="blue"
             />
             {/* Card 6: Info Circuito */}
             <BentoCard 
               image="/landing/SRM_Informacion-Circuitos.png"
               title="Info de Circuitos"
               desc="Mapas del trazado, récords históricos y datos técnicos siempre disponibles para la transmisión."
               badge="Información"
             />
             {/* Card 7: Interacción */}
             <BentoCard 
               image="/landing/gestion-pilotos-2.png"
               title="Interacción con el Público"
               desc="Votación por QR de piloto destacado. Mantén a la audiencia conectada y participando."
               badge="Engagement"
               accent="orange"
             />
             {/* Card 8: Ficha Piloto */}
             <BentoCard 
               image="/landing/gestion-pilotos-1.png"
               title="Ficha de Piloto"
               desc="Visualización profesional de datos del piloto en el Overlay Principal durante la transmisión."
               badge="Broadcast"
               accent="green"
             />
             {/* Card 9: Integración */}
             <BentoCard 
               image="/landing/SRM_Control-Overlays.png"
               title="Integración Universal"
               desc="Capa de integración pasiva o activa. Conecta cualquier servicio de cronometraje copiando y pegando la URL."
               badge="Conectividad"
               accent="blue"
             />
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-24 relative overflow-hidden flex flex-col items-center text-center">
         <motion.div 
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
               Únete a las ligas que ya están diferenciando sus transmisiones con nuestra tecnología.
               Deja de improvisar.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOpenModal('access')}
              className="px-10 py-5 bg-white text-black font-black uppercase italic tracking-wider rounded text-lg shadow-2xl"
            >
               Solicitar Acceso
            </motion.button>
         </motion.div>
         
         <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-7xl px-6 flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8 gap-6">
              <div className="text-left">
                 <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">&copy; {new Date().getFullYear()} StreamRace® Solutions</div>
                 <div className="text-[10px] text-white/20 max-w-md">
                    Todos los derechos reservados. StreamRace y el logotipo de StreamRace son marcas comerciales registradas. 
                    El software está protegido por leyes de derechos de autor y tratados internacionales.
                 </div>
              </div>
              <div className="flex gap-8">
                 <Link to="/privacy-policy" className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">Privacidad</Link>
                 <Link to="/terms-of-service" className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">Términos de Uso</Link>
                 <span onClick={() => handleOpenModal('demo')} className="text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer uppercase tracking-widest">Contacto</span>
              </div>
            </div>
            <div className="text-sm text-white/10 font-mono w-full text-center border-t border-white/5 pt-4">
               Hecho en Argentina <span className="mx-1">🇦🇷</span> Potenciado por Pasión Automovilística
            </div>
         </div>
      </footer>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialType={modalType} 
      />
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <motion.li 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 text-white/80 font-medium"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-(--accent) shadow-[0_0_10px_var(--accent)]" />
      {text}
    </motion.li>
  );
}

function BentoCard({ image, title, desc, badge, accent = "orange" }) {
   const badgeColors = {
      orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      green: "bg-green-500/10 text-green-500 border-green-500/20",
      blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
   };

   const variants = {
     hidden: { opacity: 0, y: 20 },
     visible: { opacity: 1, y: 0 }
   };

   return (
      <motion.div 
        variants={variants}
        whileHover={{ y: -5 }}
        className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 group hover:border-white/10 transition-all"
      >
         <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-t from-[#111] to-transparent z-10 opacity-30" />
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md z-20 ${badgeColors[accent] || badgeColors.orange}`}>
               {badge}
            </div>
         </div>
         <div className="p-6">
            <h3 className="text-xl font-black uppercase italic mb-3 group-hover:text-(--accent) transition-colors">{title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
               {desc}
            </p>
         </div>
      </motion.div>
   );
}
