import { Truck } from "lucide-react";

interface RoadDividerProps {
  onDark?: boolean;
}

export function RoadDivider({ onDark = false }: RoadDividerProps) {
  return (
    <div className="relative my-8 flex items-center justify-center" aria-hidden="true">
      <div
        className={`h-0 flex-1 border-t-2 border-dashed ${
          onDark ? "border-white/15" : "border-mist-200"
        }`}
      />
      <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900">
        <Truck className="h-5 w-5 text-aqua-400" />
      </div>
      <div
        className={`h-0 flex-1 border-t-2 border-dashed ${
          onDark ? "border-white/15" : "border-mist-200"
        }`}
      />
    </div>
  );
}
