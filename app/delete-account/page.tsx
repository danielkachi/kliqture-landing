import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/site/LegalPageLayout";

export const metadata: Metadata = {
  title: "Delete Account | Kliqture",
  description:
    "How Kliqture users can request deletion of their account and associated personal data.",
};

const sections = [
  {
    title: "1. How to request account deletion",
    body: [
      "Kliqture users may request deletion of their account and associated personal data by contacting our support team.",
      "Send an email to support@kliqture.com using the email address connected to your Kliqture account. Please include the subject line: Delete my Kliqture account.",
    ],
  },
  {
    title: "2. Verification and processing",
    body: [
      "Once we receive your request, we will verify ownership of the account and process deletion within 30 days.",
    ],
  },
  {
    title: "3. Information deleted or anonymized",
    body: [
      "Account information, profile details, uploaded content, messages, and other personal data associated with the account will be deleted or anonymized, except where retention is required for legal, security, fraud prevention, dispute resolution, or financial recordkeeping purposes.",
    ],
  },
  {
    title: "4. Backup retention",
    body: [
      "Some information may remain in backups for a limited period before being permanently removed according to our normal backup retention process.",
    ],
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalPageLayout
      label="Account"
      title="Delete your Kliqture account"
      description="This page explains how Kliqture users can request deletion of their account and associated personal information."
      lastUpdated="June 30, 2026"
      sections={sections}
    />
  );
}
