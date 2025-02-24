import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const getAllPosts = async () => {
  const dirContent = fs.readFileSync("posts", "utf8");

  const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`posts/${file}`, "utf-8");
    return ({ content, data } = matter(fileContent));
  });

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content);

  return (htmlContent = (await processor.process(content)).toString());
};
