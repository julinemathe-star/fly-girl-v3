import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ExperienceRow from "@/components/ExperienceRow";
import JourneySection from "@/components/sections/JourneySection";
import { experiences } from "@/lib/experiences";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Every Fly Girl experience begins with your vision — corporate and executive experiences, styled spaces, welcome gifts, destination experiences, and private celebrations, designed exclusively for you.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiences"
        title="Every Experience Begins with Your Vision"
        eyebrowClassName="eyebrow-ink"
      />

      {/* Intro copy — minimal, centered, generous space */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[60ch] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(4rem,8vw,7rem)] text-center">
          <Reveal>
            <p className="text-[clamp(1.05rem,1.6vw,1.35rem)] font-light leading-relaxed text-plum-soft">
              Every Fly Girl experience begins with your imagination.
            </p>
            <p className="mt-6 text-plum-soft">
              We don&apos;t sell preset themes or cookie-cutter packages. From
              boardrooms to ballrooms, we design one-of-a-kind experiences inspired by
              your goals, your space, your story, and the impression you want to leave.
            </p>
            <p className="mt-8 font-serif text-2xl italic text-plum">
              You bring the vision. Fly Girl brings it to life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Fly Girl Experience — four-step client journey */}
      <JourneySection />

      {/* Experience Collections — editorial image-forward rows */}
      <section id="collections" className="bg-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(3.5rem,7vw,6rem)] max-w-[640px] text-center">
            <span className="eyebrow eyebrow-ink">Experience Collections</span>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] text-plum">
              Celebrations We Love Designing
            </h2>
            <p className="mt-4 text-plum-soft">
              A few of the celebrations we love designing — offered to inspire, never as
              preset packages. Consider them a starting point for something entirely your own.
            </p>
          </Reveal>

          <div className="flex flex-col gap-[clamp(4.5rem,10vw,9rem)]">
            {experiences.map((experience, i) => (
              <ExperienceRow key={experience.id} experience={experience} index={i} />
            ))}
          </div>

          <Reveal className="mx-auto mt-[clamp(4rem,8vw,7rem)] max-w-[640px] text-center">
            <p className="font-serif text-xl italic text-gold-ink sm:text-2xl">
              Our gallery exists to inspire—not to limit—what is possible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA — matches the homepage inquiry treatment */}
      <section className="relative overflow-hidden bg-plum text-warmwhite">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(201,162,75,0.22), transparent 70%)",
          }}
        />
        <div className="section-shell relative z-[2]">
          <Reveal className="mx-auto max-w-[680px] text-center">
            <span className="eyebrow text-champagne">Begin</span>
            <h2 className="mb-6 mt-5 text-[clamp(2.2rem,4.4vw,3.6rem)] text-white">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="mx-auto mb-10 max-w-[48ch] text-warmwhite/80">
              Every unforgettable celebration begins with a conversation. We&apos;d love
              to learn about your vision and create something designed exclusively for you.
            </p>
            <Button href="/begin-your-journey" variant="primary">
              Begin Your Journey
            </Button>
            <div className="mt-11 text-[0.74rem] uppercase tracking-[0.22em] text-champagne">
              <a
                href={`mailto:${site.email}`}
                className="border-b border-gold/50 pb-0.5 transition-colors duration-300 hover:text-white"
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
