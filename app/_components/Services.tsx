"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Palette, Smartphone, Code2, GraduationCap } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import ServicesOrbitSphere from "./ServicesOrbitSphere";

const services = [
  {
    icon: <Mail size={18} />,
    title: "Undangan Digital",
    desc: "Undangan digital interaktif dan elegan dengan fitur RSVP, musik, galeri foto, dan navigasi peta.",
    features: ["RSVP Online", "Galeri Foto", "Mudah Dibagikan"],
    color: "#8B5CF6",
  },
  {
    icon: <Globe size={18} />,
    title: "Website Development",
    desc: "Website profesional berperforma tinggi dengan animasi halus dan kemudahan manajemen konten.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "#0EA5E9",
  },
  {
    icon: <Smartphone size={18} />,
    title: "Aplikasi Mobile",
    desc: "Pengembangan aplikasi mobile Android dan iOS berperforma tinggi dengan antarmuka intuitif.",
    features: ["Android & iOS", "High Performance", "User Friendly"],
    color: "#06B6D4",
  },
  {
    icon: <Palette size={18} />,
    title: "Desain UI/UX",
    desc: "Pendekatan berbasis data dengan keindahan estetik dan fungsionalitas intuitif untuk produk digital.",
    features: ["Research", "Prototyping", "Design System"],
    color: "#8B5CF6",
  },
  {
    icon: <Code2 size={18} />,
    title: "Custom Software Development",
    desc: "Sistem internal, dashboard, dan aplikasi yang dirancang khusus untuk alur kerja bisnis Anda.",
    features: ["Arsitektur Modern", "API & Integrasi", "Skalabel"],
    color: "#0EA5E9",
  },
  {
    icon: <GraduationCap size={18} />,
    title: "Programming Education",
    desc: "Pelatihan pemrograman praktis untuk individu maupun tim internal, dibimbing developer aktif.",
    features: ["Web Dev", "Mobile", "Backend", "Database"],
    color: "#8B5CF6",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="relative py-20 md:py-24 overflow-hidden bg-[#0A0B10]">
      {/* Persistent animated particle sphere — the section's full background */}
      <ServicesOrbitSphere />

      {/* Scrim behind the content for guaranteed contrast against the
          moving sphere underneath */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(10,11,16,0.75) 0%, rgba(10,11,16,0.4) 55%, rgba(10,11,16,0.75) 100%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-10">
          <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
Layanan Kami
</span>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-white mb-4 text-balance">
            Solusi Lengkap untuk{" "}
            <span className="gradient-text">Bisnis Digital</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-normal">
            Dari konsep hingga peluncuran, kami hadir di setiap tahap perjalanan digital Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              {...fadeUp(0.05 + i * 0.07)}
              className="group relative flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.1] hover:shadow-[0_10px_30px_-10px_var(--svc-glow)] focus-within:border-white/20"
              style={{ "--svc-glow": `${svc.color}4d` } as CSSProperties}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl border mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                style={{
                  backgroundColor: `${svc.color}1f`,
                  borderColor: `${svc.color}40`,
                  color: svc.color,
                }}
              >
                {svc.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-2 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-2 font-normal">
                {svc.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                  >
                    {f}
                  </span>
                ))}
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
