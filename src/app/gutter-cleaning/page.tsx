import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Gutter Cleaning Services",
  description:
    "Professional gutter cleaning services in the Lower Mainland and Fraser Valley. Safe, no-mess approach with WorkSafe BC certified technicians.",
};

export default function GutterCleaningPage() {
  return (
    <ServicePageTemplate
      serviceName="Gutter Cleaning"
      heroImage="/images/heroes/gutter-cleaning.jpg"
      heroSubtitle="Pure Pressure provides professional gutter cleaning services throughout the Lower Mainland and Fraser Valley. Our trained technicians ensure your gutter system is free-flowing and protected from seasonal debris."
      detailTitle="Our Gutter Cleaning Services"
      detailContent={
        <>
          <p>
            Pure Pressure offers professional gutter system cleaning for
            residential homes, strata complexes, and commercial buildings. Over
            time, leaves, moss, and debris accumulate in your gutters and
            downspouts, leading to water overflow that can damage your
            fascia, soffits, and foundation. Our team thoroughly cleans the
            entire gutter system to restore proper water flow and protect your
            building&apos;s exterior.
          </p>
          <p>
            We take a safe, no-mess approach to every gutter cleaning job. Our
            technicians carefully remove all debris by hand and with
            professional tools, ensuring nothing is left behind on your roof,
            walkways, or landscaping. All debris is composted or removed from
            your property so you are left with a clean worksite.
          </p>
          <p>
            Pure Pressure is WorkSafe BC certified, meaning our team follows
            strict safety protocols on every job. Whether your building is a
            single-storey home or a multi-level commercial property, you can
            trust that our crew is fully trained and insured to work at any
            height safely and efficiently.
          </p>
        </>
      }
      detailImage="/images/services/gutter-cleaning.jpg"
      faqs={[
        {
          question: "Will you make a mess?",
          answer:
            "No. Our team takes great care to ensure your property is left clean after every gutter cleaning job. All debris is collected and either composted or removed from the site, and we clean up any areas we have worked around.",
        },
        {
          question: "How often should I get my gutters cleaned?",
          answer:
            "We typically recommend having your gutters cleaned once a year in the fall after the majority of leaves have dropped. Properties surrounded by large trees or in heavily wooded areas may benefit from a second cleaning in the spring.",
        },
      ]}
    />
  );
}
