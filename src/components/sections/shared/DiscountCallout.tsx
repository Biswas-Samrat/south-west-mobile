import Link from "next/link";
import { Siren } from "lucide-react";

export function DiscountCallout() {
  return (
    <div className="my-8 rounded-2xl border border-bluelight-600/30 bg-bluelight-600/5 p-4 md:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bluelight-600/10 text-bluelight-600">
          <Siren className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-base font-bold text-ink-900">
            20% off all labour with your Blue Light Card
          </p>
          <Link
            href="/blue-light-card-discount"
            className="text-sm font-semibold text-electric-600 transition-colors hover:text-aqua-500"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
