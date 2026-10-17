"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay once the element is revealed (ms). */
  delayMs?: number;
};

/**
 * Scroll/entry reveal that stays fully visible without JS (SSR and no-js).
 *
 * After mount, below-the-fold elements may hide briefly then animate in
 * when they enter the viewport. In-viewport elements stay visible.
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setPending(false);
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const inViewport =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (inViewport) {
      setPending(false);
      setVisible(true);
      return;
    }

    setVisible(false);
    setPending(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${pending ? " reveal--pending" : ""}${
        visible ? " reveal--visible" : ""
      }${className ? ` ${className}` : ""}`}
      style={
        delayMs && visible
          ? ({ "--reveal-delay": `${delayMs}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
