"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        isSticky ? "shadow-sm" : "shadow-none",
      )}
    >
      <Logo />
      <div className="flex-1" />
      <Portfolio />
      <About />
      <RSS />
      <ThemeToggler />
    </header>
  );
};

// Placeholder components - need to be implemented
const Logo = () => <div className="font-bold">Logo</div>;
const Portfolio = () => <div>Portfolio</div>;
const About = () => <div>About</div>;
const RSS = () => <div>RSS</div>;
const ThemeToggler = () => <div>Theme</div>;

export default Header;
