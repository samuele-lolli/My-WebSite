import { PortableText, type PortableTextComponents } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-64 my-6 mx-auto">
        <Image
          src={urlFor(value)?.width(600).height(338).url() || ""}
          alt={value.alt || "Image"}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto my-6 text-left">
        <code className="language-{value.language}">{value.code}</code>
      </pre>
    ),
    video: ({ value }: { value: { url: string; title: string } }) => (
      <div className="my-6">
        <p className="text-gray-300 text-sm mb-2">{value.title}</p>
        <iframe
          src={value.url}
          title={value.title}
          className="w-full h-96 rounded-xl"
          allowFullScreen
        />
      </div>
    ),
  },
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug }, options);
  const postImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(800).height(450).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8 flex flex-col gap-4 text-center">
      <div className="text-left">
        <Link href="/blog" className="hover:underline text-[#52b788]">
          ← Back to posts
        </Link>
      </div>
      {postImageUrl && (
        <div className="relative w-full h-64 mx-auto mb-6">
          <Image
            src={postImageUrl}
            alt={post.title}
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
          />
        </div>
      )}
      <h1 className="text-5xl font-bold mb-4 text-[#52b788]">{post.title}</h1>
      <p className="text-gray-400 mb-4 italic">
        Published: {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <div className="prose prose-lg text-gray-300 mx-auto">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableTextComponents} />
        )}
      </div>
    </main>
  );
}
