"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Clock } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Proyek Selesai",
    caption: "Tepat waktu & sesuai spesifikasi",
    icon: <Briefcase size={20} />,
    color: "#8B5CF6",
  },
  {
    value: 50,
    suffix: "+",
    label: "Klien Terpercaya",
    caption: "UMKM, korporasi, hingga perorangan",
    icon: <Users size={20} />,
    color: "#0EA5E9",
  },
  {
    value: 99,
    suffix: "%",
    label: "Kepuasan Klien",
    caption: "Berdasarkan survei pasca-proyek",
    icon: <TrendingUp size={20} />,
    color: "#8B5CF6",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-20 relative bg-page">
      <WaveDivider from="surface" to="page" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div
          {...staggerContainer(0.1)}
          className="rounded-3xl bg-surface border border-bd shadow-xl p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                {s.icon}
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-1">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-fg text-sm font-semibold mb-0.5">{s.label}</p>
              <p className="text-fg-muted text-xs font-light">{s.caption}</p>
            </motion.div>
          ))}

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-[#0EA5E9]/15 text-[#0EA5E9]">
              <Clock size={20} />
            </div>
            <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-1 gradient-text">
              &lt;24 Jam
            </div>
            <p className="text-fg text-sm font-semibold mb-0.5">Respon Komunikasi</p>
            <p className="text-fg-muted text-xs font-light">SLA cepat via WhatsApp & email</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
