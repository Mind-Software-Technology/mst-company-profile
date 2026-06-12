export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* ─── Main SVG layer ─── */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Grid pattern */}
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(139,92,246,0.06)" strokeWidth="0.5" />
          </pattern>

          {/* Smaller sub-grid */}
          <pattern id="subgrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(6,182,212,0.03)" strokeWidth="0.5" />
          </pattern>

          {/* Radial fade mask — content stays clear in center */}
          <radialGradient id="fade" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.08" />
            <stop offset="60%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sub-grid base */}
        <rect width="100%" height="100%" fill="url(#subgrid)" />
        {/* Main grid with mask */}
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />

        {/* ── Circuit lines — top-left ── */}
        <g stroke="rgba(139,92,246,0.18)" strokeWidth="1" fill="none" filter="url(#glow)">
          <path d="M 0 160 L 80 160 L 80 100 L 200 100" />
          <path d="M 200 100 L 260 100 L 260 40" />
          <path d="M 0 280 L 120 280 L 120 220 L 180 220" />
          <circle cx="80" cy="160" r="3" fill="rgba(139,92,246,0.5)" />
          <circle cx="200" cy="100" r="3" fill="rgba(139,92,246,0.5)" />
          <circle cx="260" cy="100" r="3" fill="rgba(139,92,246,0.5)" />
          <circle cx="120" cy="280" r="3" fill="rgba(139,92,246,0.5)" />
        </g>

        {/* ── Circuit lines — bottom-right ── */}
        <g stroke="rgba(6,182,212,0.18)" strokeWidth="1" fill="none" filter="url(#glow)">
          <path d="M 100% 70% L calc(100% - 80px) 70% L calc(100% - 80px) calc(70% - 60px) L calc(100% - 200px) calc(70% - 60px)" />
          <path d="M 100% 85% L calc(100% - 140px) 85% L calc(100% - 140px) calc(85% - 80px)" />
          <circle cx="calc(100% - 80px)" cy="70%" r="3" fill="rgba(6,182,212,0.5)" />
          <circle cx="calc(100% - 140px)" cy="85%" r="3" fill="rgba(6,182,212,0.5)" />
        </g>

        {/* ── Geometric hexagon outline — top right ── */}
        <g stroke="rgba(139,92,246,0.12)" strokeWidth="0.8" fill="none">
          <polygon points="calc(100% - 80),60 calc(100% - 30),30 calc(100% + 20),60 calc(100% + 20),120 calc(100% - 30),150 calc(100% - 80),120" />
          <polygon points="calc(100% - 60),75 calc(100% - 30),57 calc(100%),75 calc(100%),110 calc(100% - 30),128 calc(100% - 60),110" />
        </g>

        {/* ── Geometric diamond — bottom left ── */}
        <g stroke="rgba(6,182,212,0.1)" strokeWidth="0.8" fill="none">
          <polygon points="-20,calc(100% - 80) 40,calc(100% - 140) 100,calc(100% - 80) 40,calc(100% - 20)" />
          <polygon points="10,calc(100% - 80) 40,calc(100% - 110) 70,calc(100% - 80) 40,calc(100% - 50)" />
        </g>

        {/* ── Diagonal accent lines ── */}
        <line x1="0" y1="0" x2="60" y2="60" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
        <line x1="0" y1="20" x2="40" y2="60" stroke="rgba(6,182,212,0.06)" strokeWidth="0.8" />

        {/* ── Horizontal scan line (hero area) ── */}
        <line x1="0" y1="35%" x2="25%" y2="35%" stroke="rgba(139,92,246,0.12)" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="75%" y1="65%" x2="100%" y2="65%" stroke="rgba(6,182,212,0.12)" strokeWidth="0.5" strokeDasharray="4 8" />
      </svg>

      {/* ─── CSS ambient glows ─── */}
      {/* Top-left purple orb */}
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand-purple/6 blur-[120px]" />
      {/* Bottom-right cyan orb */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      {/* Center subtle purple */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/3 blur-[150px]" />
    </div>
  );
}
