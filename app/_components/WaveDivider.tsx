type Tone = "page" | "surface";

export default function WaveDivider({ from, to }: { from: Tone; to: Tone }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 left-0 w-full h-10 sm:h-14 overflow-hidden leading-none pointer-events-none ${
        from === "surface" ? "bg-surface" : "bg-page"
      }`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`w-full h-full ${to === "surface" ? "fill-surface" : "fill-page"}`}
      >
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
