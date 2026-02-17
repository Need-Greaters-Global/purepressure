"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export function TeamSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
    <div className="relative mx-auto max-w-2xl px-8 md:px-0">
      {/* Arrows */}
      <button
        className="absolute left-0 top-1/3 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 md:-left-4"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous team member"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-0 top-1/3 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40 md:-right-4"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next team member"
      >
        <ChevronRight size={24} />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {teamMembers.map((member, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] px-4">
              <div className="text-center">
                <div className="mx-auto mb-4 h-44 w-44 overflow-hidden rounded-full border-4 border-white/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={172}
                    height={172}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-4 font-[family-name:var(--font-roboto-condensed)] text-sm uppercase tracking-wide text-white/70">
                  {member.role}
                </p>
                <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/80">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            className="flex h-8 w-8 items-center justify-center"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`View ${teamMembers[i].name}`}
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
  );
}
