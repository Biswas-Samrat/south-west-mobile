export const PATTERNS = {
  phone: /^(\+44|0)\d{9,10}$/,
  postcode: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
  reg: /^[A-Z0-9 ]{2,8}$/i,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export function validateName(value: string): string | null {
  if (!value || value.trim().length < 2) return "Please enter your name (at least 2 characters).";
  return null;
}

export function validatePhone(value: string): string | null {
  if (!value) return "Please enter your mobile number.";
  const cleaned = value.replace(/[\s\-()]/g, "");
  if (!PATTERNS.phone.test(cleaned)) return "Please enter a valid UK phone number.";
  return null;
}

export function validateEmail(value: string): string | null {
  if (!value) return null; // optional
  if (!PATTERNS.email.test(value)) return "Please enter a valid email address.";
  return null;
}

export function validatePostcode(value: string): string | null {
  if (!value) return "Please enter your postcode.";
  if (!PATTERNS.postcode.test(value.trim())) return "Please enter a valid UK postcode.";
  return null;
}

export function validateReg(value: string): string | null {
  if (!value) return null; // optional
  if (!PATTERNS.reg.test(value.trim())) return "Please enter a valid vehicle registration.";
  return null;
}

export function validateYear(value: string): string | null {
  if (!value) return null; // optional
  const num = parseInt(value, 10);
  const currentYear = new Date().getFullYear();
  if (isNaN(num) || num < 1980 || num > currentYear + 1)
    return `Please enter a year between 1980 and ${currentYear + 1}.`;
  return null;
}

export function validateMakeModel(value: string): string | null {
  if (!value || value.trim().length < 2) return "Please enter the make and model.";
  return null;
}

export function validateService(value: string): string | null {
  if (!value) return "Please select a service.";
  return null;
}

export function validateLocation(value: string): string | null {
  if (!value) return "Please choose where you'd like the work done.";
  return null;
}
