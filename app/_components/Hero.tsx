"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Zap, ShieldCheck } from "lucide-react";
import HeroHeadline from "./HeroHeadline";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-page">
      {/* Ambient background glow — two offset orbs, asymmetric */}
      <div className="absolute top-10 left-[8%] w-[420px] h-[300px] bg-[#8B5CF6]/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-[6%] w-[380px] h-[280px] bg-[#0EA5E9]/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left — Text Content (5 cols) */}
        <div className="lg:col-span-5 text-left">
          <HeroHeadline />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-fg-muted max-w-xl leading-relaxed font-light"
          >
            Kami membantu perusahaan mentransformasikan ide menjadi perangkat
            lunak canggih, aman, dan skalabel dengan standar performa tertinggi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/6283180553200"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-[#8B5CF6] hover:bg-[#7c4de6] transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:scale-[1.02]"
            >
              Mulai Proyek
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#portofolio"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-fg-muted border border-bd hover:border-[#8B5CF6]/40 hover:text-fg hover:bg-pill rounded-xl transition-all duration-300"
            >
              <Play size={14} className="text-[#8B5CF6] fill-[#8B5CF6]" />
              Lihat Portofolio
            </a>
          </motion.div>

          {/* Trust Indicators Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-bd grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg"
          >
            <div className="flex items-center gap-2 text-fg-muted">
              <Star size={16} className="text-[#f59e0b] fill-[#f59e0b] shrink-0" />
              <span className="text-xs"><strong className="text-fg font-semibold">99%</strong> Kepuasan Klien</span>
            </div>
            <div className="flex items-center gap-2 text-fg-muted">
              <Zap size={16} className="text-[#8B5CF6] shrink-0" />
              <span className="text-xs"><strong className="text-fg font-semibold">&lt;24 Jam</strong> SLA Respons</span>
            </div>
            <div className="flex items-center gap-2 text-fg-muted">
              <ShieldCheck size={16} className="text-[#0EA5E9] shrink-0" />
              <span className="text-xs"><strong className="text-fg font-semibold">Enterprise</strong> Grade</span>
            </div>
          </motion.div>
        </div>

        {/* Right — Interactive Product Showcase (7 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative mt-4 lg:mt-0"
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}
