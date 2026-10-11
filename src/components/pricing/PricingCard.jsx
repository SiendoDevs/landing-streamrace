import Badge from "./Badge";
import FeaturesList from "./FeaturesList";
import CTAButton from "./CTAButton";
import { QrCode } from "lucide-react";
import { formatCloudPlanChoice, formatConnectPlanChoice, formatCurrency, formatDesktopPlanChoice } from "./pricingConfig";

export default function PricingCard({ plan, onSelect, variant = "cloud" }) {
  const isDesktop = variant === "desktop";
  const isConnect = variant === "connect";
  const isUnavailable = plan.available === false;
  const termSavings = isDesktop && plan.compareAt > plan.price ? plan.compareAt - plan.price : 0;

  return (
    <div
      className={[
        "relative rounded-2xl p-7 bg-[#141414] border transition-[border-color,box-shadow]",
        isUnavailable
          ? "opacity-60 shadow-none"
          : plan.highlight
            ? "border-(--accent)/40 shadow-[0_0_0_1px_rgba(216,85,43,0.28),0_0_36px_rgba(216,85,43,0.16),0_10px_40px_rgba(0,0,0,0.35)]"
            : "border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:border-white/20 hover:shadow-[0_18px_70px_rgba(0,0,0,0.55)]",
      ].join(" ")}
    >
      <div className="relative flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="w-full">
            <div className="flex items-center justify-between gap-3">
              {isConnect ? (
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--accent)/15 text-(--accent)">
                    <QrCode className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-(--accent)">Connect</div>
                    <div className="text-2xl font-black italic uppercase leading-none tracking-tight">Votación</div>
                  </div>
                </div>
              ) : (
                <div className="text-xs font-bold uppercase tracking-widest text-white/55">
                  {plan.name || `${plan.licenses || plan.instances || 1} Licencia${(plan.licenses || plan.instances || 1) > 1 ? "s" : ""}`}
                </div>
              )}
              {plan.highlight && <Badge accent>{plan.highlightLabel || "Recomendado"}</Badge>}
            </div>

            {plan.badge && (
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>{plan.badge}</Badge>
              </div>
            )}

            {isDesktop && (
              <div className="mt-4 space-y-3">
                <div className="text-2xl font-black italic uppercase tracking-tight leading-none">{formatCurrency(plan.price)}</div>
                <div className="grid gap-2 w-full">
                  {plan.priceNote && (
                    <span className="w-full inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-white/5 border-white/10 text-white/60">
                      {plan.priceNote}
                    </span>
                  )}
                  {termSavings > 0 && (
                    <span className="w-full inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-(--accent)/10 border-(--accent)/25 text-(--accent)">
                      Ahorrás {formatCurrency(termSavings)}
                    </span>
                  )}
                </div>
                <div className="text-sm text-white/45 leading-relaxed w-full">{plan.desc}</div>
              </div>
            )}

            {isConnect && (
              <div className="mt-5 space-y-3">
                <div className="text-3xl font-black italic uppercase tracking-tight leading-none">{formatCurrency(plan.price)}<span className="text-base text-white/45">/mes</span></div>
                {plan.priceNote && (
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-(--accent)/10 border-(--accent)/25 text-(--accent)">
                    {plan.priceNote}
                  </span>
                )}
                <div className="text-sm text-white/70 leading-relaxed w-full">{plan.desc}</div>
              </div>
            )}

            {!isDesktop && !isConnect && (
              <>
                <div className="mt-3 text-2xl font-black italic uppercase tracking-tight leading-none">
                  {plan.price !== null ? `${formatCurrency(plan.price)}/mes` : "Consultar"}
                </div>
                {plan.annualPrice && (
                  <div className="mt-3 grid gap-2 w-full">
                    <span className="w-full inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-(--accent)/10 border-(--accent)/25 text-(--accent)">
                      -25% anual
                    </span>
                    <span className="w-full inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-white/5 border-white/10 text-white/80">
                      {formatCurrency(plan.annualPrice)}/año
                    </span>
                  </div>
                )}
                <div className="mt-3 text-sm text-white/45 leading-relaxed w-full">{plan.desc}</div>
              </>
            )}
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-5">
          <div className="text-[11px] font-black uppercase tracking-widest text-white/45">Incluye</div>
        </div>

        <FeaturesList features={plan.features} highlight={plan.highlight} />

        <CTAButton
          disabled={isUnavailable}
          onClick={() => {
            if (isUnavailable) return;
            const planChoice = variant === "cloud"
              ? formatCloudPlanChoice(plan)
              : variant === "desktop"
                ? formatDesktopPlanChoice(plan)
                : formatConnectPlanChoice(plan);
            onSelect(plan.type, planChoice);
          }}
          highlight={plan.highlight && !isUnavailable}
        >
          {plan.cta}
        </CTAButton>
      </div>
    </div>
  );
}
