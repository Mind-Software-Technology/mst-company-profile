"use client";

import { useState } from "react";
// Imported from the component-specific subpath (not the package root) so
// bundling only pulls in the structure-flow/orbital-sphere code instead of
// every shader variant the library ships (30+ unrelated components) — the
// root barrel pulling all of them in was the likely cause of the Turbopack
// build error.
import { StructureFlowCollection } from "@designcodeio/threeui/components/StructureFlowCollection";
import "@designcodeio/threeui/style.css";

export default function ServicesOrbitSphere() {
  const [reducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  // The package's animation loop lives inside node_modules and can't be
  // guarded from the outside, so when reduced-motion is preferred we simply
  // don't mount it — falling back to the same dark base it renders on
  // (`.threeui-background`'s own `#030304`) instead of a moving scene.
  if (reducedMotion) {
    return <div className="absolute inset-0 bg-[#030304]" aria-hidden="true" />;
  }

  return (
    // Our own wrapper owns the absolute positioning. The package's own
    // ".threeui-background" class ships unlayered CSS that unconditionally
    // beats Tailwind's @layer-wrapped utilities (Tailwind v4 cascade layers
    // always lose to unlayered CSS, regardless of specificity or source
    // order) — so applying "absolute inset-0" directly to their element lets
    // their plain `position: relative` silently win and collapse the sphere
    // to zero height. Keeping it on a wrapper we fully control avoids that.
    <div className="absolute inset-0">
      <StructureFlowCollection
        variant="orbital-sphere"
        speed={1.0}
        particleSize={0.015}
        particleOpacity={1}
        orbitOpacity={0.45}
        hue={0}
        scale={1.0}
        haloOpacity={0.35}
        className="h-full w-full"
      />
    </div>
  );
}
