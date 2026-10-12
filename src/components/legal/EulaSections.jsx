import { EULA_SECTIONS } from "../../content/eula";

export default function EulaSections() {
  return (
    <>
      {EULA_SECTIONS.map((section) => (
        <section key={section.title} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
          <h2 className="text-xl font-bold uppercase italic text-white mb-4">{section.title}</h2>
          <div className="text-gray-400 leading-relaxed text-sm md:text-base space-y-4">
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items && (
              <ul className="list-disc pl-6 space-y-2 marker:text-(--accent)">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
