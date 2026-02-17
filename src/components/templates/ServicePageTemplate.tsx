import { HeroBanner } from "@/components/ui/HeroBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTAStrip } from "@/components/ui/CTAStrip";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { FaqAccordion, type FaqItem } from "@/components/ui/FaqAccordion";
import Image from "next/image";

interface ServicePageTemplateProps {
  serviceName: string;
  heroImage: string;
  heroSubtitle: string;
  detailTitle: string;
  detailContent: React.ReactNode;
  detailImage: string;
  faqs: FaqItem[];
}

export function ServicePageTemplate({
  serviceName,
  heroImage,
  heroSubtitle,
  detailTitle,
  detailContent,
  detailImage,
  faqs,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <HeroBanner
        title={`${serviceName} Services`}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      {/* Service Detail */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title={detailTitle} />
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {detailContent}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-lg">
              <Image
                src={detailImage}
                alt={serviceName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* FAQs */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="Frequently Asked Questions" />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTAStrip />
    </>
  );
}
