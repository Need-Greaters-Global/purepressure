import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pressure Washing Services",
  description:
    "Professional hot and cold water pressure washing services since 1996. Serving the Lower Mainland and Fraser Valley with regulated PSI systems for buildings up to 5 levels.",
};

export default function PressureWashingPage() {
  return (
    <ServicePageTemplate
      serviceName="Pressure Washing"
      heroImage="/images/heroes/pressure-washing.jpg"
      heroSubtitle="Pure Pressure has been delivering professional hot and cold water pressure washing services since 1996. We bring decades of experience to every residential, strata, and commercial project across the Lower Mainland and Fraser Valley."
      detailTitle="Our Pressure Washing Services"
      detailContent={
        <>
          <p>
            Since 1996, Pure Pressure has been providing expert pressure
            washing services to homes, strata complexes, and commercial
            properties throughout the Lower Mainland and Fraser Valley. With
            decades of hands-on experience, our team understands the right
            techniques and equipment needed for every type of surface and
            building material.
          </p>
          <p>
            We operate both hot and cold water pressure washing systems to
            tackle any job effectively. Our equipment is capable of cleaning
            buildings up to 5 levels high, and we use regulated PSI settings to
            ensure powerful cleaning without damaging your building&apos;s
            exterior surfaces. Every job is tailored to the specific material
            and condition of your property.
          </p>
          <p>
            For hard-to-reach areas, our crew uses professional extension poles
            and boom lifts to safely access elevated surfaces. Whether it is a
            concrete parkade, a vinyl-sided townhouse complex, or a commercial
            storefront, Pure Pressure has the tools and expertise to restore
            your building&apos;s appearance.
          </p>
        </>
      }
      detailImage="/images/services/pressure-washing.jpg"
      faqs={[
        {
          question: "Do you use hot and cold water?",
          answer:
            "Yes. We have both hot and cold water pressure washing systems available. Cold water is used for the majority of exterior cleaning jobs. Hot water is reserved for tougher situations such as oil stains, grease buildup, and heavily soiled surfaces where the additional heat helps break down stubborn contaminants.",
        },
      ]}
    />
  );
}
