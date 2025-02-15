import { type PortableTextComponents } from "next-sanity";
import { CodeValue, ImageValue, VideoValue } from "../interfaces";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <div className="relative w-full h-auto my-6 mx-auto">
        <Image
          src={urlFor(value)?.url() || ""}
          alt={value.alt || "Image"}
          layout="responsive"
          width={600}
          height={338}
          className="rounded-lg object-contain"
        />
      </div>
    ),
    code: ({ value }: { value: CodeValue }) => (
      <div className="my-6">
        <SyntaxHighlighter language={value.language || 'text'} style={atomDark} className="my-6">
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
    video: ({ value }: { value: VideoValue }) => (
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
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4 text-center">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-4">{children}</h4>,
    normal: ({ children }) => <p className="text-lg my-2">{children}</p>,
  },
};