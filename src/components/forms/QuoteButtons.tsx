"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { FileText, Phone } from "lucide-react";

export function HeroCtaGroup() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          variant="primary-red"
          size="lg"
          onClick={() => setModalOpen(true)}
          iconLeft={<FileText className="h-5 w-5" />}
        >
          Request a Free Quote
        </Button>
        <Button
          variant="light"
          size="lg"
          href={`tel:${SITE.phoneTel}`}
          iconLeft={<Phone className="h-5 w-5" />}
        >
          Call {SITE.phoneDisplay}
        </Button>
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export function ServiceQuoteButton({
  serviceName,
  children,
}: {
  serviceName: string;
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="primary-red"
        size="sm"
        onClick={() => setModalOpen(true)}
        iconLeft={<FileText className="h-4 w-4" />}
      >
        {children}
      </Button>
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={serviceName}
      />
    </>
  );
}
