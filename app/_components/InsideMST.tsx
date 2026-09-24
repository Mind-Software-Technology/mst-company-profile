"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const items = [
  { type: "image" as const, src: "/illustrations/about-teamwork.svg", rotate: -3 },
  { type: "text" as const, text: "Kami belajar setiap hari.", color: "#8B5CF6", rotate: 2 },
  { type: "image" as const, src: "/illustrations/uiux-design-tools.svg", rotate: 2 },
  { type: "text" as const, text: "Kolaborasi tanpa ego.", color: "#0EA5E9", rotate: -2 },
  { type: "image" as const, src: "/illustrations/cta-group-chat.svg", rotate: -1 },
  { type: "text" as const, text: "Kualitas bukan kompromi.", color: "#8B5CF6", rotate: 1 },
  { type: "image" as const, src: "/illustrations/uiux-interaction-design.svg", rotate: 3 },
  { type: "text" as const, text: "Detail kecil, dampak besar.", color: "#0EA5E9", rotate: -1 },
];

export default function InsideMST() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-page">
      <WaveDivider from="surface" to="page" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Inside MST
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 text-balance">
            Budaya Kerja di{" "}
            <span className="gradient-text">Balik Setiap Proyek</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-light max-w-lg">
            Bukan sekadar tim yang mengerjakan brief — ini cara kami berpikir, belajar, dan berkolaborasi setiap hari.
          </p>
        </motion.div>

        <div className="columns-2 sm:columns-3 gap-6 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.06 * i)}
              style={{ transform: `rotate(${item.rotate}deg)` }}
              className="transition-transform duration-500 hover:rotate-0"
            >
              {item.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-auto drop-shadow-xl"
                />
              ) : (
                <div className="rounded-2xl bg-pill p-6 flex items-center justify-center text-center min-h-[120px]">
                  <p className="font-display text-base sm:text-lg font-bold" style={{ color: item.color }}>
                    {item.text}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
