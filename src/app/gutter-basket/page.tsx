import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Gutter Basket Installation",
  description:
    "Authorized Gutter Basket installers in the Lower Mainland and Fraser Valley. Protect your downspouts from clogs with a perforated hood system backed by a NO CLOG guarantee.",
};

export default function GutterBasketPage() {
  return (
    <ServicePageTemplate
      serviceName="Gutter Basket"
      heroImage="/images/heroes/gutter-basket.jpg"
      heroSubtitle="Pure Pressure is an authorized Gutter Basket installer serving the Lower Mainland and Fraser Valley. We provide professional installation of this innovative gutter protection system to keep your downspouts flowing freely."
      detailTitle="Our Gutter Basket Services"
      detailContent={
        <>
          <p>
            Pure Pressure is proud to be an authorized Gutter Basket installer.
            The Gutter Basket is a simple yet highly effective gutter protection
            product designed to prevent downspout clogs and the costly damage
            that follows. As certified installers, we ensure every unit is
            fitted correctly for maximum performance and longevity.
          </p>
          <p>
            The Gutter Basket features a perforated hood that sits over your
            downspout opening, allowing water to flow through while blocking
            leaves, moss, and debris from entering. This prevents the
            downspout blockages that cause gutters to overflow and damage your
            fascia, soffits, and foundation.
          </p>
          <p>
            By keeping your downspouts clear, the Gutter Basket protects your
            fascia boards and building exterior from water damage caused by
            overflowing gutters. It is a cost-effective investment that reduces
            the frequency of gutter maintenance and gives you peace of mind
            through every rainy season in the Lower Mainland.
          </p>
        </>
      }
      detailImage="/images/services/gutter-basket-side.png"
      faqs={[
        {
          question: "Does the Gutter Basket come with a NO CLOG guarantee?",
          answer:
            "Yes. The Gutter Basket comes with a 1-year renewable NO CLOG guarantee. As long as the product is maintained according to the manufacturer's guidelines, the guarantee can be renewed each year to keep your downspouts protected.",
        },
        {
          question: "Will I never have to clean my gutters again?",
          answer:
            "No. While the Gutter Basket significantly reduces the frequency of gutter cleaning by preventing downspout clogs, you will still need to have your gutters cleaned approximately every 5 to 10 years in the Lower Mainland. Debris can still accumulate in the gutter troughs over time and should be removed periodically.",
        },
      ]}
    />
  );
}
