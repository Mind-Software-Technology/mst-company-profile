"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

// `shape` only changes the avatar mask (geometric variety, like the reference layout).
const teamMembers = [
  { name: "Alif Sultan", photo: "https://i.pravatar.cc/500?img=12", division: "Creative Director", focus: "Arah kreatif & strategi produk", color: "#8B5CF6", shape: "rounded-[2.5rem]" },
  { name: "Fadhil", photo: "https://i.pravatar.cc/500?img=15", division: "Development", focus: "Backend & arsitektur sistem", color: "#0EA5E9", shape: "rounded-xl" },
  { name: "Gema", photo: "https://i.pravatar.cc/500?img=47", division: "Business", focus: "Relasi klien & operasional", color: "#8B5CF6", shape: "rounded-[50%_50%_0_50%]" },
  { name: "Haura", photo: "https://i.pravatar.cc/500?img=45", division: "Marketing", focus: "Brand & pertumbuhan digital", color: "#0EA5E9", shape: "rounded-xl" },
  { name: "Nashwa", photo: "https://i.pravatar.cc/500?img=5", division: "Project", focus: "Perencanaan & delivery proyek", color: "#8B5CF6", shape: "rounded-t-full" },
  { name: "Nazira", photo: "https://i.pravatar.cc/500?img=32", division: "Design", focus: "UI/UX & sistem desain", color: "#0EA5E9", shape: "rounded-full" },
  { name: "Zacky", photo: "https://i.pravatar.cc/500?img=53", division: "Development", focus: "Frontend & interaksi produk", color: "#8B5CF6", shape: "rounded-full" },
];

type Member = (typeof teamMembers)[number];

function TeamCard({ member, idx }: { member: Member; idx: number }) {
  return (
    <motion.div
      {...fadeUp(0.05 * idx)}
      className="group flex flex-col items-center text-center w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    >
      {/* Avatar — full-width square, masked by a geometric shape */}
      <div className="relative w-full mb-4">
        <div
          className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${member.shape}`}
          style={{ backgroundColor: member.color }}
        />
        <div
          className={`relative w-full aspect-square overflow-hidden bg-[#0A0B10] border border-white/10 group-hover:border-white/25 transition-colors duration-300 ${member.shape}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, remote placeholder photo */}
          <img src={member.photo} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>

      <h3 className="font-display text-base sm:text-lg font-bold text-fg mb-1">
        {member.name}
      </h3>
      <span
        className="inline-block font-body text-[11px] font-medium uppercase tracking-[0.08em] px-2 py-0.5 rounded-full mb-2"
        style={{ color: member.color, backgroundColor: `${member.color}15` }}
      >
        {member.division}
      </span>
      <p className="text-xs sm:text-sm text-fg-muted font-normal leading-relaxed">
        {member.focus}
      </p>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="tim" className="py-20 md:py-24 relative overflow-hidden bg-surface">

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
            Tim Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-fg mb-4 text-balance">
            Para Ahli di <span className="gradient-text">Balik Layar</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-normal leading-relaxed">
            Kolaborasi talenta profesional yang berdedikasi menciptakan produk teknologi berkelas dan berinovasi tanpa henti.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
