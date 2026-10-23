"use client";

import { usePathname } from "next/navigation";
import { genericQuoteUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <a
        href={genericQuoteUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-wa-500 text-navy-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-wa-600 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-400"
        aria-label="Message us on WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 animate-ping rounded-full bg-wa-500/30"
          style={{ animationDuration: "6s" }}
          aria-hidden="true"
        />
        {/* Tooltip */}
        <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Message us on WhatsApp
        </span>
      </a>
    </div>
  );
}
