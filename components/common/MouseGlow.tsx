"use client";
import { useEffect, useRef, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };

      // Start animation loop if it's not already running
      if (!animationFrameRef.current) {
        const animate = () => {
          setPosition((prev) => {
            const diffX = targetPosition.current.x - prev.x;
            const diffY = targetPosition.current.y - prev.y;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);

            // Stop animation if very close to target
            if (distance < 0.1) {
              animationFrameRef.current = undefined;
              return prev;
            }

            // Smooth interpolation with easing
            const easing = 0.12;
            return {
              x: prev.x + diffX * easing,
              y: prev.y + diffY * easing,
            };
          });

          if (animationFrameRef.current) {
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        };

        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen overflow-hidden">
      {/* Primary Glow - Cyan */}
      <div
        className="absolute rounded-full blur-[100px] will-change-transform"
        style={{
          width: "500px",
          height: "500px",
          left: `${position.x - 250}px`,
          top: `${position.y - 250}px`,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.2) 0%, rgba(14,165,233,0.1) 30%, rgba(14,165,233,0.03) 60%, transparent 100%)",
        }}
      />

      {/* Secondary Glow - Purple (with slight offset) */}
      <div
        className="absolute rounded-full blur-[70px] will-change-transform"
        style={{
          width: "350px",
          height: "350px",
          left: `${position.x - 200}px`,
          top: `${position.y - 150}px`,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.08) 40%, rgba(139,92,246,0.03) 70%, transparent 100%)",
        }}
      />

      {/* Tertiary Glow - Pink (with offset) */}
      <div
        className="absolute rounded-full blur-[80px] will-change-transform"
        style={{
          width: "300px",
          height: "300px",
          left: `${position.x - 150}px`,
          top: `${position.y - 100}px`,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(236,72,153,0.06) 35%, rgba(236,72,153,0.03) 65%, transparent 100%)",
        }}
      />

      {/* Ring 1 - Outer Ring */}
      <div
        className="absolute rounded-full blur-sm will-change-transform"
        style={{
          width: "450px",
          height: "450px",
          left: `${position.x - 225}px`,
          top: `${position.y - 225}px`,
          border: "2px solid rgba(14,165,233,0.08)",
          boxShadow: "0 0 20px rgba(14,165,233,0.12)",
        }}
      />

      {/* Ring 2 - Inner Ring */}
      <div
        className="absolute rounded-full blur-sm will-change-transform"
        style={{
          width: "300px",
          height: "300px",
          left: `${position.x - 150}px`,
          top: `${position.y - 150}px`,
          border: "1.5px solid rgba(139,92,246,0.1)",
          boxShadow: "0 0 15px rgba(139,92,246,0.15)",
        }}
      />

      {/* Ambient Background Glow */}
      <div
        className="absolute inset-0 opacity-20 will-change-transform"
        style={{
          background: `radial-gradient(
            ellipse 80% 50% at ${position.x}px ${position.y}px,
            rgba(14,165,233,0.04) 0%,
            rgba(139,92,246,0.03) 50%,
            transparent 100%
          )`,
        }}
      />
    </div>
  );
};

export default MouseGlow;
