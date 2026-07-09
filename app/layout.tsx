import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./_components/ThemeProvider";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../public/fonts/clash-display-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/clash-display-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/clash-display-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/clash-display-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MST — Mind Software Technology | Solusi Digital Terpercaya",
    template: "%s | MST",
  },
  description:
    "Mind Software Technology membantu bisnis Anda berkembang dengan solusi digital inovatif — undangan digital, pengembangan website, dan desain UI/UX profesional.",
  keywords: [
    "undangan digital",
    "website development",
    "UI/UX design",
    "software house",
    "MST",
    "Mind Software Technology",
    "solusi digital",
  ],
  openGraph: {
    title: "MST — Mind Software Technology",
    description:
      "Building digital solution for everyone. Solusi digital terpercaya untuk undangan digital, pengembangan website, dan desain UI/UX profesional.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark scroll-smooth ${satoshi.variable} ${clashDisplay.variable}`}>
      <body className="font-body antialiased selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
