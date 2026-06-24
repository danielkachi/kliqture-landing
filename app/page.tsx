import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="min-h-screen px-5 pt-6 md:px-14 md:pt-8 xl:px-20">
        <header className="flex items-center justify-between border-b border-white/10 pb-4 md:pb-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-icon.svg"
              alt="Kliqture logo"
              className="h-[38px] w-[38px] md:h-[46px] md:w-[46px]"
            />
            <span className="text-[32px] font-semibold tracking-[-0.04em] md:text-[40px]">
              Kliqture
            </span>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0MTpkp6CDCv0SGpcIY3f-Fg977ICWmjUufv93ZuATCPzMFA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-blue-600/90 px-6 py-2.5 text-sm transition hover:bg-blue-500 md:inline-flex"
          >
            Request Access
          </a>
        </header>

        <div className="grid min-h-[calc(100vh-88px)] grid-cols-1 items-start gap-8 md:min-h-[calc(100vh-110px)] lg:grid-cols-[0.95fr_1.2fr] lg:items-center">
          <div className="max-w-[580px] pt-8 md:pt-16 lg:pt-0">
            <h1 className="text-[42px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[50px] md:text-[60px] lg:text-[80px]">
              Where creative work actually gets done
            </h1>

            <p className="mt-8 max-w-[560px] text-[18px] leading-8 text-white/58 md:mt-10">
              Kliqture is a structured work and collaboration platform for
              creators, brands, and teams - combining workrooms, milestones,
              tasks, and real execution in one place.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0MTpkp6CDCv0SGpcIY3f-Fg977ICWmjUufv93ZuATCPzMFA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 text-[18px] font-medium tracking-tight text-white transition hover:bg-blue-500 md:mt-14 md:px-12 md:py-5 md:text-[19px]"
            >
              Request Early Access
            </a>
          </div>

          <div className="relative h-[420px] w-full sm:h-[500px] md:h-[680px] lg:h-[900px]">
            <div className="absolute left-[8%] top-[35px] z-10 h-[300px] w-[300px] sm:left-[14%] sm:h-[360px] sm:w-[360px] md:left-[10%] md:top-[60px] md:h-[470px] md:w-[470px] lg:left-[8%] lg:top-[90px] lg:h-[620px] lg:w-[620px]">
              <Image
                src="/images/hero_2.png"
                alt="Kliqture workroom preview"
                fill
                priority
                className="object-contain opacity-80 contrast-110 md:opacity-70"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, (max-width: 1200px) 470px, 620px"
              />
            </div>

            <div className="absolute left-[34%] top-[20px] z-20 h-[300px] w-[300px] sm:left-[42%] sm:h-[360px] sm:w-[360px] md:left-[36%] md:top-[50px] md:h-[460px] md:w-[460px] lg:left-[34%] lg:top-[80px] lg:h-[620px] lg:w-[620px]">
              <Image
                src="/images/hero.png"
                alt="Kliqture creator preview"
                fill
                priority
                className="object-contain drop-shadow-[0_30px_120px_rgba(0,0,0,0.75)]"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, (max-width: 1200px) 460px, 620px"
              />
            </div>
          </div>
        </div>

        <section
          id="company"
          className="border-t border-white/10 py-10 text-sm leading-7 text-white/55 md:py-12"
        >
          <h2 className="text-base font-medium text-white">Company</h2>
          <p className="mt-3 max-w-3xl">
            Kliqture is operated by Blueprint Fintech Solutions Ltd. Kliqture
            remains the consumer-facing brand for the structured work and
            collaboration platform used by creators, brands, and teams.
          </p>
        </section>

        <footer className="border-t border-white/10 py-6 text-xs text-white/45 md:flex md:items-center md:justify-between">
          <p>© 2026 Kliqture. Operated by Blueprint Fintech Solutions Ltd.</p>
          <p className="mt-2 md:mt-0">Kliqture is a product of Blueprint Fintech Solutions Ltd.</p>
        </footer>
      </section>
    </main>
  );
}