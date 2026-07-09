"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Briefcase, Megaphone, FolderKanban, Palette, Terminal } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay },
});

const teamMembers = [
  {
    name: "Alif Sultan",
    division: "Creative Director",
    initials: "AS",
    icon: <Sparkles size={18} />,
    color: "#8B5CF6",
  },
  {
    name: "Fadhil",
    division: "Development",
    initials: "FD",
    icon: <Code2 size={18} />,
    color: "#0EA5E9",
  },
  {
    name: "Gema",
    division: "Business",
    initials: "GM",
    icon: <Briefcase size={18} />,
    color: "#8B5CF6",
  },
  {
    name: "Haura",
    division: "Marketing",
    initials: "HR",
    icon: <Megaphone size={18} />,
    color: "#0EA5E9",
  },
  {
    name: "Nashwa",
    division: "Project",
    initials: "NW",
    icon: <FolderKanban size={18} />,
    color: "#8B5CF6",
  },
  {
    name: "Nazira",
    division: "Design",
    initials: "NZ",
    icon: <Palette size={18} />,
    color: "#0EA5E9",
  },
  {
    name: "Zacky",
    division: "Development",
    initials: "ZK",
    icon: <Terminal size={18} />,
    color: "#8B5CF6",
  },
];

export default function Team() {
  return (
    <section id="tim" className="py-20 md:py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Tim Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4">
            Para Ahli di <span className="gradient-text">Balik Layar</span>
          </h2>
          <p className="text-fg-muted max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Kolaborasi talenta profesional yang berdedikasi menciptakan produk teknologi berkelas dan berinovasi tanpa henti.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              {...fadeUp(0.1 * (idx + 1))}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] group relative rounded-2xl bg-surface border border-bd p-8 flex flex-col items-center justify-center text-center hover:border-[#8B5CF6]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8B5CF6]/10"
            >
              {/* Avatar / Profile Graphic */}
              <div className="relative w-24 h-24 rounded-2xl mb-5 overflow-hidden bg-pill border border-bd flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at top right, ${member.color}, transparent)` }}
                />
                <span className="font-display text-3xl font-bold tracking-wider text-fg relative z-10">
                  {member.initials}
                </span>
                <div
                  className="absolute bottom-2 right-2 p-1.5 rounded-md bg-surface/80 backdrop-blur-md border border-bd"
                  style={{ color: member.color }}
                >
                  {member.icon}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-fg mb-1.5 group-hover:text-[#8B5CF6] transition-colors">
                {member.name}
              </h3>
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold text-[#0EA5E9] bg-pill border border-bd tracking-wide">
                {member.division}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
