"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";

export interface Slide {
  id: number;
  image?: string;
  title: string;
  description: string;
}

const AUTOPLAY_MS = 5000;

export function ImageSliderCard({ slides }: { slides: Slide[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const headingId = useId();
  const descriptionId = useId();

  const slideCount = slides.length;

  const imageVariants = useMemo((): Variants => {
    if (shouldReduceMotion) {
      return {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
    return {
      enter: { opacity: 0, scale: 0.98 },
      center: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.02 },
    };
  }, [shouldReduceMotion]);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return slideCount - 1;
      if (nextIndex >= slideCount) return 0;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  // Slides on its own unless the user is hovering/focused on it or prefers
  // reduced motion — pauses rather than stops outright so it resumes as
  // soon as they move away.
  useEffect(() => {
    if (paused || shouldReduceMotion || slideCount <= 1) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, shouldReduceMotion, slideCount, currentIndex]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowLeft": {
        event.preventDefault();
        paginate(-1);
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        paginate(1);
        break;
      }
      case "Home": {
        event.preventDefault();
        goToSlide(0);
        break;
      }
      case "End": {
        event.preventDefault();
        goToSlide(slideCount - 1);
        break;
      }
      default:
        break;
    }
  };

  const current = slides[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
      className="rounded-2xl w-full max-w-3xl mx-auto bg-surface border border-bd overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/60 focus-visible:ring-offset-2"
      role="group"
      aria-roledescription="carousel"
      aria-label="Galeri proyek portofolio"
      aria-live="polite"
      aria-atomic="true"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Image Slider */}
      <div className="relative h-96 bg-pill overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {current.image ? (
            <motion.img
              key={currentIndex}
              src={current.image}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: "easeInOut",
              }}
              className="absolute w-full h-full object-cover object-top grayscale focus-visible:outline-none transition-opacity"
              alt={current.title}
              role="img"
              aria-describedby={descriptionId}
              aria-labelledby={headingId}
            />
          ) : (
            <motion.div
              key={currentIndex}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center bg-pill font-body text-xs font-medium uppercase tracking-[0.08em] text-fg-muted"
            >
              {current.title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-bd flex items-center justify-center hover:bg-pill transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/60 focus-visible:ring-offset-2"
          aria-label="Proyek sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 text-fg" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface border border-bd flex items-center justify-center hover:bg-pill transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/60 focus-visible:ring-offset-2"
          aria-label="Proyek selanjutnya"
        >
          <ChevronRight className="w-5 h-5 text-fg" aria-hidden="true" />
        </button>

        <span className="sr-only" role="status">
          Slide {currentIndex + 1} dari {slideCount}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 border-t border-bd" role="tablist" aria-label="Navigasi proyek">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            role="tabpanel"
            aria-labelledby={headingId}
            id={`slide-panel-${current.id}`}
          >
            <h2 id={headingId} className="font-display text-2xl font-semibold tracking-[-0.015em] text-fg mb-2">
              {current.title}
            </h2>
            <p id={descriptionId} className="text-fg-muted leading-relaxed" aria-live="polite">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2 mt-6">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`rounded-full h-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/60 focus-visible:ring-offset-2 ${
                  isActive ? "w-8 bg-[#8B5CF6]" : "w-1.5 bg-pill hover:bg-pill-hover"
                }`}
                aria-label={`Lihat proyek ${index + 1}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`slide-panel-${slide.id}`}
                tabIndex={isActive ? 0 : -1}
                id={`slide-tab-${slide.id}`}
              >
                <span className="sr-only">
                  {slide.title} ({index + 1} dari {slideCount})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
