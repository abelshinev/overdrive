import React from "react";

interface LoadingScreenProps {
  visible: boolean;
  fade?: boolean;
}

export default function LoadingScreen({ visible, fade = false }: LoadingScreenProps) {
  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <img 
          src="/zeynotransparentlime.png" 
          alt="studio zeyno logo" 
          className="h-24 md:h-32 mx-auto mb-6"
        />
        <p
          className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "#CF0", fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto" }}
        >
          [studio zeyno]
        </p>
        <p
          className="text-4xl md:text-4xl font-bold mt-2 uppercase"
          style={{ color: "#CCFF00", fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto" }}
        >
          PRESENTS
        </p>
      </div>
    </div>
  );
}
