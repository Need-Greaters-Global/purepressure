import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Sitemap",
};

export default async function SitemapPage() {
  const posts = await getAllPosts();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-8 font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold uppercase text-[var(--color-primary-dark)] md:text-4xl">
          Sitemap
        </h1>

        <div className="space-y-8">
          {/* Main Pages */}
          <div>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Pages
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
              Services
            </h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts */}
          {posts.length > 0 && (
            <div>
              <h2 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-xl font-bold text-[var(--color-primary-dark)]">
                Blog Posts
              </h2>
              <ul className="space-y-2">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
