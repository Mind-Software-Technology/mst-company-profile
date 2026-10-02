"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Globe, Palette, ArrowUpRight, Smartphone, Code2, GraduationCap } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const services = [
  {
    icon: <Mail size={18} />,
    image: "/illustrations/invite-celebration.svg",
    title: "Undangan Digital",
    desc: "Undangan digital interaktif dan elegan dengan fitur RSVP, musik, galeri foto, dan navigasi peta.",
    features: ["RSVP Online", "Galeri Foto", "Mudah Dibagikan"],
    color: "#8B5CF6",
    link: "https://undangandigitalmst.com/",
  },
  {
    icon: <Globe size={18} />,
    image: "/illustrations/web-devices.svg",
    title: "Website Development",
    desc: "Website profesional berperforma tinggi dengan animasi halus dan kemudahan manajemen konten.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "#0EA5E9",
    link: "https://mst-toko.com/",
  },
  {
    icon: <Smartphone size={18} />,
    image: "/illustrations/web-mobile-apps.svg",
    title: "Aplikasi Mobile",
    desc: "Pengembangan aplikasi mobile Android dan iOS berperforma tinggi dengan antarmuka intuitif.",
    features: ["Android & iOS", "High Performance", "User Friendly"],
    color: "#06B6D4",
    link: "#kontak",
  },
  {
    icon: <Palette size={18} />,
    image: "/illustrations/uiux-design-process.svg",
    title: "Desain UI/UX",
    desc: "Pendekatan berbasis data dengan keindahan estetik dan fungsionalitas intuitif untuk produk digital.",
    features: ["Research", "Prototyping", "Design System"],
    color: "#8B5CF6",
    link: "#kontak",
  },
  {
    icon: <Code2 size={18} />,
    image: "/illustrations/dev-programming.svg",
    title: "Custom Software Development",
    desc: "Sistem internal, dashboard, dan aplikasi yang dirancang khusus untuk alur kerja bisnis Anda.",
    features: ["Arsitektur Modern", "API & Integrasi", "Skalabel"],
    color: "#0EA5E9",
    link: "#kontak",
  },
  {
    icon: <GraduationCap size={18} />,
    image: "/illustrations/uiux-brainstorming.svg",
    title: "Programming Education",
    desc: "Pelatihan pemrograman praktis untuk individu maupun tim internal, dibimbing developer aktif.",
    features: ["Web Dev", "Mobile", "Backend", "Database"],
    color: "#8B5CF6",
    link: "#kontak",
  },
];

const AUTOPLAY_MS = 5000;

export default function Services() {
  const length = services.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, length, current, reducedMotion]);

  const s = services[current];

  return (
    <section id="layanan" className="py-20 md:py-24 relative bg-page overflow-hidden">
      <WaveDivider from="surface" to="page" />

      <div className="absolute top-20 right-[8%] w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[6%] w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Layanan Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 text-balance">
            Solusi Lengkap untuk{" "}
            <span className="gradient-text">Bisnis Digital</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-normal">
            Dari konsep hingga peluncuran, kami hadir di setiap tahap perjalanan digital Anda.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-12 gap-8 md:gap-14 items-start border-t border-bd pt-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Index — horizontal tabs below md, vertical list from md up */}
          <div className="md:col-span-4 flex md:flex-col gap-6 md:gap-0 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible">
            {services.map((svc, i) => {
              const isActive = i === current;
              return (
                <button
                  key={svc.title}
                  onClick={() => setCurrent(i)}
                  className={`relative shrink-0 md:w-full text-left py-3 md:py-4 md:pl-4 border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-300 ${
                    isActive ? "border-current" : "border-bd hover:border-fg-muted"
                  }`}
                  style={isActive ? { color: svc.color } : undefined}
                >
                  <span className="flex items-center gap-3">
                    <span className={`shrink-0 ${isActive ? "" : "text-fg-muted"}`}>{svc.icon}</span>
                    <span
                      className={`font-display text-sm md:text-base font-semibold whitespace-nowrap md:whitespace-normal ${
                        isActive ? "text-fg" : "text-fg-muted"
                      }`}
                    >
                      {svc.title}
                    </span>
                  </span>

                  {isActive && (
                    <span className="hidden md:block h-[2px] bg-bd/50 rounded-full overflow-hidden mt-3">
                      <span
                        key={current}
                        className="block h-full rounded-full"
                        style={{
                          backgroundColor: svc.color,
                          animation: `fill-bar ${AUTOPLAY_MS}ms linear forwards`,
                          animationPlayState: paused || reducedMotion ? "paused" : "running",
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel — no card, flows directly in the section */}
          <div className="md:col-span-8 md:pt-4 min-h-[25rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-52 sm:h-64 flex items-center mb-8">
                  <div
                    className="absolute inset-y-0 left-0 my-auto w-56 h-56 rounded-full blur-[90px] pointer-events-none"
                    style={{ backgroundColor: `${s.color}2a` }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden="true"
                    className="relative z-10 h-full w-auto max-w-[65%] object-contain drop-shadow-2xl"
                  />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-fg mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-fg-muted text-base leading-relaxed mb-6 font-normal max-w-lg">
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2.5 mb-8">
                  {s.features.map((f) => (
                    <span key={f} className="flex items-center gap-2 text-sm text-fg-muted">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={s.link}
                  target={s.link.startsWith("http") ? "_blank" : undefined}
                  rel={s.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (s.link.startsWith("#")) {
                      e.preventDefault();
                      const el = document.querySelector(s.link);
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                  }}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold border-b border-bd pb-1 hover:border-current transition-colors duration-300"
                  style={{ color: s.color }}
                >
                  {s.link.startsWith("http") ? "Selengkapnya" : "Konsultasikan Kebutuhan"}
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
