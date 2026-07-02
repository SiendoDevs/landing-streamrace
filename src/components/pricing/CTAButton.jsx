import React from "react";

export default React.memo(function CTAButton({ children, onClick, highlight }) {
  return (
    <button onClick={onClick} className="mt-auto pt-8 w-full">
      <span
        className={[
          "block w-full py-3 rounded-xl font-black uppercase italic tracking-wider transition-all",
          highlight
            ? "bg-(--accent) text-black hover:brightness-110 shadow-[0_0_24px_rgba(216,85,43,0.35)]"
            : "bg-white/5 text-white border border-white/10 hover:bg-white/10",
        ].join(" ")}
      >
        {children}
      </span>
    </button>
  );
});
