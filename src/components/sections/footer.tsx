import { Mail, Phone } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/lib/data";
import { WhatsAppIcon } from "@/components/ui/brand-icons";

const socials = [
  { label: "Call", href: site.phoneHref, icon: <Phone size={18} /> },
  { label: "WhatsApp", href: whatsappLink, icon: <WhatsAppIcon size={18} /> },
  { label: "Email", href: `mailto:${site.email}`, icon: <Mail size={18} /> },
];

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 pt-14 md:pb-14">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-sm font-bold text-accent-fg">
                MP
              </span>
              {site.name}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted transition-colors hover:text-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass grid size-11 place-items-center rounded-full text-fg/80 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-line pt-8 text-sm text-muted">
          © {site.copyrightYear} {site.name}. Designed and built by me.
        </p>
      </div>
    </footer>
  );
}
