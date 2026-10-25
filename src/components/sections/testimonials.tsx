import Image from "next/image";
import { Quote } from "lucide-react";
import { brands, testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

// Only client-approved quotes with a real name are ever shown.
const approved = testimonials.filter((t) => t.approved && t.name.trim());

function logoFor(company: string) {
  return brands.find((b) => company.toLowerCase().startsWith(b.name.toLowerCase().split(" ")[0]))?.logo;
}

export function Testimonials() {
  if (approved.length === 0) return null;

  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container-x">
        <SectionHeading eyebrow="Clients" title="What business owners say." align="center" />

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {approved.map((t) => {
            const logo = logoFor(t.company);
            return (
              <StaggerItem key={t.company} className="glass rounded-3xl p-7">
                <figure className="flex h-full flex-col">
                  <Quote size={28} className="text-accent" aria-hidden />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5 text-sm">
                    {logo ? (
                      <span className="relative size-10 shrink-0 overflow-hidden rounded-xl bg-white">
                        <Image src={logo} alt="" fill sizes="40px" className="object-cover" />
                      </span>
                    ) : (
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft font-display font-bold text-accent">
                        {t.company[0]}
                      </span>
                    )}
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-muted">
                        {t.role}, {t.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
