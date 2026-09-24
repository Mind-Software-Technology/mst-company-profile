"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-fg"
    >
      Kami membangun software,
      <br />
      <span className="gradient-text">bukan sekadar tampilan.</span>
    </motion.h1>
  );
}
