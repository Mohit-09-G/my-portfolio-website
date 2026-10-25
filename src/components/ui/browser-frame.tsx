import Image from "next/image";
import { cn } from "@/lib/utils";

/** Real screenshot inside a minimal browser window. */
export function BrowserFrame({
  src,
  alt,
  url,
  gradient,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  className,
}: {
  src?: string;
  alt: string;
  url: string;
  gradient: [string, string];
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const host = url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-2xl", className)}>
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-card-strong px-3 py-0.5 text-[11px] text-muted">{host}</span>
      </div>
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
        )}
      </div>
    </div>
  );
}
