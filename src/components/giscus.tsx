"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { blogConfig } from "blog.config";

const COMMENTS_ID = "comments-container";

interface GiscusProps {
  className?: string;
}

const Giscus = ({ className }: GiscusProps) => {
  const { repo, repoId, category, categoryId } = blogConfig.giscus;
  const commentsRef = useRef<HTMLDivElement>(null);

  // Detect theme from CSS or system preference
  const getTheme = useCallback(() => {
    if (typeof window === "undefined") return "light_protanopia";

    // Check if dark mode is active
    const isDark =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return isDark ? "dark_dimmed" : "light_protanopia";
  }, []);

  const loadComments = useCallback(() => {
    if (!commentsRef.current) return;

    // Clear existing comments
    commentsRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-theme", getTheme());
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    commentsRef.current.appendChild(script);
  }, [repo, repoId, category, categoryId, getTheme]);

  // Load comments on mount and theme change
  useEffect(() => {
    loadComments();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          loadComments();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = () => loadComments();
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [loadComments]);

  return <div ref={commentsRef} id={COMMENTS_ID} className={cn("mt-24 giscus", className)} />;
};

export default Giscus;
