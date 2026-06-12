"use client";

import { motion } from "framer-motion";

const categoryConfig: Record<string, { color: string; bg: string }> = {
  "Undangan Digital": { color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
  "Website Development": { color: "#06b6d4", bg: "rgba(6,182,212,0.1)" },
  "UI/UX Design": { color: "#10b981", bg: "rgba(16,185,129,0.1)" },
};

const projects = [
  { 
    title: "MST Ticket Manager", 
    category: "Website Development",
    image: "/tiket.png",
    link: "https://mst-ticket-manager.vercel.app/"
  },
  {
    title: "Undangan Digital Premium",
    category: "Undangan Digital",
    image: "/undangan.png",
    link: "https://mst-invite-price.vercel.app/"
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-cyan">
            Portofolio
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
              Karya Kami
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-muted">
            Beberapa proyek dan konsep yang telah kami kerjakan.
          </p>
        </div>

        {/* Grid */}
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className={`mt-16 mx-auto ${
            projects.length === 1
              ? "max-w-md"
              : projects.length === 2
              ? "grid gap-6 sm:grid-cols-2 max-w-4xl"
              : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((p) => {
            const config = categoryConfig[p.category] ?? categoryConfig["UI/UX Design"];
            const initials = p.title.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
            return (
              <motion.div
                key={p.title}
                variants={itemVariants}
                className="group relative overflow-hidden flex flex-col rounded-2xl border border-white/8 bg-brand-surface/60 backdrop-blur-sm transition-all duration-300 hover:border-white/16 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/5"
              >
                {/* Clickable link */}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Buka ${p.title}`} />
                )}

                {/* Image section */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                  <div
                    className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{ background: config.bg }}
                  >
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    ) : (
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border text-xl font-bold text-white"
                        style={{ borderColor: `${config.color}30`, background: `${config.color}15` }}
                      >
                        {initials}
                      </div>
                    )}
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className="inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
                      style={{
                        color: config.color,
                        borderColor: `${config.color}40`,
                        background: `${config.color}20`,
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content section */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-brand-cyan">
                    {p.title}
                  </h3>
                  <div className="mt-auto pt-5 flex items-center gap-1.5 text-xs font-medium text-brand-muted transition-colors duration-300 group-hover:text-brand-cyan">
                    Kunjungi website
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
