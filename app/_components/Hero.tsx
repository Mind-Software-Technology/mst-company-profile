"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Zap, ShieldCheck, Code2, Palette, Rocket } from "lucide-react";
import HeroHeadline from "./HeroHeadline";
import HeroGradientBackground from "./HeroGradientBackground";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const tags = [
  { icon: <Star size={13} className="text-[#f59e0b] fill-[#f59e0b]" />, label: "99% Kepuasan Klien" },
  { icon: <Zap size={13} className="text-[#C4B5FD]" />, label: "<24 Jam SLA Respons" },
  { icon: <ShieldCheck size={13} className="text-[#38BDF8]" />, label: "Enterprise Grade" },
];

export default function Hero() {
  return (
    <section id="beranda" className="relative flex min-h-[100svh] bg-[#0A0B10] p-2.5 md:p-4">
      {/* Tanpa card/pita di luar: panel langsung di atas background. Takik kiri-bawah digambar SVG (di bawah) agar sudutnya melengkung */}
      <div className="relative flex-1 min-h-[620px]">
        {/* Garis tepi: lapisan luar tipis (p-px) */}
        <div className="relative h-full rounded-[1.5rem] bg-white/20 p-px min-[1080px]:clip-hero-top">
        <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0A0B10] min-[1080px]:clip-hero-top">
          <HeroGradientBackground />

          {/* Scrim di sisi kanan-bawah agar teks putih selalu terbaca */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 55%, transparent 80%)" }}
          />

          {/* Konten di tengah panel */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-8 pt-28 md:px-12 md:pb-12">
            <div className="max-w-3xl">
              <HeroHeadline />

              <motion.p
                {...fade(0.2)}
                className="mt-6 mx-auto max-w-xl text-base sm:text-lg text-white/75 leading-relaxed font-normal"
              >
                Kami membantu perusahaan mentransformasikan ide menjadi perangkat
                lunak canggih, aman, dan skalabel dengan standar performa tertinggi.
              </motion.p>

              <motion.div {...fade(0.3)} className="mt-6 flex flex-wrap justify-center gap-2">
                {tags.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                  >
                    {t.icon}
                    {t.label}
                  </span>
                ))}
              </motion.div>

              <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-0">
                <a
                  href="#portofolio"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white/85 hover:text-white rounded-full sm:rounded-[22px_4px_4px_22px] sm:clip-pair-l bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-colors duration-300"
                >
                  <Play size={13} />
                  Lihat Portofolio
                </a>
                <a
                  href="https://wa.me/6283180553200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white rounded-full sm:rounded-[4px_22px_22px_4px] sm:clip-pair-r sm:-ml-[8px] bg-gradient-to-r from-[#8B5CF6] via-[#0EA5E9] to-[#8B5CF6] shadow-[0_0_22px_-4px_rgba(139,92,246,0.65)] hover:shadow-[0_0_28px_-4px_rgba(139,92,246,0.85)] hover:brightness-110 transition-all duration-300"
                >
                  Mulai Proyek
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        </div>

        {/* Takik kiri-bawah: SVG berwarna sama dengan background section. Sisi atas lurus → busur
            konsentris dengan ujung pil (radius pil 32 + jarak 8 = 40) → sisi miring → sudut bawah membulat.
            Jarak ke pil konsisten 8px di semua sisi. */}
        <svg
          aria-hidden
          width="410"
          height="94"
          viewBox="0 0 410 94"
          className="hidden md:block absolute left-0 bottom-0 pointer-events-none"
          fill="none"
        >
          <path
            d="M0 94 V0 A14 14 0 0 0 14 14 H316 A40 40 0 0 1 350.64 34 L378.28 81.88 Q385.28 94 399.28 94 Z"
            fill="#0A0B10"
          />
          <path
            d="M0 0 A14 14 0 0 0 14 14 H316 A40 40 0 0 1 350.64 34 L378.28 81.88 Q385.28 94 399.28 94"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            transform="translate(0.5 -0.5)"
          />
        </svg>

        {/* Pil di dalam takik kiri-bawah: avatar bertumpuk + teks */}
        <motion.div
          {...fade(0.5)}
          className="hidden md:flex absolute left-2 bottom-2 h-16 w-[340px] items-center gap-4 rounded-full bg-white/90 pl-2 pr-5 text-[#0A0B10]"
        >
          <div className="flex -space-x-3 shrink-0">
            {[<Code2 key="c" size={16} />, <Palette key="p" size={16} />, <Rocket key="r" size={16} />].map((icon, i) => (
              <span
                key={i}
                className="w-11 h-11 rounded-full border-2 border-white/90 bg-[#0A0B10] text-white flex items-center justify-center"
              >
                {icon}
              </span>
            ))}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Dipercaya UMKM &amp; korporasi</div>
            <div className="text-xs text-black/55">Mind Software Technology</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
