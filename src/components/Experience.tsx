"use client";

import { experience } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="Experience" />

        <div className="relative space-y-4 border-l border-paper/12 md:ml-2">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.05}>
              <article className="relative pb-14 pl-8 last:pb-0 md:pl-12">
                <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,164,108,0.15)]" />
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-2xl text-paper md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.14em] text-muted">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gold">
                  {job.company}
                  <span className="text-muted"> · {job.location}</span>
                </p>
                <ul className="mt-5 max-w-2xl space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-relaxed text-muted md:text-[15px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
