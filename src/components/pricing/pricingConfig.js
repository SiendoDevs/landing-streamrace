export const CLOUD_INCLUDES = [
  {
    icon: "monitor",
    title: "OBS / vMix",
    text: "Gráficos 1920×1080 en el motor de navegador.",
  },
  {
    icon: "timer",
    title: "Cronometraje",
    text: "Speedhive, Race Monitor o TCP/IP MYLAPS Orbits.",
  },
  {
    icon: "layers",
    title: "Temas",
    text: "Original y Carbon Pro en toda la señal.",
  },
  {
    icon: "flag",
    title: "Control de carrera",
    text: "Torre, banderas, semáforo y SC/AS.",
  },
  {
    icon: "swords",
    title: "Piloto",
    text: "Peleas por puesto y placa al aire.",
  },
  {
    icon: "qr",
    title: "Votación",
    text: "QR, Piloto del Día y overlay de pausa.",
  },
  {
    icon: "broadcast",
    title: "Transmisión",
    text: "Fecha, campeonato y productora.",
  },
  {
    icon: "map",
    title: "Producción",
    text: "Circuitos, publicidad, clima y base de pilotos.",
  },
  {
    icon: "youtube",
    title: "YouTube",
    text: "Chat en vivo sobre la señal.",
  },
  {
    icon: "palette",
    title: "Marca",
    text: "Color primario y logos de productora o categoría.",
  },
];

export const CLOUD_CONDITIONS = [
  "10 cupos Founder. Van 4. Founder, Founder Pro y Founder Premium cuentan para ese cupo.",
  "Suscripción mensual o anual.",
  "El precio Founder se mantiene solo si no cancelás ni cambiás de plan. Si salís, perdés ese precio.",
  "Founder: 1 instancia 24/7 y hasta 3 instancias extra por año. Founder Pro: 2 simultáneas. Founder Premium: hasta 3.",
  "La cuenta es de una productora. Compartirla con otra es causal de baja permanente de Streamrace.",
  "Desktop no se contrata hasta completar los 10 Founder.",
];

export const cloudPlans = [
  {
    name: "Founder",
    price: 49,
    annualPrice: 439,
    highlight: true,
    highlightLabel: "Acceso inicial",
    desc: "Una instancia. Precio de entrada al programa Founder. 10 productoras. Van 4.",
    features: [
      "1 instancia activa 24/7",
      "Hasta 3 instancias extra por año",
      "Precio fijo mientras no te salgas del plan",
      "Branding propio",
      "Soporte con el desarrollador",
      "Cuenta para el cupo de 10",
    ],
    cta: "Solicitar acceso Founder",
    type: "access",
    badge: "4/10 productoras · cupos limitados",
  },
  {
    name: "Founder Pro",
    price: 79,
    annualPrice: 699,
    highlight: false,
    desc: "Dos señales a la vez. Mismo programa Founder: cuenta para los 10 cupos.",
    features: [
      "2 instancias simultáneas",
      "Branding propio",
      "Powered by Streamrace",
      "Soporte estándar",
      "Cuenta para el cupo de 10",
    ],
    cta: "Solicitar acceso Founder",
    type: "access",
    badge: "Mismo cupo Founder",
  },
  {
    name: "Founder Premium",
    price: 129,
    annualPrice: 1161,
    highlight: false,
    desc: "Hasta tres instancias y soporte prioritario. Mismo cupo de 10 productoras.",
    features: [
      "Hasta 3 instancias simultáneas",
      "Branding propio",
      "Powered by Streamrace",
      "Soporte prioritario",
      "Cuenta para el cupo de 10",
    ],
    cta: "Solicitar acceso Founder",
    type: "access",
    badge: "Mismo cupo Founder",
  },
  {
    name: "Studio",
    price: null,
    highlight: false,
    visible: false,
    desc: "Para organizaciones que necesitan marca blanca, personalización a medida y una propuesta comercial más avanzada.",
    features: [
      "Personalización del diseño a medida",
      "Todas las funciones de Streamrace",
      "Votación por QR / Piloto del Día",
      "Base de datos",
      "Funciones online",
      "Múltiples instancias simultáneas",
      "Soporte prioritario",
    ],
    cta: "Hablar con ventas",
    type: "demo",
    badge: "",
  },
];

export const visibleCloudPlans = cloudPlans.filter((plan) => plan.visible !== false);

export const desktopPlans = [
  {
    licenses: 1,
    price: 1490,
    unitPrice: 1490,
    highlight: false,
    available: false,
    desc: "Operación local en una estación, licencia perpetua y offline. Se abre al completar 10 Founder.",
    features: [
      "Licencia perpetua",
      "Funcionamiento 100% offline",
      "12 meses de actualizaciones",
      "Instalación y configuración inicial",
    ],
    cta: "Disponible al cerrar Founder",
    type: "desktop",
    badge: "Próximamente",
  },
  {
    licenses: 2,
    price: 2380,
    unitPrice: 1190,
    highlight: false,
    available: false,
    desc: "Redundancia o segunda estación. Se abre al completar 10 Founder.",
    features: [
      "Licencia perpetua",
      "Funcionamiento 100% offline",
      "12 meses de actualizaciones",
      "Instalación y configuración inicial",
    ],
    cta: "Disponible al cerrar Founder",
    type: "desktop",
    badge: "Próximamente",
  },
  {
    licenses: 3,
    price: 2970,
    unitPrice: 990,
    highlight: false,
    available: false,
    desc: "Varias estaciones, mejor costo por licencia. Se abre al completar 10 Founder.",
    features: [
      "Licencia perpetua",
      "Funcionamiento 100% offline",
      "12 meses de actualizaciones",
      "Instalación y configuración inicial",
    ],
    cta: "Disponible al cerrar Founder",
    type: "desktop",
    badge: "Próximamente",
  },
];

export const connectPlans = [
  {
    instances: 1,
    price: 29,
    highlight: false,
    desc: "Sumá funciones en linea a tu instalación local.",
    features: [
      "Votación por QR",
      "Clima automático",
      "Integración con Chat de YouTube",
      "Sincronización Cloud",
      "Futuras funciones online",
    ],
    cta: "Agregar Connect",
    type: "connect",
    badge: "✨ Amplía tu Licencia Desktop",
  },
  {
    instances: 2,
    price: 49,
    highlight: false,
    desc: "Sumá funciones en linea a tus instalaciónes locales.",
    features: [
      "Votación por QR",
      "Clima automático",
      "Integración con Chat de YouTube",
      "Sincronización Cloud",
      "Futuras funciones online",
    ],
    cta: "Agregar Connect",
    type: "connect",
    badge: "",
  },
  {
    instances: 3,
    price: 79,
    highlight: true,
    desc: "Sumá funciones en linea a tus instalaciónes locales.",
    features: [
      "Votación por QR",
      "Clima automático",
      "Integración con Chat de YouTube",
      "Sincronización Cloud",
      "Futuras funciones online",
    ],
    cta: "Agregar Connect",
    type: "connect",
    badge: "Amplía tu Licencia Desktop",
  },
];

export const formatCurrency = (value) =>
  `US$ ${value.toLocaleString("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
