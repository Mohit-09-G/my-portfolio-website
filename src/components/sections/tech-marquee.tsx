import StackIcon from "tech-stack-icons";
import { techStack } from "@/lib/data";

export function TechMarquee() {
  return (
    <section aria-labelledby="tech-heading" className="py-16 md:py-20">
      <div className="container-x mb-8 text-center">
        <h2 id="tech-heading" className="text-sm text-muted">
          Built with proven, modern technology
        </h2>
      </div>
      <div className="mask-fade-x group relative flex overflow-hidden">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]"
          >
            {techStack.map((tech) => (
              <li
                key={tech.name}
                className="glass flex items-center gap-2.5 whitespace-nowrap rounded-full py-2 pl-2.5 pr-5 font-display text-sm font-medium text-fg/75"
              >
                {/* Logos have separate artwork for light and dark backgrounds. */}
                <span className="size-7 dark:hidden">
                  <StackIcon name={tech.icon} variant="light" className="size-full" />
                </span>
                <span className="hidden size-7 dark:block">
                  <StackIcon name={tech.icon} variant="dark" className="size-full" />
                </span>
                {tech.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
