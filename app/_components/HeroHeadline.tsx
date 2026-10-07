"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="font-display uppercase leading-[1] tracking-[-0.02em]"
    >
      <span className="block text-[clamp(1.25rem,3vw,2rem)] font-light text-white/60 mb-2">
        Kami membangun software,
      </span>
      <span className="block text-[clamp(2rem,6vw,4.5rem)] font-bold text-white">
        bukan sekadar tampilan
      </span>
    </motion.h1>
  );
}
