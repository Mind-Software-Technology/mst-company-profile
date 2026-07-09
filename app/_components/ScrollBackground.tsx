"use client";

import { useEffect, useRef } from "react";

export default function ScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.001;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Orb 1: Purple (top-left)
      const g1 = ctx.createRadialGradient(
        w * 0.25 + Math.sin(time * 0.8) * w * 0.1,
        h * 0.3 + Math.cos(time * 0.6) * h * 0.1,
        0,
        w * 0.25 + Math.sin(time * 0.8) * w * 0.1,
        h * 0.3 + Math.cos(time * 0.6) * h * 0.1,
        w * 0.4
      );
      g1.addColorStop(0, "rgba(139, 92, 246, 0.06)");
      g1.addColorStop(0.5, "rgba(139, 92, 246, 0.02)");
      g1.addColorStop(1, "rgba(139, 92, 246, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      // Orb 2: Blue (bottom-right)
      const g2 = ctx.createRadialGradient(
        w * 0.75 + Math.cos(time * 0.5) * w * 0.1,
        h * 0.7 + Math.sin(time * 0.7) * h * 0.1,
        0,
        w * 0.75 + Math.cos(time * 0.5) * w * 0.1,
        h * 0.7 + Math.sin(time * 0.7) * h * 0.1,
        w * 0.35
      );
      g2.addColorStop(0, "rgba(14, 165, 233, 0.05)");
      g2.addColorStop(0.5, "rgba(14, 165, 233, 0.015)");
      g2.addColorStop(1, "rgba(14, 165, 233, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Orb 3: Mixed purple (center, very subtle)
      const g3 = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.3) * w * 0.15,
        h * 0.5 + Math.cos(time * 0.4) * h * 0.15,
        0,
        w * 0.5 + Math.sin(time * 0.3) * w * 0.15,
        h * 0.5 + Math.cos(time * 0.4) * h * 0.15,
        w * 0.5
      );
      g3.addColorStop(0, "rgba(139, 92, 246, 0.03)");
      g3.addColorStop(1, "rgba(139, 92, 246, 0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
