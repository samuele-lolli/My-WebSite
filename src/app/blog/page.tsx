import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, shortDescription, mainImage}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-8">
      <div className="text-left mb-8">
        <Link href="/" className="hover:underline text-[#52b788]">
          ← Back to homepage
        </Link>
      </div>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-[#52b788]">Samuele Lolli's Blog</h1>
        <p className="text-xl text-gray-400">I talk about AI, Software, and Life. I also try to improve my English.</p>
      </header>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {posts.map((post) => (
          <li
            key={post._id}
            className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#52b788] text-center"
          >
            <Link href={`/blog/${post.slug.current}`}>
              <div className="p-6">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage)?.width(400).height(200).url()}
                    alt={post.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                )}
                <h2 className="text-2xl font-semibold text-[#52b788] hover:underline mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.shortDescription}</p>
                <p className="text-gray-500 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}