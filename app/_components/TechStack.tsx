"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { techIcons } from "@/lib/tech-icons";
import TechParticleCanvas from "./TechParticleCanvas";

const groups = [
  { name: "Frontend", caption: "Performa render tinggi & DX yang cepat.", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", caption: "Layanan yang stabil di bawah beban tinggi.", techs: ["Node.js", "Python", "Laravel"] },
  { name: "Database", caption: "Data konsisten, aman, dan mudah diskalakan.", techs: ["Supabase", "PostgreSQL"] },
  { name: "Mobile", caption: "Satu basis kode, native di dua platform.", techs: ["Flutter"] },
  { name: "Tools & Workflow", caption: "Desain hingga deployment yang rapi.", techs: ["Figma", "Docker"] },
];

export default function TechStack() {
  return (
    <section id="teknologi" className="py-20 md:py-24 relative overflow-hidden bg-page">

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B5CF6]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
        {/* Separuh kiri: partikel ASCII menyatu langsung dengan background section (tanpa card) */}
        <motion.div {...fadeUp(0)} className="relative min-h-[420px] flex flex-col justify-between">
          {/* Canvas dipudarkan di tepi lewat mask agar tidak ada batas kotak */}
          <div
            aria-hidden
            className="absolute -inset-x-6 -inset-y-10 pointer-events-none"
            style={{
              maskImage: "radial-gradient(ellipse at center, #000 40%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, #000 40%, transparent 78%)",
            }}
          >
            <TechParticleCanvas />
          </div>

          <div className="relative z-10">
            <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
              Kapabilitas Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-fg mb-4 text-balance leading-[1.1]">
              Bukan Sekadar Logo,{" "}
              <span className="gradient-text">Ini Cara Kami Membangun</span>
            </h2>
            <p className="text-fg-muted text-base sm:text-lg font-normal max-w-md">
              Setiap lapisan stack dipilih untuk performa, keamanan, dan skalabilitas jangka panjang.
            </p>
          </div>
        </motion.div>

        {/* Separuh kanan: daftar teknologi per kategori */}
        <motion.div {...staggerContainer(0.1)} className="grid sm:grid-cols-2 gap-x-6 gap-y-10 content-center">
          {groups.map((g) => (
            <motion.div
              key={g.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="border-t border-bd pt-5"
            >
              <h3 className="font-body text-xs font-medium text-fg uppercase tracking-[0.08em] mb-2">
                {g.name}
              </h3>
              <p className="text-xs text-fg-muted font-normal leading-relaxed mb-4">
                {g.caption}
              </p>
              <div className="flex flex-col gap-2">
                {g.techs.map((name) => {
                  const tech = techIcons[name];
                  return (
                    <div key={name} className="flex items-center gap-2.5 text-fg-muted">
                      <span style={{ color: tech.color }}>{tech.svg}</span>
                      <span className="font-body text-[12px] font-medium uppercase tracking-[0.08em]">{name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
