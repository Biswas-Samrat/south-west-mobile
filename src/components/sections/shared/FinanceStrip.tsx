import Link from "next/link";
import { CreditCard } from "lucide-react";

export function FinanceStrip() {
  return (
    <div className="my-8 rounded-2xl border border-aqua-500/20 bg-aqua-500/5 p-4 md:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aqua-500/10 text-aqua-500">
          <CreditCard className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-base font-bold text-ink-900">
            Spread the cost with 0% APR over 3, 4 or 6 months
          </p>
          <Link
            href="/finance"
            className="text-sm font-semibold text-electric-600 transition-colors hover:text-aqua-500"
          >
            Finance details →
          </Link>
        </div>
      </div>
    </div>
  );
}
