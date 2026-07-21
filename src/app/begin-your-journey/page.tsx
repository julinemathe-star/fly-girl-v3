import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import JourneyInquiryForm from "@/components/JourneyInquiryForm";
import {
  journeyExperience,
  previewFee,
} from "@/lib/journey";
import { site } from "@/lib/site";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Begin Your Journey",
  description:
    "Begin your Fly Girl Events & Design experience. A private consultation, a personalized proposal, and luxury creative direction designed exclusively for your celebration.",
};

export default function BeginYourJourneyPage() {
  return (
    <>
      {/* 1. HERO, the studio image */}
      <section className="relative flex min-h-[88vh] w-full items-end overflow-hidden">
        <Image
          src="/media/journey-hero-office.jpg"
          alt="The Fly Girl Events & Design studio, styled with the FG wall installation and a first-class check-in desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,25,48,0.14) 0%, rgba(15,25,48,0.02) 38%, rgba(15,25,48,0.05) 66%, rgba(15,25,48,0.34) 100%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[880px] px-6 pb-[clamp(3.5rem,9vw,7rem)] text-center">
          <Reveal>
            <span className="eyebrow text-champagne">Begin Your Journey</span>
            <h1 className="mt-5 text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.06] text-white text-shadow-luxe">
              Begin Your Journey
            </h1>
            <p className="mx-auto mt-7 max-w-[60ch] text-[1.05rem] leading-[1.75] text-white/90 text-shadow-soft">
              Every unforgettable celebration begins with a conversation. Whether
              you&apos;re planning an intimate gathering, destination wedding, luxury
              birthday, corporate event, or beautifully styled interior, we&apos;d be
              honored to create something extraordinary together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[720px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,11vw,9.5rem)] text-center">
          <Reveal>
            <span className="eyebrow eyebrow-ink">Introduction</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Your First-Class Consultation
            </h2>
            <div className="mx-auto mt-7 max-w-[58ch] space-y-5 text-[1.02rem] leading-[1.8] text-plum-body">
              <p>Every Fly Girl experience begins with understanding your vision.</p>
              <p>
                We&apos;ll learn about your celebration, your style, your priorities, and
                the details that matter most before creating a personalized design
                proposal created exclusively for you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(4rem,8vw,6rem)] max-w-[640px] text-center">
            <span className="eyebrow eyebrow-ink">What to Expect</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              A Private Design Appointment
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journeyExperience.map((item, i) => (
              <Reveal
                key={item.title}
                as="article"
                delay={(i % 4) * 0.08}
                className="flex flex-col rounded-[4px] border border-gold/25 bg-gradient-to-b from-white to-ivory/40 p-7 text-center shadow-media"
              >
                <span
                  aria-hidden="true"
                  className="mx-auto mb-4 h-9 w-9 rounded-full border border-gold/50"
                />
                <h3 className="text-[1.1rem] leading-snug text-plum">{item.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-[1.7] text-plum-body">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION FEE, elegant callout, not a large price box */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[640px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,9vw,7rem)] text-center">
          <Reveal>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-3 border-y border-gold/25 py-9">
              <span className="font-serif text-lg italic text-gold-ink">
                {previewFee.title}
              </span>
              <span className="font-serif text-3xl text-plum">{previewFee.price}</span>
              <p className="mt-2 text-[0.95rem] leading-[1.75] text-plum-body">
                {previewFee.body}
              </p>
              <p className="text-[0.95rem] leading-[1.75] text-plum-body">
                {previewFee.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. THE INQUIRY FORM */}
      <section id="inquiry-form" className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(3.5rem,7vw,5.5rem)] max-w-[680px] text-center">
            <span className="eyebrow eyebrow-ink">Reserve Your Design Consultation</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Tell Us About Your Celebration
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto max-w-[820px]">
            <JourneyInquiryForm />
          </Reveal>
        </div>
      </section>

      {/* 6 & 7. BOTTOM SECTION, closing statement + CTA */}
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
            <h2 className="mb-6 mt-6 text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.15] text-plum">
              We Can&apos;t Wait To Meet You
            </h2>
            <div className="mx-auto mb-10 max-w-[52ch] space-y-4 text-plum-body">
              <p>Thank you for considering Fly Girl Events &amp; Design.</p>
              <p>
                Every celebration we create is thoughtfully designed, deeply personal,
                and crafted with extraordinary attention to detail.
              </p>
              <p>We look forward to bringing your vision to life.</p>
            </div>
            <Button href="#inquiry-form" variant="primary">
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
      <Faq />
    </>
  );
}
