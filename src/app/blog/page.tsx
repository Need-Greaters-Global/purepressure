import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getCategories } from "@/lib/blog";
import { BlogCard } from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest tips, guides, and news from Pure Pressure about gutter cleaning, pressure washing, brush washing, window cleaning, and exterior building maintenance.",
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const allPosts = await getAllPosts();
  const categories = await getCategories();

  const posts = category
    ? allPosts.filter((post) => post.categories.includes(category))
    : allPosts;

  return (
    <section
      className="py-16"
      style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-10 text-center font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold uppercase text-[var(--color-primary)] md:text-4xl">
          {category
            ? `Posts in: ${category
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}`
            : "Pure Pressure Blog"}
        </h1>

        <div className="grid gap-10 md:grid-cols-[1fr_300px]">
          {/* Posts Column */}
          <div>
            {posts.length === 0 ? (
              <p className="text-center text-gray-500">
                No blog posts found.{" "}
                {category && (
                  <Link
                    href="/blog"
                    className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]"
                  >
                    View all posts
                  </Link>
                )}
              </p>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    featuredImage={post.featuredImage}
                    date={post.date}
                    categories={post.categories}
                    layout="vertical"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <h2 className="mb-4 font-[family-name:var(--font-roboto-condensed)] text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Blog Categories
            </h2>
            {categories.length === 0 ? (
              <p className="text-sm text-gray-500">No categories yet.</p>
            ) : (
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/blog?category=${cat.slug}`}
                      className={`block text-sm transition-colors hover:text-[var(--color-primary)] ${
                        category === cat.slug
                          ? "font-bold text-[var(--color-primary)]"
                          : "text-gray-600"
                      }`}
                    >
                      {cat.name}{" "}
                      <span className="text-gray-400">({cat.count})</span>
                    </Link>
                  </li>
                ))}
                {category && (
                  <li className="pt-2">
                    <Link
                      href="/blog"
                      className="text-sm text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]"
                    >
                      Clear filter
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
