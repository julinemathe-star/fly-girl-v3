import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import EditorialImageSection from "@/components/EditorialImageSection";
import { designStudioIncludes, previewHowItWorks } from "@/lib/preview-experience";
import { site, consultationHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Design Studio Experience",
  description:
    "Experience your event before event day. Visit our private Design Studio at Formation — Dallas Cowboys World Headquarters to see, touch, compare, and refine every design element before installation day.",
};

export default function PreviewExperiencePage() {
  return (
    <>
      {/* HERO — full-width Design Studio image (aspirational brand visualization) */}
      <section className="relative flex min-h-[92vh] w-full items-end overflow-hidden">
        <Image
          src="/media/design-studio-hero.jpg"
          alt="A visualization of the Fly Girl Design Studio experience — a private consultation table styled with a custom menu, invitation suite, fabric swatches, and florals, at Formation, Dallas Cowboys World Headquarters in Frisco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,25,48,0.30) 0%, rgba(15,25,48,0.08) 38%, rgba(15,25,48,0.12) 68%, rgba(15,25,48,0.55) 100%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[880px] px-6 pb-[clamp(3.5rem,9vw,7rem)] text-center">
          <Reveal>
            <span className="eyebrow text-champagne">The Design Studio Experience</span>
            <h1 className="mt-5 text-[clamp(2.3rem,5vw,4rem)] leading-[1.08] text-white text-shadow-luxe">
              Experience Your Event Before Your Event
            </h1>
            <p className="mx-auto mt-7 max-w-[58ch] text-[1.05rem] leading-[1.55] text-white/90 text-shadow-soft">
              Most clients don&apos;t see their event until the day it happens. At Fly
              Girl Events &amp; Design, we believe luxury should come with confidence.
              Inside our private Design Studio at Formation, Dallas Cowboys World Headquarters in Frisco, clients
              experience a personalized design presentation where they can see, touch,
              compare, and refine every detail before event day.
            </p>
            <div className="mt-9">
              <Button href={consultationHref} variant="primary">
                Reserve Your Design Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 1 — Where Your Vision Takes Flight + Invitation Suite */}
      <EditorialImageSection
        heading="Where Your Vision Takes Flight"
        body={[
          "Every unforgettable celebration begins with a conversation.",
          "Together we'll explore your inspiration, color palette, venue, guest experience, florals, stationery, tablescapes, favors, and every meaningful detail that will make your celebration uniquely yours.",
          "This is where ideas become a beautifully curated design plan.",
        ]}
        image="/media/preview-invitation-suite.jpg"
        alt="A luxury destination wedding invitation suite with passport, boarding pass, and travel-inspired stationery"
      />

      {/* SECTION 2 — See Your Celebration + Jamaica Tablescape */}
      <EditorialImageSection
        tone="ivory"
        heading="See Your Celebration Before Event Day"
        body={[
          "Rather than imagining how everything will come together, you'll experience the design before your celebration even begins.",
          "From linens and chargers to florals, candles, stationery, and styling, every element is thoughtfully selected to create a cohesive luxury experience.",
        ]}
        image="/media/preview-jamaica-tablescape.jpg"
        alt="A luxury tropical tablescape in Jamaica with vibrant orchid centerpieces and teal glassware"
      />

      {/* SECTION 3 — Luxury Lives in the Details + Welcome Bags */}
      <section className="bg-warmwhite">
        <div className="pt-[clamp(5rem,11vw,9.5rem)]">
          <Reveal className="mx-auto max-w-[680px] px-[clamp(1.5rem,6vw,5rem)] text-center">
            <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Luxury Lives In The Details
            </h2>
            <div className="mx-auto mt-7 max-w-[58ch] text-[1.02rem] leading-[1.6] text-plum-body">
              <p>Beautiful celebrations are remembered because of the details.</p>
              <p className="mt-5 font-serif text-lg italic text-gold-ink">
                Welcome gifts&hellip; Personalized stationery&hellip; Guest favors&hellip;
                Signature displays&hellip; Thoughtful finishing touches&hellip;
              </p>
              <p className="mt-5">
                Every element is intentionally curated to leave a lasting impression on
                your guests.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <figure className="mx-auto max-w-shell px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
            <div className="overflow-hidden rounded-[8px] shadow-media">
              <Image
                src="/media/preview-welcome-bags.jpg"
                alt="Luxury destination welcome bags with personalized gifts and travel essentials"
                width={1600}
                height={1067}
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="h-auto w-full"
              />
            </div>
          </figure>
        </Reveal>
      </section>

      {/* DURING YOUR APPOINTMENT */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow eyebrow-ink">The Design Studio Experience</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              During Your Design Studio Experience You&apos;ll Preview
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-[620px]">
            <ul className="space-y-4">
              {designStudioIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[1.02rem] leading-[1.5] text-plum-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-[6px] w-[6px] flex-none rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="mx-auto mt-10 max-w-[620px] text-center">
            <p className="font-serif text-xl italic leading-[1.5] text-gold-ink">
              Leave knowing exactly how your event will look before your celebration
              arrives.
            </p>
            <p className="mt-4 text-[0.92rem] uppercase tracking-luxe text-plum-body/70">
              This is the Fly Girl difference.
            </p>
          </Reveal>
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
              The Design Studio Consultation
            </h2>

            <div className="mt-9 inline-flex items-baseline gap-2 rounded-[4px] border border-gold/40 bg-ivory px-8 py-5 shadow-media">
              <span className="font-serif text-[2.4rem] leading-none text-plum">$250</span>
              <span className="font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
                Private
                <br />
                Appointment
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-[54ch] text-[1.02rem] leading-[1.6] text-plum-body">
              Your $250 Design Studio Consultation is a private appointment at the Fly
              Girl Design Studio at Formation — Dallas Cowboys World Headquarters in
              Frisco.
            </p>

            <blockquote className="mx-auto mt-10 max-w-[52ch] border-l-2 border-gold/60 pl-6 text-left font-serif text-xl italic leading-[1.5] text-gold-ink sm:text-2xl">
              We don&apos;t ask you to imagine your celebration.
              <br />
              We invite you to experience it before it happens.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(4rem,8vw,6rem)] max-w-[640px] text-center">
            <span className="eyebrow eyebrow-ink">How It Works</span>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {previewHowItWorks.map((step, i) => (
              <Reveal
                key={step.n}
                as="article"
                delay={i * 0.1}
                className="flex flex-col rounded-[4px] border border-gold/25 bg-gradient-to-b from-white to-ivory/40 p-8 text-center shadow-media"
              >
                <span className="mx-auto font-serif text-3xl leading-none text-gold-ink/80">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl leading-snug text-plum">{step.title}</h3>
                <p className="mt-4 text-[0.92rem] leading-[1.55] text-plum-body">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-warmwhite to-ivory">
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
              Ready To Begin Your First-Class Journey?
            </h2>
            <p className="mx-auto mb-10 max-w-[48ch] text-plum-body">
              Let&apos;s create something unforgettable together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={consultationHref} variant="dark">
                Reserve Your Design Consultation
              </Button>
            </div>
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
