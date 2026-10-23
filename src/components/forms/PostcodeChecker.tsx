"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { validatePostcode } from "@/lib/validators";
import { cn } from "@/lib/utils";
import { Check, MapPin } from "lucide-react";

export function PostcodeChecker() {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checked, setChecked] = useState<{ status: "covered" | "contact"; code: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validatePostcode(postcode);
    if (err) {
      setError(err);
      setChecked(null);
      return;
    }
    setError(null);
    const upper = postcode.trim().toUpperCase();
    const isCore =
      upper.startsWith("BS22") ||
      upper.startsWith("BS23") ||
      upper.startsWith("BS24") ||
      upper.startsWith("BS21") ||
      upper.startsWith("BS25") ||
      upper.startsWith("BS29") ||
      upper.startsWith("TA8") ||
      upper.startsWith("TA9");

    setChecked({
      status: isCore ? "covered" : "contact",
      code: upper,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="postcode-check" className="sr-only">
            Your postcode
          </label>
          <input
            id="postcode-check"
            type="text"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value.toUpperCase());
              setError(null);
              setChecked(null);
            }}
            placeholder="e.g. BS23 1AA"
            className={cn(
              "h-12 w-full rounded-xl border px-4 text-base text-slate-900 bg-white",
              "focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20",
              error ? "border-red-500" : "border-slate-200 hover:border-slate-300",
            )}
            aria-invalid={!!error}
            aria-describedby={error ? "postcode-check-error" : undefined}
          />
          {error && (
            <p id="postcode-check-error" className="mt-1 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
        <Button
          variant="primary-red"
          size="md"
          type="submit"
          iconLeft={<MapPin className="h-4 w-4" />}
          className="shrink-0"
        >
          Check Coverage
        </Button>
      </form>

      {checked && (
        <div
          className={cn(
            "mt-3 p-3.5 rounded-xl border text-sm flex items-start gap-2.5",
            checked.status === "covered"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-blue-50 border-blue-200 text-blue-800",
          )}
        >
          <Check className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
          <div>
            {checked.status === "covered" ? (
              <p>
                <strong>Great news!</strong> Postcode area <strong>{checked.code}</strong> is within our regular mobile mechanic 10-mile radius service area.
              </p>
            ) : (
              <p>
                Postcode <strong>{checked.code}</strong> is on our boundary. We often travel beyond 10 miles for pre-booked servicing or repairs—request a quote or call us to confirm!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
