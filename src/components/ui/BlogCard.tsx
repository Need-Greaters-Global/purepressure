import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  categories: string[];
  layout?: "horizontal" | "vertical";
}

export function BlogCard({
  title,
  slug,
  excerpt,
  featuredImage,
  date,
  categories,
  layout = "vertical",
}: BlogCardProps) {
  if (layout === "horizontal") {
    return (
      <article className="flex gap-5">
        <div className="relative h-40 w-48 shrink-0 overflow-hidden rounded">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
        <div className="flex flex-col">
          <Link
            href={`/blog/${slug}`}
            className="mb-2 font-[family-name:var(--font-roboto-condensed)] text-lg font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
          >
            {title}
          </Link>
          <p className="mb-2 text-xs text-gray-400">{formatDate(date)}</p>
          <p className="mb-3 flex-1 text-sm leading-relaxed text-gray-600">
            {excerpt}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="self-start font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
          >
            Read More &rarr;
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={featuredImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        {categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded bg-[var(--color-primary)]/10 px-2 py-0.5 font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase text-[var(--color-primary)]"
              >
                {cat.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        )}
        <Link
          href={`/blog/${slug}`}
          className="mb-2 block font-[family-name:var(--font-roboto-condensed)] text-lg font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          {title}
        </Link>
        <p className="mb-1 text-xs text-gray-400">{formatDate(date)}</p>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="font-[family-name:var(--font-roboto-condensed)] text-xs font-bold uppercase text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
        >
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
}
