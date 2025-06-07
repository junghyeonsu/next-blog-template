import { allPosts } from "content-collections";

export default function Home() {
  return (
    <div>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
