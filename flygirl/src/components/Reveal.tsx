"use client";

import { useEffect, useRef, useState, type ElementType, type Ref, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in seconds. */
  delay?: number;
  className?: string;
  /** Render as a different element (e.g. "article", "li"). Defaults to div. */
  as?: ElementType;
};

/**
 * Fades and rises its children into view once, when scrolled near the viewport.
 * Honors prefers-reduced-motion by revealing immediately (handled in CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the observer isn't available, just show the content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as Ref<never>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
