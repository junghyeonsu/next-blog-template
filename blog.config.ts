/**
 * Blog Configuration
 *
 * 이 파일을 수정하여 블로그를 커스터마이징하세요.
 * Customize your blog by modifying this file.
 */

export const blogConfig = {
  // 기본 정보 / Basic Information
  site: {
    title: "Junghyeonsu Blog",
    description: "개발자 정현수의 블로그입니다.",
    url: "https://junghyeonsu.com",
    author: {
      name: "정현수",
      email: "jung660317@naver.com",
      github: "junghyeonsu",
    },
  },

  // 네비게이션 메뉴 / Navigation Menu
  navigation: {
    showPortfolio: true,
    showAbout: true,
    showRSS: true,
  },

  // 소셜 링크 / Social Links
  social: {
    github: "https://github.com/junghyeonsu",
    twitter: "",
    linkedin: "",
    email: "mailto:54893898+junghyeonsu@users.noreply.github.com",
  },

  // 블로그 기능 / Blog Features
  features: {
    darkMode: true,
    analytics: false,
  },

  // 댓글 시스템 (Giscus) / Comment System
  giscus: {
    repo: "junghyeonsu/junghyeonsu.dev.comment",
    repoId: "R_kgDOHH1JSg",
    category: "Announcements",
    categoryId: "DIC_kwDOHH1JSs4COp9e",
  },
} as const;

export type BlogConfig = typeof blogConfig;
