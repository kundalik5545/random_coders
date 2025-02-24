import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export function getPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  return { slug, meta: data, content };
}

export async function getPostHtml(slug) {
  const { meta, content } = getPost(slug);
  const processedContent = await remark()
    .use(remarkGfm) // Enables GitHub-flavored markdown
    .use(html)
    .use(rehypeSlug) // Adds ID to headings
    .use(rehypeAutolinkHeadings) // Auto-links headings
    .process(content);

  const contentHtml = processedContent.toString();

  return { meta, contentHtml };
}
