"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
    if (value < 120) setActive("");
  });

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 right-0 left-0 z-50 h-[1.5px] origin-left bg-gold"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-paper/8 bg-ink/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-paper"
          >
            {site.firstName}
            <span className="text-gold">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${
                  active === item.href
                    ? "text-gold"
                    : "text-muted hover:text-paper"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${site.email}`}
            className="hidden text-[11px] tracking-[0.18em] text-gold uppercase md:inline"
          >
            {site.email}
          </a>

          <button
            type="button"
            className="relative h-8 w-8 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute top-[10px] left-1 block h-px w-6 bg-paper transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute top-[15px] left-1 block h-px w-6 bg-paper transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute top-[20px] left-1 block h-px w-6 bg-paper transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-paper/8 px-5 py-6 md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] text-paper uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="text-sm tracking-[0.12em] text-gold"
            >
              {site.email}
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
