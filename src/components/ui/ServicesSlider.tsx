"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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
      style={{ backgroundImage: "url('/images/teasersBgr.jpg')" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative px-8 md:px-0">
          {/* Arrows */}
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 disabled:opacity-30 md:-left-4"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous services"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 disabled:opacity-30 md:-right-4"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next services"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%]"
                >
                  <ServiceCard
                    image={service.thumbnail}
                    title={service.title}
                    description={service.shortDescription}
                    href={`/${service.slug}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                className="flex h-8 w-8 items-center justify-center"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to service ${i + 1}`}
              >
                <span className={`block h-2.5 w-2.5 rounded-full transition-colors ${
                  i === selectedIndex
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
