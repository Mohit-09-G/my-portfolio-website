import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container-x">
        <SectionHeading eyebrow="What I build" title="Tell me the goal. I'll build the software." />

        <Stagger className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
          {services.map(({ icon: Icon, title, line }, i) => (
            <StaggerItem
              key={title}
              className={`glass group rounded-3xl p-5 transition-colors duration-500 hover:border-accent/40 md:p-6 ${
                i === services.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-500 group-hover:-translate-y-1">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-tight tracking-tight md:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{line}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
