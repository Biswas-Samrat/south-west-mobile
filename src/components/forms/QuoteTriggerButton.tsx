"use client";

import { useState } from "react";
import { Button, ButtonProps } from "@/components/ui/Button";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { FileText } from "lucide-react";

interface QuoteTriggerButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  serviceName?: string;
  className?: string;
  fullWidth?: boolean;
}

export function QuoteTriggerButton({
  children = "Request a Quote",
  variant = "primary-red",
  size = "md",
  serviceName,
  className,
  fullWidth = false,
}: QuoteTriggerButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        onClick={() => setIsOpen(true)}
        iconLeft={<FileText className="h-4 w-4" />}
      >
        {children}
      </Button>

      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialService={serviceName}
      />
    </>
  );
}
