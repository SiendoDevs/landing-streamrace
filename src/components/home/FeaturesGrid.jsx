import { motion as Motion } from "framer-motion";
import { BentoCard } from "./ui";
import { staggerContainer } from "./motion";

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-4">Todo para tu transmisión</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Módulos listos para operar, monetizar y elevar cada carrera.</p>
        </Motion.div>

        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <BentoCard
            image="/landing/votacion-qr.png"
            title="Pausa que engancha"
            desc="Enseguida volvemos deja de ser aburrido: ranking en vivo y QR en overlay. Más de 10.000 votos en una jornada. El público se queda."
            badge="Engagement"
            accent="orange"
          />
          <BentoCard
            image="/landing/SRM_Registrar-Pilotos-2.png"
            title="Base de Datos Inteligente"
            desc="Configura una vez, usalo en todo el campeonato. Olvídate de editar datos antes de cada carrera. Actualiza fotos, escuderías y estadísticas en un solo clic y mantén la información unificada de principio a fin."
            badge="Gestion de Pilotos"
          />
          <BentoCard
            image="/landing/SRM_Gestion-Publicitaria.png"
            title="Gestión de Publicidad"
            desc="Haz tu transmisión rentable. Sácale partido a tus patrocinadores con un sistema inteligente de rotación de banners en el overlay. Automatiza la publicidad sin interrumpir la acción en pista."
            badge="Publicidad"
            accent="green"
          />
          <BentoCard
            image="/landing/SRM_Control-Banderas.png"
            title="Control de Carrera Instantáneo"
            desc="Gestión de seguridad en pista. Despliega banderas con un solo clic, o en modo automático."
            badge="Dirección de Carrera"
            accent="orange"
          />
          <BentoCard
            image="/landing/SRM_Control-Semaforo.png"
            title="Semáforo Virtual"
            desc="Sincronización visual precisa para largadas limpias. Secuencia automática y control de aborto."
            badge="Largada"
          />
          <BentoCard
            image="/landing/SRM_Widget-Temperatura.png"
            title="Widgets Climáticos"
            desc="El clima en tiempo real. Sumerge a tu audiencia en la estrategia de carrera. Muestra datos climáticos y el estado de la pista en vivo."
            badge="Live Data"
            accent="blue"
          />
          <BentoCard
            image="/landing/SRM_Informacion-Circuitos.png"
            title="Biblioteca de Circuitos"
            desc="Mapas del trazado, récords históricos y datos técnicos siempre disponibles para la transmisión."
            badge="Información"
          />
          <BentoCard
            image="/landing/gestion-pilotos-1.png"
            title="Ficha de Piloto"
            desc="Visualización profesional de datos del piloto en el Overlay Principal durante la transmisión."
            badge="Broadcast"
            accent="green"
          />
          <BentoCard
            image="/landing/SRM_Control-Overlays.png"
            title="Integración Universal"
            desc="Conecta tu sistema de cronometraje en 3 segundos. Sin configuraciones complejas ni código. Copia y pega la URL de tu servicio de cronometraje actual (activo o pasivo) y nuestra plataforma se encargará del resto de forma automática."
            badge="Conectividad"
            accent="blue"
          />
        </Motion.div>
      </div>
    </section>
  );
}
