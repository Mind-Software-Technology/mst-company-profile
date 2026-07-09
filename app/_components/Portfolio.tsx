"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Undangan Digital MST",
    category: "Undangan Digital",
    desc: "Platform undangan digital modern dengan fitur RSVP online, galeri foto interaktif, pemutar musik, dan integrasi peta lokasi.",
    metric: "500+ undangan terkirim",
    image: "/undangan.png",
    link: "https://mst-invite-price.vercel.app/",
    tags: ["React", "Node.js"],
  },
  {
    title: "MST Tiket Management",
    category: "Kolaborasi Tim & Task Tracker",
    desc: "Platform sistem tiket terintegrasi untuk pembagian tugas tim, pelacakan progres proyek (issue tracking), manajemen alur kerja Agile, dan kolaborasi real-time.",
    metric: "Produktivitas tim meningkat 50%",
    image: "/tiket.png",
    link: "https://mst-ticket-manager.vercel.app/",
    tags: ["Next.js", "Tailwind", "Supabase", "Realtime API"],
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay },
});

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-20 md:py-24 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Portofolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4">
            Proyek <span className="gradient-text">Unggulan</span> Kami
          </h2>
          <p className="text-fg-muted max-w-2xl mx-auto text-base sm:text-lg font-light">
            Beberapa karya terbaik yang telah kami kembangkan untuk mendukung kesuksesan digital klien kami.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.15 * (i + 1))}
              className="group relative rounded-2xl bg-surface border border-bd overflow-hidden hover:border-[#8B5CF6]/40 transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-page">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur-md text-xs font-medium text-fg border border-bd">
                  {p.category}
                </div>

                {/* External link button */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-surface/80 backdrop-blur-md text-fg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-[#8B5CF6] hover:text-white border border-bd hover:border-[#8B5CF6]"
                  aria-label={`Kunjungi ${p.title}`}
                >
                  <ArrowUpRight size={16} />
                </a>

                {/* Success Metric Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-[#8B5CF6]/25 backdrop-blur-md text-xs font-semibold text-fg border border-[#8B5CF6]/30 shadow-lg">
                  ✦ {p.metric}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-display text-xl font-bold text-fg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed mb-6 font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-bd">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-pill text-fg-muted border border-bd"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
