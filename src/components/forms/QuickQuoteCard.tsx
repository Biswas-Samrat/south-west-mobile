"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/content/services";
import { validatePostcode } from "@/lib/validators";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { Send, FileText } from "lucide-react";

export function QuickQuoteCard() {
  const [reg, setReg] = useState("");
  const [service, setService] = useState("");
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postcodeError = validatePostcode(postcode);
    if (postcodeError) {
      setError(postcodeError);
      return;
    }
    if (!service) {
      setError("Please select a service.");
      return;
    }
    setError(null);
    setModalOpen(true);
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-900 hover:border-slate-300 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all";

  return (
    <>
      <div className="rounded-2xl bg-white p-4 shadow-xl border border-slate-200/80 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-brand-primary" />
          <h3 className="font-display text-lg font-bold text-slate-900">
            Get a quick quote
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 lg:flex lg:items-end lg:gap-3 lg:space-y-0">
          <div className="lg:flex-1">
            <label htmlFor="qq-reg" className="mb-1 block text-xs font-semibold text-slate-700">
              Vehicle reg <span className="text-xs text-slate-500">(optional)</span>
            </label>
            <input
              id="qq-reg"
              type="text"
              value={reg}
              onChange={(e) => setReg(e.target.value.toUpperCase())}
              className={fieldClass}
              placeholder="e.g. AB12 CDE"
            />
          </div>
          <div className="lg:flex-1">
            <label htmlFor="qq-service" className="mb-1 block text-xs font-semibold text-slate-700">
              Service *
            </label>
            <select
              id="qq-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={cn(fieldClass, "appearance-none")}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:flex-1">
            <label htmlFor="qq-postcode" className="mb-1 block text-xs font-semibold text-slate-700">
              Postcode *
            </label>
            <input
              id="qq-postcode"
              type="text"
              value={postcode}
              onChange={(e) => {
                setPostcode(e.target.value.toUpperCase());
                setError(null);
              }}
              className={fieldClass}
              placeholder="e.g. BS23 1AA"
            />
          </div>
          <Button
            variant="primary-red"
            size="md"
            type="submit"
            iconRight={<Send className="h-4 w-4" />}
            className="w-full lg:w-auto shrink-0"
          >
            Get Quote
          </Button>
        </form>
        {error && (
          <p className="mt-2 text-sm text-red-600 font-medium" role="alert">
            {error}
          </p>
        )}
      </div>

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialReg={reg}
        initialService={service}
        initialPostcode={postcode}
      />
    </>
  );
}
