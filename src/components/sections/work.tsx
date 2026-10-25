import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { BrowserFrame } from "@/components/ui/browser-frame";

function ProjectCard({ project }: { project: Project }) {
  const site = project.links[0];

  return (
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}: ${project.type}. Visit live site (opens in a new tab)`}
      className="glass block h-full rounded-[1.75rem] p-3 transition-colors duration-500 group-hover:border-accent/40"
    >
      <BrowserFrame
        src={project.image}
        alt={`${project.name} website`}
        url={site.href}
        gradient={project.gradient}
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="flex items-end justify-between gap-4 p-4 md:p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{project.type}</p>
          <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight md:text-3xl">{project.name}</h3>
          <p className="mt-1.5 max-w-xl text-muted">{project.line}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-fg text-bg transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-accent-fg">
          <ArrowUpRight size={20} />
        </span>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="py-12 md:py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="My work"
          title="Websites and platforms I've built. All live."
          description="Click any project to open the real thing."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <TiltCard className="h-full" max={4}>
                <ProjectCard project={project} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
