import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/site/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";

const childSafetyUrl = "https://www.kliqture.com/child-safety";
const supportEmail = siteConfig.supportEmail;

export const metadata: Metadata = {
  title: "Child Safety Standards | Kliqture",
  description:
    "Kliqture's public child safety standards for prohibited conduct, reporting, blocking, moderation, enforcement, and child-safety compliance contact.",
  alternates: {
    canonical: childSafetyUrl,
  },
};

const emailLink = (
  <a
    href={`mailto:${supportEmail}`}
    className="text-teal-200 underline decoration-teal-200/35 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
  >
    {supportEmail}
  </a>
);

const sections = [
  {
    title: "1. Scope and age requirement",
    body: [
      "Kliqture is a professional work and collaboration platform intended for adults aged 18 and above.",
      "Even though Kliqture is not intended for children, Kliqture maintains zero-tolerance child-safety standards for all content, accounts, messages, workrooms, projects, opportunities, comments, files, and other activity on the platform.",
    ],
  },
  {
    title: "2. Zero-tolerance statement",
    body: [
      "Kliqture prohibits child sexual abuse and exploitation, child sexual abuse material, grooming, trafficking, sexual extortion, and any attempt to exploit, abuse, coerce, solicit, or endanger a child.",
      "This prohibition applies to user profiles, portfolio content, project and opportunity posts, comments, direct messages, workroom messages, attachments, deliverables, links, usernames, descriptions, and any other use of Kliqture.",
    ],
  },
  {
    title: "3. Prohibited conduct",
    body: [
      "Users must not create, upload, request, distribute, promote, store, link to, threaten to share, attempt to obtain, or facilitate child-exploitation content or behavior.",
      "Users must not use Kliqture to sexualize children, solicit sexual content from or involving a child, arrange or encourage contact that could exploit a child, recruit or traffic a child, extort a child, evade safety controls, or help another person do any of these things.",
    ],
  },
  {
    title: "4. Reporting child-safety concerns",
    body: [
      <>
        Users can report child-safety concerns by contacting Kliqture at{" "}
        {emailLink}. This is the designated child-safety contact for enforcement
        and compliance procedures.
      </>,
      "Signed-in mobile app users can also use the in-app feedback/support flow to submit a report. The current implemented flow allows a user to choose the most relevant category, describe what happened, attach screenshots for context, and submit the report to Kliqture for review.",
      "To report a profile, project, opportunity, comment, message, conversation, workroom, file, or any other concerning content, include the user name or profile details, the project or opportunity title, the comment or message context, the workroom or conversation details, screenshots if available, and a concise description of the safety concern.",
      "Users should not forward, repost, download, or preserve suspected child sexual abuse material except as necessary to report it through Kliqture's support channel or to law enforcement.",
    ],
  },
  {
    title: "5. Blocking and immediate safety",
    body: [
      "Users can take immediate safety steps by ending or avoiding direct interaction, leaving or hiding relevant workroom activity where available, and reporting the account or content to Kliqture.",
      "Kliqture may restrict reported accounts or platform features during or after review so that the reported user cannot initiate new direct interactions where that restriction is required for safety or enforcement.",
      <>
        If there is immediate danger, users should contact local emergency
        services or the appropriate child-protection authority, then notify
        Kliqture at {emailLink}.
      </>,
    ],
  },
  {
    title: "6. Review and enforcement",
    body: [
      "Kliqture reviews reports and available platform records to assess potential violations of these standards and the Terms of Service.",
      "Kliqture may remove or restrict content, suspend or terminate accounts, preserve necessary records, restrict access to platform features, disable interaction paths, or take other action needed to protect users and enforce these standards.",
      "Kliqture may cooperate with lawful investigations and respond to valid legal process in accordance with applicable law.",
    ],
  },
  {
    title: "7. Reporting to authorities",
    body: [
      "Confirmed child sexual abuse material or child-exploitation incidents will be reported where required to the National Center for Missing & Exploited Children or the relevant regional or national authority, in accordance with applicable law.",
      "Kliqture does not state that every user report is automatically transmitted to an authority. Reports are reviewed and escalated based on the information available, legal obligations, and the nature of the safety risk.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      <>
        The designated Kliqture child-safety contact is {emailLink}. This
        contact can address Kliqture&apos;s child-safety enforcement and
        compliance procedures.
      </>,
      <>
        For general platform rules, review the{" "}
        <Link
          href="/terms"
          className="text-teal-200 underline decoration-teal-200/35 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Terms of Service
        </Link>
        .
      </>,
    ],
  },
];

export default function ChildSafetyStandardsPage() {
  return (
    <LegalPageLayout
      label="Safety"
      title="Child Safety Standards"
      description="These standards describe Kliqture's zero-tolerance child-safety rules, reporting channels, safety actions, moderation review, enforcement options, and designated child-safety contact."
      lastUpdated="August 1, 2026"
      sections={sections}
    />
  );
}
