import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { blogConfig } from "blog.config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: blogConfig.site.title,
  description: blogConfig.site.description,
  metadataBase: new URL(blogConfig.site.url),
  openGraph: {
    title: blogConfig.site.title,
    description: blogConfig.site.description,
    url: blogConfig.site.url,
    siteName: blogConfig.site.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blogConfig.site.title,
    description: blogConfig.site.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
