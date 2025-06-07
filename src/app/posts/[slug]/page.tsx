import { Post } from "@/components/post";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = allPosts.find((content) => {
    return content.slug === slug;
  });

  if (!post) {
    notFound();
  }

  return <Post slug={slug} />;
}

export function generateStaticParams() {
  return allPosts.map((content) => ({
    slug: content.slug,
  }));
}
