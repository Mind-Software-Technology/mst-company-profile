"use client";

import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.28 1.28 0 1 1-2.55 0 1.28 1.28 0 0 1 2.55 0z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.05-2.86-.43-3.99-1.13-1.3-.83-2.19-2.16-2.49-3.61-.34-1.67-.1-3.39.68-4.85.56-1.01 1.37-1.87 2.35-2.46-.77.34-1.53.76-2.24 1.27-.33.24-.64.51-.92.81-.18-.47-.27-.97-.28-1.47 0-.01 0-.02 0-.04 0-.01 0-.03 0-.04.27-.22.56-.41.86-.58.8-.46 1.66-.76 2.55-.9v4.07c.55-.34 1.15-.6 1.78-.77-.63-.66-1.12-1.46-1.42-2.35-.32-.97-.38-2-.18-3 .19-1.03.7-1.97 1.45-2.69l.01-.01c.04-.04.08-.08.12-.12.36-.33.76-.6 1.18-.82.01 0 .02-.01.03-.01 1.02-.48 2.14-.69 3.25-.6z" />
    </svg>
  );
}

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Layanan: [
    { label: "Undangan Digital", href: "https://undangandigitalmst.com/" },
    { label: "Website Development", href: "https://mst-toko.com/" },
    { label: "Aplikasi Mobile", href: "#layanan" },
    { label: "Desain UI/UX", href: "#layanan" },
    { label: "Custom Software Development", href: "#layanan" },
    { label: "Programming Education", href: "#layanan" },
  ],
  Navigasi: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proses", href: "#proses" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Tim", href: "#tim" },
    { label: "Kontak", href: "#kontak" },
  ],
};

const contactItems = [
  {
    icon: <Phone size={16} />,
    label: "+62 831-8055-3200",
    href: "https://wa.me/6283180553200",
  },
  {
    icon: <Mail size={16} />,
    label: "mindsoftwaretechnologi@gmail.com",
    href: "mailto:mindsoftwaretechnologi@gmail.com",
  },
  {
    icon: <MapPin size={16} />,
    label: "Indonesia",
    href: null,
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-bd bg-surface text-fg-muted">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Logo & Description */}
          <motion.div {...fadeUp(0)} className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-[#8B5CF6]/20 border border-bd shrink-0">
                <img src="/icon.jpeg" alt="MST Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-fg">
                MST
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Mind Software Technology — Solusi digital terpercaya untuk membangun produk teknologi berkelas dan berdaya saing.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: "https://wa.me/6283180553200", label: "WhatsApp", icon: <MessageCircle size={15} /> },
                { href: "mailto:mindsoftwaretechnologi@gmail.com", label: "Email", icon: <Mail size={15} /> },
                { href: "https://www.instagram.com/mindsoftwaretechnology_", label: "Instagram", icon: <InstagramIcon /> },
                { href: "https://www.tiktok.com/@mindsoftwaretechnology", label: "TikTok", icon: <TikTokIcon /> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-fg-muted hover:text-white bg-pill hover:bg-[#8B5CF6] border border-bd hover:border-[#8B5CF6] transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2-3: Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div key={title} {...fadeUp(0.1 * (i + 1))}>
              <h4 className="font-display text-sm font-bold text-fg mb-5 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-sm hover:text-[#8B5CF6] transition-colors duration-200 font-light"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-[#8B5CF6] transition-colors duration-200 font-light"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Column 4: Contact */}
          <motion.div {...fadeUp(0.3)}>
            <h4 className="font-display text-sm font-bold text-fg mb-5 uppercase tracking-wider">
              Kontak Kami
            </h4>
            <ul className="space-y-3.5">
              {contactItems.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] mt-1 shrink-0">{c.icon}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-fg transition-colors duration-200 break-all font-light"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-sm font-light">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-bd flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} MST - Mind Software Technology. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <Heart size={12} className="text-[#ef4444] fill-[#ef4444]" /> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
