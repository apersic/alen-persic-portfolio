"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Ambient() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ink" />
      <motion.div
        className="absolute -top-32 left-1/4 h-[42rem] w-[42rem] rounded-full bg-gold/10 blur-[140px]"
        animate={
          reduce
            ? undefined
            : { x: [0, 60, -20, 0], y: [0, 40, -30, 0] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] bottom-[-10%] h-[36rem] w-[36rem] rounded-full bg-[#3d2a18]/50 blur-[120px]"
        animate={
          reduce
            ? undefined
            : { x: [0, -50, 20, 0], y: [0, -30, 40, 0] }
        }
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grain absolute inset-0 opacity-[0.11]" />
    </div>
  );
}
