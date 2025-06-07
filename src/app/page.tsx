import { allPosts } from "content-collections";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogConfig } from "blog.config";

export default function Home() {
  // Sort posts by date (newest first)
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="flex flex-col items-center justify-center max-w-[900px] mx-auto min-h-screen px-4">
      <div className="w-full max-w-4xl">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">{blogConfig.site.title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{blogConfig.site.description}</p>
        </section>

        {/* Posts Section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-8">Recent Posts</h2>
          <div className="space-y-6">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className={cn(
                  "border border-border rounded-lg p-6",
                  "hover:shadow-md transition-shadow duration-200",
                )}
              >
                <Link href={`/posts/${post.slug}`} className="group">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">아직 작성된 포스트가 없습니다.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
