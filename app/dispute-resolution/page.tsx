import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/LegalPageLayout";

export const metadata: Metadata = {
  title: "Dispute Resolution | Kliqture",
  description:
    "How Kliqture reviews disputes involving engagements, workrooms, offers, milestones, deliverables, and payment-related activity.",
};

const sections = [
  {
    title: "1. Overview",
    body: [
      "This Dispute Resolution page explains how Kliqture may review disputes connected to engagements, workrooms, offers, milestones, deliverables, and payment-related activity.",
      "Kliqture is not a court, arbitrator, bank, regulator, or law-enforcement agency. The review process is based on available platform records, information provided by the parties, applicable policies, and provider rules where payment activity is involved.",
    ],
  },
  {
    title: "2. Contacting support",
    body: [
      "To raise a dispute, contact support@kliqture.com from the email address connected to your Kliqture account.",
      "Identify the relevant engagement, workroom, milestone, transaction reference if available, and the outcome you are requesting.",
    ],
  },
  {
    title: "3. Evidence and records",
    body: [
      "Provide relevant messages, offers, milestone details, submissions, files, links, review notes, payment references, and any other information that helps explain the issue.",
      "Kliqture may review available platform records from both parties, including engagement history, deliverable records, and transaction activity.",
    ],
  },
  {
    title: "4. Temporary review of disputed activity",
    body: [
      "Where technically applicable, Kliqture may review disputed activity before additional platform actions are taken. The availability of any temporary action depends on the product feature, transaction status, and provider rules.",
    ],
  },
  {
    title: "5. Review of both parties' records",
    body: [
      "Kliqture may request information from both parties and compare it with available platform records. Failure to provide requested information may limit the review that can be performed.",
    ],
  },
  {
    title: "6. Possible outcomes",
    body: [
      "Possible outcomes may include a request for more information, a recommendation that parties continue with revisions, cancellation review, refund review, release review, account or platform action, or referral to external provider or legal processes where applicable.",
      "The available outcomes depend on the facts, the parties' agreement, transaction status, provider rules, platform policies, and applicable law.",
    ],
  },
  {
    title: "7. External provider or legal processes",
    body: [
      "Payment-service providers, banks, card networks, courts, regulators, or other external bodies may have their own processes and requirements. Kliqture cannot control those external processes.",
    ],
  },
  {
    title: "8. No guaranteed outcome",
    body: [
      "Raising a dispute does not guarantee a particular decision or outcome in favour of either party.",
    ],
  },
];

export default function DisputeResolutionPage() {
  return (
    <LegalPageLayout
      title="Dispute Resolution"
      description="This page explains how Kliqture may review disputes involving engagements, workrooms, offers, milestones, deliverables, and payment-related activity."
      lastUpdated="July 16, 2026"
      sections={sections}
    />
  );
}
