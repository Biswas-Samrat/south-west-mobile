import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  id: string;
}

export function AccordionItem({ question, answer, id }: AccordionItemProps) {
  return (
    <details
      className="group border-b border-mist-200"
      name="faq-accordion"
    >
      <summary
        className={cn(
          "flex min-h-[48px] cursor-pointer items-center justify-between gap-4 py-4 text-left",
          "font-display text-base font-bold text-ink-900 md:text-lg",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600",
          "list-none [&::-webkit-details-marker]:hidden",
        )}
        id={`faq-${id}`}
        aria-controls={`faq-answer-${id}`}
      >
        {question}
        <ChevronDown
          className="h-5 w-5 shrink-0 text-ink-500 transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div
        id={`faq-answer-${id}`}
        className="pb-4 text-base leading-relaxed text-ink-700"
        role="region"
        aria-labelledby={`faq-${id}`}
      >
        {answer}
      </div>
    </details>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("divide-y divide-mist-200 border-t border-mist-200", className)}>
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
}
