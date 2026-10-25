import Image from "next/image";
import { Apple, ArrowUpRight, Play } from "lucide-react";
import { apps, type App, type ProjectLink } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";

function StoreButton({ link, appName }: { link: ProjectLink; appName: string }) {
  const Icon = link.kind === "appstore" ? Apple : link.kind === "play" ? Play : ArrowUpRight;
  const primary = link.kind !== "web";
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${appName} on ${link.label} (opens in a new tab)`}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
        primary
          ? "bg-fg text-bg hover:bg-accent hover:text-accent-fg"
          : "border border-line hover:border-accent/60 hover:text-accent",
      )}
    >
      <Icon size={15} fill={link.kind === "play" ? "currentColor" : "none"} />
      {link.label}
    </a>
  );
}

function AppVisual({ app }: { app: App }) {
  if (app.screens?.length) {
    return (
      <div className="flex justify-center gap-3 px-4 pt-8 md:gap-4">
        {app.screens.map((src, i) => (
          <div
            key={src}
            style={{ aspectRatio: app.screenAspect ?? "600 / 1300" }}
            className={cn(
              "relative w-1/3 max-w-[170px] overflow-hidden rounded-2xl border border-line bg-white shadow-2xl transition-transform duration-700",
              i === 1 ? "-translate-y-4 group-hover:-translate-y-7" : "group-hover:-translate-y-2",
            )}
          >
            <Image src={src} alt={`${app.name} screen ${i + 1}`} fill sizes="170px" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }
  if (app.image) {
    const web = app.links.find((l) => l.kind === "web");
    return (
      <div className="px-6 pt-8">
        <BrowserFrame src={app.image} alt={`${app.name} app`} url={web?.href ?? ""} gradient={["#14b8a6", "#0f766e"]} />
      </div>
    );
  }
  return null;
}

export function Apps() {
  return (
    <section id="apps" className="py-12 md:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Mobile apps"
          title="Apps on the App Store and Google Play."
          description="Designed, built and published by me."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.08}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-colors duration-500 hover:border-accent/40">
                <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,var(--glow),transparent_70%)]">
                  <AppVisual app={app} />
                </div>
                <div className="mt-auto flex flex-col gap-5 border-t border-line p-6 md:p-7">
                  <div className="flex items-center gap-4">
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-2xl border border-line shadow-lg">
                      <Image src={app.icon} alt="" fill sizes="56px" className="object-cover" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{app.type}</p>
                      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{app.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted">{app.line}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.links.map((link) => (
                      <StoreButton key={link.href} link={link} appName={app.name} />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
