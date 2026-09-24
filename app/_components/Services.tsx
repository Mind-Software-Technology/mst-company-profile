"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Palette, ArrowUpRight, Smartphone, Code2, GraduationCap } from "lucide-react";
import { fadeUp, fadeUpScale } from "@/lib/animations";
import WaveDivider from "./WaveDivider";

const services = [
  {
    icon: <Mail size={20} />,
    image: "/illustrations/invite-celebration.svg",
    title: "Undangan Digital",
    desc: "Undangan digital interaktif dan elegan dengan fitur RSVP, musik, galeri foto, dan navigasi peta.",
    features: ["RSVP Online", "Galeri Foto", "Mudah Dibagikan"],
    color: "#8B5CF6",
    link: "https://undangandigitalmst.com/",
  },
  {
    icon: <Globe size={20} />,
    image: "/illustrations/web-devices.svg",
    title: "Website Development",
    desc: "Website profesional berperforma tinggi dengan animasi halus dan kemudahan manajemen konten.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "#0EA5E9",
    link: "https://mst-toko.com/",
  },
  {
    icon: <Smartphone size={20} />,
    image: "/illustrations/web-mobile-apps.svg",
    title: "Aplikasi Mobile",
    desc: "Pengembangan aplikasi mobile Android dan iOS berperforma tinggi dengan antarmuka intuitif dan pengalaman pengguna yang mulus.",
    features: ["Android & iOS", "High Performance", "User Friendly"],
    color: "#06B6D4",
    link: "#",
  },
  {
    icon: <Palette size={20} />,
    image: "/illustrations/uiux-design-process.svg",
    title: "Desain UI/UX",
    desc: "Pendekatan berbasis data dengan keindahan estetik dan fungsionalitas intuitif untuk produk digital.",
    features: ["Research", "Prototyping", "Design System"],
    color: "#8B5CF6",
    link: "#",
  },
  {
    icon: <Code2 size={20} />,
    image: "/illustrations/dev-programming.svg",
    title: "Custom Software Development",
    desc: "Sistem internal, dashboard, dan aplikasi yang dirancang khusus untuk alur kerja bisnis Anda — bukan solusi generik yang dipaksakan.",
    features: ["Arsitektur Modern", "API & Integrasi", "Skalabel"],
    color: "#0EA5E9",
    link: "#",
  },
  {
    icon: <GraduationCap size={20} />,
    image: "/illustrations/uiux-brainstorming.svg",
    title: "Programming Education",
    desc: "Pelatihan pemrograman praktis untuk individu maupun tim internal perusahaan, dibimbing langsung oleh developer aktif.",
    features: ["Web Dev", "Mobile", "Backend", "Database"],
    color: "#8B5CF6",
    link: "#",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 md:py-32 relative bg-page">
      <WaveDivider from="surface" to="page" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Layanan Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4 text-balance">
            Solusi Lengkap untuk{" "}
            <span className="gradient-text">Bisnis Digital</span>
          </h2>
          <p className="text-fg-muted text-base sm:text-lg font-light">
            Dari konsep hingga peluncuran, kami hadir di setiap tahap perjalanan
            digital Anda.
          </p>
        </motion.div>

        <div className="border-t border-bd pt-24 md:pt-28 flex flex-col gap-28 md:gap-40">
          {services.map((s, i) => {
            const mirrored = i % 2 === 1;
            return (
              <div key={s.title} className="grid md:grid-cols-12 gap-14 md:gap-10 items-center">
                {/* Text */}
                <motion.div
                  {...fadeUp(0.05)}
                  className={`md:col-span-5 ${mirrored ? "md:order-2" : ""}`}
                >
                  <span className="block font-mono text-xs text-fg-muted mb-4">
                    0{i + 1} / 0{services.length}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg mb-6"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}88)` }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-fg mb-4 leading-tight text-balance">
                    {s.title}
                  </h3>
                  <p className="text-base text-fg-muted leading-relaxed mb-6 font-light max-w-sm">
                    {s.desc}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-fg-muted">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: s.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-fg border-b border-bd pb-1 hover:border-current transition-colors duration-300"
                    style={{ color: s.color }}
                  >
                    Selengkapnya
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>

                {/* Visual */}
                <motion.div
                  {...fadeUpScale(0.1)}
                  className={`md:col-span-7 relative flex items-center justify-center min-h-[280px] sm:min-h-[360px] ${mirrored ? "md:order-1" : ""}`}
                >
                  {/* Ambient glow — visual feels part of the background */}
                  <div
                    className="absolute w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none"
                    style={{ backgroundColor: `${s.color}22` }}
                  />

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="relative z-10 w-[85%] sm:w-[75%] max-w-md drop-shadow-2xl"
                  />

                  {/* Floating UI badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="glass absolute top-4 right-2 sm:right-8 rounded-xl px-4 py-2.5 shadow-xl z-20 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="text-xs font-semibold text-fg whitespace-nowrap">
                      {s.features[0]}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
