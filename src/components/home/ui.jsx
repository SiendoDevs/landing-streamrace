import { motion as Motion } from "framer-motion";

export function FeatureItem({ text }) {
  return (
    <Motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 text-white/80 font-medium"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-(--accent) shadow-[0_0_10px_var(--accent)]" />
      {text}
    </Motion.li>
  );
}

export function BentoCard({ image, title, desc, badge, accent = "orange" }) {
  const badgeColors = {
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Motion.div
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
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>
    </Motion.div>
  );
}
