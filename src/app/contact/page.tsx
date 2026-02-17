import type { Metadata } from "next";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Pure Pressure",
  description:
    "Request a free estimate from Pure Pressure. We provide professional exterior building cleaning services throughout the Lower Mainland and Fraser Valley.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        title="Contact Pure Pressure"
        subtitle="Please fill out our estimate request form and we will respond within 1 business day."
        backgroundImage="/images/heroes/contact.jpg"
        ctaText=""
      />

      {/* Estimate Form Section */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <SectionTitle title="Get a Free Estimate" />
          <div className="rounded-lg bg-white p-6 shadow-lg md:p-10">
            <iframe
              src={siteConfig.contactFormUrl}
              title="Pure Pressure Estimate Request Form"
              className="h-[600px] w-full border-0 sm:h-[800px]"
              allowFullScreen
            />
            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
              <p className="mb-2 text-gray-700">
                <strong>Address:</strong> {siteConfig.address.street},{" "}
                {siteConfig.address.city}, {siteConfig.address.province}{" "}
                {siteConfig.address.postalCode}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 font-[family-name:var(--font-roboto-condensed)] text-2xl font-bold uppercase text-[var(--color-primary)] md:text-3xl">
            Our Promise to You
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            We respect your privacy. The information you submit through our
            estimate request form is used solely to prepare your free quote and
            communicate with you about our services. We will never sell, share,
            or distribute your personal details to third parties, and you will
            never receive spam from us.
          </p>
          <p className="leading-relaxed text-gray-700">
            We use an online estimate form because it allows us to gather all the
            details we need to provide you with an accurate, timely quote. By
            including information about your property and the services you need,
            we can respond faster and more effectively than a phone call or
            walk-in visit. In most cases, you will hear back from us within one
            business day.
          </p>
        </div>
      </section>
    </>
  );
}
