import { Button } from "@/components/ui/button";
import { Clock5 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArticleJsonLd } from "next-seo";
import { blogs } from "@/data/blogs";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

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

// Blog Post Page Component
const BlogPost = ({ params }) => {
  if (!params || !params.post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
        <p className="text-gray-600">
          The blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  const blog = blogs.find((b) => b.slug === params.post);

  if (!blog) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
        <p className="text-gray-600">
          The blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Blog Image */}
        <div className="w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            width={700}
            height={400}
            className="w-full h-auto object-cover"
            priority
            placeholder="blur"
            blurDataURL={blog.blurDataUrl}
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {blog.description}
          </p>

          {/* Meta Information */}
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            <p className="flex items-center space-x-2">
              <strong>Author:</strong>{" "}
              <span>{blog.author || "Random Coders"}</span>
              <span className="flex items-center">
                <Clock5 size={18} className="ml-3 mr-1" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
            <p className="mt-1">
              <strong>Category:</strong> <span>{blog.category}</span>
            </p>
          </div>

          {/* Read More Link */}
          <div className="mt-6">
            <Link href="/blogs">
              <Button>Back to Blogs</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Schema Markup */}
      <ArticleJsonLd
        title={blog.title}
        description={blog.description}
        datePublished={blog.date}
        authorName={blog.author || "Random Coders"}
        url={`/blogs/${blog.slug}`}
        images={[blog.image]}
      />
    </div>
  );
};

export default BlogPost;
