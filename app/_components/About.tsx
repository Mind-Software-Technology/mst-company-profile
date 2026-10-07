"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2, Sparkles, Shield, Zap } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const missions = [
  "Mengembangkan perangkat lunak berkualitas tinggi dengan arsitektur modern yang cepat dan aman.",
  "Menghadirkan desain antarmuka (UI/UX) yang estetik, intuitif, dan berorientasi pada pengalaman pengguna.",
  "Mendorong akselerasi bisnis digital bagi UMKM, korporasi, dan kreator dengan solusi yang skalabel.",
  "Menjaga komitmen layanan purna jual serta keandalan sistem jangka panjang bagi seluruh klien.",
];

const coreValues = [
  {
    icon: <Zap size={20} />,
    title: "Kecepatan Performa",
    desc: "Optimasi kode maksimal untuk waktu muat sekejap dan responsivitas tinggi.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Estetika Modern",
    desc: "Desain visual kelas atas yang memukau dan meningkatkan kredibilitas brand.",
  },
  {
    icon: <Shield size={20} />,
    title: "Keandalan & Keamanan",
    desc: "Arsitektur tangguh yang teruji untuk kestabilan sistem di bawah tekanan.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-20 md:py-24 relative isolate overflow-hidden bg-surface">
      {/* Background gambar logo kristal — cover + dipusatkan; dibuat redup agar teks tetap terbaca */}
      <Image
        src="/mstgls.jpeg"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        aria-hidden
        style={{ maskImage: "radial-gradient(ellipse at center, #000 45%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, #000 45%, transparent 75%)" }}
        className="-z-30 object-cover object-center scale-[0.8] opacity-25 pointer-events-none select-none"
      />
      {/* Kedalaman: scrim vertikal (menyatu ke section atas/bawah) + vignette radial di tepi */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 pointer-events-none bg-[linear-gradient(to_bottom,var(--color-surface)_0%,color-mix(in_srgb,var(--color-surface)_55%,transparent)_22%,color-mix(in_srgb,var(--color-surface)_65%,transparent)_70%,var(--color-surface)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,6,12,0.75)_100%)]"
      />


      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#8B5CF6]/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
          Tentang Kami & Visi Misi
        </span>

        {/* Editorial split — big statement left, values as a list right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 items-start">
          <motion.div {...fadeUp(0)} className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-fg mb-6 leading-[1.15] text-balance">
              Kami hadir karena banyak bisnis punya ide bagus,{" "}
              <span className="gradient-text">tapi tak punya mitra teknis yang bisa dipercaya.</span>
            </h2>
            <p className="text-fg-muted text-base sm:text-lg font-normal leading-relaxed">
              Mind Software Technology (MST) menggabungkan kreativitas desain dengan ketajaman rekayasa perangkat lunak — bukan sekadar mengerjakan brief, tapi ikut memikirkan cara kerja produk digital yang akan bertahan lama.
            </p>
          </motion.div>

          <div className="lg:col-span-7 divide-y divide-bd border-t border-b border-bd">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(0.1 * (i + 1))}
                className="group flex items-start gap-5 py-6"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#8B5CF6]/15 border border-bd flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 group-hover:text-fg transition-all duration-300">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-fg mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-fg-muted font-normal leading-relaxed max-w-md">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visi & Misi Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Visi Box */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-5 relative rounded-3xl bg-surface/70 backdrop-blur-xl shadow-[0_2px_4px_rgba(0,0,0,0.25),0_24px_48px_-12px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset] border border-bd p-8 sm:p-10 flex flex-col justify-between overflow-hidden group hover:border-[#8B5CF6]/50 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-[#8B5CF6]/20 transition-all duration-500" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/illustrations/about-collaboration.svg"
              alt=""
              aria-hidden="true"
              className="absolute -top-4 -right-4 w-40 h-40 opacity-[0.12] pointer-events-none select-none"
            />

            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-xs font-semibold text-[#8B5CF6] mb-6">
                <Target size={14} />
                Visi Perusahaan
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-fg mb-6 leading-snug">
                Menjadi pelopor solusi teknologi digital masa depan.
              </h3>
              <p className="text-fg-muted text-sm sm:text-base font-normal leading-relaxed">
                &ldquo;Menjadi perusahaan teknologi terdepan dalam menghadirkan solusi digital yang inovatif, berdampak nyata, berdaya saing global, serta mudah diakses oleh seluruh lapisan bisnis di Indonesia dan dunia.&rdquo;
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-bd flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="font-body text-xs text-fg-muted uppercase tracking-[0.08em]">
                Orientasi Jangka Panjang
              </span>
            </div>
          </motion.div>

          {/* Misi Box */}
          <motion.div
            {...fadeUp(0.3)}
            className="lg:col-span-7 relative rounded-3xl bg-surface/70 backdrop-blur-xl shadow-[0_2px_4px_rgba(0,0,0,0.25),0_24px_48px_-12px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset] border border-bd p-8 sm:p-10 hover:border-[#0EA5E9]/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 text-xs font-semibold text-[#0EA5E9] mb-6">
                <Compass size={14} />
                Misi Utama
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-fg mb-6">
                Langkah Nyata Kami Untuk Klien
              </h3>

              <div className="space-y-4">
                {missions.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-pill border border-bd hover:bg-pill-hover transition-colors duration-200"
                  >
                    <CheckCircle2 size={18} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-fg font-normal leading-relaxed">
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 flex justify-end">
              <span className="text-xs text-fg-muted font-body uppercase tracking-[0.08em]">
                MST / Core Mission Statement
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
