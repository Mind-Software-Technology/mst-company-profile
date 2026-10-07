"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const values = [
  { image: "/illustrations/about-teamwork.svg", text: "Kami belajar setiap hari.", color: "#8B5CF6" },
  { image: "/illustrations/uiux-design-tools.svg", text: "Kolaborasi tanpa ego.", color: "#0EA5E9" },
  { image: "/illustrations/cta-group-chat.svg", text: "Kualitas bukan kompromi.", color: "#8B5CF6" },
  { image: "/illustrations/uiux-interaction-design.svg", text: "Detail kecil, dampak besar.", color: "#0EA5E9" },
];

export default function InsideMST() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-page">

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
          <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
Budaya Kerja
</span>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-fg mb-4 text-balance">
            Budaya Kerja di{" "}
            <span className="gradient-text">Balik Setiap Proyek</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-normal max-w-lg">
            Bukan sekadar tim yang mengerjakan brief — ini cara kami berpikir, belajar, dan berkolaborasi setiap hari.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer(0.1)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {values.map((v) => (
            <motion.div
              key={v.text}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center gap-4 rounded-2xl border border-bd bg-surface/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_var(--glow)]"
              style={{ "--glow": `${v.color}4d` } as CSSProperties}
            >
              <div
                className="w-20 h-20 rounded-2xl border border-bd bg-pill flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{ borderColor: `${v.color}40`, backgroundColor: `${v.color}14` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-body text-sm sm:text-base font-bold leading-snug" style={{ color: v.color }}>
                {v.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
