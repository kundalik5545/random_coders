import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { Clock5 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Random Coders | Latest Blogs",
  description:
    "Explore the latest blogs on web development, coding projects, and open-source contributions. Learn, Build, and Collaborate with Random Coders!",
  keywords:
    "coding blogs, web development, programming, open-source projects, software development",
  robots: "index, follow",
};

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blog Posts</h1>

      {/* Blog Cards Grid */}
      <div className="grid gap-6">
        {blogs.slice(0, 10).map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            {/* Blog Image */}
            <div className="md:w-1/3">
              <Image
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Blog Details */}
            <div className="md:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description.slice(0, 150)}...
                </p>
              </div>

              <div>
                <hr />
                {/* Meta Info */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <p className="flex space-x-2">
                    <strong>Author:</strong> {blog.author || "Random Coders"} |{" "}
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
                    <strong>Category:</strong>{" "}
                    <span className=" ">{blog.category}</span>
                  </p>
                </div>
                {/* Read More Link */}
                <div className="mt-4">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    <Button>Read More →</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
