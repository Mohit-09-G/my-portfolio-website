import { whatsappLink } from "@/lib/data";
import { WhatsAppIcon } from "./brand-icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgb(37_211_102/0.6)] transition-transform duration-300 hover:scale-110 md:bottom-8 md:right-8"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 motion-reduce:hidden"
        aria-hidden
      />
      <WhatsAppIcon size={28} className="relative" />
    </a>
  );
}
