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

      {/* Dark overlay — uniform on mobile, left-weighted on desktop */}
      <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="mb-4 font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold uppercase leading-tight text-white md:text-4xl lg:text-[42px]">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-white/90 md:mx-0 md:max-w-none md:text-lg">
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
