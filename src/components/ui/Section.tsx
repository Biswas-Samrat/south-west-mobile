import { cn } from "@/lib/utils";
import { Container } from "./Container";
import type { ReactNode } from "react";

type SectionTone = "white" | "mist" | "navy" | "navy-deep";

interface SectionProps {
  tone?: SectionTone;
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
  noContainer?: boolean;
}

const toneStyles: Record<SectionTone, string> = {
  white: "bg-white",
  mist: "bg-mist-50",
  navy: "bg-navy-900",
  "navy-deep": "bg-navy-950",
};

export function Section({
  tone = "white",
  id,
  className,
  children,
  containerClassName,
  noContainer = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-28",
        toneStyles[tone],
        className,
      )}
    >
      {noContainer ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
