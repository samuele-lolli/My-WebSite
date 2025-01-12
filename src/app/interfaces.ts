export interface Post {
  title: string;
  publishedAt: string;
  body: unknown;
  slug: {
    current: string;
  };
}

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
};

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