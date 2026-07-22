import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kliqture | Professional Work & Collaboration Platform",
  description:
    "Professionals and businesses showcase real work, discover the right people, and manage paid projects or collaborations from agreement to delivery in one connected platform.",
  applicationName: "Kliqture",
  openGraph: {
    title: "Kliqture | Professional Work & Collaboration Platform",
    description:
      "Professionals and businesses showcase real work, discover the right people, and manage paid projects or collaborations from agreement to delivery in one connected platform.",
    siteName: "Kliqture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kliqture | Professional Work & Collaboration Platform",
    description:
      "Professionals and businesses showcase real work, discover the right people, and manage paid projects or collaborations from agreement to delivery in one connected platform.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
