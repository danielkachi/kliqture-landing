import { siteConfig } from "@/lib/site-config";

export function ContactDetails() {
  const rows = [
    { label: "Support email", value: siteConfig.supportEmail, href: `mailto:${siteConfig.supportEmail}` },
    { label: "Business email", value: siteConfig.businessEmail, href: siteConfig.businessEmail ? `mailto:${siteConfig.businessEmail}` : null },
    { label: "Phone", value: siteConfig.phone, href: siteConfig.phone ? `tel:${siteConfig.phone}` : null },
    { label: "Business address", value: siteConfig.address, href: null },
    { label: "RC number", value: siteConfig.rcNumber, href: null },
  ].filter((row) => row.value);

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 md:p-8">
      <h2 className="text-xl font-semibold text-white">Contact details</h2>
      <dl className="mt-6 space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs uppercase tracking-[0.22em] text-white/42">
              {row.label}
            </dt>
            <dd className="mt-2 text-base text-white/78">
              {row.href ? (
                <a
                  href={row.href}
                  className="underline decoration-white/25 underline-offset-4 transition hover:text-white"
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-sm leading-7 text-white/50">
        Additional verified company details should be added to the shared site
        configuration before they are displayed publicly.
      </p>
    </div>
  );
}
