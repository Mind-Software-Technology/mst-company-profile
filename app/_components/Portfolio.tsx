"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface Project {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/undangan.png",
    category: "Undangan Digital",
    title: "Undangan Digital MST",
    description:
      "Platform undangan digital modern dengan fitur RSVP online, galeri foto interaktif, pemutar musik, dan integrasi peta lokasi.",
    featured: true,
  },
  {
    id: 2,
    image: "/tiket.png",
    category: "Sistem Tiket",
    title: "MST Tiket Management",
    description:
      "Platform sistem tiket terintegrasi untuk pembagian tugas tim, pelacakan progres proyek, dan kolaborasi real-time.",
  },
  {
    id: 3,
    image: "/palm.jfif",
    category: "Prototipe Aplikasi",
    title: "Prototipe Palm Oil",
    description:
      "Prototipe aplikasi pengelolaan kebun sawit — memantau area tanam, produksi, dan logistik panen dalam satu dasbor interaktif.",
  },
  {
    id: 4,
    image: "/ecc.jfif",
    category: "Company Profile",
    title: "Website ECC-BTS",
    description:
      "Website company profile ECC-BTS dengan tampilan modern, responsif, dan optimasi performa untuk presentasi layanan bisnis.",
    featured: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-20 md:py-24 relative overflow-hidden bg-surface">

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
          <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
Portofolio
</span>
<h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-fg mb-4 text-balance">
            Proyek unggulan kami
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-normal">
            Beberapa studi kasus nyata dari klien yang telah bertransformasi bersama kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[16rem] md:auto-rows-[17rem] lg:auto-rows-[19rem]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              {...fadeUp(0.1 + index * 0.08)}
              className={`group relative overflow-hidden rounded-2xl border border-bd bg-pill ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/5"
              />

              <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                <span className="mb-3 self-start rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                  {project.category}
                </span>
                <h3
                  className={`font-display font-semibold tracking-[-0.015em] text-white ${
                    project.featured ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-2 max-w-md text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white/90 ${
                    project.featured ? "line-clamp-3" : "line-clamp-2"
                  }`}
                >
                  {project.description}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-[#06b6d4]/0 transition-all duration-500 group-hover:opacity-100 group-hover:ring-[#06b6d4]/40"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
