import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#05070f] px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Back to Kliqture
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">
          Delete your Kliqture account
        </h1>

        <p className="mt-6 text-white/70 leading-7">
          Kliqture users may request deletion of their account and associated
          personal data by contacting our support team.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-medium">How to request account deletion</h2>

          <p className="mt-4 text-white/70 leading-7">
            Send an email to{" "}
            <a
              href="mailto:support@kliqture.com?subject=Delete%20my%20Kliqture%20account"
              className="text-white underline"
            >
              support@kliqture.com
            </a>{" "}
            using the email address connected to your Kliqture account.
          </p>

          <p className="mt-4 text-white/70 leading-7">
            Please include the subject line:{" "}
            <span className="font-medium text-white">Delete my Kliqture account</span>.
          </p>
        </div>

        <div className="mt-8 space-y-5 text-white/70 leading-7">
          <p>
            Once we receive your request, we will verify ownership of the account
            and process deletion within 30 days.
          </p>

          <p>
            Account information, profile details, uploaded content, messages, and
            other personal data associated with the account will be deleted or
            anonymized, except where retention is required for legal, security,
            fraud prevention, dispute resolution, or financial recordkeeping
            purposes.
          </p>

          <p>
            Some information may remain in backups for a limited period before
            being permanently removed according to our normal backup retention
            process.
          </p>
        </div>
      </section>
    </main>
  );
}
