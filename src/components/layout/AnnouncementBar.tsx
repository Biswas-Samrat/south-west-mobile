import Link from "next/link";
import { Siren } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-bluelight-700 to-navy-900 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 text-center text-[13px] font-medium text-white sm:text-sm">
        <Siren className="hidden h-4 w-4 shrink-0 text-aqua-300 sm:block" aria-hidden="true" />
        <span>
          Blue Light Card holders: <strong>20% off all labour.</strong>
        </span>
        <Link
          href="/blue-light-card-discount"
          className="underline underline-offset-2 transition-colors hover:text-aqua-300"
        >
          Claim your discount →
        </Link>
      </div>
    </div>
  );
}
