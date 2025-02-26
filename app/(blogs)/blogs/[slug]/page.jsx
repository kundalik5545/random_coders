import { blogs } from "@/data/blogs";
import { Clock5, User } from "lucide-react";
import SocialShare from "../_components/SocialShare";
import Image from "next/image";
import Head from "next/head";

// ✅ Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  if (!params || !params.slug) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }

  const blog = blogs.find((b) => b.slug === params.slug);

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
      url: `https://randomcoders.com/blogs/${blog.slug}`,
      images: [{ url: blog.image }],
      type: "article",
    },
    canonical: `https://randomcoders.com/blogs/${blog.slug}`,
  };
}

// ✅ Blog Post Page Component
const BlogPostPage = async ({ params }) => {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <h1>Blog Post Not Found</h1>;
  }

  return (
    <>
      <Head>
        <meta property="og:image" content={blog.image} />
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.description.slice(0, 200)}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            image: blog.image,
            author: { "@type": "Person", name: blog.author || "Random Coders" },
            datePublished: blog.date,
            publisher: { "@type": "Organization", name: "Random Coders" },
          })}
        </script>
      </Head>

      <div className="container mx-auto max-w-5xl md:pt-5 p-3 md:p-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 shadow-lg p-4 rounded-lg tracking-wide">
          {blog.title}
        </h1>
        <hr />

        {/* Meta Info */}
        <section className="text-sm text-gray-500 dark:text-gray-400 mt-3 mb-3 pl-5">
          <p className="flex space-x-2">
            <div className="flex items-center gap-1">
              <User />
              <span className="ml-1">{blog.author || `Random Coders`}</span>
              <span>|</span>
            </div>
            <span className="flex items-center">
              <Clock5 size={20} className="mr-1" />
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
        </section>
        <hr />

        {/* Small share buttons */}
        <section className="mb-3">
          <SocialShare
            url={`https://randomcoders.com/blogs/${blog.slug}`}
            title={blog.title}
          />
        </section>

        {/* Cover image */}
        <section>
          <Image
            src={blog.image}
            alt={`Cover image for ${blog.title}`}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </section>

        {/* Main article */}
        <article className="mt-5 mb-3">
          <h2 className="text-lg font-semibold">
            {blog.subtitle || "Detailed Guide"}
          </h2>
          <p className="text-base">{blog.content}</p>
        </article>

        {/* Related Articles */}
        <section></section>

        {/* Comment Section */}
        <section></section>

        <div className="mb-20"></div>
      </div>
    </>
  );
};

export default BlogPostPage;
