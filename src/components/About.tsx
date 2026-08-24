"use client";

import { education, site } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" label="About" />

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
          <Reveal>
            <p className="font-display text-3xl leading-snug text-paper md:text-4xl">
              Building software, leading people, and teaching along the way.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Since 2020 I have shipped fintech, blockchain, communications,
              esports, and education products. These days I lead a frontend team
              at Code Of Us, keep a hand in the full stack, and treat AI coding
              agents as part of a professional engineering practice — not a
              shortcut around it.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Mentorship, workshops, and 1-on-1s sit alongside delivery. The
              work is the product and the team that can keep shipping it.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="border border-paper/10 bg-paper/[0.03] p-6 md:p-8">
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                Education
              </p>
              <h3 className="mt-4 font-display text-2xl text-paper">
                {education.degree}
              </h3>
              <p className="mt-2 text-sm text-paper">{education.school}</p>
              <p className="mt-1 font-mono text-xs tracking-[0.14em] text-muted">
                {education.period}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {education.note}
              </p>
              <p className="mt-8 text-xs tracking-[0.16em] text-muted uppercase">
                {site.location} · English
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
