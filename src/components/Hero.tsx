"use client";

import { motion, useReducedMotion } from "framer-motion";
import { highlights, site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pt-28 pb-16 md:px-8 md:pb-20"
    >
      <motion.p
        className="mb-8 text-[11px] tracking-[0.32em] text-muted uppercase"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
      >
        {site.location}
      </motion.p>

      <h1 className="font-display text-[18vw] leading-[0.82] tracking-[-0.04em] text-paper sm:text-[13vw] md:text-[9.5vw] lg:text-[8.2rem]">
        <motion.span
          className="block"
          initial={reduce ? false : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          {site.firstName}
        </motion.span>
        <motion.span
          className="block text-gold"
          initial={reduce ? false : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease }}
        >
          {site.lastName}
        </motion.span>
      </h1>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
        >
          <p className="text-sm tracking-[0.28em] text-gold uppercase">
            {site.role}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a
              href={site.cvPath}
              className="btn-ghost"
              download
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.ul
          className="grid grid-cols-3 gap-4 border-t border-paper/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {highlights.map((item) => (
            <li key={item.label}>
              <p className="font-display text-3xl text-paper md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-[11px] tracking-[0.18em] text-muted uppercase">
                {item.label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
