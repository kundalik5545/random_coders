import { getPostHtml, getAllPostSlugs } from "@/lib/HtmlGenerator";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function BlogPost({ params }) {
  const { meta, contentHtml } = await getPostHtml(params.slug);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Header */}
      <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
      <p className="text-gray-500 mb-6">
        {meta.date} - {meta.author}
      </p>

      {/* Render Blog Content */}
      <article className="prose lg:prose-xl dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}
