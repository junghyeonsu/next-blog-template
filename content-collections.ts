import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod/v4";
 
/**
 * @see https://www.content-collections.dev/docs/configuration
 */
const contents = defineCollection({
  name: "contents",
  directory: "./contents",
  include: "**/*.mdx",
  schema: z.object({
    /**
     * 글 제목
     */
    title: z.string(),

    /**
     * 글 경로
     * path를 따로 지정하지 않으면 파일명이 자동으로 사용됩니다.
     */
    slug: z.string().optional(),

    /**
     * 글 생성일
     * @see https://zod.dev/api?id=iso-dates
     * @example 2025-12-31
     * YYYY-MM-DD
     */
    createdAt: z.iso.date(),

    /**
     * 글 수정일
     */
    updatedAt: z.iso.date().optional(),
  }),
});
 
export default defineConfig({
  collections: [contents],
});
