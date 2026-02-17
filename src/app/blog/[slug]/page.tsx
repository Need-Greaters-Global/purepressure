import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getCategories } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description:
      post.excerpt ||
      `Read ${post.title} on the Pure Pressure blog.`,
  };
}

/**
 * Basic markdown-to-HTML converter for blog post content.
 * Handles headings, bold, italic, links, lists, paragraphs, and images.
 */
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headings
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    // Links
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)]">$1</a>',
    )
    // Unordered lists
    .replace(/^[-*] (.+)$/gm, "<li>$1</li>")
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    // Horizontal rules
    .replace(/^---$/gm, "<hr />")
    // Blockquotes
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Wrap consecutive <li> items in <ul>
  html = html.replace(
    /(<li>[\s\S]*?<\/li>(\n|$))+/g,
    (match) => `<ul>${match}</ul>`,
  );

  // Wrap remaining lines as paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<img")
      ) {
        return trimmed;
      }
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categories = await getCategories();
  const contentHtml = markdownToHtml(post.content);

  return (
    <article>
      {/* Featured Image Header */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <section
        className="py-16"
        style={{ backgroundImage: "url('/images/patternBgr.jpg')" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <div>
              {/* Category Badges */}
              {post.categories.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${cat}`}
                      className="rounded bg-[var(--color-primary)]/10 px-3 py-1 font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/20"
                    >
                      {cat.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="mb-3 font-[family-name:var(--font-roboto-condensed)] text-3xl font-bold leading-tight text-[var(--color-primary-dark)] md:text-4xl">
                {post.title}
              </h1>

              <p className="mb-8 text-sm text-gray-400">
                {formatDate(post.date)} &middot; By {post.author}
              </p>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none leading-relaxed text-gray-700 [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:font-[family-name:var(--font-roboto-condensed)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--color-primary-dark)] [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-[family-name:var(--font-roboto-condensed)] [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[var(--color-primary-dark)] [&_img]:my-6 [&_img]:rounded [&_img]:shadow-md [&_li]:mb-1 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Back to Blog */}
              <div className="mt-12 border-t border-gray-200 pt-6">
                <Link
                  href="/blog"
                  className="font-[family-name:var(--font-roboto-condensed)] text-sm font-bold uppercase text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  &larr; Back to Blog
                </Link>
              </div>
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
                          post.categories.includes(cat.slug)
                            ? "font-bold text-[var(--color-primary)]"
                            : "text-gray-600"
                        }`}
                      >
                        {cat.name}{" "}
                        <span className="text-gray-400">({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
