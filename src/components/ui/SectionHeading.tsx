import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.18em] md:text-[13px]",
            onDark ? "text-aqua-400" : "text-aqua-500",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[30px] leading-[36px] font-extrabold tracking-[-0.02em] text-balance md:text-[36px] md:leading-[42px] lg:text-[44px] lg:leading-[50px]",
          onDark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-[17px] leading-7 text-pretty md:text-lg md:leading-[30px] lg:text-xl lg:leading-8",
            onDark ? "text-[#C7D0F0]" : "text-ink-700",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
