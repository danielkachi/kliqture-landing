import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kliqture.com"),

  title: "Kliqture | Professional Work & Collaboration Platform",

  description:
    "Professionals and businesses showcase real work, discover the right people, and manage paid projects or collaborations from agreement to delivery in one connected platform.",

  applicationName: "Kliqture",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kliqture | Professional Work & Collaboration Platform",
    description:
      "Professionals and businesses showcase real work, discover the right people, and manage paid projects or collaborations from agreement to delivery in one connected platform.",
    url: "https://www.kliqture.com",
    siteName: "Kliqture",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kliqture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kliqture | Professional Work & Collaboration Platform",
    description:
      "Professionals and businesses showcase real work, discover the right people, and manage paid projects or collaborations from agreement to delivery in one connected platform.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.kliqture.com/#organization",
    name: "Kliqture",
    url: "https://www.kliqture.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.kliqture.com/icon-512.png",
      width: 512,
      height: 512,
    },
    description:
      "Kliqture is a professional work and collaboration platform where professionals and businesses showcase real work, discover the right people, and manage projects or collaborations from agreement to delivery.",
    sameAs: [
      "https://www.linkedin.com/company/kliqture",
      "https://www.instagram.com/kliqture",
      "https://x.com/kliqture",
      "https://www.youtube.com/@Kliqture",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.kliqture.com/#application",
    name: "Kliqture",
    url: "https://www.kliqture.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    description:
      "Kliqture helps professionals and businesses showcase real work, discover talent and opportunities, collaborate, hire, and manage work through connected project workspaces.",
    image: "https://www.kliqture.com/og-image.png",
    publisher: {
      "@id": "https://www.kliqture.com/#organization",
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
