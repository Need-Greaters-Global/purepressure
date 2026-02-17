import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Window Cleaning Services",
  description:
    "Professional window cleaning with squeegee and brush wash methods. Interior and exterior cleaning for homes, strata, and commercial buildings in the Lower Mainland and Fraser Valley.",
};

export default function WindowCleaningPage() {
  return (
    <ServicePageTemplate
      serviceName="Window Cleaning"
      heroImage="/images/heroes/window-cleaning.jpg"
      heroSubtitle="Pure Pressure offers professional window cleaning using both traditional squeegee and water-fed brush wash methods. We provide the right solution for every window type, budget, and building across the Lower Mainland and Fraser Valley."
      detailTitle="Our Window Cleaning Services"
      detailContent={
        <>
          <p>
            Pure Pressure provides two professional window cleaning methods to
            suit your needs. Our <strong>squeegee cleaning</strong> method
            delivers a polished, streak-free finish on every pane. Our
            technicians apply a cleaning solution, work the glass with a
            professional squeegee, and remove all water to leave your windows
            crystal clear with no water marks. Squeegee cleaning is available
            for both interior and exterior windows.
          </p>
          <p>
            Our <strong>tucker pole / brush wash</strong> method is a
            cost-effective option for exterior window cleaning. Using
            water-fed poles with soft bristle brushes, our team scrubs the
            glass from the ground level and rinses with purified water that
            dries spot-free. This method is ideal for multi-storey buildings
            and large strata complexes where efficiency and budget are top
            priorities.
          </p>
          <p>
            Whether you choose squeegee cleaning for a premium finish or brush
            wash cleaning for cost-effective exterior coverage, Pure Pressure
            delivers professional results every time. We work with residential
            homeowners, strata councils, and commercial property managers to
            keep windows looking their best year-round.
          </p>
        </>
      }
      detailImage="/images/services/window-cleaning-side.png"
      faqs={[
        {
          question: "Why should I choose squeegee cleaning?",
          answer:
            "Squeegee cleaning removes all water from the glass surface, leaving a polished, streak-free finish with no water marks. It is the best choice when you want the highest quality result for both interior and exterior windows.",
        },
        {
          question: "Why should I choose brush wash cleaning?",
          answer:
            "Brush wash cleaning is a cost-effective option for exterior windows. Using water-fed poles from the ground, our team can efficiently clean large numbers of windows on multi-storey buildings without the added time and cost of ladder or lift access. It is an excellent choice for strata complexes and commercial properties looking for great results at a lower price point.",
        },
      ]}
    />
  );
}
