import Link from "next/link";
import { FAQ } from "@/components/site/FAQ";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ProductMockup } from "@/components/site/ProductMockup";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SocialLinks } from "@/components/site/SocialLinks";
import { WorkflowStep } from "@/components/site/WorkflowStep";
import { faqs, workflowSteps } from "@/lib/homepage-content";
import { siteConfig } from "@/lib/site-config";

const screen = "/images/app-screens/";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40 xl:px-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_22%_28%,rgba(45,212,191,0.14),transparent_30%),linear-gradient(180deg,#000_0%,#03050a_100%)]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          <div className="mx-auto grid max-w-[1680px] items-center gap-12 xl:grid-cols-[minmax(640px,680px)_minmax(0,1fr)] xl:gap-6 2xl:grid-cols-[minmax(820px,900px)_minmax(0,1fr)] 2xl:gap-12">
            <div className="max-w-[900px]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/85">
                Professional collaboration, structured from start to finish
              </p>
              <h1 className="mt-6 max-w-[900px] text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl xl:text-[56px] 2xl:text-[74px]">
                <span className="xl:block xl:whitespace-nowrap">
                  Find trusted professionals.
                </span>{" "}
                <span className="xl:block">Manage the work.</span>{" "}
                <span className="xl:block xl:whitespace-nowrap">
                  Move with confidence.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64 md:text-xl md:leading-9">
                Kliqture brings professional discovery, project-based
                engagements, workrooms, milestones, deliverables, and payment
                tracking into one connected platform for businesses and skilled
                professionals.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.joinFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-medium text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Join Kliqture
                </a>
                <a
                  href="#workflow"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-7 py-3 text-base font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-white/50">
                {["Discover", "Agree", "Work", "Deliver", "Complete"].map(
                  (item, index) => (
                    <span key={item} className="flex items-center gap-2">
                      <span>{item}</span>
                      {index < 4 ? <span className="text-teal-300/70">→</span> : null}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative mx-auto h-[540px] w-full max-w-[720px] sm:h-[650px] lg:h-[720px] xl:mx-0 xl:w-[560px] xl:max-w-none 2xl:ml-auto 2xl:w-[720px]">
              <div className="absolute left-[58%] top-2 z-20 w-[52%] max-w-[340px] -translate-x-1/2 animate-device-float">
                <ProductMockup
                  src={`${screen}discover-page.png`}
                  alt="Kliqture discovery screen showing search, top professionals, and recommended experts"
                  priority
                  sizes="(max-width: 640px) 68vw, (max-width: 1024px) 340px, 360px"
                />
              </div>
              <div className="absolute left-[-18%] top-52 z-10 w-[40%] max-w-[290px] -rotate-7 opacity-72 blur-[0.2px] sm:left-[-14%] lg:left-[-18%]">
                <ProductMockup
                  src={`${screen}home-feed-showing-brand-engagement-post.png`}
                  alt="Kliqture engagement post showing a business seeking expertise"
                  sizes="(max-width: 640px) 42vw, 290px"
                />
              </div>
              <div className="absolute right-[4%] top-40 z-10 w-[40%] max-w-[290px] rotate-7 opacity-72 blur-[0.2px] sm:right-[4%] lg:right-[4%]">
                <ProductMockup
                  src={`${screen}collab-room-conversation-displaying-project-deliverables.png`}
                  alt="Kliqture Collab Room showing conversation and project deliverables"
                  sizes="(max-width: 640px) 42vw, 290px"
                />
              </div>
              <div className="absolute inset-x-8 bottom-0 h-32 rounded-[999px] bg-blue-600/20 blur-3xl" />
            </div>
          </div>
        </section>

        <section id="product" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Marketplace"
              title="One platform. Two sides of professional work."
              body="Kliqture connects organisations that need specialist execution with professionals who want credible, structured engagements."
              align="center"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <FeatureCard
                label="Business side"
                title="Find expertise and manage delivery"
                body="Find specialists, publish projects or seek expertise, review applications, agree on terms, and manage delivery through structured workrooms."
              />
              <FeatureCard
                label="Professional side"
                title="Build reputation through real work"
                body="Build a credible body of work, discover relevant engagements, apply, collaborate, submit deliverables, and grow professional reputation."
              />
            </div>
          </div>
        </section>

        <section id="discover" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Discovery"
                title="Discover trusted professionals beyond a conventional CV."
                body="Search by people, skills, and projects, then review professional recommendations with ratings, location context, work history, and visible expertise."
              />
              <ul className="mt-8 grid gap-3 text-sm leading-7 text-white/62 sm:grid-cols-2">
                {[
                  "Search people, skills, or projects",
                  "Review skills and location context",
                  "Compare ratings and professional signals",
                  "Move from discovery into Hire or Collab",
                ].map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-[390px]">
              <ProductMockup
                src={`${screen}discover-page.png`}
                alt="Kliqture Discover page with search and recommended professionals"
                sizes="(max-width: 768px) 78vw, 390px"
              />
            </div>
          </div>
        </section>

        <section id="businesses" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="relative order-2 h-[560px] lg:order-1">
              <div className="absolute left-[2%] top-0 w-[56%] max-w-[330px] -rotate-5">
                <ProductMockup
                  src={`${screen}home-feed-showing-brand-engagement-post.png`}
                  alt="Business post seeking Flutter mobile development expertise on Kliqture"
                  sizes="(max-width: 768px) 50vw, 320px"
                />
              </div>
              <div className="absolute right-[2%] top-16 w-[56%] max-w-[330px] rotate-4">
                <ProductMockup
                  src={`${screen}engagement-work-detail-page-showing-the-brand-seeking-a-flutter-developer.png`}
                  alt="Kliqture engagement detail with scope, skills, budget range, timeline, and Apply action"
                  sizes="(max-width: 768px) 50vw, 320px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Seek Expertise"
                title="From expertise request to qualified application."
                body="A business can publish a project or seek expertise, while professionals review the scope, required skills, budget range, and timeline before applying."
              />
              <div className="mt-8 space-y-4 text-sm leading-7 text-white/62 md:text-base">
                <p>
                  Kliqture presents engagements as structured professional work,
                  not conventional recruiting posts. Businesses can review
                  applications and select who they want to work with.
                </p>
                <p>
                  The engagement record keeps the brief, skills, application
                  context, and next steps close to the work that follows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="professionals" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Professional reputation"
              title="Professionals show more than a profile."
              body="Profiles, portfolio projects, media, documented work, skills, ratings, and completed engagements help professionals build reputation through evidence."
              align="center"
            />
            <div className="relative mt-14 h-[760px] overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_50%_15%,rgba(37,99,235,0.2),transparent_34%),rgba(255,255,255,0.025)] pb-16 md:h-[820px] lg:h-[860px]">
              <div className="absolute left-[4%] top-10 w-[34%] min-w-[210px] -rotate-6 opacity-90 md:top-8">
                <ProductMockup
                  src={`${screen}home-feed-showing-an-actor-post.png`}
                  alt="Professional portfolio feed post with Hire and Collab actions"
                  sizes="(max-width: 768px) 56vw, 300px"
                />
              </div>
              <div className="absolute right-[4%] top-12 w-[34%] min-w-[210px] rotate-6 opacity-90 md:top-10">
                <ProductMockup
                  src={`${screen}home-feed-showing-a-singer-and-songwriter-post.png`}
                  alt="Professional singer-songwriter post with portfolio media and reputation signals"
                  sizes="(max-width: 768px) 56vw, 300px"
                />
              </div>
              <div className="absolute left-1/2 top-4 w-[40%] min-w-[250px] max-w-[380px] -translate-x-1/2 md:top-2">
                <ProductMockup
                  src={`${screen}work-detail-page-showing-an-animator-project.png`}
                  alt="Kliqture portfolio project detail showing skills, media, documents, and links"
                  sizes="(max-width: 768px) 64vw, 360px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Workrooms"
                title="Work happens in a structured workroom."
                body="Hire and Collab workrooms keep communication tied to a real engagement, including offers, agreed terms, shared records, deliverables, and project context."
              />
              <p className="mt-7 text-base leading-8 text-white/62">
                Instead of losing project decisions inside scattered messages,
                Kliqture keeps the conversation close to the work, files, and
                next actions.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[470px] lg:-ml-2">
              <div className="absolute inset-x-10 top-24 h-72 rounded-full bg-teal-300/10 blur-3xl" />
              <ProductMockup
                src={`${screen}collab-room-conversation-displaying-project-deliverables.png`}
                alt="Kliqture workroom conversation with attached project deliverables"
                className="relative"
                sizes="(max-width: 768px) 86vw, 470px"
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="relative h-[600px]">
              <div className="absolute left-0 top-0 w-[54%] max-w-[330px] -rotate-4">
                <ProductMockup
                  src={`${screen}project-page-showing-the-tasks.png`}
                  alt="Kliqture project page showing tasks across status columns"
                  sizes="(max-width: 768px) 52vw, 320px"
                />
              </div>
              <div className="absolute right-0 top-20 w-[54%] max-w-[330px] rotate-4">
                <ProductMockup
                  src={`${screen}submit-milestone-sheet-showing-first-milestone-is-running.png`}
                  alt="Kliqture milestone submission sheet with deliverable upload actions"
                  sizes="(max-width: 768px) 52vw, 320px"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Milestones"
                title="Milestones turn agreements into progress."
                body="Tasks, milestone status, submissions, review, revisions, and delivery records help both sides understand where the engagement stands."
              />
              <div className="mt-8 border-l border-white/12 pl-5">
                {["Tasks", "Submission", "Review", "Revision when needed", "Delivery record"].map(
                  (item) => (
                    <p key={item} className="relative mb-4 text-sm text-white/62">
                      <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 rounded-full bg-teal-300" />
                      {item}
                    </p>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Payment tracking"
                title="Payments linked to completed work"
                body="Payments relate to agreed professional engagements, documented milestone progress, submitted deliverables, and transaction activity connected to the workroom."
              />
              <div className="mt-8 space-y-4 text-sm leading-7 text-white/62 md:text-base">
                <p>
                  Clients can review work before the corresponding release
                  action, and payment processing may be provided by approved
                  third-party payment-service providers.
                </p>
                <p>
                  Refunds, cancellations, and disputes are governed by
                  applicable policies, transaction status, provider rules, and
                  the available engagement record.
                </p>
              </div>
            </div>
            <div className="relative h-[590px]">
              <div className="absolute left-[4%] top-0 w-[54%] max-w-[330px] -rotate-4">
                <ProductMockup
                  src={`${screen}hire-room-release-milestone-funds-showing-the-release-button.png`}
                  alt="Kliqture Hire Room showing a release fund action after milestone review"
                  sizes="(max-width: 768px) 52vw, 320px"
                />
              </div>
              <div className="absolute right-[4%] top-20 w-[54%] max-w-[330px] rotate-4">
                <ProductMockup
                  src={`${screen}hire-room-successful-release-of-funds.png`}
                  alt="Kliqture Hire Room showing successful milestone payment release activity"
                  sizes="(max-width: 768px) 52vw, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How it works"
              title="A clear path from discovery to completion."
              body="Kliqture keeps every stage of professional work clear for businesses and professionals."
              align="center"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {workflowSteps.map((step, index) => (
                <WorkflowStep
                  key={step.title}
                  index={index + 1}
                  title={step.title}
                  body={step.body}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Trust & support"
              title="Clear records for work, support, and review."
              body="Kliqture supports trust through structured work records, offer and milestone history, deliverable records, professional profiles, ratings, privacy controls, and support routes."
              align="center"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Work records", "Offers, milestone activity, submissions, and deliverables remain attached to the engagement."],
                ["Support routes", "Users can contact support, review refund and cancellation guidance, and start dispute review when needed."],
                ["Account controls", "Privacy, terms, and account-deletion information remain publicly accessible."],
              ].map(([title, body]) => (
                <FeatureCard key={title} title={title} body={body} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {siteConfig.legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/64 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/64 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/[0.035] p-7 md:p-10">
            <SectionHeading
              eyebrow="Company"
              title="Operated by Blueprint Fintech Solutions Ltd."
              body="Kliqture is the company's consumer-facing professional collaboration marketplace for businesses, organisations, and skilled professionals."
            />
            <div className="mt-8 grid gap-4 text-sm text-white/62 md:grid-cols-2">
              <p>
                Product name: <span className="text-white">Kliqture</span>
              </p>
              <p>
                Registered company:{" "}
                <span className="text-white">{siteConfig.companyName}</span>
              </p>
              {siteConfig.supportEmail ? (
                <p>
                  Support:{" "}
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-white underline decoration-white/25 underline-offset-4"
                  >
                    {siteConfig.supportEmail}
                  </a>
                </p>
              ) : null}
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                Social
              </p>
              <SocialLinks className="mt-4" />
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 px-5 py-20 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about Kliqture"
              body="Clear answers for businesses and professionals using Kliqture."
              align="center"
            />
            <FAQ items={faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
