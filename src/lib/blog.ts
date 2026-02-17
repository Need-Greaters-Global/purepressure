import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  excerpt: string;
  featuredImage: string;
  author: string;
  content: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

function readPost(filename: string): BlogPost {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug || filename.replace(/\.mdx?$/, ""),
    title: data.title || "Untitled",
    date: data.date || "2020-01-01",
    categories: data.categories || [],
    excerpt: data.excerpt || "",
    featuredImage: data.featuredImage || "/images/homeBanner.jpg",
    author: data.author || "Pure Pressure",
    content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  if (files.length === 0) return [];
  const posts = files.map(readPost);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  for (const file of files) {
    const post = readPost(file);
    if (post.slug === slug) return post;
  }
  return null;
}

export async function getCategories(): Promise<BlogCategory[]> {
  const posts = await getAllPosts();
  const categoryMap = new Map<string, number>();

  for (const post of posts) {
    for (const cat of post.categories) {
      categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
    }
  }

  return Array.from(categoryMap.entries())
    .map(([slug, count]) => ({
      name: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      slug,
      count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getPostsByCategory(
  category: string,
): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.categories.includes(category));
}

export async function getRecentPosts(limit: number): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export function getAllSlugs(): string[] {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
    const { data } = matter(raw);
    return data.slug || f.replace(/\.mdx?$/, "");
  });
}
