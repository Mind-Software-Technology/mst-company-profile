"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Palette, ArrowUpRight, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Mail size={24} />,
    image: "/illustrations/invite-celebration.svg",
    title: "Undangan Digital",
    desc: "Undangan digital interaktif dan elegan dengan fitur RSVP, musik, galeri foto, dan navigasi peta.",
    features: ["RSVP Online", "Galeri Foto", "Mudah Dibagikan"],
    color: "#8B5CF6",
    link: "https://undangandigitalmst.com/",
  },
  {
    icon: <Globe size={24} />,
    image: "/illustrations/web-devices.svg",
    title: "Website Development",
    desc: "Website profesional berperforma tinggi dengan animasi halus dan kemudahan manajemen konten.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "#0EA5E9",
    link: "https://mst-toko.com/",
  },
  {
    icon: <Smartphone size={24} />,
    image: "/illustrations/web-mobile-apps.svg",
    title: "Aplikasi Mobile",
    desc: "Pengembangan aplikasi mobile Android dan iOS berperforma tinggi dengan antarmuka intuitif dan pengalaman pengguna yang mulus.",
    features: ["Android & iOS", "High Performance", "User Friendly"],
    color: "#06B6D4",
    link: "#",
  },
  {
    icon: <Palette size={24} />,
    image: "/illustrations/uiux-design-process.svg",
    title: "Desain UI/UX",
    desc: "Pendekatan berbasis data dengan keindahan estetik dan fungsionalitas intuitif untuk produk digital.",
    features: ["User Research", "Prototyping", "Design System"],
    color: "#8B5CF6",
    link: "#",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-24 relative">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Layanan Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4">
            Solusi Lengkap untuk{" "}
            <span className="gradient-text">Bisnis Digital</span>
          </h2>
          <p className="text-fg-muted max-w-2xl mx-auto text-base sm:text-lg font-light">
            Dari konsep hingga peluncuran, kami hadir di setiap tahap perjalanan
            digital Anda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(0.1 * (i + 1))}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl bg-surface border border-bd p-8 hover:border-[#8B5CF6]/40 cursor-pointer transition-all duration-300 shadow-xl"
              style={{
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px -12px ${s.color}33`;
                (e.currentTarget as HTMLElement).style.borderColor = `${s.color}55`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px -15px rgba(0,0,0,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-subtle)";
              }}
            >
              <div className="relative z-10 text-left">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg shrink-0"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}88)` }}
                  >
                    {s.icon}
                  </div>
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-20 h-20 object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-fg mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-6 font-light">
                  {s.desc}
                </p>

                <div className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2.5 text-xs text-fg-muted"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-opacity duration-300 hover:opacity-80"
                  style={{ color: s.color }}
                >
                  Selengkapnya
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
