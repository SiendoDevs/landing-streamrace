import React from "react";

export default React.memo(function Badge({ children, accent = false }) {
  return (
    <div
      className={[
        "shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
        accent
          ? "bg-(--accent) text-black border-(--accent)"
          : "bg-white/5 border-white/10 text-white/80",
      ].join(" ")}
    >
      {children}
    </div>
  );
});
