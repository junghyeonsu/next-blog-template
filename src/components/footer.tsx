import React from "react";
import { cn } from "@/lib/utils";
import { blogConfig } from "blog.config";

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex items-center justify-center w-full h-[100px]",
        "text-xs text-muted-foreground overflow-hidden"
      )}
    >
      © {new Date().getFullYear()}. {blogConfig.site.author.name} all rights reserved.
    </footer>
  );
};

export default Footer;