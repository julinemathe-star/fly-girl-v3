import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import EditorialImageSection from "@/components/EditorialImageSection";
import { crew } from "@/lib/crew";
import { littleLuxeCelebrations, littleLuxeInvestment } from "@/lib/little-luxe";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Little Luxe™",
  description:
    "Little Luxe™, presented by Team 2 Much™ — imaginative children's celebrations designed with the same artistry as our most refined events. Where a child's wonder meets true luxury.",
};

const lauren = crew.find((member) => member.name === "Lauren Mathe");

export default function LittleLuxePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] w-full items-end overflow-hidden">
        <Image
          src="/media/experiences/exp-littleluxe.jpg"
          alt="Whimsical yet elevated Little Luxe celebration styling with candles and blossoms"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,25,48,0.28) 0%, rgba(15,25,48,0.08) 38%, rgba(15,25,48,0.12) 68%, rgba(15,25,48,0.55) 100%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[880px] px-6 pb-[clamp(3.5rem,9vw,7rem)] text-center">
          <Reveal>
            <span className="eyebrow text-champagne">Little Luxe™</span>
            <p className="mt-3 font-serif text-lg italic text-white/90 text-shadow-soft">
              Presented by Team 2 Much™
            </p>
            <h1 className="mt-5 text-[clamp(2.3rem,5vw,4rem)] leading-[1.08] text-white text-shadow-luxe">
              Where a Child&apos;s Wonder Meets True Luxury
            </h1>
            <p className="mx-auto mt-7 max-w-[58ch] text-[1.05rem] leading-[1.55] text-white/90 text-shadow-soft">
              Imaginative children&apos;s celebrations, elevated. Playful worlds designed
              with the same artistry and attention as our most refined events.
            </p>
            <div className="mt-9">
              <Button href="/begin-your-journey" variant="primary">
                Begin Your Little Luxe Journey
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY INTRO */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[720px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,11vw,9.5rem)] text-center">
          <Reveal>
            <span className="eyebrow eyebrow-ink">The Little Luxe Philosophy</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Elevated, Never Ordinary
            </h2>
            <div className="mx-auto mt-7 max-w-[58ch] space-y-5 text-[1.02rem] leading-[1.6] text-plum-body">
              <p>
                Children&apos;s celebrations deserve the same thoughtful design as any
                Fly Girl experience — considered color, beautiful styling, and details
                that feel intentional rather than novelty.
              </p>
              <p className="font-serif text-xl italic text-gold-ink">
                A child&apos;s imagination, designed with true luxury.
              </p>
              <p>
                Every Little Luxe™ celebration is custom, playful, and polished — never
                cartoonish, always beautifully done.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL IMAGE MOMENT */}
      <EditorialImageSection
        tone="ivory"
        eyebrow="A Celebration, Elevated"
        heading="Styled With the Same Artistry as Every Fly Girl Event"
        body={[
          "Layered textures, considered color, and beautiful florals — Little Luxe™ celebrations are designed with the same eye for detail as our weddings and signature events.",
          "Every element is chosen to feel joyful and elevated at once.",
        ]}
        image="/media/experiences/exp-littleluxe.jpg"
        alt="Whimsical yet elevated Little Luxe celebration styling with candles and blossoms"
      />

      {/* MEET LAUREN */}
      {lauren ? (
        <section id="meet-lauren" className="bg-warmwhite">
          <div className="section-shell grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[clamp(3rem,6vw,6rem)]">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[4px] shadow-media">
                <Image
                  src={lauren.image}
                  alt={lauren.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="eyebrow eyebrow-ink">Leading the Kids Department</span>
              <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
                Meet Lauren
              </h2>
              <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
                Jr. Creative Assistant, Kids Department
              </p>
              <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.6] text-plum-body">
                {lauren.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* WHAT WE DESIGN */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(4rem,8vw,6rem)] max-w-[640px] text-center">
            <span className="eyebrow eyebrow-ink">What We Design</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Celebrations We Love Creating
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {littleLuxeCelebrations.map((item, i) => (
              <Reveal
                key={item.title}
                as="article"
                delay={(i % 2) * 0.1}
                className="rounded-[4px] border border-gold/25 bg-gradient-to-b from-white to-ivory/40 p-8 shadow-media"
              >
                <h3 className="text-[1.4rem] leading-snug text-plum">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.55] text-plum-body">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT FEATURE */}
      <section className="relative overflow-hidden bg-warmwhite">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, rgba(201,162,75,0.10), transparent 70%)",
          }}
        />
        <div className="section-shell relative z-[2]">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <span className="eyebrow eyebrow-ink">The Investment</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              {littleLuxeInvestment.title}
            </h2>
            <p className="mt-2 text-[0.85rem] uppercase tracking-luxe text-plum-body/70">
              {littleLuxeInvestment.detail}
            </p>

            <div className="mt-9 inline-flex items-baseline gap-2 rounded-[4px] border border-gold/40 bg-ivory px-8 py-5 shadow-media">
              <span className="font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
                Investment Begins at
              </span>
              <span className="font-serif text-[2.4rem] leading-none text-plum">
                {littleLuxeInvestment.from}
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-[54ch] text-[1.02rem] leading-[1.6] text-plum-body">
              {littleLuxeInvestment.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory to-warmwhite">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, rgba(201,162,75,0.12), transparent 70%)",
          }}
        />
        <div className="section-shell relative z-[2]">
          <Reveal className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow eyebrow-ink">Begin</span>
            <h2 className="mb-6 mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.2] text-plum">
              Let&apos;s Design Something Little Luxe™.
            </h2>
            <p className="mx-auto mb-10 max-w-[48ch] text-plum-body">
              Share your child&apos;s vision, and Team 2 Much™ will bring it to life —
              elevated, playful, and entirely their own.
            </p>
            <Button href="/begin-your-journey" variant="dark">
              Begin Your Little Luxe Journey
            </Button>
            <div className="mt-11 text-[0.74rem] uppercase tracking-[0.22em] text-gold-ink">
              <a
                href={`mailto:${site.email}`}
                className="border-b border-gold/50 pb-0.5 transition-colors duration-300 hover:text-plum"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
