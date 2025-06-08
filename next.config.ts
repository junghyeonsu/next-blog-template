import { withContentCollections } from "@content-collections/next";
import createMDX from "@next/mdx";
import rehypeShiki from "@shikijs/rehype";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { blogConfig } from "./blog.config";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

// Get Shiki configuration from blog config
const shikiConfig = {
  themes: {
    light: blogConfig.codeHighlight.lightTheme,
    dark: blogConfig.codeHighlight.darkTheme,
  },
  defaultColor: false,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [[rehypeShiki, shikiConfig]],
  },
});

export default withContentCollections(withMDX(nextConfig));
