import Link from "next/link";
import { SocialLinks } from "@/components/site/SocialLinks";
import { siteConfig } from "@/lib/site-config";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Discover Professionals", href: "/#discover" },
      { label: "For Businesses", href: "/#businesses" },
      { label: "For Professionals", href: "/#professionals" },
      { label: "How It Works", href: "/#workflow" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Refund & Cancellation Policy", href: "/refund-policy" },
      { label: "Dispute Resolution", href: "/dispute-resolution" },
      { label: "Delete Account", href: "/delete-account" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12 text-white md:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-2xl font-semibold tracking-tight">Kliqture</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/56">
              A professional collaboration marketplace operated by{" "}
              {siteConfig.companyName}
            </p>
            <p className="mt-6 text-sm text-white/45">
              © 2026 Kliqture. Operated by {siteConfig.companyName}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-white">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/56 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-sm font-semibold text-white">
                Follow Kliqture
              </h2>
              <SocialLinks
                className="mt-4 flex-col items-start gap-3"
                linkClassName="border-transparent px-0 py-1 hover:border-transparent hover:bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
