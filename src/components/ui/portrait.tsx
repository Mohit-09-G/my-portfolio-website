import Image from "next/image";
import { Camera } from "lucide-react";
import { site } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Your photo. Set `site.photo` in data.ts; until then a placeholder is shown. */
export function Portrait({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-bg-elevated",
        className,
      )}
    >
      {site.photo ? (
        <>
          <Image
            src={site.photo}
            alt={`${site.name}, ${site.role}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 420px, 80vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
          />
        </>
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_30%,var(--glow),transparent_70%)]">
          <div className="text-center">
            <span className="mx-auto grid size-28 place-items-center rounded-full bg-accent font-display text-4xl font-bold text-accent-fg">
              MP
            </span>
            <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted">
              <Camera size={14} /> Your photo goes here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
