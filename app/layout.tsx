import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "国产AI产品分析报告 | AI产品经理项目",
  description: "深度对比分析通义千问、Kimi、豆包、DeepSeek四大国产AI产品的功能、体验、性能和商业模式",
  keywords: ["AI产品分析", "通义千问", "Kimi", "豆包", "DeepSeek", "产品经理", "竞品分析"],
  authors: [{ name: "AI产品经理候选人" }],
  openGraph: {
    title: "国产AI产品分析报告",
    description: "深度对比分析四大国产AI产品",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
