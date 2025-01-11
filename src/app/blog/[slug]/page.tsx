import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// Specifica il tipo per il parametro slug
interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const revalidate = 60; // ISR: Rigenera ogni 60 secondi
