"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Camera, Code2, Briefcase, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Beranda", href: "#" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

const services = [
  { label: "Undangan Digital", href: "#services" },
  { label: "Website Development", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
];

const socials = [
  { icon: Mail, href: "mailto:mindsoftwaretechnologi@gmail.com", label: "Email" },
  { icon: Camera, href: "https://instagram.com/mst", label: "Instagram" },
  { icon: Code2, href: "https://github.com/mst", label: "GitHub" },
  { icon: Briefcase, href: "https://linkedin.com/company/mst", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="border-t border-white/6 px-6 pt-14 pb-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/icon.jpeg" alt="MST Logo" width={32} height={32} className="h-8 w-8 rounded-lg object-cover" />
              <span className="text-sm font-semibold text-brand-light">MST</span>
            </div>
            <p className="mt-4 text-xs text-brand-muted leading-relaxed">
              Building digital solution for everyone. Mitra solusi TI terpercaya
              untuk undangan digital, website, dan UI/UX design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-light">
              Tautan Cepat
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-xs text-brand-muted transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-light">
              Layanan
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-xs text-brand-muted transition-colors duration-200 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-light">
              Kontak
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:mindsoftwaretechnologi@gmail.com"
                  className="flex items-center gap-2 text-xs text-brand-muted transition-colors duration-200 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span className="break-all">mindsoftwaretechnologi@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6283180553200"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-brand-muted transition-colors duration-200 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  +62 831-8055-3200
                </a>
              </li>
            </ul>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-brand-muted transition-all duration-200 hover:border-brand-cyan/30 hover:text-brand-cyan"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-6 sm:flex-row">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} Mind Software Technology. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-brand-muted transition-colors hover:text-white"
          >
            Kembali ke atas
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
