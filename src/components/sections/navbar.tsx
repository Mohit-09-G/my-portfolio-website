"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Publish where the navbar ends so anchor scrolling (CSS scroll-padding, read by Lenis too)
  // lands sections just below it. Measures the pill, not the header, so the open mobile menu doesn't count.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () =>
      document.documentElement.style.setProperty("--nav-height", `${nav.getBoundingClientRect().bottom}px`);
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        ref={navRef}
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6",
          scrolled || open
            ? "glass border-line shadow-[0_10px_40px_-20px_rgb(0_0_0/0.5)]"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-accent text-sm font-bold text-accent-fg">
            MP
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="#contact" className="hidden px-5 py-2.5 sm:inline-flex">
            Let&apos;s talk <ArrowRight size={16} />
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass grid size-10 place-items-center rounded-full md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl bg-bg-elevated/90 p-4 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-xl font-medium hover:bg-card-strong"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink href="#contact" magnetic={false} onClick={() => setOpen(false)} className="mt-3 w-full">
              Let&apos;s talk <ArrowRight size={16} />
            </ButtonLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
