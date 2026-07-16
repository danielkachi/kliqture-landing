import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/site/ContactDetails";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SocialLinks } from "@/components/site/SocialLinks";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Kliqture",
  description:
    "Contact Kliqture support for account, engagement, transaction, refund, cancellation, or dispute questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="px-5 pb-20 pt-32 md:px-8 xl:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300/75">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Contact Kliqture support
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">
              Kliqture is operated by {siteConfig.companyName}. Contact support
              for account, engagement, transaction, refund, cancellation, or
              dispute questions.
            </p>

            {siteConfig.supportEmail ? (
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-medium text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Email support
              </a>
            ) : null}

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">
                When reporting an engagement or transaction issue
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62 md:text-base">
                Include the account email, relevant engagement or workroom,
                offer or milestone details, transaction reference if available,
                deliverable submissions, messages, and a concise explanation of
                the issue. This helps support review the available records.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/refund-policy"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/66 transition hover:bg-white/10 hover:text-white"
                >
                  Refund policy
                </Link>
                <Link
                  href="/dispute-resolution"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/66 transition hover:bg-white/10 hover:text-white"
                >
                  Dispute resolution
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">
                Follow Kliqture
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62 md:text-base">
                Follow Kliqture for product updates, platform information, and
                announcements. Support enquiries should still be sent to{" "}
                {siteConfig.supportEmail ? (
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-white underline decoration-white/25 underline-offset-4 transition hover:text-teal-200"
                  >
                    {siteConfig.supportEmail}
                  </a>
                ) : (
                  "the support team"
                )}
                .
              </p>
              <SocialLinks className="mt-5" />
            </div>
          </section>

          <ContactDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
}
