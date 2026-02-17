import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Brush Washing Services",
  description:
    "Gentle soap and soft bristle brush washing for vinyl siding and delicate exterior surfaces. Low-pressure, water-fed pole system serving the Lower Mainland and Fraser Valley.",
};

export default function BrushWashingPage() {
  return (
    <ServicePageTemplate
      serviceName="Brush Washing"
      heroImage="/images/heroes/brush-washing.jpg"
      heroSubtitle="Pure Pressure provides gentle soap and soft bristle brush washing for vinyl siding and other delicate exterior surfaces. Our low-pressure approach delivers a thorough clean without the risk of water intrusion or surface damage."
      detailTitle="Our Brush Washing Services"
      detailContent={
        <>
          <p>
            Brush washing is a gentle cleaning method designed specifically for
            vinyl siding and other exterior surfaces that cannot withstand
            high-pressure washing. Pure Pressure uses a biodegradable soap
            solution combined with soft bristle brushes to safely lift dirt,
            algae, and mildew from your building&apos;s exterior without
            causing any damage.
          </p>
          <p>
            Our technicians use low-pressure, water-fed poles to apply the
            cleaning solution and work the soft bristle brushes across your
            siding from the ground level. This method allows us to clean
            multi-storey buildings safely and efficiently without ladders or
            scaffolding for many areas, while keeping water pressure low enough
            to prevent any intrusion behind the siding.
          </p>
          <p>
            After the siding has been thoroughly scrubbed, we rinse the entire
            surface with clean, low-pressure water to wash away all soap
            residue and loosened contaminants. The result is a fresh, clean
            exterior that looks like new without any risk to your
            building&apos;s weather barrier or interior.
          </p>
        </>
      }
      detailImage="/images/services/brush-washing.jpg"
      faqs={[
        {
          question: "How do you prevent water from getting behind the siding?",
          answer:
            "We use a low-pressure, water-fed pole system that guarantees no water intrusion behind your siding. The pressure is kept well below the threshold that could force water past the siding's weather barrier, so your interior stays completely dry throughout the process.",
        },
        {
          question: "Are there any catches?",
          answer:
            "The only thing to be aware of is that if your siding has any existing leaks or gaps, the washing process may reveal them. Water that enters through pre-existing openings is not caused by our cleaning but may become noticeable during or after the wash. We recommend addressing any known siding issues before scheduling a brush wash.",
        },
      ]}
    />
  );
}
