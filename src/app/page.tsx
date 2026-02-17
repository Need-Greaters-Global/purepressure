import { HeroBanner } from "@/components/ui/HeroBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServicesSlider } from "@/components/ui/ServicesSlider";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { CTAStrip } from "@/components/ui/CTAStrip";
import { BlogCard } from "@/components/ui/BlogCard";
import { getRecentPosts } from "@/lib/blog";
import Link from "next/link";

export default async function HomePage() {
  const recentPosts = await getRecentPosts(2);

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        title="Choosing the Right Company for Your Building Maintenance Can Make All the Difference"
        backgroundImage="/images/homeBanner.jpg"
      />

      {/* Services Intro */}
      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionTitle title="Check Out Our Services" />
          <p className="mb-4 leading-relaxed text-gray-700">
            Pure Pressure is focused on offering residential home owners, strata
            complexes, and commercial centers with exceptional exterior building
            cleaning services. From the peak of your roof to your front curb,
            Pure Pressure offers services that will save you money and help you
            maintain your building&apos;s exterior.
          </p>
          <p className="leading-relaxed text-gray-700">
            Pure Pressure offers gutter cleaning, pressure washing, brush
            washing, and window cleaning services. Pure Pressure also uses
            quality products like{" "}
            <Link
              href="/gutter-basket"
              className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]"
            >
              Gutter Basket
            </Link>
            . From cities in the Lower Mainland like Vancouver, Coquitlam, Maple
            Ridge, Surrey and Langley to Abbotsford in the Fraser Valley, Pure
            Pressure wants to make your building look exceptional.
          </p>
        </div>
      </section>

      {/* Services Slider */}
      <ServicesSlider />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Strip */}
      <CTAStrip />

      {/* Blog Preview */}
      {recentPosts.length > 0 && (
        <section
          className="py-16"
          style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
        >
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle title="Fresh From the Blog" />
            <div className="grid gap-8 md:grid-cols-2">
              {recentPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  featuredImage={post.featuredImage}
                  date={post.date}
                  categories={post.categories}
                  layout="horizontal"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
