"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina Wijaya",
    role: "Pemilik Katering Bu Dewi",
    text: "Undangan digital dari MST luar biasa! Tamu undangan sangat terkesan dengan desainnya yang elegan dan fitur RSVP yang sangat memudahkan.",
    rating: 5,
    initials: "RW",
  },
  {
    name: "Dedi Kurniawan",
    role: "Owner Toko Harapan Jaya",
    text: "Website yang dibuat MST untuk toko kami sangat profesional dan mudah dikelola. Penjualan online kami meningkat secara signifikan!",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Maya Putri",
    role: "Wedding Organizer Sinarbulan",
    text: "Kerja sama dengan MST selalu memuaskan. Respon cepat, hasil berkualitas tinggi, dan harga sangat kompetitif.",
    rating: 5,
    initials: "MP",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay },
});

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimoni" className="py-20 md:py-24 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[#0EA5E9] uppercase tracking-widest mb-3">
            Testimoni
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4">
            Apa Kata <span className="gradient-text">Klien Kami</span>
          </h2>
          <p className="text-fg-muted max-w-2xl mx-auto text-base sm:text-lg font-light">
            Pendapat jujur dari para klien yang telah bertransformasi bersama layanan digital kami.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative px-2 sm:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 sm:p-12 text-center relative shadow-2xl border border-bd"
              >
                <div className="absolute top-6 left-6 text-[#8B5CF6]/20 pointer-events-none">
                  <Quote size={48} />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({
                      length: testimonials[current].rating,
                    }).map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  <p className="text-fg leading-relaxed text-base sm:text-xl font-light mb-8">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  <div className="flex items-center justify-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/25">
                      <span className="font-display text-xs font-bold text-white">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-fg">
                        {testimonials[current].name}
                      </div>
                      <div className="text-xs text-fg-muted">
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 p-3 rounded-full bg-surface border border-bd text-fg-muted hover:text-fg hover:border-[#8B5CF6]/50 shadow-xl transition-all hidden sm:block z-20"
              aria-label="Testimoni Sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 p-3 rounded-full bg-surface border border-bd text-fg-muted hover:text-fg hover:border-[#8B5CF6]/50 shadow-xl transition-all hidden sm:block z-20"
              aria-label="Testimoni Selanjutnya"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] w-8"
                    : "bg-pill hover:bg-pill-hover border border-bd w-2"
                }`}
                aria-label={`Lihat Testimoni ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
