import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

const channels = [
  {
    label: "WhatsApp",
    value: "Chat with me",
    href: whatsappLink,
    icon: <WhatsAppIcon size={24} />,
    iconClass: "bg-[#25D366] text-white",
    external: true,
  },
  {
    label: "Call",
    value: site.phone,
    href: site.phoneHref,
    icon: <Phone size={22} />,
    iconClass: "bg-accent text-accent-fg",
    external: false,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <Mail size={22} />,
    iconClass: "bg-fg text-bg",
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-line bg-bg-elevated px-5 py-16 md:px-16 md:py-24">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_120%,var(--glow),transparent_60%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />

          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Got an idea?</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1] tracking-[-0.035em] text-balance md:text-7xl lg:text-8xl">
              Let&apos;s build your <span className="text-gradient">product</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg text-muted">
              Message or call me. I usually reply the same day.
            </p>
          </Reveal>

          {/* Email gets the widest column so the address stays on one line. */}
          <Stagger className="mx-auto mt-12 grid max-w-5xl gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.6fr]">
            {channels.map((c) => (
              <StaggerItem key={c.label} className={c.label === "Email" ? "md:col-span-2 lg:col-span-1" : ""}>
                <Magnetic strength={0.15} className="block">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="glass group flex items-center gap-3 rounded-3xl bg-bg/50 p-4 transition-colors sm:gap-4 sm:p-5 hover:border-accent/50"
                  >
                    <span className={`grid size-10 shrink-0 sm:size-12 place-items-center rounded-2xl ${c.iconClass}`}>
                      {c.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted">{c.label}</span>
                      <span className="block whitespace-nowrap text-[13px] font-semibold sm:text-base lg:text-sm xl:text-base">{c.value}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="hidden shrink-0 text-muted transition-all sm:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </Magnetic>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
