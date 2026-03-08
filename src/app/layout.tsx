import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlogLayout from "@/components/BlogLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "我的博客",
  description: "个人技术博客 - 分享编程心得、项目经验和技术教程",
  keywords: ["博客", "技术", "编程", "Next.js", "React"],
  authors: [{ name: "博主" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "我的博客",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlogLayout>{children}</BlogLayout>
      </body>
    </html>
  );
}
