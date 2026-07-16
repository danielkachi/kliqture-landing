import { siteConfig } from "@/lib/site-config";

const socialItems = [
  {
    key: "instagram",
    label: "Instagram",
    ariaLabel: "Kliqture on Instagram",
    href: siteConfig.socialLinks.instagram,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
      >
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.4" cy="7.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    ariaLabel: "Kliqture on LinkedIn",
    href: siteConfig.socialLinks.linkedin,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
      >
        <path
          d="M6.6 10.1v7.3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M10.7 17.4v-4.1c0-2 1.2-3.2 3-3.2 1.7 0 2.8 1.1 2.8 3.3v4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <circle cx="6.6" cy="6.8" r="1.2" fill="currentColor" />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
].filter((item) => item.href);

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({
  className = "",
  linkClassName = "",
}: SocialLinksProps) {
  if (socialItems.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          className={`inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/62 transition hover:border-teal-300/35 hover:bg-teal-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${linkClassName}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
