const CLIENTS = [
  { src: "/logo_ZN SPORT.png", alt: "ZN Sport", desktop: "h-16", mobile: "h-12" },
  { src: "/Logo-APAK.svg", alt: "APAK", desktop: "h-10", mobile: "h-10" },
  { src: "/senses.png", alt: "Senses", desktop: "h-7", mobile: "h-7" },
  { src: "/sportapleno.png", alt: "Sport a Pleno", desktop: "h-14", mobile: "h-12" },
  { src: "/znpro-logo.svg", alt: "ZN PRO", desktop: "h-6", mobile: "h-8" },
];

export default function ClientLogos({ compact = false }) {
  return (
    <div className={compact ? "w-full" : "w-full py-10 border-b border-white/5 px-6"}>
      {!compact && (
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/35 mb-8">
          Ya al aire con productoras de karting y automovilismo
        </p>
      )}
      <div className="hidden md:flex items-center justify-center gap-10">
        {CLIENTS.map((client) => (
          <img
            key={client.alt}
            src={client.src}
            alt={client.alt}
            className={`${client.desktop} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity`}
          />
        ))}
      </div>
      <div className="md:hidden -mx-6 px-6">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2 snap-x snap-mandatory">
          {CLIENTS.map((client) => (
            <img
              key={client.alt}
              src={client.src}
              alt={client.alt}
              className={`${client.mobile} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity snap-start shrink-0`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
