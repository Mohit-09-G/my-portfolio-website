import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function Results() {
  return (
    <section aria-label="Results" className="py-10 md:py-16">
      <div className="container-x">
        <Stagger className="glass grid grid-cols-2 overflow-hidden rounded-3xl lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={[
                "p-6 md:p-10",
                i % 2 === 1 ? "border-l border-line" : "",
                i >= 2 ? "border-t border-line lg:border-t-0" : "",
                i === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted md:text-base">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
