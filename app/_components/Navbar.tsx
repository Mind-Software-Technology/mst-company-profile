"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Proses", href: "#proses" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tim", href: "#tim" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("beranda");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? theme === "dark"
            ? "bg-[#0A0B10]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-lg shadow-black/30"
            : "bg-white/90 backdrop-blur-2xl border-b border-black/[0.06] shadow-lg shadow-black/5"
          : theme === "dark"
            ? "bg-[#0A0B10]/40 backdrop-blur-md"
            : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#beranda");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-[#8B5CF6]/25 group-hover:shadow-[#8B5CF6]/50 transition-all duration-300 border border-bd shrink-0">
            <img src="/icon.jpeg" alt="MST Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            MST
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1.5 glass px-3 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                active === link.href.slice(1)
                  ? "text-fg font-semibold"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {link.label}
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full bg-[#8B5CF6]/25 border border-bd -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-fg-muted hover:text-fg hover:bg-pill transition-all duration-300"
            aria-label="Toggle tema gelap/terang"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/6283180553200"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white rounded-xl bg-[#8B5CF6] hover:bg-[#7c4de6] transition-all duration-300 shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:scale-[1.02]"
          >
            Konsultasi Gratis
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-xl text-fg-muted hover:text-fg hover:bg-pill transition-all"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-bd bg-page/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    active === link.href.slice(1)
                      ? "text-fg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 font-semibold"
                      : "text-fg-muted hover:text-fg hover:bg-pill"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/6283180553200"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 px-4 py-3 text-sm font-semibold text-white text-center rounded-xl bg-[#8B5CF6]"
              >
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
