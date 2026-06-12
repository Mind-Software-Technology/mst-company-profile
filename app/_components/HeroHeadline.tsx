"use client";

import { motion } from "framer-motion";

export default function HeroHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl max-w-5xl"
      style={{ letterSpacing: "-0.02em" }}
    >
      Building{" "}
      <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
        digital solution
      </span>{" "}
      for everyone.
    </motion.h1>
  );
}
