"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Per-section theme definitions ─── */
const themes = {
  hero: {
    orb1: "rgba(139,92,246,0.12)",
    orb2: "rgba(6,182,212,0.06)",
    orb1pos: "-10% -5%",
    orb2pos: "80% 60%",
    gridColor: "rgba(139,92,246,0.07)",
    subColor: "rgba(6,182,212,0.03)",
    label: "hero",
  },
  about: {
    orb1: "rgba(6,182,212,0.11)",
    orb2: "rgba(139,92,246,0.07)",
    orb1pos: "85% -5%",
    orb2pos: "-5% 70%",
    gridColor: "rgba(6,182,212,0.07)",
    subColor: "rgba(139,92,246,0.03)",
    label: "about",
  },
  services: {
    orb1: "rgba(139,92,246,0.10)",
    orb2: "rgba(6,182,212,0.10)",
    orb1pos: "50% -10%",
    orb2pos: "50% 90%",
    gridColor: "rgba(139,92,246,0.06)",
    subColor: "rgba(6,182,212,0.04)",
    label: "services",
  },
  portfolio: {
    orb1: "rgba(16,185,129,0.09)",
    orb2: "rgba(139,92,246,0.08)",
    orb1pos: "90% 10%",
    orb2pos: "10% 80%",
    gridColor: "rgba(16,185,129,0.05)",
    subColor: "rgba(139,92,246,0.03)",
    label: "portfolio",
  },
  contact: {
    orb1: "rgba(139,92,246,0.12)",
    orb2: "rgba(6,182,212,0.09)",
    orb1pos: "0% 30%",
    orb2pos: "100% 60%",
    gridColor: "rgba(6,182,212,0.06)",
    subColor: "rgba(139,92,246,0.03)",
    label: "contact",
  },
};

type ThemeKey = keyof typeof themes;

/* ─── SVG patterns per section ─── */
function HeroPattern() {
  return (
    <>
      {/* Corner circuit — top left */}
      <g stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" filter="url(#glow)">
        <path d="M 0 180 L 90 180 L 90 110 L 210 110" />
        <path d="M 210 110 L 270 110 L 270 40" />
        <path d="M 0 300 L 130 300 L 130 240 L 200 240" />
        <circle cx="90" cy="180" r="3.5" fill="rgba(139,92,246,0.6)" />
        <circle cx="210" cy="110" r="3.5" fill="rgba(139,92,246,0.6)" />
        <circle cx="270" cy="110" r="2.5" fill="rgba(139,92,246,0.4)" />
        <circle cx="130" cy="300" r="3.5" fill="rgba(139,92,246,0.6)" />
      </g>
      {/* Hexagon top right */}
      <g stroke="rgba(139,92,246,0.12)" strokeWidth="0.8" fill="none" transform="translate(calc(100% - 120), 20)">
        <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" />
        <polygon points="40,10 70,27 70,53 40,70 10,53 10,27" />
      </g>
      {/* Dashed scan line */}
      <line x1="0" y1="45%" x2="20%" y2="45%" stroke="rgba(139,92,246,0.15)" strokeWidth="0.6" strokeDasharray="5 10" />
      <line x1="80%" y1="60%" x2="100%" y2="60%" stroke="rgba(6,182,212,0.12)" strokeWidth="0.6" strokeDasharray="5 10" />
    </>
  );
}

function AboutPattern() {
  return (
    <>
      {/* Flowing horizontal lines top */}
      <g stroke="rgba(6,182,212,0.18)" strokeWidth="0.8" fill="none" filter="url(#glow)">
        <path d="M 100% 120 Q 75% 80 50% 120 Q 25% 160 0% 120" />
        <path d="M 100% 160 Q 75% 120 50% 160 Q 25% 200 0% 160" />
      </g>
      {/* Circuit — bottom right */}
      <g stroke="rgba(6,182,212,0.2)" strokeWidth="1" fill="none" filter="url(#glow)">
        <path d="M 100% 75% L calc(100% - 90px) 75% L calc(100% - 90px) calc(75% - 70px) L calc(100% - 220px) calc(75% - 70px)" />
        <path d="M 100% 88% L calc(100% - 150px) 88% L calc(100% - 150px) calc(88% - 90px)" />
        <circle cx="calc(100% - 90px)" cy="75%" r="3.5" fill="rgba(6,182,212,0.6)" />
        <circle cx="calc(100% - 150px)" cy="88%" r="3.5" fill="rgba(6,182,212,0.6)" />
      </g>
      {/* Diamond bottom left */}
      <g stroke="rgba(139,92,246,0.12)" strokeWidth="0.8" fill="none">
        <polygon points="-10,calc(100% - 100) 50,calc(100% - 160) 110,calc(100% - 100) 50,calc(100% - 40)" />
      </g>
      <line x1="20%" y1="80%" x2="0" y2="80%" stroke="rgba(6,182,212,0.15)" strokeWidth="0.6" strokeDasharray="4 8" />
    </>
  );
}

function ServicesPattern() {
  return (
    <>
      {/* Triangle grid — center top */}
      <g stroke="rgba(139,92,246,0.1)" strokeWidth="0.7" fill="none">
        <polygon points="50%,10 calc(50% + 60),80 calc(50% - 60),80" />
        <polygon points="50%,25 calc(50% + 45),80 calc(50% - 45),80" />
      </g>
      {/* Vertical accent lines — sides */}
      <g stroke="rgba(6,182,212,0.15)" strokeWidth="0.6" fill="none" filter="url(#glow)" strokeDasharray="6 12">
        <line x1="8%" y1="0" x2="8%" y2="50%" />
        <line x1="92%" y1="50%" x2="92%" y2="100%" />
      </g>
      {/* Cross nodes */}
      <g stroke="rgba(139,92,246,0.18)" strokeWidth="1" fill="none" filter="url(#glow)">
        <line x1="5%" y1="35%" x2="15%" y2="35%" />
        <line x1="10%" y1="30%" x2="10%" y2="40%" />
        <circle cx="10%" cy="35%" r="2" fill="rgba(139,92,246,0.5)" />
        <line x1="85%" y1="65%" x2="95%" y2="65%" />
        <line x1="90%" y1="60%" x2="90%" y2="70%" />
        <circle cx="90%" cy="65%" r="2" fill="rgba(6,182,212,0.5)" />
      </g>
    </>
  );
}

function PortfolioPattern() {
  return (
    <>
      {/* Masonry outlines hint */}
      <g stroke="rgba(16,185,129,0.1)" strokeWidth="0.7" fill="none">
        <rect x="5%" y="15%" width="12%" height="18%" rx="4" />
        <rect x="5%" y="36%" width="12%" height="12%" rx="4" />
        <rect x="83%" y="20%" width="12%" height="14%" rx="4" />
        <rect x="83%" y="37%" width="12%" height="20%" rx="4" />
      </g>
      {/* Emerald accent circuits */}
      <g stroke="rgba(16,185,129,0.18)" strokeWidth="1" fill="none" filter="url(#glow)">
        <path d="M 5% 60% L 18% 60% L 18% 52%" />
        <circle cx="18%" cy="60%" r="3" fill="rgba(16,185,129,0.5)" />
        <path d="M 95% 40% L 82% 40% L 82% 50%" />
        <circle cx="82%" cy="40%" r="3" fill="rgba(16,185,129,0.5)" />
      </g>
      <line x1="30%" y1="90%" x2="70%" y2="90%" stroke="rgba(16,185,129,0.1)" strokeWidth="0.6" strokeDasharray="6 10" />
    </>
  );
}

function ContactPattern() {
  return (
    <>
      {/* Concentric arcs top left */}
      <g stroke="rgba(139,92,246,0.1)" strokeWidth="0.8" fill="none">
        <path d="M -60 0 A 200 200 0 0 1 200 -60" />
        <path d="M -60 0 A 160 160 0 0 1 160 -60" />
        <path d="M -60 0 A 120 120 0 0 1 120 -60" />
      </g>
      {/* Concentric arcs bottom right */}
      <g stroke="rgba(6,182,212,0.1)" strokeWidth="0.8" fill="none">
        <path d="M calc(100% + 60) 100% A 200 200 0 0 1 calc(100% - 200) calc(100% + 60)" />
        <path d="M calc(100% + 60) 100% A 150 150 0 0 1 calc(100% - 150) calc(100% + 60)" />
      </g>
      {/* Envelope hint line */}
      <g stroke="rgba(139,92,246,0.18)" strokeWidth="1" fill="none" filter="url(#glow)">
        <path d="M 0 50% L 12% 50% L 12% calc(50% - 50px) L 25% calc(50% - 50px)" />
        <circle cx="12%" cy="50%" r="3" fill="rgba(139,92,246,0.5)" />
      </g>
      <line x1="75%" y1="25%" x2="100%" y2="25%" stroke="rgba(6,182,212,0.15)" strokeWidth="0.6" strokeDasharray="5 9" />
    </>
  );
}

const patternMap: Record<ThemeKey, React.ReactNode> = {
  hero: <HeroPattern />,
  about: <AboutPattern />,
  services: <ServicesPattern />,
  portfolio: <PortfolioPattern />,
  contact: <ContactPattern />,
};

/* ─── Main component ─── */
export default function ScrollBackground() {
  const [active, setActive] = useState<ThemeKey>("hero");

  useEffect(() => {
    const sections: Array<{ id: string; key: ThemeKey }> = [
      { id: "hero-section", key: "hero" },
      { id: "about", key: "about" },
      { id: "services", key: "services" },
      { id: "portfolio", key: "portfolio" },
      { id: "contact", key: "contact" },
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id, key }) => {
      const el = id === "hero-section"
        ? document.querySelector("section")
        : document.getElementById(id);

      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(key);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const theme = themes[active];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">

      {/* ── Animated ambient orbs ── */}
      <motion.div
        className="absolute rounded-full blur-[130px]"
        animate={{
          background: theme.orb1,
          top: theme.orb1pos.split(" ")[1],
          left: theme.orb1pos.split(" ")[0],
          width: 520,
          height: 520,
        }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px]"
        animate={{
          background: theme.orb2,
          top: theme.orb2pos.split(" ")[1],
          left: theme.orb2pos.split(" ")[0],
          width: 420,
          height: 420,
        }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
      {/* Fixed center orb always present */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/3 blur-[160px]" />

      {/* ── Grid layer (fades between colors) ── */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="sbgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={theme.gridColor} strokeWidth="0.5" />
          </pattern>
          <pattern id="sbsubgrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={theme.subColor} strokeWidth="0.5" />
          </pattern>
          <radialGradient id="sbfade" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.10" />
            <stop offset="65%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="sbmask">
            <rect width="100%" height="100%" fill="url(#sbfade)" />
          </mask>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#sbsubgrid)" />
        <rect width="100%" height="100%" fill="url(#sbgrid)" mask="url(#sbmask)" />
      </svg>

      {/* ── Animated SVG pattern per section ── */}
      <AnimatePresence mode="wait">
        <motion.svg
          key={active}
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {patternMap[active]}
        </motion.svg>
      </AnimatePresence>

      {/* ── Section label hint (dev aid, invisible in prod) ── */}
    </div>
  );
}
