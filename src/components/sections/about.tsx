import { Check } from "lucide-react";
import { process, reasons, site } from "@/lib/data";
import { Portrait } from "@/components/ui/portrait";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
            <Portrait />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              About me
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl">
              One person. Full ownership. From idea to launch.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m {site.firstName}, a {site.role.toLowerCase()}. I work directly with business owners and
              build the whole product myself, so nothing gets lost between people.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map(({ title }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-fg">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-medium">{title}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* How I work */}
        <div className="mt-24">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold tracking-tight md:text-3xl">
            How we&apos;ll work together
          </h3>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {process.map(({ icon: Icon, title, timeline, line }, i) => (
              <StaggerItem key={title} className="glass relative rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full border border-accent/40 text-accent">
                    <Icon size={18} />
                  </span>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {timeline}
                  </span>
                </div>
                <h4 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  <span className="mr-2 text-muted">{i + 1}.</span>
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{line}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
