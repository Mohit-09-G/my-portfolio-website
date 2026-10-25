import Image from "next/image";
import { brands } from "@/lib/data";

function Brand({ name, logo }: { name: string; logo?: string }) {
  return (
    <li className="flex shrink-0 items-center gap-3 px-6">
      {logo ? (
        <span className="relative size-9 overflow-hidden rounded-xl bg-white">
          <Image src={logo} alt="" fill sizes="36px" className="object-cover" />
        </span>
      ) : (
        <span className="grid size-9 place-items-center rounded-xl bg-accent-soft font-display text-sm font-bold text-accent">
          {name[0]}
        </span>
      )}
      <span className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-fg/80">
        {name}
      </span>
    </li>
  );
}

export function Brands() {
  return (
    <section aria-labelledby="brands-heading" className="border-y border-line py-10">
      <h2 id="brands-heading" className="container-x mb-6 text-center text-sm text-muted">
        Products I&apos;ve built, live for real businesses
      </h2>
      <div className="mask-fade-x group flex overflow-hidden">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
          >
            {brands.map((b) => (
              <Brand key={b.name} {...b} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
