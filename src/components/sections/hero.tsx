"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { brands, site, whatsappLink } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { Portrait } from "@/components/ui/portrait";

const ease = [0.22, 1, 0.36, 1] as const;

// Real product icons floating around the photo.
const floatingIcons = [
  { src: "/brands/saral-rojgar.png", alt: "Saral Rojgar", className: "-left-2 top-10 md:-left-10", delay: 0 },
  { src: "/work/time-growth-icon.jpg", alt: "Time Growth", className: "-right-2 top-1/4 md:-right-8", delay: 1.2 },
  { src: "/brands/ratnawn-tech.png", alt: "RatNawn AI", className: "-left-2 bottom-1/4 md:-left-8", delay: 0.6 },
  { src: "/work/make-fit-simple-icon.jpg", alt: "Make Fit Simple", className: "-right-2 bottom-12 md:-right-6", delay: 1.8 },
];

export function Hero() {
  const words = site.headline.split(" ");
  // The trailing `headlineHighlight` words get the accent gradient.
  const highlightFrom = site.headline.endsWith(site.headlineHighlight)
    ? words.length - site.headlineHighlight.split(" ").length
    : words.length;

  return (
    // Exactly one screen tall on every device, so the next section never peeks in.
    <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden pb-10 pt-24 md:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-muted"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" aria-hidden />
            <span>
              Hi, I&apos;m <span className="font-semibold text-fg">{site.name}</span>
              <span className="hidden sm:inline"> · {site.role}</span>
            </span>
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.4rem]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.1 + i * 0.05 }}
                  className={i >= highlightFrom ? "text-gradient inline-block" : "inline-block"}
                >
                  {word}
                  {i < words.length - 1 && " "}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted"
          >
            {site.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#work">
              See my work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href={whatsappLink} variant="ghost">
              <WhatsAppIcon size={16} className="text-[#25D366]" /> WhatsApp me
            </ButtonLink>
          </motion.div>

          {/* Phones: compact proof row instead of the tall photo card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.95 }}
            className="mt-8 flex items-center gap-3 lg:hidden"
          >
            <div className="flex -space-x-3">
              {floatingIcons.map((icon) => (
                <span
                  key={icon.alt}
                  className="relative size-11 overflow-hidden rounded-xl border-2 border-bg bg-white shadow-md"
                >
                  <Image src={icon.src} alt={icon.alt} fill sizes="44px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="font-display text-lg font-semibold leading-tight text-fg">
              {brands.length} live products
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          // Width tied to screen height so the 4:5 photo always fits within one screen.
          className="relative mx-auto hidden w-[min(420px,46svh)] lg:block"
        >
          <Portrait priority />

          {floatingIcons.map((icon) => (
            <motion.div
              key={icon.alt}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: icon.delay }}
              className={`absolute size-14 overflow-hidden rounded-2xl border border-line bg-white shadow-xl md:size-16 ${icon.className}`}
            >
              <Image src={icon.src} alt={icon.alt} fill sizes="64px" className="object-cover" />
            </motion.div>
          ))}

          <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl bg-bg-elevated/80 px-4 py-3 shadow-xl">
            <span className="font-display text-2xl font-semibold text-accent">
              {brands.length}
            </span>
            <span className="text-xs leading-tight text-muted">live products</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
