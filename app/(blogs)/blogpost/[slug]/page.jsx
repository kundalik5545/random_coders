import fs from "fs";
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
async function BlogPosts({ params }) {
  const filepath = `posts/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-4 max-w-screen-md">
      {/* Content Wrapper */}
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-base   mb-4 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        {/* Author and Date */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-500 mb-4">
          <p className="text-sm italic">By {data.author}</p>
          <p className="text-sm">{data.date}</p>
        </div>
      </div>

      {/* Render Markdown/HTML Content */}
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert w-full"
      ></div>

      {/* <OnThisPage htmlContent={htmlContent} /> */}
    </div>
  );
}

export default BlogPosts;
