import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import CrewCard from "@/components/CrewCard";
import { crew } from "@/lib/crew";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Juline Mathe, Creative Director & Luxury Event Designer at Fly Girl Events & Design — a luxury creative studio in Frisco, Texas shaped by more than 25 years of world travel and luxury hospitality.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO — full-bleed aviation image with the quote overlaid.
          Portrait crop on mobile (Juline larger), wide crop on desktop. */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        {/* Mobile portrait */}
        <Image
          src="/media/team/hero-aviation-portrait.jpg"
          alt="Juline of Fly Girl Events & Design seated within a jet engine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:hidden"
        />
        {/* Desktop wide */}
        <Image
          src="/media/team/hero-aviation-wide.jpg"
          alt="Juline of Fly Girl Events & Design seated within a jet engine"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center sm:block"
        />

        {/* Soft scrim for text legibility — kept light to let the image breathe */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,25,48,0.28) 0%, rgba(15,25,48,0.10) 40%, rgba(15,25,48,0.14) 70%, rgba(15,25,48,0.42) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-end justify-center pb-[clamp(3.5rem,9vw,7rem)]">
          <Reveal className="px-6 text-center">
            <h1 className="sr-only">About Fly Girl Events &amp; Design</h1>
            <blockquote className="font-serif text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1.2] text-white text-shadow-luxe">
              Some people collect souvenirs.
              <br />
              <em className="italic text-champagne">We collect inspiration.</em>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY — shortened, warm, editorial */}
      <section className="bg-warmwhite">
        <div className="section-shell">
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <span className="eyebrow eyebrow-ink">Our Story</span>
              <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
                Where a Life of Travel Became a Love of Design
              </h2>
            </Reveal>

            <Reveal delay={0.08} className="mt-8">
              <p className="font-serif text-[1.6rem] leading-snug text-plum">Juline Mathe</p>
              <p className="mt-1.5 text-[0.74rem] uppercase tracking-luxe text-gold-ink">
                Creative Director &amp; Luxury Event Designer
              </p>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-plum-body/85">
                Formerly Event Manager, Deloitte University — Westlake, Texas
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-10 space-y-7 text-[1.05rem] leading-[1.85] text-plum-body">
              <p>
                After traveling the world as a Flight Attendant for more than 25
                years, I developed an eye for luxury hospitality, exceptional guest
                experiences and thoughtful design. Today I bring those same standards
                into every celebration, executive space and styled environment I
                create.
              </p>
              <p>
                My work brings together global travel, luxury hospitality, corporate
                event management, guest experience, creative direction, event design,
                styled environments, and thoughtful details — a perspective shaped in
                the world&apos;s most beautiful places and refined at the highest level
                of corporate hospitality.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-11">
              <blockquote className="font-serif text-[clamp(1.25rem,2.2vw,1.6rem)] italic leading-[1.5] text-gold-ink">
                &ldquo;I&apos;ve always believed people may forget what happened during
                an event, but they&apos;ll never forget how it made them feel.
                That&apos;s the experience we design.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EDITORIAL FLAT-LAY — travel & design, shown in full so every element
          (passport, boarding pass, swatches, sketch, florals) stays visible. */}
      <section className="bg-warmwhite">
        <Reveal>
          <figure className="mx-auto max-w-[920px] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(3.5rem,7vw,5.5rem)]">
            <div className="overflow-hidden rounded-[4px] shadow-media">
              <Image
                src="/media/team/story-flatlay.jpg"
                alt="A luxury travel and design flat-lay — passport, Fly Girl first-class boarding pass, fabric swatches, a hand-sketched celebration, gold pen, florals, and a wedding inspiration photo"
                width={676}
                height={479}
                loading="lazy"
                sizes="(max-width: 920px) 100vw, 920px"
                className="h-auto w-full"
              />
            </div>
          </figure>
        </Reveal>
      </section>

      {/* MEET YOUR FIRST-CLASS CREW */}
      <section id="crew" className="bg-gradient-to-b from-warmwhite to-ivory/60">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(4rem,8vw,6rem)] max-w-[640px] text-center">
            <span className="eyebrow eyebrow-ink">The Family Behind Fly Girl</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Meet Your First-Class Crew
            </h2>
            <p className="mt-5 text-plum-body">
              Every unforgettable journey begins with the people guiding it.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {crew.map((member, i) => (
              <CrewCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINALE — bright CTA */}
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
            <h2 className="mb-8 mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.2] text-plum">
              Every Great Journey Begins With a First Step.
            </h2>
            <p className="mx-auto mb-10 max-w-[52ch] leading-[1.85] text-plum-body">
              Whether you&apos;re celebrating around the corner or across the world, we&apos;d
              be honored to design something unforgettable together.
            </p>
            <Button href="/begin-your-journey" variant="dark">
              Begin Your Journey
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
