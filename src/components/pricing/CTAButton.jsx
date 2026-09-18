import React from "react";

export default React.memo(function CTAButton({ children, onClick, highlight, disabled = false }) {
  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className="mt-auto pt-8 w-full"
    >
      <span
        className={[
          "block w-full px-3 py-2.5 rounded-xl text-[11px] font-black uppercase italic tracking-wide leading-tight transition-all",
          disabled
            ? "bg-white/5 text-white/35 border border-white/10 cursor-not-allowed"
            : highlight
              ? "bg-(--accent) text-black hover:brightness-110 shadow-[0_0_24px_rgba(216,85,43,0.35)]"
              : "bg-white/5 text-white border border-white/10 hover:bg-white/10",
        ].join(" ")}
      >
        {children}
      </span>
    </button>
  );
});
