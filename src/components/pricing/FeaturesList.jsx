import React from "react";
import { Check } from "lucide-react";

export default React.memo(function FeaturesList({ features, highlight }) {
  return (
    <ul className="mt-6 space-y-3 text-sm text-white/70">
      {features.map((feature, index) => (
        <li key={`${feature}-${index}`} className="flex items-start gap-3">
          <span
            className={[
              "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center",
              highlight ? "bg-(--accent)/15 border border-(--accent)/30" : "bg-white/5 border border-white/10",
            ].join(" ")}
          >
            <Check className={highlight ? "w-3.5 h-3.5 text-(--accent)" : "w-3.5 h-3.5 text-white/60"} />
          </span>
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  );
});
