import { createDefaultImport, defineCollection, defineConfig } from "@content-collections/core";
import type { MDXContent } from "mdx/types";
import { z } from "zod/v4";

/**
 * @see https://www.content-collections.dev/docs/configuration
 */
const posts = defineCollection({
  name: "posts",
  directory: "./src/content",
  include: "**/*.mdx",
  parser: "frontmatter-only",
  schema: z.object({
    title: z.string().describe("글 제목"),
    slug: z.string().optional().describe("글 경로"),

    /**
     * @see https://zod.dev/api?id=iso-dates
     * @example 2025-12-31
     */
    createdAt: z.iso.date().optional().describe("글 생성일"),
    updatedAt: z.iso.date().optional().describe("글 수정일"),
  }),
  transform: ({ _meta, ...frontmatters }) => {
    const slug =
      frontmatters.slug || _meta.directory.split("/").pop()?.split("-").slice(3).join("-");

    const content = createDefaultImport<MDXContent>(`@/content/${_meta.filePath}`);

    return {
      ...frontmatters,
      slug,
      content,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
