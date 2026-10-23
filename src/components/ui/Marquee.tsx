import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function Marquee() {
  const items = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div
      className="overflow-hidden bg-navy-950 py-3"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        {items.map((i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-aqua-400"
          >
            WE COME TO YOU
            <Wrench className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeStatic() {
  return (
    <div className="bg-navy-950 py-3 text-center">
      <span className="text-sm font-bold uppercase tracking-[0.3em] text-aqua-400">
        WE COME TO YOU
      </span>
    </div>
  );
}
