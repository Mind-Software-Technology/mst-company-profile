import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "./font/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "./font/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  variable: "--font-body",
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
    <html
      lang="id"
      className="dark scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${display.variable} ${body.variable} font-body antialiased selection:bg-brand-purple/30 selection:text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
