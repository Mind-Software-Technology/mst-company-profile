"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Code, Smartphone, Palette } from "lucide-react";
import HeroHeadline from "./HeroHeadline";

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#8B5CF6]/15 to-[#0EA5E9]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left — Text Content (7 cols) */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#a78bfa] text-xs sm:text-sm font-medium mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
            Solusi Digital Terpercaya
          </motion.div>

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
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:scale-[1.02]"
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
        </div>

        {/* Right — Interactive Visual Element (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0"
        >
          {/* Central Code Card */}
          <div className="relative w-full max-w-[400px]">
            {/* Main Code Box */}
            <div className="glass rounded-2xl p-6 relative shadow-2xl border border-bd">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-bd">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]/80" />
                <span className="ml-auto text-xs text-fg-muted font-mono">mst-core.ts</span>
              </div>

              {/* Code lines */}
              <div className="font-mono text-xs sm:text-sm space-y-2.5 text-left">
                <div>
                  <span className="text-[#8B5CF6]">const</span>{" "}
                  <span className="text-[#0EA5E9]">solution</span>{" "}
                  <span className="text-fg-muted">=</span>{" "}
                  <span className="text-[#22c55e]">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-fg font-semibold">quality</span>
                  <span className="text-fg-muted">:</span>{" "}
                  <span className="text-[#f59e0b]">&quot;premium&quot;</span>
                  <span className="text-fg-muted">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-fg font-semibold">speed</span>
                  <span className="text-fg-muted">:</span>{" "}
                  <span className="text-[#f59e0b]">&quot;blazing&quot;</span>
                  <span className="text-fg-muted">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-fg font-semibold">scale</span>
                  <span className="text-fg-muted">:</span>{" "}
                  <span className="text-[#0EA5E9]">Infinity</span>
                </div>
                <div>
                  <span className="text-[#22c55e]">{`}`}</span>
                  <span className="text-fg-muted">;</span>
                </div>
              </div>
            </div>

            {/* Floating Badge — Top Right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-2 sm:-right-6 glass rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-xl border border-bd z-20"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center shrink-0">
                <Code size={16} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-fg-muted uppercase tracking-wider">Status</div>
                <div className="text-xs font-semibold text-[#22c55e] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" /> Deployed
                </div>
              </div>
            </motion.div>

            {/* Floating Badge — Bottom Left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-2 sm:-left-6 glass rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-xl border border-bd z-20"
            >
              <div className="flex -space-x-2 shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center border-2 border-surface">
                  <Smartphone size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0EA5E9] flex items-center justify-center border-2 border-surface">
                  <Palette size={14} className="text-white" />
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-fg">150+ Proyek</div>
                <div className="text-[10px] text-fg-muted">99% Kepuasan</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
