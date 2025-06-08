import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Dummy components that need to be implemented
const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 p-4 my-4">{children}</div>
);

const YouTubePlayer = ({ videoId }: { videoId: string }) => (
  <div className="aspect-video my-6">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    />
  </div>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold mt-20 mb-4 scroll-m-20" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-semibold mt-20 mb-10 scroll-m-20" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold mt-15 mb-8 scroll-m-20" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="text-xl font-medium mt-10 mb-5 scroll-m-20" {...props}>
        {children}
      </h4>
    ),

    // Text
    p: ({ children, ...props }) => (
      <p className="text-base mt-4 leading-8" {...props}>
        {children}
      </p>
    ),

    // Lists
    ul: ({ children, ...props }) => (
      <ul className="text-base mt-4 ml-6 list-disc list-outside space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="text-base mt-4 ml-6 list-decimal list-outside space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-base" {...props}>
        {children}
      </li>
    ),

    // Links
    a: ({ href, children, ...props }) => {
      const isInternal = href?.startsWith("/");
      const isAnchor = href?.startsWith("#");

      if (isInternal || isAnchor) {
        return (
          <Link
            href={href || "#"}
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            {...props}
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          {...props}
        >
          {children}
        </a>
      );
    },

    // Images
    img: ({ src, alt, ...props }) => (
      <figure className="my-6 max-w-full">
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img src={src} alt={alt} className="max-w-full h-auto rounded-lg" {...props} />
        {alt && (
          <figcaption className="text-sm text-center mt-4 text-muted-foreground">{alt}</figcaption>
        )}
      </figure>
    ),

    // Blockquotes
    blockquote: ({ children, ...props }) => <Callout {...props}>{children}</Callout>,

    // Code elements
    code: ({ children, ...props }) => <code {...props}>{children}</code>,

    // Pre elements (code blocks) - Let Shiki handle everything
    pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,

    // Tables
    table: ({ children, ...props }) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-border" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-muted" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody className="divide-y divide-border" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
    th: ({ children, ...props }) => (
      <th
        className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm" {...props}>
        {children}
      </td>
    ),

    // Horizontal rule
    hr: (props) => <hr className="my-8 border-border" {...props} />,

    // Custom components
    Callout,
    YouTubePlayer,

    ...components,
  };
}
