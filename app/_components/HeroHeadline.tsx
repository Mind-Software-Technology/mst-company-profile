"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-tight text-fg"
    >
      Building{" "}
      <span className="gradient-text">digital solution</span>
      <br />
      for everyone.
    </motion.h1>
  );
}
