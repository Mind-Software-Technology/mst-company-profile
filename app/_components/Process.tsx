"use client";

import { motion } from "framer-motion";
import { Search, Compass, PenTool, Code2, Bug, Rocket } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const steps = [
  { icon: <Search size={18} />, title: "Discovery", desc: "Memahami masalah, target pengguna, dan tujuan bisnis Anda." },
  { icon: <Compass size={18} />, title: "Strategy", desc: "Menentukan arsitektur, teknologi, dan roadmap pengerjaan." },
  { icon: <PenTool size={18} />, title: "Design", desc: "Merancang alur & antarmuka yang intuitif sebelum baris kode pertama." },
  { icon: <Code2 size={18} />, title: "Development", desc: "Membangun sistem dengan standar kode yang bersih dan terukur." },
  { icon: <Bug size={18} />, title: "Testing", desc: "Menguji fungsi, performa, dan keamanan sebelum rilis." },
  { icon: <Rocket size={18} />, title: "Launch", desc: "Meluncurkan produk dan mendampingi pasca-peluncuran." },
];

export default function Process() {
  return (
    <section id="proses" className="py-20 md:py-24 relative overflow-hidden bg-surface">
      <WaveDivider from="page" to="surface" />

      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#0EA5E9]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Cara Kami Bekerja
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 text-balance">
            Proses yang <span className="gradient-text">Jelas & Terukur</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-light">
            Setiap proyek melewati enam tahap yang sama — tidak ada langkah yang dilewati.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer(0.12)}
          className="relative grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4"
        >
          {/* connecting line — desktop only */}
          <div className="hidden md:block absolute top-[22px] left-[8%] right-[8%] h-px bg-bd" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex md:flex-col items-start md:items-start gap-4 md:gap-0"
            >
              <div className="relative z-10 w-11 h-11 shrink-0 rounded-full bg-surface border border-bd flex items-center justify-center text-[#8B5CF6] font-display font-bold text-sm md:mb-5">
                {step.icon}
              </div>
              <div>
                <div className="text-[10px] font-mono text-fg-muted mb-1">0{i + 1}</div>
                <h3 className="font-display text-base font-bold text-fg mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-fg-muted leading-relaxed font-light max-w-[160px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
