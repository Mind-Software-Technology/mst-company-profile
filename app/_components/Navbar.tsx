"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Halaman ini single-page (anchor), jadi link aktif dideteksi lewat scroll
// posisi section — bukan usePathname().
const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Kontak", href: "#kontak" },
];

const ACCENT = "#a8f0ff";
const WA_URL = "https://wa.me/6283180553200";

export default function Navbar() {
  const [active, setActive] = useState("beranda");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-spy: section terakhir yang top-nya sudah lewat 120px dari atas viewport
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (let i = links.length - 1; i >= 0; i--) {
        const id = links[i].href.slice(1);
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll dengan offset navbar; menu mobile otomatis tertutup
  const goTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    // Di atas: pill melayang. Setelah scroll: menempel full layar (top-0, lebar penuh, tanpa sisi miring)
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] transition-all duration-500 ${
        scrolled ? "top-0 w-full max-w-full" : "top-3 max-w-5xl"
      }`}
    >
      {/*
        Border tipis + clip-path: border CSS ikut terpotong di sisi miring, jadi
        "border" dibuat dari lapisan luar (bg-white/15) dan lapisan dalam di-inset 1px.
      */}
      <div
        className={`relative h-16 bg-white/15 backdrop-blur-md transition-[clip-path] duration-500 ${
          scrolled ? "clip-nav-flat" : "clip-nav"
        }`}
      >
        <div
          className={`absolute inset-px bg-[#0a0a0a]/60 transition-[clip-path] duration-500 ${
            scrolled ? "clip-nav-flat" : "clip-nav"
          }`}
          aria-hidden
        />

        <nav className="relative h-full grid grid-cols-[1fr_auto_1fr] items-center px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => goTo(e, "#beranda")}
            className="shrink-0 justify-self-start"
            aria-label="MST — ke atas"
          >
            <Image
              src="/icon.jpeg"
              alt="MST Logo"
              width={32}
              height={32}
              unoptimized
              className="h-8 w-8 rounded-md object-cover"
            />
          </a>

          {/* Menu tengah (desktop) */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => goTo(e, link.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-1 text-sm transition-colors duration-300 ${
                      isActive ? "text-white" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-0.5 h-px"
                        style={{ backgroundColor: ACCENT }}
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Kanan: CTA, hamburger */}
          <div className="col-start-3 flex items-center justify-end gap-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center ${
                scrolled ? "rounded-full px-3.5 md:px-5" : "clip-btn pl-3.5 pr-5 md:pl-5 md:pr-7"
              } py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#0EA5E9] to-[#8B5CF6] shadow-[0_0_22px_-4px_rgba(139,92,246,0.65)] hover:shadow-[0_0_28px_-4px_rgba(139,92,246,0.85)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300`}
            >
              Konsultasi
            </a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Dropdown mobile — glass yang sama */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2"
          >
            <div className="rounded-xl border border-white/15 bg-[#0a0a0a]/70 backdrop-blur-md">
              <ul className="flex flex-col px-6 py-3">
                {links.map((link) => {
                  const isActive = active === link.href.slice(1);
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => goTo(e, link.href)}
                        className={`block py-3 text-sm transition-colors duration-300 ${
                          isActive ? "text-white" : "text-neutral-300 hover:text-white"
                        }`}
                        style={isActive ? { textDecoration: `underline ${ACCENT} 1px`, textUnderlineOffset: 6 } : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
