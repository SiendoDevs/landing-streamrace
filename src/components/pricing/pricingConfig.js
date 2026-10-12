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

export const FOUNDER_CLOSE_LABEL = "en 1 mes";

export const CLOUD_CONDITIONS = [
  `El programa Founder cierra ${FOUNDER_CLOSE_LABEL}. Incluye Founder, Founder Pro y Founder Premium.`,
  "Suscripción mensual o anual.",
  "El precio Founder se mantiene solo si no cancelás ni cambiás de plan. Si salís, perdés ese precio.",
  "Founder: 1 instancia 24/7. Founder Pro: 2 simultáneas. Founder Premium: hasta 3.",
  "La cuenta es de una productora. Compartirla con otra es causal de baja permanente de Streamrace.",
  "El escritorio va incluido en un solo dispositivo mientras no canceles tu suscripción.",
  "La instancia Cloud queda para las productoras Founder. Fuera del programa, la licencia que se vende es el escritorio.",
  "En el escritorio el cronometraje se procesa en tu equipo. Connect suma votación, clima, radar y chat.",
];

export const cloudPlans = [
  {
    name: "Founder",
    price: 49,
    annualPrice: 439,
    highlight: true,
    highlightLabel: "Acceso inicial",
    desc: "Una instancia. Precio de entrada al programa Founder.",
    features: [
      "1 instancia activa 24/7",
      "Precio fijo mientras no te salgas del plan",
      "Branding propio",
      "Soporte con el desarrollador",
      "Escritorio en un solo dispositivo mientras no canceles tu suscripción",
    ],
    cta: "Solicitar acceso Founder",
    type: "access",
    badge: "Cierra en 1 mes",
  },
  {
    name: "Founder Pro",
    price: 79,
    annualPrice: 699,
    highlight: false,
    desc: "Dos señales a la vez. Mismo programa Founder.",
    features: [
      "2 instancias simultáneas",
      "Branding propio",
      "Powered by Streamrace",
      "Escritorio en un solo dispositivo mientras no canceles tu suscripción",
      "Soporte estándar",
    ],
    cta: "Solicitar acceso Founder",
    type: "access",
    badge: "",
  },
  {
    name: "Founder Premium",
    price: 129,
    annualPrice: 1161,
    highlight: false,
    desc: "Hasta tres instancias y soporte prioritario.",
    features: [
      "Hasta 3 instancias simultáneas",
      "Branding propio",
      "Powered by Streamrace",
      "Escritorio en un solo dispositivo mientras no canceles tu suscripción",
      "Soporte prioritario",
    ],
    cta: "Solicitar acceso Founder",
    type: "access",
    badge: "",
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

export const SECOND_SEAT_NOTE = "Otra licencia, para un segundo dispositivo, se cotiza al 70% de la primera.";

export const desktopPlans = [
  {
    name: "Temporada",
    term: "12 meses",
    price: 790,
    highlight: true,
    highlightLabel: "Oferta principal",
    available: true,
    desc: "Licencia por hardware, para un solo dispositivo. En la cabina y sin depender de Internet para lo crítico. El segundo año sale igual.",
    priceNote: "Pago único · 12 meses",
    features: [
      "Licencia por hardware, un solo dispositivo",
      "Windows y Mac",
      "12 meses de actualizaciones",
      "Funcionamiento offline",
      "Instalación y configuración inicial",
      "Renovación al mismo precio",
    ],
    cta: "Solicitar temporada",
    type: "desktop",
    badge: "Dispositivo único",
  },
  {
    name: "Dos temporadas",
    term: "24 meses",
    price: 1390,
    compareAt: 1580,
    highlight: false,
    available: true,
    desc: "Licencia por hardware, para un solo dispositivo, y dos años de actualizaciones en un solo pago.",
    priceNote: "Pago único · 24 meses",
    features: [
      "Licencia por hardware, un solo dispositivo",
      "Windows y Mac",
      "24 meses de actualizaciones",
      "Funcionamiento offline",
      "Instalación y configuración inicial",
      "Un solo pago",
    ],
    cta: "Solicitar 24 meses",
    type: "desktop",
    badge: "Dispositivo único",
  },
  {
    name: "Fecha",
    term: "30 días",
    price: 149,
    highlight: false,
    available: true,
    desc: "Licencia por hardware, para un solo dispositivo, en una carrera o un fin de semana. No es suscripción y no se renueva sola.",
    priceNote: "30 días · no es suscripción",
    features: [
      "Licencia por hardware, un solo dispositivo",
      "Windows y Mac",
      "30 días de uso",
      "Funcionamiento offline",
      "Sin renovación automática",
    ],
    cta: "Solicitar fecha",
    type: "desktop",
    badge: "Una carrera",
  },
];

export const connectPlans = [
  {
    name: "Connect",
    instances: 1,
    price: 19,
    highlight: true,
    highlightLabel: "La favorita",
    available: true,
    desc: "El público vota al Piloto del Día con el QR de la transmisión. Clima automático, radar meteorológico con lluvia y chat de YouTube entran en el mismo adicional.",
    priceNote: "Por dispositivo · sobre tu licencia",
    features: [
      "Votación por QR en pantalla",
      "Piloto del Día al aire",
      "Clima automático",
      "Radar meteorológico con lluvia",
      "Chat de YouTube",
    ],
    cta: "Sumar votación",
    type: "connect",
    badge: "QR en vivo",
  },
];

export const formatCurrency = (value) =>
  `US$ ${value.toLocaleString("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

export const formatCloudPlanChoice = (plan) => {
  const priceText = plan.price !== null ? `${formatCurrency(plan.price)}/mes` : "Consultar";
  return `${plan.name} - Cloud (${priceText})`;
};

export const founderPlanChoices = visibleCloudPlans.map((plan) => ({
  name: plan.name,
  value: formatCloudPlanChoice(plan),
  price: plan.price,
  highlight: plan.highlight,
}));

export const formatDesktopPlanChoice = (plan) =>
  `${plan.name} - Desktop (${formatCurrency(plan.price)} · ${plan.term})`;

export const formatConnectPlanChoice = (plan) =>
  `${plan.name} - Connect (${formatCurrency(plan.price)}/mes por dispositivo)`;
