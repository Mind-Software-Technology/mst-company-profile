"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-24 relative bg-surface">
      <WaveDivider from="page" to="surface" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 md:p-20 text-center bg-surface border border-bd"
        >
          {/* Soft corner glows — accent used sparingly, not as a full field */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#8B5CF6]/15 rounded-full -translate-y-1/2 -translate-x-1/3 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0EA5E9]/15 rounded-full translate-y-1/2 translate-x-1/3 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-5 leading-tight tracking-tight text-balance">
              Punya Ide Digital?{" "}
              <span className="gradient-text">Mari Bangun Sesuatu yang Berdampak.</span>
            </h2>
            <p className="text-fg-muted max-w-2xl mx-auto mb-10 text-base sm:text-lg font-light leading-relaxed">
              Konsultasikan ide Anda secara gratis bersama tim ahli kami. Kami siap mewujudkan visi digital Anda menjadi produk yang luar biasa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6283180553200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-[#8B5CF6] hover:bg-[#7c4de6] rounded-xl transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 hover:scale-[1.02]"
              >
                <Phone size={16} />
                Konsultasi WhatsApp
              </a>
              <a
                href="#portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-fg border border-bd hover:border-[#8B5CF6]/40 hover:bg-pill rounded-xl transition-all duration-300 group"
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
