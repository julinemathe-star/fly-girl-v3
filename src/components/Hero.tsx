import Image from "next/image";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header className="relative flex h-screen min-h-[680px] w-full items-end justify-center overflow-hidden md:justify-start">
      {/* Poster shows instantly; video plays over it once ready */}
      <Image
        src="/media/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      <video
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Darkened luxury overlay — stronger contrast so text reads clearly over the video */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,25,48,0.55) 0%, rgba(15,25,48,0.18) 42%, rgba(15,25,48,0.05) 70%), linear-gradient(180deg, rgba(15,25,48,0.35) 0%, rgba(15,25,48,0.05) 30%, rgba(15,25,48,0.55) 70%, rgba(15,25,48,0.9) 100%)",
        }}
      />

      {/* Content — anchored low so the film (and Juline) stay in frame */}
      <div className="relative z-[3] max-w-[720px] px-6 pb-[clamp(4rem,8vh,6.5rem)] text-center md:pl-[clamp(2rem,6vw,5rem)] md:pr-6 md:text-left">
        <p className="animate-hero-logo text-shadow-soft text-[clamp(0.72rem,1.4vw,0.9rem)] font-semibold uppercase tracking-[0.4em] text-champagne">
          Fly Girl &nbsp;&bull;&nbsp; Events &amp; Design
        </p>

        <h1 className="text-gold-gradient mx-auto mt-3 animate-hero-title font-serif text-[clamp(1.7rem,4vw,2.9rem)] font-semibold uppercase leading-[1.12] tracking-[0.14em]">
          {site.positioning}
        </h1>

        <div
          aria-hidden="true"
          className="mx-auto mt-4 flex max-w-[320px] animate-hero-title items-center gap-3 text-gold md:mx-0"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/80" />
          <span className="text-[0.7rem]">&#10022;</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/80" />
        </div>

        <p className="mx-auto mt-5 max-w-[54ch] animate-hero-sub md:mx-0 text-shadow-luxe text-[clamp(1.02rem,1.5vw,1.12rem)] font-medium leading-[1.75] tracking-[0.01em] text-white">
          {site.clarity}
        </p>

        <div className="mx-auto mt-[1.4rem] flex animate-hero-sub flex-wrap items-center justify-center gap-x-3 md:mx-0 md:justify-start gap-y-1 text-shadow-luxe text-[clamp(0.76rem,1.3vw,0.86rem)] font-semibold uppercase tracking-[0.16em] text-white">
          <span>Luxury Event Design</span>
          <span aria-hidden="true" className="text-gold">
            &bull;
          </span>
          <span>Corporate &amp; Executive Experiences</span>
          <span aria-hidden="true" className="text-gold">
            &bull;
          </span>
          <span>Styled Spaces</span>
          <span aria-hidden="true" className="text-gold">
            &bull;
          </span>
          <span>Welcome Gifts</span>
        </div>

        <p className="mx-auto mb-[2rem] mt-[1.1rem] max-w-prose2 animate-hero-sub md:mx-0 text-shadow-luxe font-serif text-[clamp(1.08rem,1.7vw,1.28rem)] font-medium italic tracking-[0.01em] text-champagne">
          {site.boardroomsLine}
        </p>

        <div className="flex animate-hero-actions flex-wrap justify-center gap-[1.1rem] md:justify-start">
          <Button href="/begin-your-journey" variant="primary">
            Begin Your Journey
          </Button>
          <Button href="/portfolio" variant="ghost">
            Explore Our Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 animate-hero-scroll flex-col items-center gap-[0.7rem] text-[0.62rem] uppercase tracking-wide2 text-white/80">
        <span>Scroll</span>
        <span className="h-11 w-px animate-scroll-line bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </header>
  );
}
