import { Container } from "@/components/ui";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-24">
      <Container className="max-w-md text-center">
        <div className="inline-block w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin mb-4" />
        <p className="text-slate-500 text-sm font-medium">Loading South West Mobile...</p>
      </Container>
    </div>
  );
}
