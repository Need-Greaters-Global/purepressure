import type { Metadata } from "next";
import Image from "next/image";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TeamSlider } from "@/components/ui/TeamSlider";
import { CTAStrip } from "@/components/ui/CTAStrip";

export const metadata: Metadata = {
  title: "About Pure Pressure",
  description:
    "Learn about Pure Pressure, a professional exterior building cleaning company serving the Lower Mainland, Fraser Valley, Vancouver, Coquitlam, Maple Ridge, Surrey, Langley, and Abbotsford.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        title="About Pure Pressure"
        subtitle="Proudly serving the Lower Mainland, Fraser Valley, Vancouver, Coquitlam, Maple Ridge, Surrey, Langley, and Abbotsford."
        backgroundImage="/images/heroes/about.jpg"
      />

      {/* History Section */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="Pure Pressure History" />
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                Pure Pressure was founded in 1996 with a simple mission: to
                provide homeowners and businesses in the Lower Mainland with
                reliable, high-quality exterior building cleaning services. What
                began as a small pressure washing operation has grown into one of
                the most trusted names in gutter cleaning, pressure washing,
                brush washing, and window cleaning across the region.
              </p>
              <p>
                Over the years, Pure Pressure has expanded its service area to
                cover Vancouver, Coquitlam, Maple Ridge, Surrey, Langley, and
                Abbotsford in the Fraser Valley. Our team has cleaned thousands
                of residential homes, strata complexes, and commercial buildings,
                earning a reputation for professionalism and attention to detail.
              </p>
              <p>
                Our growth has been driven by a commitment to doing the job right
                the first time. We invest in the best equipment, train our crews
                to the highest safety standards, and treat every property as if
                it were our own. That dedication is why so many of our customers
                return year after year.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded shadow-lg">
              <Image
                src="/images/aboutSide.png"
                alt="Pure Pressure team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/teasersBgr.jpg')" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="Meet the Management Team" />
          <TeamSlider />
        </div>
      </section>

      {/* Safety & Regulations Section */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionTitle title="Safety and Regulations" />
          <p className="mb-4 leading-relaxed text-gray-700">
            At Pure Pressure, safety is not just a priority &mdash; it&apos;s a
            core value. We carry comprehensive general liability insurance and
            are fully compliant with WorkSafeBC regulations. Every member of our
            team is trained in fall protection and holds current fall protection
            certification.
          </p>
          <p className="leading-relaxed text-gray-700">
            We adhere to all provincial and municipal safety standards, ensuring
            that every job site is safe for our crew and your property. Our
            commitment to safety gives our clients peace of mind knowing that
            their building is in responsible, professional hands.
          </p>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip />
    </>
  );
}
