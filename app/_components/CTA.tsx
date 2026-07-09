"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay },
});

export default function CTA() {
  return (
    <section className="py-20 md:py-24 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 md:p-20 text-center shadow-2xl border border-white/15"
          style={{
            background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 45%, #0EA5E9 100%)",
          }}
        >
          {/* Ambient light orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0EA5E9]/40 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Siap Memulai Proyek
              <br className="hidden sm:inline" /> Digital Anda?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-base sm:text-lg font-light leading-relaxed">
              Konsultasikan ide Anda secara gratis bersama tim ahli kami. Kami siap mewujudkan visi digital Anda menjadi produk yang luar biasa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6283180553200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-[#6D28D9] bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-xl hover:scale-[1.02]"
              >
                <Phone size={16} />
                Konsultasi WhatsApp
              </a>
              <a
                href="#portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-all duration-300 group"
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
