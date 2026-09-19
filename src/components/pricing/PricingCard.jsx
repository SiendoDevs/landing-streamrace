import Badge from "./Badge";
import FeaturesList from "./FeaturesList";
import CTAButton from "./CTAButton";
import { formatCloudPlanChoice, formatCurrency } from "./pricingConfig";

export default function PricingCard({ plan, onSelect, variant = "cloud", unitPrice = null }) {
  const isDesktop = variant === "desktop";
  const isConnect = variant === "connect";
  const isUnavailable = plan.available === false;

  const desktopUnitPrice = isDesktop ? plan.unitPrice ?? unitPrice : null;
  const savings = isDesktop && desktopUnitPrice ? Math.max(0, plan.licenses * desktopUnitPrice - plan.price) : 0;
  const hasSavings = isDesktop && desktopUnitPrice && plan.licenses > 1 && savings > 0;
  const savingsBadgeText = hasSavings ? (plan.licenses >= 3 ? "Mayor ahorro" : "Ahorro") : "";

  return (
    <div
      className={[
        "relative rounded-2xl p-7 bg-white/5 backdrop-blur-md border transition-all",
        isUnavailable
          ? "opacity-60 shadow-none"
          : "shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_70px_rgba(0,0,0,0.55)]",
        plan.highlight && !isUnavailable ? "border-(--accent)/40" : "border-white/10 hover:border-white/20",
      ].join(" ")}
    >
      {plan.highlight && (
        <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-(--accent)/35 to-purple-600/20 blur opacity-40 pointer-events-none" />
      )}

      <div className="relative flex flex-col h-full">
        <div className="flex items-start gap-4">
          <div className="w-full">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-bold uppercase tracking-widest text-white/55">
                {plan.name || `${plan.licenses || plan.instances || 1} ${isConnect ? "Instancia" : "Licencia"}${(plan.licenses || plan.instances || 1) > 1 ? (isConnect ? "s" : "s") : ""}`}
              </div>
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
                  <span className="w-full inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-white/5 border-white/10 text-white/60">
                    {formatCurrency(desktopUnitPrice)} c/u
                  </span>
                  {hasSavings && (
                    <span className="w-full inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest border bg-(--accent)/10 border-(--accent)/25 text-(--accent)">
                      {savingsBadgeText}
                    </span>
                  )}
                </div>
                <div className="text-sm text-white/45 leading-relaxed w-full">{plan.desc}</div>
              </div>
            )}

            {isConnect && (
              <div className="mt-4 space-y-3">
                <div className="text-2xl font-black italic uppercase tracking-tight leading-none">{formatCurrency(plan.price)}/mes</div>
                <div className="text-sm text-white/45 leading-relaxed w-full">{plan.desc}</div>
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
            const productType = variant === "cloud" ? "Cloud" : variant === "desktop" ? "Desktop" : "Connect";
            const planLabel = plan.name || `${plan.licenses || plan.instances || 1} ${isConnect ? "Instancia" : "Licencia"}${(plan.licenses || plan.instances || 1) > 1 ? "s" : ""}`;
            const priceText = plan.price !== null 
              ? (variant === "cloud" ? `${formatCurrency(plan.price)}/mes` : formatCurrency(plan.price))
              : "Consultar";
            onSelect(
              plan.type,
              variant === "cloud" ? formatCloudPlanChoice(plan) : `${planLabel} - ${productType} (${priceText})`
            );
          }}
          highlight={plan.highlight && !isUnavailable}
        >
          {plan.cta}
        </CTAButton>
      </div>
    </div>
  );
}
