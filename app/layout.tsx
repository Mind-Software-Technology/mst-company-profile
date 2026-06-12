import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Software Technology",
  description:
    "Building digital solution for everyone — Solusi undangan digital, website development, dan UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
