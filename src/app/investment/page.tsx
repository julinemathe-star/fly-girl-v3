import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  investmentTiers,
  designStudioConsultation,
  nextSteps,
  includedInventory,
  inventoryNote,
  materialsNote,
  everyExperienceIncludes,
  hiringStatement,
} from "@/lib/investment";
import { site, consultationHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment",
  description:
    "Signature Services and starting investments from Fly Girl Events & Design, luxury event designer in Frisco for corporate event styling, styled spaces, luxury home staging, executive office styling, welcome gifts, and private celebrations.",
};

export default function InvestmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Signature Services"
        title="Every unforgettable experience begins with a vision."
        eyebrowClassName="eyebrow-ink"
      />

      {/* PHILOSOPHY INTRO */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[720px] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(4rem,8vw,7rem)] text-center">
          <Reveal className="space-y-6 text-[1.05rem] leading-[1.8] text-plum-body">
            <p>
              Every Fly Girl project is thoughtfully designed around your goals, your
              space, and the experience you want people to remember. You are not simply
              hiring us to decorate. You are hiring Fly Girl to imagine the concept,
              design every detail, and execute it flawlessly from beginning to
              completion.
            </p>
            <p>
              Rather than fixed packages, each Signature Service begins at a starting
              investment, your final proposal is shaped around your vision, your
              space, and the details that matter most.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE SERVICES, starting investments */}
      <section id="collections" className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(4rem,8vw,6rem)] max-w-[680px] text-center">
            <span className="eyebrow eyebrow-ink">Starting Investment</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Signature Services
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-plum-body">
              Experiences, never packages. Each investment begins here and grows with
              the vision we create together.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {investmentTiers.map((tier, i) => (
              <Reveal
                key={tier.name}
                as="article"
                delay={(i % 3) * 0.1}
                className="flex flex-col rounded-[4px] border border-gold/25 bg-gradient-to-b from-white to-ivory/40 p-8 shadow-media transition-transform duration-500 ease-luxe hover:-translate-y-1"
              >
                <h3 className="text-[1.55rem] leading-tight text-plum">{tier.name}</h3>
                {tier.detail ? (
                  <p className="mt-2 text-[0.82rem] leading-snug text-plum-body/80">
                    {tier.detail}
                  </p>
                ) : null}

                {tier.custom ? (
                  <div className="mt-5">
                    <span className="block font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
                      Investment
                    </span>
                    <span className="mt-1 block font-serif text-[1.7rem] leading-none text-plum">
                      Custom Proposal
                    </span>
                  </div>
                ) : (
                  <div className="mt-5">
                    <span className="block font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
                      Investment Begins at
                    </span>
                    <span className="mt-1 block font-serif text-[2.1rem] leading-none text-plum">
                      {tier.from}
                      {tier.unit ? (
                        <span className="ml-1.5 font-sans text-[0.75rem] font-normal normal-case tracking-normal text-plum-body">
                          {tier.unit}
                        </span>
                      ) : null}
                    </span>
                  </div>
                )}

                <p className="mt-5 text-[0.95rem] leading-[1.75] text-plum-body">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-gold/20 pt-6">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-plum-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-[5px] w-[5px] flex-none rounded-full bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {tier.invoicedSeparately ? (
                  <p className="mt-6 border-t border-gold/20 pt-5 text-[0.8rem] leading-relaxed text-plum-body/75">
                    {tier.invoicedSeparately}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-[clamp(3rem,6vw,4.5rem)] max-w-[640px] text-center">
            <p className="font-serif text-xl italic leading-[1.8] text-gold-ink">
              &ldquo;{hiringStatement}&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE DESIGN STUDIO CONSULTATION */}
      <section className="bg-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <span className="eyebrow eyebrow-ink">Where Every Journey Begins</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              {designStudioConsultation.title}
            </h2>
            <p className="mx-auto mt-7 max-w-[54ch] text-[1.05rem] leading-[1.8] text-plum-body">
              {designStudioConsultation.location}
            </p>
            <div className="mt-9 inline-flex items-baseline gap-3 rounded-[4px] border border-gold/40 bg-warmwhite px-8 py-5 shadow-media">
              <span className="font-serif text-[2.4rem] leading-none text-plum">
                {designStudioConsultation.price}
              </span>
              <span className="font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
                Private
                <br />
                Appointment
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-[640px]">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {designStudioConsultation.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-plum-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-[5px] w-[5px] flex-none rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EVERY FLY GIRL EXPERIENCE INCLUDES */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow eyebrow-ink">The Fly Girl Standard</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Every Fly Girl Project Includes
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-[760px]">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {everyExperienceIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-plum-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-[5px] w-[5px] flex-none rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CURATED INVENTORY */}
      <section className="bg-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow eyebrow-ink">Included Where Appropriate</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Curated In-Stock Inventory
            </h2>
            <p className="mx-auto mt-5 max-w-[56ch] text-plum-body">{inventoryNote}</p>
            <p className="mx-auto mt-4 max-w-[54ch] text-plum-body">
              This may include available:
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-[720px]">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
              {includedInventory.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-plum-body"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-[5px] w-[5px] flex-none rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="mx-auto mt-10 max-w-[620px] text-center">
            <p className="text-[0.95rem] leading-[1.75] text-plum-body">{materialsNote}</p>
          </Reveal>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(3.5rem,7vw,5.5rem)] max-w-[640px] text-center">
            <span className="eyebrow eyebrow-ink">The Journey Ahead</span>
            <h2 className="mt-6 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              What Happens Next
            </h2>
          </Reveal>

          <ol className="mx-auto max-w-[820px]">
            {nextSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={(i % 2) * 0.08}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-gold/20 py-10 last:border-b-0 sm:gap-10"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl leading-none text-gold-ink/80 sm:text-4xl"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="mb-3 text-2xl leading-snug text-plum sm:text-[1.7rem]">
                    {step.title}
                  </h3>
                  <p className="max-w-[56ch] leading-[1.8] text-plum-body">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FINALE CTA */}
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
            <h2 className="mb-8 mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[1.2] text-plum">
              Let&apos;s Create Something Unforgettable.
            </h2>
            <p className="mx-auto mb-10 max-w-[52ch] leading-[1.8] text-plum-body">
              Reserve your Design Studio Consultation and begin the experience, from
              boardrooms to ballrooms, we design spaces people remember.
            </p>
            <Button href={consultationHref} variant="dark">
              Reserve Your Design Consultation
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
