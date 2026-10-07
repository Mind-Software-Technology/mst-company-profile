"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { fadeUp } from "@/lib/animations";

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

const AUTOPLAY_MS = 6000;
const SWIPE_PX = 60;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;
  const prev = () => setCurrent((c) => (c === 0 ? count - 1 : c - 1));
  const next = () => setCurrent((c) => (c === count - 1 ? 0 : c + 1));

  // Autoplay: berhenti saat di-hover/fokus atau jika pengguna memilih reduced-motion
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCurrent((c) => (c === count - 1 ? 0 : c + 1)), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, current, count]);

  const arrowClass =
    "p-3 rounded-full bg-surface border border-bd text-fg-muted hover:text-fg hover:border-[#0EA5E9]/50 shadow-xl transition-all";

  return (
    <section id="testimoni" className="py-20 md:py-24 relative overflow-hidden bg-surface">

      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#0EA5E9]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8B5CF6]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block font-body text-xs font-medium text-[#0EA5E9] uppercase tracking-[0.08em] mb-3">
            Testimoni
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.015em] text-fg mb-4">
            Apa Kata <span className="gradient-text">Klien Kami</span>
          </h2>
          <p className="text-fg-muted max-w-2xl mx-auto text-base sm:text-lg font-normal">
            Pendapat jujur dari para klien yang telah bertransformasi bersama layanan digital kami.
          </p>
        </motion.div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative px-2 sm:px-0">
            {/* Semua kartu ditumpuk di satu sel grid → tinggi = kartu terpanjang, tidak ada lompatan layout */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_PX) next();
                else if (info.offset.x > SWIPE_PX) prev();
              }}
              className="grid touch-pan-y cursor-grab active:cursor-grabbing"
            >
              {testimonials.map((t, i) => {
                const active = i === current;
                return (
                  <motion.div
                    key={t.name}
                    aria-hidden={!active}
                    initial={false}
                    animate={{ opacity: active ? 1 : 0, x: active ? 0 : i < current ? -30 : 30 }}
                    transition={{ duration: 0.35 }}
                    className={`col-start-1 row-start-1 glass rounded-3xl p-8 sm:p-12 text-center relative shadow-xl border border-bd overflow-hidden select-none ${
                      active ? "" : "pointer-events-none"
                    }`}
                  >
                    {/* Garis aksen gradient di tepi atas */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9]/60 to-transparent" />

                    <div className="absolute top-6 left-6 text-[#0EA5E9]/35 pointer-events-none">
                      <Quote size={48} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={18} className="fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>

                      <p className="text-fg leading-relaxed text-base sm:text-xl font-normal mb-8">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      <div className="flex items-center justify-center gap-3.5">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] flex items-center justify-center shadow-[0_0_18px_-4px_rgba(139,92,246,0.65)]">
                          <span className="font-body text-xs font-bold text-white">{t.initials}</span>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold text-fg">{t.name}</div>
                          <div className="text-xs text-fg-muted">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Panah di sisi kartu (desktop) */}
            <button
              onClick={prev}
              className={`${arrowClass} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 hidden md:block z-20`}
              aria-label="Testimoni Sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className={`${arrowClass} absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 hidden md:block z-20`}
              aria-label="Testimoni Selanjutnya"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Navigasi bawah: panah (mobile) + titik */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button onClick={prev} className={`${arrowClass} md:hidden !p-2`} aria-label="Testimoni Sebelumnya">
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="group p-2.5 flex items-center justify-center"
                  aria-label={`Lihat Testimoni ${i + 1}`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] w-8"
                        : "bg-pill group-hover:bg-pill-hover border border-bd w-2"
                    }`}
                  />
                </button>
              ))}
            </div>
            <button onClick={next} className={`${arrowClass} md:hidden !p-2`} aria-label="Testimoni Selanjutnya">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
