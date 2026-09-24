const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const fadeUp = (delay = 0, distance = 25) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay, ease: EASE_OUT_EXPO },
});

export const fadeUpScale = (delay = 0) => ({
  initial: { opacity: 0, y: 25, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay, ease: EASE_OUT_EXPO },
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6, delay },
});

export const staggerContainer = (stagger = 0.1) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" } as const,
  variants: {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  },
});
