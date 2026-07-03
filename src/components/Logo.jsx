import React from "react";

export default function Logo({ className = "h-5", ...props }) {
  return (
    <img 
      src="/Logo-Streamrace.svg" 
      alt="Streamrace Logo" 
      className={className} 
      {...props}
    />
  );
}
