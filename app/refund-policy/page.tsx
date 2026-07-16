import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/LegalPageLayout";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Kliqture",
  description:
    "How Kliqture reviews refund and cancellation requests for professional engagements, milestones, and payment-related activity.",
};

const sections = [
  {
    title: "1. Overview",
    body: [
      "This Refund and Cancellation Policy explains how Kliqture reviews refund or cancellation requests connected to professional engagements, milestone-linked payments, deliverables, and transaction records.",
      "Eligibility is not automatic. It depends on transaction status, work completed, the parties' agreement, available engagement records, applicable provider rules, and any legal obligations that apply.",
    ],
  },
  {
    title: "2. Engagement cancellations",
    body: [
      "A cancellation request may be reviewed where an engagement has not started, where the parties agree to cancel, where the scope materially changes, or where one party is unable to continue.",
      "Kliqture may review workroom messages, offers, milestone status, submissions, and other records when considering a cancellation-related issue.",
    ],
  },
  {
    title: "3. Milestone-linked payments",
    body: [
      "Where payments are connected to milestones, the status of the milestone and the related deliverables will be relevant to any refund or release review.",
      "Unreleased milestone-linked payments may be treated differently from payments connected to work that has already been submitted, reviewed, approved, or released.",
    ],
  },
  {
    title: "4. Submitted or approved work",
    body: [
      "If work has already been submitted, approved, used, downloaded, or otherwise accepted, refund eligibility may be limited by the parties' agreement, the available records, and payment-service provider rules.",
      "A request for revision may be more appropriate than a refund where the issue concerns incomplete or unsatisfactory deliverables that can reasonably be corrected.",
    ],
  },
  {
    title: "5. Provider processing limitations",
    body: [
      "Payment processing, settlement, refunds, reversals, chargebacks, and payout activity may be handled by third-party payment-service providers.",
      "Provider rules, processing status, bank rails, card-network rules, and settlement timing may affect whether and how a refund can be processed.",
    ],
  },
  {
    title: "6. Fees",
    body: [
      "Where applicable, fees will be disclosed before completion of the relevant transaction as stated in the Terms of Service.",
      "This policy does not create any new fee percentage, fixed charge, or automatic fee refund rule where one has not already been disclosed.",
    ],
  },
  {
    title: "7. How to request review",
    body: [
      "Contact support@kliqture.com from the email address connected to your Kliqture account.",
      "Include the engagement or workroom name, the other party involved, milestone details, transaction reference if available, relevant messages, submitted deliverables, and a clear explanation of the requested outcome.",
    ],
  },
  {
    title: "8. Possible delays",
    body: [
      "Reviews may require information from both parties or from payment-service providers. Processing times may vary based on the transaction status, provider rules, and the information available.",
    ],
  },
  {
    title: "9. No guaranteed outcome",
    body: [
      "Submitting a refund or cancellation request does not guarantee that a refund, reversal, cancellation, or release decision will be approved.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      description="This policy explains how refund and cancellation requests may be reviewed for professional engagements, milestone-linked payments, and deliverables."
      lastUpdated="July 16, 2026"
      sections={sections}
    />
  );
}
