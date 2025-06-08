import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import Giscus from "./giscus";

interface PostProps {
  slug: string;
}

// Dummy components
const Profile = () => (
  <div className="mt-16 p-6 border border-border rounded-lg">
    <h3 className="text-lg font-semibold mb-2">About the Author</h3>
    <p className="text-muted-foreground">Profile component placeholder</p>
  </div>
);

const RelatedPosts = () => (
  <div className="mt-16">
    <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
    <p className="text-muted-foreground">Related posts component placeholder</p>
  </div>
);

const TableOfContents = () => (
  <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 w-64">
    <div className="p-4 border border-border rounded-lg bg-background">
      <h4 className="font-semibold mb-2">Table of Contents</h4>
      <p className="text-sm text-muted-foreground">TOC placeholder</p>
    </div>
  </div>
);

export const Post = ({ slug }: PostProps) => {
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return notFound();
  }

  const MdxContent = post.content;

  return (
    <div className="relative">
      <main
        className={cn(
          "max-w-4xl xl:max-w-5xl mx-auto",
          "flex relative w-full my-12 px-5",
          "break-words overflow-wrap-break-word leading-7 tracking-tight"
        )}
      >
        <article className="w-full xl:w-4/5">
          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            {post.createdAt && (
              <time className="text-muted-foreground">
                {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <MdxContent />
          </div>

          {/* Related Posts */}
          <RelatedPosts />

          {/* Profile */}
          <Profile />

          {/* Comments */}
          <Giscus />
        </article>
      </main>

      {/* Table of Contents */}
      <TableOfContents />
    </div>
  );
};
