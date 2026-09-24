"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Briefcase, Megaphone, FolderKanban, Palette, Terminal } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const teamMembers = [
  {
    name: "Alif Sultan",
    division: "Creative Director",
    focus: "Arah kreatif & strategi produk",
    initials: "AS",
    icon: <Sparkles size={16} />,
    color: "#8B5CF6",
  },
  {
    name: "Fadhil",
    division: "Development",
    focus: "Backend & arsitektur sistem",
    initials: "FD",
    icon: <Code2 size={16} />,
    color: "#0EA5E9",
  },
  {
    name: "Gema",
    division: "Business",
    focus: "Relasi klien & operasional",
    initials: "GM",
    icon: <Briefcase size={16} />,
    color: "#8B5CF6",
  },
  {
    name: "Haura",
    division: "Marketing",
    focus: "Brand & pertumbuhan digital",
    initials: "HR",
    icon: <Megaphone size={16} />,
    color: "#0EA5E9",
  },
  {
    name: "Nashwa",
    division: "Project",
    focus: "Perencanaan & delivery proyek",
    initials: "NW",
    icon: <FolderKanban size={16} />,
    color: "#8B5CF6",
  },
  {
    name: "Nazira",
    division: "Design",
    focus: "UI/UX & sistem desain",
    initials: "NZ",
    icon: <Palette size={16} />,
    color: "#0EA5E9",
  },
  {
    name: "Zacky",
    division: "Development",
    focus: "Frontend & interaksi produk",
    initials: "ZK",
    icon: <Terminal size={16} />,
    color: "#8B5CF6",
  },
];

export default function Team() {
  return (
    <section id="tim" className="py-24 md:py-32 relative overflow-hidden bg-surface">
      <WaveDivider from="page" to="surface" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Tim Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 text-balance">
            Para Ahli di <span className="gradient-text">Balik Layar</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Kolaborasi talenta profesional yang berdedikasi menciptakan produk teknologi berkelas dan berinovasi tanpa henti.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              {...fadeUp(0.05 * idx)}
              className="group rounded-2xl border border-bd bg-surface overflow-hidden flex flex-col hover:border-[#8B5CF6]/40 transition-colors duration-300"
            >
              {/* Visual area */}
              <div
                className="relative aspect-[3/4] flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(160deg, ${member.color}35, ${member.color}08)` }}
              >
                <div
                  className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                  style={{ backgroundColor: member.color }}
                />
                <span className="relative font-display text-5xl font-bold text-white/90 transition-transform duration-500 group-hover:scale-110">
                  {member.initials}
                </span>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-surface/80 backdrop-blur-md border border-bd flex items-center justify-center"
                  style={{ color: member.color }}
                >
                  {member.icon}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-base sm:text-lg font-bold text-fg mb-1">
                  {member.name}
                </h3>
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2.5"
                  style={{ color: member.color, backgroundColor: `${member.color}15` }}
                >
                  {member.division}
                </span>
                <p className="text-xs sm:text-sm text-fg-muted font-light leading-relaxed">
                  {member.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
