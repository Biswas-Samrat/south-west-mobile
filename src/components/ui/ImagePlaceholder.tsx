import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  aspect?: string;
  caption?: string;
  className?: string;
}

export function ImagePlaceholder({
  aspect = "aspect-[4/3]",
  caption,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-navy-900 to-navy-950",
        "dot-grid",
        aspect,
        className,
      )}
    >
      <Wrench className="h-12 w-12 text-white/20" aria-hidden="true" />
      {caption && process.env.NODE_ENV === "development" && (
        <span className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-0.5 text-xs text-white/60">
          {caption}
        </span>
      )}
    </div>
  );
}
