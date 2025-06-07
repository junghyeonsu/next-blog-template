"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogConfig } from "blog.config";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex items-center w-full h-[70px] px-5 gap-4",
        "transition-shadow duration-300 ease-in-out",
        "bg-background",
        isSticky ? "shadow-xs" : "shadow-none",
      )}
    >
      <Logo />
      <div className="flex-1" />
      {blogConfig.navigation.showPortfolio && <Portfolio />}
      {blogConfig.navigation.showAbout && <About />}
      {blogConfig.navigation.showRSS && <RSS />}
      {blogConfig.features.darkMode && <ThemeToggler />}
    </header>
  );
};

// Components using config
const Logo = () => (
  <Link href="/" className="font-bold text-lg hover:opacity-80 transition-opacity">
    {blogConfig.site.title}
  </Link>
);

const Portfolio = () => (
  <Link href="/portfolio" className="hover:opacity-80 transition-opacity">
    Portfolio
  </Link>
);

const About = () => (
  <Link href="/about" className="hover:opacity-80 transition-opacity">
    About
  </Link>
);

const RSS = () => (
  <Link href="/rss.xml" className="hover:opacity-80 transition-opacity">
    RSS
  </Link>
);

const ThemeToggler = () => (
  <button
    type="button"
    className="hover:opacity-80 transition-opacity"
    onClick={() => {
      document.documentElement.classList.toggle("dark");
    }}
  >
    Theme
  </button>
);

export default Header;
