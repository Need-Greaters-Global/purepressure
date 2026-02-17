import { Button } from "./Button";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage: string;
}

export function HeroBanner({
  title,
  subtitle,
  ctaText = "Request a Free Estimate",
  ctaHref = "/contact",
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden md:min-h-[450px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Dark overlay — covers left ~60% */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="mb-4 font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold uppercase leading-tight text-white md:text-4xl lg:text-[42px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-6 text-base leading-relaxed text-white/90 md:text-lg">
              {subtitle}
            </p>
          )}
          {ctaText && (
            <Button href={ctaHref} variant="primary">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
