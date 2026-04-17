import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="min-h-screen px-8 pt-8 md:px-14 xl:px-20">
        
        {/* HEADER */}
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          
          {/* FIXED LOGO */}
          <div className="flex items-center">
            <div className="relative h-[52px] w-[270px] overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Kliqture logo"
                className="absolute top-1/2 h-[52px] max-w-none -translate-y-1/2"
              />
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd0MTpkp6CDCv0SGpcIY3f-Fg977ICWmjUufv93ZuATCPzMFA/viewform?usp=publish-editor"
            target="_blank"
            className="rounded-full bg-blue-600/90 px-6 py-2.5 text-sm"
          >
            Request Access
          </a>
        </header>

        {/* HERO */}
        <div className="grid min-h-[calc(100vh-110px)] grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.2fr]">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[580px] pt-12 md:pt-20 lg:pt-0">
            
            <h1 className="text-[60px] font-semibold leading-[1.03] tracking-[-0.045em] md:text-[72px] lg:text-[80px]">
              Where creative work actually gets done
            </h1>

            <p className="mt-12 text-[18px] leading-8 text-white/58">
              Kliqture is a structured work and collaboration platform for
              creators, brands, and teams - combining workrooms, milestones,
              tasks, and real execution in one place.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0MTpkp6CDCv0SGpcIY3f-Fg977ICWmjUufv93ZuATCPzMFA/viewform?usp=publish-editor"
              target="_blank"
              className="mt-16 inline-flex rounded-full bg-blue-600 px-12 py-5 text-[19px] font-medium tracking-tight text-white transition hover:bg-blue-500"
            >
              Request Early Access
            </a>
          </div>

          {/* RIGHT MOCKUPS */}
          <div className="relative h-[760px] w-full md:h-[840px] lg:h-[900px]">
            
            {/* BACK IMAGE */}
            <div className="absolute left-[4%] top-[90px] z-10 h-[470px] w-[470px] opacity-45 md:h-[560px] md:w-[560px] lg:h-[620px] lg:w-[620px]">
              <Image
                src="/images/hero_2.png"
                alt="Kliqture workroom preview"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 470px, (max-width: 1200px) 560px, 620px"
              />
            </div>

            {/* FRONT IMAGE */}
            <div className="absolute left-[40%] top-[80px] z-20 h-[460px] w-[460px] md:h-[560px] md:w-[560px] lg:h-[620px] lg:w-[620px]">
              <Image
                src="/images/hero.png"
                alt="Kliqture creator preview"
                fill
                priority
                className="object-contain drop-shadow-[0_30px_120px_rgba(0,0,0,0.75)]"
                sizes="(max-width: 768px) 460px, (max-width: 1200px) 560px, 620px"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}