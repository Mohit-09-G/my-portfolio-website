import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

type Variant = "primary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-[background-color,color,box-shadow,border-color,filter] duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-[0_10px_40px_-10px_var(--glow)] hover:shadow-[0_14px_50px_-6px_var(--glow)] hover:brightness-110",
  ghost: "glass text-fg hover:border-accent/50 hover:bg-card-strong",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  magnetic?: boolean;
};

/** Anchor styled as a button. External links open in a new tab automatically. */
export function ButtonLink({
  variant = "primary",
  magnetic = true,
  className,
  href = "#",
  children,
  ...props
}: ButtonLinkProps) {
  const external = href.startsWith("http");
  const link = (
    <a
      href={href}
      className={buttonClasses(variant, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
