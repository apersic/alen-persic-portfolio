"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 flex items-center gap-5 md:mb-16">
        <span className="font-mono text-[11px] tracking-[0.28em] text-gold">
          {index}
        </span>
        <span className="h-px flex-1 bg-paper/12" />
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
          {label}
        </span>
      </div>
    </Reveal>
  );
}
