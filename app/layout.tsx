import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kliqture | Professional Collaboration Marketplace",
  description:
    "Discover skilled professionals, manage project-based engagements, collaborate through structured workrooms, track milestones and deliverables, and keep professional work connected in one platform.",
  applicationName: "Kliqture",
  openGraph: {
    title: "Kliqture | Professional Collaboration Marketplace",
    description:
      "Discover skilled professionals, manage project-based engagements, collaborate through structured workrooms, track milestones and deliverables, and keep professional work connected in one platform.",
    siteName: "Kliqture",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kliqture | Professional Collaboration Marketplace",
    description:
      "Discover skilled professionals, manage project-based engagements, collaborate through structured workrooms, track milestones and deliverables, and keep professional work connected in one platform.",
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
