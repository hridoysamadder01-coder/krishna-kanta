"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered editorial reveal: a slow fade with restrained upward
 * movement. Fully disabled when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "figure";
}) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

/** Image scale-settle: from 1.03 to 1 while fading in. */
export function RevealImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Fine line that expands horizontally when it enters the viewport. */
export function RevealRule({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div aria-hidden="true" className={`gold-rule ${className ?? ""}`} />;
  return (
    <motion.div
      aria-hidden="true"
      className={`gold-rule origin-left ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
