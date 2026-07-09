"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Proyek Selesai",
    icon: <Briefcase size={22} />,
    color: "#8B5CF6",
  },
  {
    value: 50,
    suffix: "+",
    label: "Klien Terpercaya",
    icon: <Users size={22} />,
    color: "#0EA5E9",
  },
  {
    value: 99,
    suffix: "%",
    label: "Kepuasan Klien",
    icon: <TrendingUp size={22} />,
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

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay },
});

export default function Stats() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.15 * i)}
              className="relative text-center p-8 sm:p-10 rounded-2xl bg-surface border border-bd hover:border-[#8B5CF6]/40 transition-all duration-300 group shadow-xl"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${s.color}12 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-13 h-13 rounded-xl mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-bd shadow-inner"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}25, ${s.color}10)`,
                    color: s.color,
                  }}
                >
                  {s.icon}
                </div>

                <div className="font-display text-5xl sm:text-6xl font-bold mb-3 tracking-tight">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>

                <p className="text-fg-muted text-xs font-semibold uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
