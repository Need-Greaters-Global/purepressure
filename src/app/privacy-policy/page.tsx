import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-8 font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold uppercase text-[var(--color-primary-dark)] md:text-4xl">
          Privacy Policy
        </h1>

        <div className="space-y-8 leading-relaxed text-gray-700">
          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Information We Collect
            </h2>
            <p>
              {siteConfig.legalName} collects personal information when you
              voluntarily submit it through our estimate request form or contact
              us directly. This may include your name, email address, phone
              number, property address, and details about the services you are
              interested in.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              How We Use Your Information
            </h2>
            <p>
              The information we collect is used to respond to your inquiries,
              prepare estimates, schedule services, and communicate with you
              about your account or requested services. We may also use your
              information to send periodic updates about our services, but only
              if you have opted in to receive such communications.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              How We Protect Your Information
            </h2>
            <p>
              We implement a variety of security measures to protect your
              personal information. Your data is stored in secure systems and is
              only accessible to authorized personnel who need it to perform
              their job functions. We do not sell, trade, or otherwise transfer
              your personal information to outside parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              Cookies are small files stored on your computer that help us
              understand how you interact with our site. You can choose to
              disable cookies through your browser settings, though this may
              affect certain features of the website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              COPPA Compliance
            </h2>
            <p>
              Our website and services are not directed at children under the age
              of 13. We do not knowingly collect personal information from
              children. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us and we
              will promptly remove the information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Changes to This Policy
            </h2>
            <p>
              {siteConfig.legalName} reserves the right to update this privacy
              policy at any time. Any changes will be posted on this page with a
              revised effective date. We encourage you to review this policy
              periodically for any updates.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy, please
              contact us at:
            </p>
            <address className="mt-2 not-italic">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.province}{" "}
                {siteConfig.address.postalCode}
              </p>
              <p>
                Phone:{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>
    </section>
  );
}
