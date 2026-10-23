export function formatPhone(display: string, tel: string): { display: string; href: string } {
  return { display, href: `tel:${tel}` };
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
