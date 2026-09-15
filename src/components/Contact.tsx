"use client";

import { site } from "@/data/site";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${site.email}`, value: site.email },
    { label: "Phone", href: site.phoneHref, value: site.phone },
    site.linkedin
      ? { label: "LinkedIn", href: site.linkedin, value: "alen-peršić" }
      : null,
    site.github
      ? { label: "GitHub", href: site.github, value: "apersic" }
      : null,
  ].filter((item): item is { label: string; href: string; value: string } =>
    Boolean(item),
  );

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 pt-24 pb-12 md:px-8 md:pt-32 md:pb-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" label="Contact" />

        <Reveal>
          <p className="max-w-2xl font-display text-4xl leading-tight text-paper md:text-6xl">
            Let&apos;s build something together.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block font-display text-2xl text-gold underline decoration-gold/30 underline-offset-8 transition-colors hover:text-paper hover:decoration-paper/40 md:text-4xl"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-16 grid gap-6 border-t border-paper/10 pt-10 sm:grid-cols-2 md:grid-cols-4">
            {links.map((link) => (
              <li key={link.label}>
                <p className="text-[11px] tracking-[0.24em] text-muted uppercase">
                  {link.label}
                </p>
                <a
                  href={link.href}
                  className="mt-2 inline-block text-paper transition-colors hover:text-gold"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-3 border-t border-paper/10 pt-8 text-xs tracking-[0.16em] text-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Zagreb · Web Team Lead</p>
        </footer>
      </div>
    </section>
  );
}
