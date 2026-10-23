"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/content/services";
import { SITE } from "@/content/site";
import {
  validateName,
  validatePhone,
  validateEmail,
  validatePostcode,
  validateReg,
  validateYear,
  validateMakeModel,
  validateService,
  validateLocation,
} from "@/lib/validators";
import { Check, RotateCcw, Send, Calendar, Clock, Car, User, MapPin } from "lucide-react";

type FormErrors = Record<string, string | null>;

interface QuoteFormProps {
  initialReg?: string;
  initialService?: string;
  initialPostcode?: string;
  onSuccess?: () => void;
  className?: string;
}

export function QuoteForm({
  initialReg = "",
  initialService = "",
  initialPostcode = "",
  onSuccess,
  className,
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: initialPostcode,
    reg: initialReg,
    makeModel: "",
    year: "",
    service: initialService,
    location: "mobile",
    date: "",
    timeOfDay: "Any time",
    blueLight: false,
    finance: false,
    details: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (): FormErrors => ({
    name: validateName(form.name),
    phone: validatePhone(form.phone),
    email: validateEmail(form.email),
    postcode: validatePostcode(form.postcode),
    reg: validateReg(form.reg),
    year: validateYear(form.year),
    makeModel: validateMakeModel(form.makeModel),
    service: validateService(form.service),
    location: validateLocation(form.location),
  });

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate();
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate()[field] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validate();
    setErrors(allErrors);
    setTouched(
      Object.keys(allErrors).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {},
      ),
    );

    const hasErrors = Object.values(allErrors).some((v) => v !== null);
    if (hasErrors) {
      const firstErrorField = Object.keys(allErrors).find(
        (k) => allErrors[k] !== null,
      );
      if (firstErrorField) {
        document.getElementById(`field-${firstErrorField}`)?.focus();
      }
      return;
    }

    setSubmitting(true);
    // Client-side simulation of form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/60 p-6 text-center md:p-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-900">
          Quote Request Submitted!
        </h3>
        <p className="mt-2 text-base text-slate-700 max-w-md mx-auto">
          Thank you, <strong className="text-slate-900">{form.name || "there"}</strong>. We have received your details for vehicle <strong className="text-slate-900">{form.reg || "inspection"}</strong>.
        </p>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
          Our mobile mechanic team will review your requirements and contact you via phone or email promptly with an estimate and availability.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            variant="navy"
            size="md"
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                phone: "",
                email: "",
                postcode: "",
                reg: "",
                makeModel: "",
                year: "",
                service: "",
                location: "mobile",
                date: "",
                timeOfDay: "Any time",
                blueLight: false,
                finance: false,
                details: "",
              });
              setTouched({});
              setErrors({});
            }}
            iconLeft={<RotateCcw className="h-4 w-4" />}
          >
            Submit Another Enquiry
          </Button>
          <Button
            href={`tel:${SITE.phoneTel}`}
            variant="outline-navy"
            size="md"
          >
            Call {SITE.phoneDisplay}
          </Button>
        </div>
      </div>
    );
  }

  const fieldClass = (field: string) =>
    cn(
      "h-12 w-full rounded-xl border bg-white px-4 text-base text-slate-900 transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2",
      errors[field] && touched[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
        : "border-slate-200 hover:border-slate-300 focus:border-brand-primary focus:ring-brand-primary/20",
    );

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("space-y-6", className)}>
      {/* ─── Contact Information ─── */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
          <User className="w-4 h-4 text-brand-primary" />
          1. Your Details
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="field-name" className="mb-1 block text-xs font-semibold text-slate-700">
              Full Name *
            </label>
            <input
              id="field-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={fieldClass("name")}
              placeholder="e.g. John Smith"
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="field-phone" className="mb-1 block text-xs font-semibold text-slate-700">
              Phone Number *
            </label>
            <input
              id="field-phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              className={fieldClass("phone")}
              placeholder="07123 456789"
            />
            {touched.phone && errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="field-email" className="mb-1 block text-xs font-semibold text-slate-700">
              Email Address *
            </label>
            <input
              id="field-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={fieldClass("email")}
              placeholder="john@example.co.uk"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="field-postcode" className="mb-1 block text-xs font-semibold text-slate-700">
              Postcode *
            </label>
            <input
              id="field-postcode"
              type="text"
              required
              value={form.postcode}
              onChange={(e) => handleChange("postcode", e.target.value.toUpperCase())}
              onBlur={() => handleBlur("postcode")}
              className={fieldClass("postcode")}
              placeholder="e.g. BS23 1AA"
            />
            {touched.postcode && errors.postcode && (
              <p className="mt-1 text-xs text-red-600">{errors.postcode}</p>
            )}
          </div>
        </div>
      </div>

      {/* ─── Vehicle Information ─── */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
          <Car className="w-4 h-4 text-brand-primary" />
          2. Vehicle &amp; Service
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="field-reg" className="mb-1 block text-xs font-semibold text-slate-700">
              Vehicle Reg *
            </label>
            <input
              id="field-reg"
              type="text"
              required
              value={form.reg}
              onChange={(e) => handleChange("reg", e.target.value.toUpperCase())}
              onBlur={() => handleBlur("reg")}
              className={fieldClass("reg")}
              placeholder="AB12 CDE"
            />
            {touched.reg && errors.reg && (
              <p className="mt-1 text-xs text-red-600">{errors.reg}</p>
            )}
          </div>

          <div>
            <label htmlFor="field-makeModel" className="mb-1 block text-xs font-semibold text-slate-700">
              Make &amp; Model (optional)
            </label>
            <input
              id="field-makeModel"
              type="text"
              value={form.makeModel}
              onChange={(e) => handleChange("makeModel", e.target.value)}
              onBlur={() => handleBlur("makeModel")}
              className={fieldClass("makeModel")}
              placeholder="e.g. Ford Focus"
            />
          </div>

          <div>
            <label htmlFor="field-year" className="mb-1 block text-xs font-semibold text-slate-700">
              Year (optional)
            </label>
            <input
              id="field-year"
              type="text"
              value={form.year}
              onChange={(e) => handleChange("year", e.target.value)}
              onBlur={() => handleBlur("year")}
              className={fieldClass("year")}
              placeholder="e.g. 2018"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="field-service" className="mb-1 block text-xs font-semibold text-slate-700">
            Service Required *
          </label>
          <select
            id="field-service"
            required
            value={form.service}
            onChange={(e) => handleChange("service", e.target.value)}
            onBlur={() => handleBlur("service")}
            className={fieldClass("service")}
          >
            <option value="">Select a service…</option>
            {form.service && !SERVICE_OPTIONS.includes(form.service) && (
              <option value={form.service}>{form.service}</option>
            )}
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {touched.service && errors.service && (
            <p className="mt-1 text-xs text-red-600">{errors.service}</p>
          )}
        </div>
      </div>

      {/* ─── Location & Scheduling ─── */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-primary" />
          3. Preferred Time &amp; Location
        </h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="field-location" className="mb-1 block text-xs font-semibold text-slate-700">
              Service Location
            </label>
            <select
              id="field-location"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className={fieldClass("location")}
            >
              <option value="mobile">Mobile (Home / Workplace)</option>
              <option value="roadside">Roadside / Breakdown</option>
              <option value="workshop">Bring to Workshop</option>
            </select>
          </div>

          <div>
            <label htmlFor="field-date" className="mb-1 block text-xs font-semibold text-slate-700">
              Preferred Date (optional)
            </label>
            <input
              id="field-date"
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className={fieldClass("date")}
            />
          </div>

          <div>
            <label htmlFor="field-timeOfDay" className="mb-1 block text-xs font-semibold text-slate-700">
              Preferred Time
            </label>
            <select
              id="field-timeOfDay"
              value={form.timeOfDay}
              onChange={(e) => handleChange("timeOfDay", e.target.value)}
              className={fieldClass("timeOfDay")}
            >
              <option value="Any time">Any time</option>
              <option value="Morning">Morning (8am - 12pm)</option>
              <option value="Afternoon">Afternoon (12pm - 5pm)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ─── Checkboxes & Notes ─── */}
      <div className="pt-2 border-t border-slate-100 space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.blueLight}
            onChange={(e) => handleChange("blueLight", e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-slate-800">
            I have a Blue Light Card (20% off labour)
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.finance}
            onChange={(e) => handleChange("finance", e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
          />
          <span className="text-sm font-medium text-slate-800">
            I&apos;m interested in a 0% APR payment plan (Payment Assist)
          </span>
        </label>

        <div>
          <label htmlFor="field-details" className="mb-1 block text-xs font-semibold text-slate-700">
            Fault Details or Notes (optional)
          </label>
          <textarea
            id="field-details"
            rows={3}
            maxLength={800}
            value={form.details}
            onChange={(e) => handleChange("details", e.target.value)}
            className={cn(fieldClass("details"), "h-auto min-h-[90px] py-2.5")}
            placeholder="Describe any symptoms, dash warning lights, unusual noises, etc."
          />
        </div>
      </div>

      {/* ─── Submit Button ─── */}
      <div className="pt-2">
        <Button
          variant="primary-red"
          size="lg"
          type="submit"
          fullWidth
          disabled={submitting}
          loading={submitting}
          iconRight={<Send className="w-4 h-4 ml-1" />}
        >
          {submitting ? "Submitting Request..." : "Submit Quote Request"}
        </Button>
        <p className="mt-2 text-center text-xs text-slate-500">
          We will review your vehicle information and contact you with a prompt estimate.
        </p>
      </div>
    </form>
  );
}
