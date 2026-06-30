import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "Kliqture is a professional hiring, collaboration, and project management platform operated by Blueprint Fintech Solutions Ltd. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use Kliqture, including our website, mobile applications, workrooms, messaging features, collaboration tools, and payment-related workflows.",
      "By using Kliqture, you agree to the collection and use of information as described in this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect account information such as your name, email address, username, password-related authentication data, profile details, professional information, portfolio content, and preferences.",
      "We may collect content you upload or create on Kliqture, including images, videos, documents, work samples, project details, collaboration requests, messages, deliverables, comments, and workroom activity.",
      "We may collect technical information such as device identifiers, IP address, operating system, app version, notification tokens, log data, and information needed to maintain security and performance.",
      "Where payment features are used, we may collect transaction-related information such as milestone records, escrow-related activity, payment status, project amounts, and payout-related records. Kliqture does not store full payment card details; payment processing may be handled by third-party payment providers.",
    ],
  },
  {
    title: "3. How We Use Information",
    body: [
      "We use information to create and manage accounts, provide hiring and collaboration features, operate workrooms, enable messaging, process collaboration requests, support file uploads, facilitate project and payment workflows, provide customer support, send service notifications, improve reliability, prevent fraud and abuse, enforce our Terms of Service, and comply with legal obligations.",
    ],
  },
  {
    title: "4. Third-Party Services",
    body: [
      "Kliqture may use trusted third-party services to operate the platform, including authentication providers such as Google Sign-In and Sign in with Apple, Firebase Cloud Messaging for push notifications, cloud hosting and storage providers, and payment service providers.",
      "These third parties may process information according to their own privacy policies and only as necessary to provide their services to Kliqture.",
    ],
  },
  {
    title: "5. User Content and Visibility",
    body: [
      "You retain ownership of the content you upload to Kliqture. By uploading content, you grant Kliqture the limited rights necessary to host, display, transmit, store, process, and make that content available as required to operate the platform.",
      "Some profile, portfolio, and project information may be visible to other users depending on your activity and the features you use.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain personal information for as long as necessary to provide Kliqture, maintain records, resolve disputes, enforce agreements, prevent abuse, and comply with legal obligations. Retention periods may vary depending on the type of information and the purpose for which it is used.",
    ],
  },
  {
    title: "7. Account Deletion and Data Requests",
    body: [
      "You may request deletion of your account and associated personal information by contacting support@kliqture.com. We may need to retain certain information where required for legal, security, fraud prevention, dispute resolution, or accounting purposes.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use reasonable technical and organizational measures to protect personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "9. Children’s Privacy",
    body: [
      "Kliqture is intended for users who are 18 years of age or older. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we make material changes, we may notify users through the app, website, or other appropriate means.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or your personal information, contact us at support@kliqture.com.",
    ],
  },
];

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            This Privacy Policy explains how Kliqture collects, uses, and
            protects information when you use our platform.
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
