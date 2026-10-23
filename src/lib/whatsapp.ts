import { SITE } from "@/content/site";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function genericQuoteUrl(): string {
  return buildWhatsAppUrl("Hi South West Mobile, I'd like to get a quote.");
}

export function serviceQuoteUrl(service: string): string {
  return buildWhatsAppUrl(`Hi South West Mobile, I'd like a quote for ${service}.`);
}

export function blueLightQuoteUrl(): string {
  return buildWhatsAppUrl(
    "Hi South West Mobile, I have a Blue Light Card and would like to claim 20% off labour. I'd like a quote for…",
  );
}

export function financeQuoteUrl(): string {
  return buildWhatsAppUrl(
    "Hi South West Mobile, I'd like to ask about 0% APR payment plans for a repair.",
  );
}

export function postcodeCheckUrl(postcode: string): string {
  return buildWhatsAppUrl(
    `Hi South West Mobile, do you cover ${postcode.toUpperCase().trim()}?`,
  );
}

export function quickQuoteUrl(reg: string, service: string, postcode: string): string {
  const lines = [
    "Hi South West Mobile, I'd like a quick quote.",
    reg ? `Reg: ${reg.toUpperCase().trim()}` : "",
    `Service: ${service}`,
    `Postcode: ${postcode.toUpperCase().trim()}`,
  ]
    .filter(Boolean)
    .join("\n");
  return buildWhatsAppUrl(lines);
}

interface FullQuoteParams {
  name: string;
  phone: string;
  postcode: string;
  makeModel: string;
  service: string;
  location: string;
  reg?: string;
  year?: string;
  email?: string;
  date?: string;
  timeOfDay?: string;
  blueLight: boolean;
  finance: boolean;
  details?: string;
}

export function fullQuoteUrl(params: FullQuoteParams): string {
  const locationMap: Record<string, string> = {
    mobile: "At my home or work",
    workshop: "At your workshop",
    unsure: "Not sure",
  };

  const lines = [
    "Hi South West Mobile, I'd like a quote / to book.",
    "",
    `Name: ${params.name}`,
    `Phone: ${params.phone}`,
    `Postcode: ${params.postcode.toUpperCase().trim()}`,
    `Vehicle: ${params.makeModel}${params.year ? ` ${params.year}` : ""}${params.reg ? ` ${params.reg.toUpperCase().trim()}` : ""}`,
    `Service: ${params.service}`,
    `Where: ${locationMap[params.location] || params.location}`,
    params.date
      ? `Preferred day: ${params.date}${params.timeOfDay ? ` (${params.timeOfDay})` : ""}`
      : "",
    `Blue Light Card holder: ${params.blueLight ? "Yes" : "No"}`,
    `Interested in 0% APR payment plan: ${params.finance ? "Yes" : "No"}`,
    params.details ? `\nDetails:\n${params.details.slice(0, 800)}` : "",
    "",
    "Sent from the South West Mobile website",
  ]
    .filter((line) => line !== "")
    .join("\n");

  return buildWhatsAppUrl(lines.slice(0, 1500));
}
