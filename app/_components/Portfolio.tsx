"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderPlus } from "lucide-react";
import { fadeUp, fadeUpScale } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const projects = [
  {
    title: "Undangan Digital MST",
    category: "Undangan Digital",
    desc: "Platform undangan digital modern dengan fitur RSVP online, galeri foto interaktif, pemutar musik, dan integrasi peta lokasi.",
    metric: "500+ undangan terkirim",
    image: "/undangan.png",
    link: "https://mst-invite-price.vercel.app/",
    tags: ["React", "Node.js"],
    color: "#8B5CF6",
  },
  {
    title: "MST Tiket Management",
    category: "Kolaborasi Tim & Task Tracker",
    desc: "Platform sistem tiket terintegrasi untuk pembagian tugas tim, pelacakan progres proyek (issue tracking), manajemen alur kerja Agile, dan kolaborasi real-time.",
    metric: "Produktivitas tim meningkat 50%",
    image: "/tiket.png",
    link: "https://mst-ticket-manager.vercel.app/",
    tags: ["Next.js", "Tailwind", "Supabase", "Realtime API"],
    color: "#0EA5E9",
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-24 md:py-32 relative overflow-hidden bg-surface">
      <WaveDivider from="page" to="surface" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-20">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Portofolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 text-balance">
            Proyek <span className="gradient-text">Unggulan</span> Kami
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-light">
            Beberapa studi kasus nyata dari klien yang telah bertransformasi bersama kami.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-28">
          {projects.map((p, i) => {
            const mirrored = i % 2 === 1;
            return (
              <div key={p.title} className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <motion.div
                  {...fadeUpScale(0)}
                  className={`lg:col-span-7 relative ${mirrored ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-bd">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface border-b border-bd">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70" />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.title} className="w-full h-auto object-cover" />
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.1)} className={`lg:col-span-5 ${mirrored ? "lg:order-1" : ""}`}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: p.color }}>
                    {p.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-fg mb-6">
                    {p.title}
                  </h3>

                  <p className="text-sm sm:text-base text-fg-muted leading-relaxed mb-4 font-light max-w-md">
                    {p.desc}
                  </p>
                  <p className="text-sm font-semibold mb-6" style={{ color: p.color }}>
                    ✦ {p.metric}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-pill text-fg-muted border border-bd">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-semibold border-b border-bd pb-1 hover:border-current transition-colors duration-300"
                    style={{ color: p.color }}
                  >
                    Kunjungi Proyek
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              </div>
            );
          })}

          {/* Coming soon — full-width honest teaser banner */}
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl border border-dashed border-bd bg-page/50 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-pill border border-bd flex items-center justify-center text-fg-muted shrink-0">
                <FolderPlus size={26} />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold text-fg-muted uppercase tracking-widest mb-1.5">
                  Studi Kasus Berikutnya
                </span>
                <h3 className="font-display text-xl font-bold text-fg-muted">
                  Segera Hadir
                </h3>
                <p className="text-sm text-fg-muted font-light mt-1 max-w-lg">
                  Proyek baru sedang kami kerjakan bersama klien — nantikan ceritanya di sini.
                </p>
              </div>
            </div>
            <a
              href="#kontak"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-pill border border-bd text-fg-muted hover:text-fg hover:border-[#8B5CF6]/40 text-sm font-semibold transition-colors duration-300"
            >
              Jadi Klien Berikutnya
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
