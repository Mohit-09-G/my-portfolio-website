import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Faq() {
  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions business owners ask me."
          description="Straight answers on cost, timelines and ownership."
          className="lg:sticky lg:top-32 lg:mb-0 lg:self-start"
        />

        <Reveal className="divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            // Native <details>: accessible, keyboard-friendly, and zero JavaScript.
            <details key={faq.q} name="faq" className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-medium tracking-tight md:text-xl [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-accent-fg">
                  <Plus size={16} aria-hidden />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
