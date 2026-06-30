import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "These Terms of Service govern your access to and use of Kliqture, a professional hiring, collaboration, and project management platform operated by Blueprint Fintech Solutions Ltd.",
      "By creating an account, accessing, or using Kliqture, you agree to these Terms. If you do not agree, you should not use the platform.",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "Kliqture is intended for users who are 18 years of age or older. By using Kliqture, you confirm that you are legally able to enter into these Terms.",
    ],
  },
  {
    title: "3. User Accounts",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
      "You agree to provide accurate information and to keep your account details up to date. You must not impersonate another person, misrepresent your identity, or create accounts for fraudulent or abusive purposes.",
    ],
  },
  {
    title: "4. Platform Use",
    body: [
      "Kliqture allows users to showcase work, discover collaborators, send collaboration requests, create workrooms, communicate with other users, share files, manage deliverables, and coordinate project activity.",
      "You agree not to use Kliqture to upload unlawful content, infringe intellectual property rights, harass others, defraud users, distribute malware, bypass platform payment flows, or interfere with the operation of the service.",
    ],
  },
  {
    title: "5. Workrooms and Collaboration",
    body: [
      "Workrooms are shared collaboration spaces where users may exchange messages, files, deliverables, project updates, and payment-related information.",
      "Users are responsible for the agreements they make with each other, including project scope, timelines, ownership terms, and delivery expectations. Kliqture may provide tools to support collaboration but is not responsible for the performance of individual users.",
    ],
  },
  {
    title: "6. Payments, Escrow, and Milestones",
    body: [
      "Kliqture may facilitate project payments, escrow-style workflows, milestone payments, and related transaction records through third-party payment providers.",
      "Kliqture is not a bank, deposit-taking institution, or financial adviser. Payment processing, settlement, refunds, chargebacks, and payouts may be subject to the terms and policies of third-party payment providers.",
      "Fees may apply to certain transactions or platform features. Where applicable, fees will be disclosed before completion of the relevant transaction.",
    ],
  },
  {
    title: "7. User Content and Intellectual Property",
    body: [
      "You retain ownership of content you upload to Kliqture, including portfolio items, images, videos, documents, deliverables, and project materials.",
      "By uploading content, you grant Kliqture a limited license to host, store, display, transmit, process, and make the content available as necessary to provide the platform.",
      "Ownership of project deliverables between users should be agreed directly between the parties involved unless separate written terms apply.",
    ],
  },
  {
    title: "8. Suspension and Termination",
    body: [
      "We may suspend or terminate access to Kliqture if we believe a user has violated these Terms, engaged in fraud or abuse, created risk for other users, or used the platform unlawfully.",
      "You may stop using Kliqture at any time. You may request account deletion by contacting support@kliqture.com.",
    ],
  },
  {
    title: "9. Disclaimers",
    body: [
      "Kliqture is provided on an “as is” and “as available” basis. We do not guarantee that the platform will be uninterrupted, error-free, or that any user will achieve a particular outcome from using the service.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Kliqture and Blueprint Fintech Solutions Ltd will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, goodwill, or business opportunities arising from your use of the platform.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of Kliqture after changes become effective means you accept the updated Terms.",
    ],
  },
  {
    title: "12. Contact Us",
    body: [
      "If you have questions about these Terms, contact us at support@kliqture.com.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black px-5 py-10 text-white md:px-12 lg:px-20">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-white/60 transition hover:text-white">
          ← Back to Kliqture
        </Link>

        <header className="mt-10 border-b border-white/10 pb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            These Terms explain the rules for using Kliqture and the
            responsibilities that apply to users of the platform.
          </p>
          <p className="mt-4 text-sm text-white/45">
            Last updated: June 30, 2026
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-white/65 md:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
