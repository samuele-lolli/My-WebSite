import { type PortableTextComponents } from "next-sanity";
import { CodeValue, ImageValue, VideoValue } from "../utils/interfaces";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => (
      <div className="relative w-full h-64 my-6 mx-auto">
        <Image
          src={urlFor(value)?.width(600).height(338).url() || ""}
          alt={value.alt || "Image"}
          fill
          className="rounded-lg object-contain"
        />
      </div>
    ),
    code: ({ value }: { value: CodeValue }) => (
      <pre className="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto my-6 text-left">
        <code className="language-{value.language}">{value.code}</code>
      </pre>
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
};

