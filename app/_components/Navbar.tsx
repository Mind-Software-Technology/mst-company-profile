"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Beranda", href: "#" },
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => {
        const id = l.href.replace("#", "") || "hero";
        const el = id === "hero" ? document.querySelector("section") : document.getElementById(id);
        if (!el) return { id, top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return { id, top: rect.top, bottom: rect.bottom };
      });

      const current = sections.find((s) => s.top <= 120 && s.bottom > 120);
      setActive(current ? current.id : "hero");
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-black/60 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/icon.jpeg" alt="MST Logo" width={32} height={32} className="h-8 w-8 rounded-lg object-cover" />
            <span className="text-sm font-semibold text-brand-light tracking-tight">
              Mind Software Technology
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const id = l.href.replace("#", "") || "hero";
              const isActive = active === id;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-white"
                      : "text-brand-muted hover:text-white"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/5 border border-white/8"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* hover underline */}
                </a>
              );
            })}
            <a
              href="https://wa.me/6283180553200"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 rounded-full bg-brand-purple px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-brand-purple/80 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center md:hidden"
            aria-label="Menu"
          >
            {open ? (
              <X className="h-5 w-5 text-brand-light" />
            ) : (
              <Menu className="h-5 w-5 text-brand-light" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu — glassmorphism overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-7 bg-black/90 backdrop-blur-2xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-brand-light transition-colors hover:text-brand-cyan"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/6283180553200"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-brand-purple px-8 py-3 text-base font-semibold text-white"
            >
              Hubungi Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
