import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// Fetch all blog slugs dynamically
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const slug = await params.slug;

  if (!slug) return notFound();

  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title || "Blog Post",
    description:
      data.description?.slice(0, 150) ||
      "Read our latest blog posts on finance, loans, and credit cards.",
    keywords:
      data.keywords ||
      "personal finance, loans, credit cards, budgeting, investment",
    openGraph: {
      title: data.title || "Finance Blog",
      description:
        data.description?.slice(0, 200) ||
        "Get the latest insights on finance and money management.",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${slug}`,
      images: data.image ? [{ url: data.image }] : [],
    },
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${slug}`,
  };
}

const BlogPost = async ({ params }) => {
  const slug = await params.slug;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: data.title || "Blog Post" })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
          transformerCopyButton({
            visibility: "always",
            feedbackDuration: 3000,
          }),
        ],
      });

    const htmlContent = (await processor.process(content)).toString();

    return (
      <div className="container mx-auto max-w-5xl text-foreground bg-background pt-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
        <div className="flex sm:flex-row gap-2 sm:gap-4 text-gray-500 mb-2">
          <Badge className="p-1">By {data.author || "Admin"}</Badge>
          <p className="text-sm">
            {new Date(data.date)
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
              .replace(/ /g, " ")}
          </p>
        </div>

        {data.image && (
          <div className="mb-4">
            <Image
              src={data.image}
              alt={data.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert w-full"
        />
      </div>
    );
  } catch (error) {
    console.error("Error reading blog post:", error);
    return notFound();
  }
};

export default BlogPost;
