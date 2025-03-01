import { blogs } from "@/data/blogs";

export default async function sitemap() {
  const posts = blogs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/post/${post.slug}`,
    // lastModified: new Date(),
    changeFrequency: "weekly",
    // priority: 0.5,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy-policy`,
    },
    ...posts,
  ];
}
