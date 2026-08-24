"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="Capabilities" />

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <h3 className="mb-6 text-[11px] tracking-[0.28em] text-muted uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.04 * index,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-full border border-paper/12 bg-paper/[0.03] px-4 py-2 text-sm text-paper transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
