import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ImageValue {
  asset: {
    _ref: string;
  };
  alt?: string;
}

export interface CodeValue {
  code: string;
  language: string;
}

export interface VideoValue {
  url: string;
  title: string;
}

export interface Post {
  title: string;
  publishedAt: string;
  body: unknown;
  mainImage?: SanityImageSource;
  slug: {
    current: string;
  };
}