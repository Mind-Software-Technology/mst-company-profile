"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Eye, Code, Target, Lightbulb } from "lucide-react";

const stats = [
  { val: "50+", label: "Proyek Selesai" },
  { val: "30+", label: "Klien Puas" },
  { val: "3", label: "Pilar Layanan" },
];

const values = [
  { icon: Zap, text: "Kecepatan eksekusi tanpa mengorbankan kualitas" },
  { icon: Eye, text: "Estetika visual yang modern & konsisten" },
  { icon: Code, text: "Fondasi kode yang kokoh & scalable" },
];

const missions = [
  "Deliver client focused software solutions powered by AI for greater efficiency and precision.",
  "Transform ideas into innovative digital products and services with meaningful impact.",
  "Build long term partnerships through transparency, trust, and effective communication.",
  "Maintain the highest standards of quality, reliability, and AI enhanced performance.",
  "Continuously learn, adapt, and leverage AI to provide greater value to our clients.",
];

const fadeUp = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left column */}
          <motion.div {...fadeUp(0)} className="flex gap-5">
            <div className="w-px shrink-0 rounded-full bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent self-stretch" />
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-brand-cyan">
                Tentang Kami
              </p>
              <h2
                className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
                  Siapa Kami?
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-brand-muted leading-relaxed text-sm">
                <p>
                  Mind Software Technology adalah mitra solusi TI yang percaya bahwa
                  teknologi hebat lahir dari kecepatan, estetika, dan fondasi kode
                  yang kokoh.
                </p>
                <p>
                  Kami menghadirkan undangan digital mewah, website berperforma
                  tinggi, dan desain UI/UX berbasis data. Semua dirancang untuk
                  membantu bisnis Anda tumbuh di era digital.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {values.map((v) => (
                  <div key={v.text} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    <span className="text-sm text-brand-muted">{v.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — stats + card */}
          <motion.div {...fadeUp(0.15)} className="space-y-5">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/8 bg-brand-surface/60 p-3 sm:p-5 text-center backdrop-blur-sm"
                >
                  <p
                    className="text-2xl font-extrabold text-white md:text-3xl"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.val}
                  </p>
                  <p className="mt-1 text-xs text-brand-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/8 bg-brand-surface/60 p-6 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-brand-light">Mengapa MST?</h4>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                Karena setiap proyek adalah tanggung jawab. Kami menggabungkan
                pengalaman teknis dan sentuhan kreatif untuk menghasilkan produk
                digital yang tidak hanya indah, tetapi juga berfungsi sempurna.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-32">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2
              className="text-3xl font-extrabold md:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
                Visi & Misi
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-muted">
              Arah dan tujuan kami dalam membangun solusi teknologi cerdas.
            </p>
          </motion.div>

          <div className="relative grid gap-8 lg:grid-cols-12 items-start">
            {/* Ambient Futuristic Glows */}
            <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-[100px]" />
            <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-brand-cyan/10 blur-[100px]" />

            {/* Vision card */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="group relative overflow-hidden rounded-3xl border border-white/8 bg-brand-surface/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-brand-purple/40 hover:bg-brand-surface/80 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                {/* Futuristic decoration */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-purple/20 blur-3xl transition-all duration-500 group-hover:bg-brand-purple/40" />
                
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/20 to-transparent text-brand-purple border border-brand-purple/20 transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-2xl bg-brand-purple/20 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <Target className="relative z-10 h-6 w-6" />
                </div>
                <h3 className="relative z-10 mt-6 text-2xl font-bold text-white tracking-tight">Visi Kami</h3>
                <p className="mt-4 text-sm text-brand-muted leading-relaxed">
                  To become a leading AI driven technology company that transforms
                  ideas into smart, efficient solutions, ensuring every client feels
                  heard, valued, and fully satisfied with our services.
                </p>
              </div>
            </motion.div>

            {/* Mission grid */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-8">
              {/* Misi Kami Header */}
              <div className="mb-8 flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-transparent text-brand-cyan border border-brand-cyan/20">
                  <div className="absolute inset-0 rounded-2xl bg-brand-cyan/20 blur-md" />
                  <Lightbulb className="relative z-10 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Misi Kami</h3>
                  <p className="mt-1 text-sm text-brand-muted">Langkah strategis kami</p>
                </div>
              </div>

              <div className="relative grid gap-4 sm:grid-cols-2">
                {missions.map((m, i) => (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl border border-white/6 bg-brand-surface/40 p-6 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-brand-surface/80 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] ${
                      i === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-xs font-bold text-brand-cyan border border-brand-cyan/20 transition-colors duration-300 group-hover:bg-brand-cyan group-hover:text-white">
                        0{i + 1}
                      </span>
                      <p className="text-sm text-brand-muted leading-relaxed transition-colors duration-300 group-hover:text-brand-light">{m}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
