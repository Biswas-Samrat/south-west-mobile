"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, FileText } from "lucide-react";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { QuoteModal } from "@/components/forms/QuoteModal";

export function StickyMobileCTA() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  if (pathname === "/contact") return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-45 md:hidden">
        <div className="rounded-t-2xl bg-navy-950/95 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur">
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline-light"
              size="md"
              fullWidth
              href={`tel:${SITE.phoneTel}`}
              iconLeft={<Phone className="h-4 w-4" />}
              className="min-w-0 gap-1 px-2 text-sm"
            >
              Call
            </Button>
            <Button
              variant="primary-red"
              size="md"
              fullWidth
              onClick={() => setModalOpen(true)}
              iconLeft={<FileText className="h-4 w-4" />}
              className="min-w-0 gap-1 px-2 text-sm"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
