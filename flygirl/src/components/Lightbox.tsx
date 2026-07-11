"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { PortfolioImage } from "@/lib/portfolio-galleries";

type LightboxProps = {
  images: PortfolioImage[];
  index: number;
  /** Project title shown above the caption. */
  title?: string;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

/**
 * Elegant, accessible lightbox for portfolio projects.
 * — Prev/next controls, keyboard arrows, Escape to close
 * — Swipe navigation on touch devices
 * — Caption from the image's alt text, plus project title
 * — No page reload; focus moves to the close button on open
 */
export default function Lightbox({ images, index, title, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const prev = useCallback(
    () => onNavigate((index - 1 + count) % count),
    [index, count, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % count),
    [index, count, onNavigate]
  );

  // Keyboard: Escape closes, arrows navigate.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  // Lock body scroll while open; move focus to the close button.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 48) return;
    if (dx > 0) prev();
    else next();
  };

  const image = images[index];
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} — image viewer` : "Image viewer"}
      className="fixed inset-0 z-[120] flex flex-col bg-navy-deep/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-4 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0 pr-4">
          {title ? (
            <div className="truncate font-serif text-lg text-white sm:text-xl">{title}</div>
          ) : null}
          <div className="mt-0.5 text-[0.62rem] uppercase tracking-luxe text-champagne">
            {index + 1} of {count}
          </div>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Image stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <div
          className="relative h-full max-h-[74vh] w-full max-w-[1100px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="animate-[fadeIn_0.5s_ease_both] object-contain"
            priority
          />
        </div>

        {/* Prev / Next — desktop side controls */}
        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-gold hover:text-gold sm:flex"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-gold hover:text-gold sm:flex"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M6.5 3.5L12 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {/* Caption + mobile controls */}
      <div
        className="px-6 pb-6 pt-4 text-center sm:pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mx-auto max-w-[60ch] text-[0.85rem] leading-relaxed text-white/85">
          {image.alt}
        </p>
        {count > 1 ? (
          <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M11.5 3.5L6 9l5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M6.5 3.5L12 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
