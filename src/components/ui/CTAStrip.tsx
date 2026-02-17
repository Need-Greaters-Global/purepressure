import { Button } from "./Button";

export function CTAStrip() {
  return (
    <section className="bg-[var(--color-primary)] py-10 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <p className="mb-4 text-lg italic text-white">
          Take the first step and ask for a <strong>FREE</strong> estimate.
        </p>
        <Button href="/contact" variant="white">
          Request a Free Estimate
        </Button>
      </div>
    </section>
  );
}
