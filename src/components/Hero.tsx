import Image from "next/image";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header className="relative flex h-screen min-h-[680px] w-full items-end justify-center overflow-hidden">
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
            "linear-gradient(180deg, rgba(15,25,48,0.38) 0%, rgba(15,25,48,0.06) 26%, rgba(15,25,48,0.10) 44%, rgba(15,25,48,0.58) 68%, rgba(15,25,48,0.86) 100%)",
        }}
      />

      {/* Content, raised slightly for balance */}
      <div className="relative z-[3] max-w-[960px] px-6 pb-[clamp(5.5rem,10vh,8rem)] text-center">
        <div className="mx-auto mb-[1.4rem] animate-hero-logo">
          <h1 className="text-gold-gradient text-[clamp(2.9rem,7.4vw,5.4rem)] font-semibold leading-[1.02] tracking-[0.03em]">
            FLY GIRL
          </h1>
          <p className="mt-2 text-shadow-soft text-[clamp(0.9rem,1.8vw,1.15rem)] font-normal uppercase tracking-[0.42em] text-champagne">
            Events &amp; Design
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 flex max-w-[340px] items-center gap-3 text-gold"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/80" />
            <span className="text-[0.7rem]">&#10022;</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/80" />
          </div>
        </div>

        <h2 className="mx-auto animate-hero-title text-shadow-luxe text-[clamp(1.25rem,2.6vw,1.7rem)] font-medium uppercase leading-[1.3] tracking-[0.22em] text-white">
          {site.positioning}
        </h2>

        <p className="mx-auto mt-[1.3rem] max-w-[62ch] animate-hero-sub text-shadow-soft text-[clamp(1rem,1.5vw,1.1rem)] font-normal leading-[1.75] tracking-[0.01em] text-white text-shadow-luxe">
          {site.clarity}
        </p>

        <div className="mx-auto mt-[1.6rem] flex animate-hero-sub flex-wrap items-center justify-center gap-x-3 gap-y-1 text-shadow-soft text-[clamp(0.74rem,1.3vw,0.84rem)] font-semibold uppercase tracking-[0.16em] text-white">
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

        <p className="mx-auto mb-[2.6rem] mt-[1.4rem] max-w-prose2 animate-hero-sub text-shadow-soft font-serif text-[clamp(1.02rem,1.7vw,1.25rem)] italic tracking-[0.01em] text-champagne">
          {site.boardroomsLine}
        </p>

        <div className="flex animate-hero-actions flex-wrap justify-center gap-[1.1rem]">
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
