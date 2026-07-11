import Image from "next/image";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
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
            "radial-gradient(120% 90% at 50% 30%, rgba(15,25,48,0.18) 0%, rgba(15,25,48,0.34) 100%), linear-gradient(180deg, rgba(15,25,48,0.40) 0%, rgba(15,25,48,0.16) 32%, rgba(15,25,48,0.20) 66%, rgba(15,25,48,0.52) 100%)",
        }}
      />

      {/* Content, raised slightly for balance */}
      <div className="relative z-[3] max-w-[960px] -translate-y-[5vh] px-6 text-center">
        <div className="mx-auto mb-[1.4rem] animate-hero-logo">
          <h1 className="text-shadow-luxe text-[clamp(2.6rem,7vw,5.2rem)] font-medium leading-[1.02] tracking-[0.02em] text-white">
            FLY GIRL
          </h1>
          <p className="mt-2 text-shadow-soft text-[clamp(0.85rem,1.8vw,1.15rem)] font-normal uppercase tracking-[0.42em] text-champagne">
            Events &amp; Design
          </p>
        </div>

        <h2 className="mx-auto animate-hero-title text-shadow-luxe text-[clamp(1.2rem,2.6vw,1.7rem)] font-normal uppercase leading-[1.3] tracking-[0.22em] text-white">
          {site.positioning}
        </h2>

        <p className="mx-auto mt-[1.3rem] max-w-[62ch] animate-hero-sub text-shadow-soft text-[clamp(0.92rem,1.5vw,1.08rem)] font-normal leading-[1.7] tracking-[0.01em] text-white/95">
          {site.clarity}
        </p>

        <div className="mx-auto mt-[1.6rem] flex animate-hero-sub flex-wrap items-center justify-center gap-x-3 gap-y-1 text-shadow-soft text-[clamp(0.68rem,1.3vw,0.82rem)] font-medium uppercase tracking-[0.16em] text-white/95">
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
