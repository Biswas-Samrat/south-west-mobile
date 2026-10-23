import { cn } from "@/lib/utils";

interface StepItem {
  title: string;
  text: string;
}

interface StepListProps {
  items: StepItem[];
  className?: string;
  onDark?: boolean;
}

export function StepList({ items, className, onDark = false }: StepListProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Mobile: vertical timeline */}
      <div className="lg:hidden">
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold",
                    "border-2",
                    onDark
                      ? "border-aqua-400 bg-navy-800 text-aqua-400"
                      : "border-aqua-500 bg-white text-aqua-500",
                  )}
                  style={{
                    borderImage: "linear-gradient(135deg, #8B6CC9, #22C7E8, #2F55E8, #E5263A) 1",
                    borderImageSlice: 1,
                    borderRadius: "9999px",
                    borderStyle: "solid",
                  }}
                >
                  {i + 1}
                </div>
                {i < items.length - 1 && (
                  <div
                    className={cn(
                      "mt-2 w-0 flex-1 border-l-2 border-dashed",
                      onDark ? "border-white/15" : "border-mist-200",
                    )}
                  />
                )}
              </div>
              <div className="pb-2 pt-2">
                <h3
                  className={cn(
                    "font-display text-lg font-bold",
                    onDark ? "text-white" : "text-ink-900",
                  )}
                >
                  {item.title}
                </h3>
                <p className={cn("mt-1 text-base", onDark ? "text-[#C7D0F0]" : "text-ink-700")}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
        {items.map((item, i) => (
          <div key={i} className="relative text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-aqua-500 font-display text-lg font-bold text-aqua-500">
              {i + 1}
            </div>
            {i < items.length - 1 && (
              <div
                className={cn(
                  "absolute top-6 left-[calc(50%+24px)] h-0 w-[calc(100%-48px)] border-t-2 border-dashed",
                  onDark ? "border-white/15" : "border-mist-200",
                )}
                aria-hidden="true"
              />
            )}
            <h3
              className={cn(
                "font-display text-lg font-bold",
                onDark ? "text-white" : "text-ink-900",
              )}
            >
              {item.title}
            </h3>
            <p className={cn("mt-1 text-base", onDark ? "text-[#C7D0F0]" : "text-ink-700")}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
