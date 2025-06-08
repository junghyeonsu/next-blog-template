# [WIP] Next Blog Template

## features

- Static Site Generation, You can deploy to any hosting service like Vercel, Netlify, Cloudflare Pages, etc.
- UI, Content, and Data are separated.
- Comment System (Giscus)
- Config your blog with `blog.config.ts`

## tech stack

- Next 15
- Tailwind v4
- Shadcn UI
- Biome (Linter)
- Shiki (Syntax Highligher)
- Content Collection (Data Layer)
- Pretendard (Font)

## check out

required:

- check out the [blog.config.ts](./blog.config.ts) file to customize your blog.
- check out the [content-collections.ts](./content-collections.ts) file to customize your content collection.
- add your content to the [content](./src/content) folder.

optional:

- check out the [biome.json](./biome.json) file to customize your linter.
- check out the [mdx-components.tsx](./src/mdx-components.tsx) file to customize your mdx components.

## how to use

- yarn install
- yarn dev
- yarn build

done! enjoy your blog!
