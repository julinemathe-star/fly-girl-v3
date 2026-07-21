import Image from "next/image";
import Button from "@/components/Button";
import { site, consultationHref } from "@/lib/site";

/**
 * Launch hero.
 *
 * MOBILE, the film leads. The video fills the top ~60% of the first screen
 * (object-cover, biased toward Juline at frame center) with only a thin
 * scrim at the very top for nav legibility and a soft fade at the bottom
 * into the copy panel. No typography ever sits over Juline. The copy panel
 * below carries a single statement, one supporting line, and two actions.
 *
 * DESKTOP, the original full-bleed cinematic treatment, with the copy
 * stack trimmed so the film breathes: statement, one line, signature
 * italic, actions.
 */
export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden bg-navy-deep md:flex md:h-screen md:min-h-[620px] md:items-end md:justify-start">
      {/* ————— MOBILE: film-first ————— */}
      <div className="relative h-[58svh] min-h-[380px] w-full bg-navy-deep md:hidden">
        <video
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 42%" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        {/* Thin scrims only where needed: nav legibility up top, a gentle
            hand-off into the copy panel below. The center of the frame —
            where Juline works, stays completely clear. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,25,48,0.55) 0%, rgba(15,25,48,0) 18%, rgba(15,25,48,0) 78%, rgba(15,25,48,0.85) 100%)",
          }}
        />

        <Image
          src="/brand/fg-video-bug.png"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="pointer-events-none absolute bottom-3 right-3 z-[2] h-10 w-10 rounded-full object-contain"
        />
      </div>

      {/* Mobile copy panel, concise by design. */}
      <div className="relative z-[2] w-full px-6 pb-11 pt-2 text-center md:hidden">
        <p className="animate-hero-logo text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-champagne">
          Fly Girl &nbsp;&bull;&nbsp; Events &amp; Design
        </p>

        <h1 className="text-gold-gradient mx-auto mt-3 max-w-[16ch] animate-hero-title font-serif text-[1.85rem] uppercase leading-[1.14] tracking-[0.08em]">
          {site.heroStatement}
        </h1>

        <p className="mx-auto mt-4 max-w-[36ch] animate-hero-sub text-[0.95rem] font-normal leading-[1.7] text-warmwhite/85">
          {site.heroSub}
        </p>

        <div className="mx-auto mt-7 flex max-w-[340px] animate-hero-actions flex-col">
          <Button href={consultationHref} variant="primary" className="w-full">
            Reserve Your Design Consultation
          </Button>
        </div>
      </div>

      {/* ————— DESKTOP: full-bleed cinematic ————— */}
      <Image
        src="/media/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="z-0 hidden object-cover md:block"
      />
      <video
        className="absolute inset-0 z-[1] hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <Image
        src="/brand/fg-video-bug.png"
        alt=""
        aria-hidden="true"
        width={52}
        height={52}
        className="pointer-events-none absolute bottom-5 right-5 z-[3] hidden h-[52px] w-[52px] rounded-full object-contain md:block"
      />

      <div
        className="absolute inset-0 z-[2] hidden md:block"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,25,48,0.55) 0%, rgba(15,25,48,0.18) 42%, rgba(15,25,48,0.05) 70%), linear-gradient(180deg, rgba(15,25,48,0.35) 0%, rgba(15,25,48,0.05) 30%, rgba(15,25,48,0.55) 70%, rgba(15,25,48,0.9) 100%)",
        }}
      />

      {/* Desktop copy, trimmed so the film carries the moment. */}
      <div className="relative z-[3] hidden w-full md:block md:max-w-[720px] md:pb-[clamp(4rem,8vh,6.5rem)] md:pl-[clamp(2rem,6vw,5rem)] md:pr-6 md:text-left">
        <p className="animate-hero-logo text-shadow-soft text-[clamp(0.72rem,1.4vw,0.9rem)] font-semibold uppercase tracking-[0.4em] text-champagne">
          Fly Girl &nbsp;&bull;&nbsp; Events &amp; Design
        </p>

        <h1 className="text-gold-gradient mt-3 max-w-[18ch] animate-hero-title font-serif text-[clamp(1.7rem,3.6vw,2.7rem)] uppercase leading-[1.14] tracking-[0.12em]">
          {site.heroStatement}
        </h1>

        <div
          aria-hidden="true"
          className="mt-4 flex max-w-[320px] animate-hero-title items-center gap-3 text-gold"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/80" />
          <span className="text-[0.7rem]">&#10022;</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/80" />
        </div>

        <p className="mt-5 max-w-[54ch] animate-hero-sub text-[clamp(1.02rem,1.5vw,1.12rem)] font-medium leading-[1.7] tracking-[0.01em] text-white text-shadow-luxe">
          {site.heroSub}
        </p>

        <p className="mb-[2rem] mt-[1.1rem] max-w-prose2 animate-hero-sub font-serif text-[clamp(1.08rem,1.7vw,1.28rem)] font-medium italic leading-[1.75] tracking-[0.01em] text-champagne text-shadow-luxe">
          {site.boardroomsLine}
        </p>

        <div className="flex animate-hero-actions flex-row flex-wrap justify-start gap-[1.1rem]">
          <Button href={consultationHref} variant="primary" className="w-auto">
            Reserve Your Design Consultation
          </Button>
        </div>
      </div>

      {/* Desktop-only scroll cue. */}
      <div className="absolute bottom-8 left-1/2 z-[3] hidden -translate-x-1/2 animate-hero-scroll flex-col items-center gap-[0.7rem] text-[0.62rem] uppercase tracking-wide2 text-white/80 md:flex">
        <span>Scroll</span>
        <span className="h-11 w-px animate-scroll-line bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </header>
  );
}
