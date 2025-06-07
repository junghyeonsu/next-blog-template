import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

interface PostProps {
  slug: string;
}

export const Post = ({ slug }: PostProps) => {
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return notFound();
  }

  const MdxContent = post.content;

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <div className="content">
        <MdxContent />
      </div>
      ㅎㅇ
    </article>
  );
};
