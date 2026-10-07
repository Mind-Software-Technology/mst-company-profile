"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-24 relative bg-surface">

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 md:p-20 text-center bg-surface border border-bd"
        >
          {/* Soft corner glows — accent used sparingly, not as a full field */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#8B5CF6]/15 rounded-full -translate-y-1/2 -translate-x-1/3 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0EA5E9]/15 rounded-full translate-y-1/2 translate-x-1/3 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
Mulai Sekarang
</span>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-fg mb-5 leading-tight tracking-[-0.015em] text-balance">
              Punya Ide Digital?{" "}
              <span className="gradient-text">Mari Bangun Sesuatu yang Berdampak.</span>
            </h2>
            <p className="text-fg-muted max-w-2xl mx-auto mb-10 text-base sm:text-lg font-normal leading-relaxed">
              Konsultasikan ide Anda secara gratis bersama tim ahli kami. Kami siap mewujudkan visi digital Anda menjadi produk yang luar biasa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
              <a
                href="https://wa.me/6283180553200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#0EA5E9] to-[#8B5CF6] rounded-full sm:rounded-[22px_4px_4px_22px] sm:clip-pair-l transition-all duration-300 shadow-[0_0_24px_-4px_rgba(139,92,246,0.65)] hover:shadow-[0_0_32px_-4px_rgba(139,92,246,0.85)] hover:brightness-110 hover:scale-[1.02]"
              >
                <Phone size={16} />
                Konsultasi WhatsApp
              </a>
              <a
                href="#portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-fg bg-white/10 hover:bg-white/15 rounded-full sm:rounded-[4px_22px_22px_4px] sm:clip-pair-r sm:-ml-[8px] transition-all duration-300 group"
              >
                Lihat Portofolio
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
