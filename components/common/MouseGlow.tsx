"use client";
import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen">
      <div
        className="absolute inset-0 blur-[120px]"
        style={{
          background: `radial-gradient(
        250px circle at ${position.x}px ${position.y}px,
        rgba(14,165,233,0.4) 0%,
        rgba(14,165,233,0.15) 40%,
        rgba(14,165,233,0.05) 70%,
        transparent 100%
      )`,
          transition: "background 0.05s ease-out",
        }}
      />
    </div>
  );
};

export default MouseGlow;
