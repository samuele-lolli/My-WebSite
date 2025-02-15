import { client } from "@/sanity/client";
import Link from "next/link";
import { Post } from "@/app/interfaces";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/app/components/FromSanityToReact";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export const revalidate = 30; // ISR
export const dynamicParams = true //SSR if a request comes in for a path that hasn't been generated

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "post"]{ slug }`
  );

  return slugs.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post = await client.fetch<Post>(POST_QUERY, { slug });

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-4 sm:p-8 flex flex-col gap-4 overflow-hidden">
      <div className="text-left">
        <Link href="/blog" className="hover:underline text-[#52b788]">
          ← Back to posts
        </Link>
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-[#52b788] text-center">{post.title}</h1>
      <p className="text-gray-400 mb-4 italic">
        Published: {new Date(post.publishedAt).toLocaleDateString('it-IT')}
      </p>
      <div className="prose prose-sm sm:prose-lg text-gray-300 mx-auto max-w-full break-words">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>
    </main>
  );
}