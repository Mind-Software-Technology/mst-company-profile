"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", bounce: 0.4 }}
      href="https://wa.me/6283180553200"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 hover:shadow-xl hover:shadow-[#25d366]/50 hover:scale-110 transition-all duration-300"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={24} />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
    </motion.a>
  );
}
