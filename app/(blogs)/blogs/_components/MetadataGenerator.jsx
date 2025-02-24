import { blogs } from "@/data/blogs";

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  if (!params || !params.slug) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }

  const blog = blogs.find((b) => b.slug === params.post);

  if (!blog) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }

  return {
    title: `${blog.title} | Random Coders`,
    description: blog.description.slice(0, 160),
    keywords:
      blog.keywords ||
      "coding blogs, web development, programming, open-source, software development",
    openGraph: {
      title: blog.title,
      description: blog.description.slice(0, 200),
      url: `/blogs/${blog.slug}`,
      images: [{ url: blog.image }],
    },
  };
}
