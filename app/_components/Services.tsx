"use client";

import { motion } from "framer-motion";
import { ScrollText, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: ScrollText,
    title: "Undangan Digital",
    description: "Undangan interaktif mewah untuk momen spesial Anda.",
    href: "https://mst-invite-price.vercel.app/",
    features: [
      "RSVP Online",
      "Musik Latar",
      "Galeri Foto & Video",
      "Navigasi Peta",
    ],
    accent: "brand-purple",
    accentColor: "#8b5cf6",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Website cepat, modern, dan dioptimalkan untuk performa.",
    features: [
      "Performa Tinggi",
      "Animasi Halus",
      "Manajemen Data Mudah",
      "SEO Optimized",
    ],
    accentColor: "#06b6d4",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain berbasis data yang intuitif dan estetik.",
    features: [
      "Riset Perilaku Pengguna",
      "Sistem Desain",
      "Audit Visual",
      "Prototype Interaktif",
    ],
    accentColor: "#8b5cf6",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-cyan">
            Layanan
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
              Pilar Layanan Kami
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-muted leading-relaxed">
            Tiga pilar utama yang menjadi fondasi setiap solusi digital dari MST.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/8 bg-brand-surface/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/16"
            >
              {/* Clickable overlay for services with href */}
              {s.href && (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 rounded-2xl"
                  aria-label={`Buka ${s.title}`}
                />
              )}

              {/* Icon */}
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300"
                style={{
                  background: `${s.accentColor}12`,
                  borderColor: `${s.accentColor}25`,
                  color: s.accentColor,
                }}
              >
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-brand-light">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                {s.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-brand-muted">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: s.accentColor }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Arrow for clickable cards */}
              {s.href && (
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-brand-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lihat Detail
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
