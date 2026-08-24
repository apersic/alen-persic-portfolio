"use client";

import { motion } from "framer-motion";
import { work } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="Selected work" />

        <div className="divide-y divide-paper/10 border-y border-paper/10">
          {work.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div>
                <motion.article
                  className="group grid gap-4 py-8 md:grid-cols-[5rem_1fr_14rem] md:items-baseline md:gap-8 md:py-10"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-gold">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl tracking-tight text-paper md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-paper/10 px-3 py-1 text-[10px] tracking-[0.16em] text-muted uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-paper">{item.client}</p>
                    <p className="mt-1 font-mono text-xs tracking-[0.16em] text-muted">
                      {item.year}
                    </p>
                  </div>
                </motion.article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
