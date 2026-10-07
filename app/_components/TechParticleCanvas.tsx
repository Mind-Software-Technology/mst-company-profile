"use client";

import { useEffect, useRef } from "react";

const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()".split("");
const randChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

type Node = { x: number; y: number; vy: number; char: string };
type Beam = { x: number; y: number; length: number; speed: number; opacity: number };

// Latar partikel ASCII: node huruf yang hanyut turun + garis koneksi + berkas cahaya naik.
// Interaktif terhadap kursor. Berhenti saat tidak terlihat.
export default function TechParticleCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let nodes: Node[] = [];
    let beams: Beam[] = [];
    const mouse = { x: -1000, y: -1000 };

    const init = () => {
      const nodeCount = Math.min(90, Math.round((w * h) / 9000));
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: Math.random() * 0.4 + 0.1,
        char: randChar(),
      }));
      beams = Array.from({ length: 18 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 6 + 3,
        opacity: Math.random() * 0.5 + 0.3,
      }));
    };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Berkas cahaya naik (cepat)
      for (const b of beams) {
        if (!reduced) b.y -= b.speed;
        if (b.y + b.length < 0) {
          b.y = h + 100;
          b.x = Math.random() * w;
        }
        const g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
        g.addColorStop(0, `rgba(14, 165, 233, ${b.opacity})`);
        g.addColorStop(1, "transparent");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x, b.y + b.length);
        ctx.stroke();
      }

      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Garis kedekatan antar node
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(156, 163, 175, ${0.15 * (1 - d / 120)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        if (!reduced) n.y += n.vy;
        if (n.y > h + 20) {
          n.y = -20;
          n.x = Math.random() * w;
        }
        const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (!reduced && (dist < 180 || Math.random() > 0.98)) n.char = randChar();

        if (dist < 180) {
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.5 * (1 - dist / 180)})`;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = dist < 180 ? "#8B5CF6" : "rgba(156, 163, 175, 0.4)";
        ctx.fillText(n.char, n.x, n.y);
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      // Mode reduced-motion tidak punya loop; gambar ulang manual agar hover tetap terlihat
      if (reduced) draw();
    };
    const onLeave = () => {
      mouse.x = mouse.y = -1000;
      if (reduced) draw();
    };

    resize();
    draw();

    // Jalankan animasi hanya saat panel terlihat di layar
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    // Listener di window: pembungkus canvas pointer-events-none, jadi tidak menerima event
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />;
}
