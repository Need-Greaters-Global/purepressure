"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="py-16"
      style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="mx-auto mb-10 w-fit bg-center bg-no-repeat px-12 py-4 text-center font-[family-name:var(--font-roboto-condensed)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl"
          style={{
            backgroundImage: "url('/images/testimonialsTitleBgr.png')",
            backgroundSize: "contain",
          }}
        >
          What Our Clients Say
        </h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] px-4">
                <div className="text-center">
                  <Image
                    src="/images/testimonialsIcon.png"
                    alt=""
                    width={40}
                    height={40}
                    className="mx-auto mb-4"
                  />
                  <blockquote className="mb-6 text-lg italic leading-relaxed text-gray-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="font-[family-name:var(--font-roboto-condensed)] font-bold text-gray-800">
                    {t.author}
                  </p>
                  <p className="text-sm text-gray-500">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === selectedIndex
                  ? "bg-[var(--color-primary)]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
