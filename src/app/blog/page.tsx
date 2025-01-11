import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      title: data.title,
      date: data.date,
      slug: filename.replace(".md", ""),
    };
  });

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  );
}
