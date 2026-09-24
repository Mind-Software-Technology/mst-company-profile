"use client";

import { useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const CARD_WIDTH = 280;
const SHIFT = 180;

const projects = [
  {
    title: "Undangan Digital MST",
    category: "Website Invitation",
    status: "Live Project",
    statusColor: "#22c55e",
    image: "/undangan.png",
    isPhoto: true,
    link: "https://mst-invite-price.vercel.app/",
    color: "#8B5CF6",
  },
  {
    title: "MST Tiket Management",
    category: "Dashboard System",
    status: "Live Project",
    statusColor: "#22c55e",
    image: "/tiket.png",
    isPhoto: true,
    link: "https://mst-ticket-manager.vercel.app/",
    color: "#0EA5E9",
  },
  {
    title: "Custom Software Development",
    category: "Enterprise Application",
    status: "Development",
    statusColor: "#f59e0b",
    image: "/illustrations/dev-programming.svg",
    isPhoto: false,
    link: "#layanan",
    color: "#8B5CF6",
  },
  {
    title: "Aplikasi Mobile",
    category: "Mobile App Prototype",
    status: "Coming Soon",
    statusColor: "#0EA5E9",
    image: "/illustrations/web-mobile-apps.svg",
    isPhoto: false,
    link: "#layanan",
    color: "#0EA5E9",
  },
];

function cyclicDiff(i: number, active: number, length: number) {
  let diff = i - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export default function HeroShowcase() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % projects.length);
  const prev = () => setActive((a) => (a - 1 + projects.length) % projects.length);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#8B5CF6]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Stage */}
      <motion.div
        className="relative h-[340px] sm:h-[400px] touch-pan-y cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
      >
        {projects.map((p, i) => {
          const diff = cyclicDiff(i, active, projects.length);
          const abs = Math.abs(diff);
          const visible = abs <= 1;

          return (
            <motion.div
              key={p.title}
              className="absolute top-0 select-none"
              animate={{
                x: diff * SHIFT,
                scale: diff === 0 ? 1 : 0.85,
                opacity: visible ? (diff === 0 ? 1 : 0.5) : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              style={{
                left: "50%",
                marginLeft: -CARD_WIDTH / 2,
                width: CARD_WIDTH,
                zIndex: 30 - abs * 10,
                pointerEvents: diff === 0 ? "auto" : "none",
              }}
            >
              <div className="rounded-2xl overflow-hidden border border-bd bg-surface shadow-2xl">
                <div
                  className="relative aspect-[4/5] flex items-center justify-center overflow-hidden"
                  style={!p.isPhoto ? { background: `linear-gradient(160deg, ${p.color}25, ${p.color}08)` } : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    draggable={false}
                    className={p.isPhoto ? "w-full h-full object-cover object-top" : "w-2/3 h-2/3 object-contain"}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide glass border border-bd flex items-center gap-1.5"
                    style={{ color: p.statusColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.statusColor }} />
                    {p.status}
                  </span>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-fg-muted">
                    {p.category}
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <h3 className="font-display text-sm font-bold text-fg leading-snug">
                      {p.title}
                    </h3>
                    {diff === 0 && (
                      <a
                        href={p.link}
                        target={p.link.startsWith("http") ? "_blank" : undefined}
                        rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="shrink-0 p-1.5 rounded-lg bg-pill hover:bg-pill-hover transition-colors"
                        style={{ color: p.color }}
                        aria-label={`Lihat ${p.title}`}
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-pill hover:bg-pill-hover border border-bd text-fg-muted hover:text-fg transition-colors"
          aria-label="Sebelumnya"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#8B5CF6]" : "w-1.5 bg-pill hover:bg-pill-hover"
              }`}
              aria-label={`Lihat proyek ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-pill hover:bg-pill-hover border border-bd text-fg-muted hover:text-fg transition-colors"
          aria-label="Selanjutnya"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
