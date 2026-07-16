import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageLayoutProps = {
  label?: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  children?: React.ReactNode;
};

export function LegalPageLayout({
  label = "Legal",
  title,
  description,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="px-5 pb-20 pt-28 md:px-8 xl:px-10">
        <article className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-sm text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Back to Kliqture
          </Link>

          <header className="mt-10 border-b border-white/10 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300/75">
              {label}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">
              {description}
            </p>
            <p className="mt-5 text-sm text-white/45">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav
                aria-label={`${title} table of contents`}
                className="rounded-[24px] border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="px-3 text-xs uppercase tracking-[0.24em] text-white/42">
                  Contents
                </p>
                <ol className="mt-3 space-y-1">
                  {sections.map((section, index) => (
                    <li key={section.title}>
                      <a
                        href={`#section-${index + 1}`}
                        className="block rounded-2xl px-3 py-2 text-sm text-white/58 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        {section.title.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="space-y-10">
              {children}
              {sections.map((section, index) => (
                <section
                  id={`section-${index + 1}`}
                  key={section.title}
                  className="scroll-mt-28"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-white/65 md:text-base md:leading-8">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
