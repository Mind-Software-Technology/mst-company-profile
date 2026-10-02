"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
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
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-bd bg-page/95 backdrop-blur-xl"
          : "border-transparent bg-page/0"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#beranda");
          }}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-9 h-9 rounded-md overflow-hidden border border-bd shrink-0 group-hover:border-[#8B5CF6]/60 transition-colors duration-300">
            <img src="/icon.jpeg" alt="MST Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-base font-bold tracking-tight text-fg">
            MST
          </span>
        </a>

        {/* Desktop Nav — plain text row, current section marked by an underline, not a pill */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#8B5CF6] rounded-full"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-fg-muted hover:text-fg hover:bg-pill transition-colors duration-300"
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
                  <Sun size={17} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={17} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/6283180553200"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden lg:inline-flex items-center gap-1.5 ml-1 px-4 py-2 text-[13px] font-semibold text-white rounded-md bg-[#8B5CF6] hover:bg-[#7c4de6] transition-colors duration-300"
          >
            Konsultasi
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-fg-muted hover:text-fg hover:bg-pill transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — current section marked by a left rule, matching the desktop underline motif */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-bd bg-page/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`block w-full text-left py-3 pl-4 border-l-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "border-[#8B5CF6] text-fg font-semibold"
                        : "border-bd text-fg-muted hover:text-fg hover:border-fg-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <a
                href="https://wa.me/6283180553200"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 px-4 py-3 text-sm font-semibold text-white text-center rounded-md bg-[#8B5CF6]"
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
