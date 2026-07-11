import type { Metadata } from "next";
import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import InquirySection from "@/components/sections/InquirySection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Signature services from Fly Girl Events & Design — corporate event styling in Frisco, styled spaces, luxury property staging, executive office styling, welcome gifts, destination experiences, and private celebrations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Create"
        title="Signature Services"
        intro="Corporate and executive experiences, styled spaces, welcome gifts, and celebrations — each approached as a bespoke commission, never a package."
        eyebrowClassName="eyebrow-ink"
      />

      <section className="bg-warmwhite">
        <div className="section-shell pt-0">
          <div className="mx-auto max-w-[860px]">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 2) * 0.08}
                className="group grid grid-cols-[auto_1fr] gap-6 border-b border-gold/20 py-10 last:border-b-0 sm:gap-10"
              >
                <span className="font-serif text-2xl text-gold/70 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="mb-3 text-2xl text-plum sm:text-3xl">{service.title}</h2>
                  <p className="max-w-[54ch] text-plum-soft">{service.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOME STAGING — dedicated section */}
      <section id="home-staging" className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <span className="eyebrow eyebrow-ink">Prepare to Sell</span>
              <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
                Home Staging
              </h2>
              <p className="mt-5 max-w-[52ch] leading-[1.85] text-plum-body">
                Fly Girl helps homeowners, Realtors, and builders prepare homes for
                market by thoughtfully styling interiors to create emotional buyer
                connections.
              </p>
              <p className="mt-4 max-w-[52ch] leading-[1.85] text-plum-body">
                Buyers don&apos;t fall in love with square footage — they fall in love
                with the life they can picture inside it. We stage every room so that
                the moment a buyer walks in, the home already feels like theirs.
              </p>
            </Reveal>
            <Reveal delay={0.1} as="figure">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] shadow-media">
                <Image
                  src="/media/concepts/home-staging/vacant-living-room.jpg"
                  alt="A vacant new-build living room awaiting Fly Girl staging — the blank canvas before buyers can picture a life inside it"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-[0.85rem] text-plum-body/85">
                Every vacant home is a story waiting to be styled.
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIRTUAL STAGING — dedicated section */}
      <section id="virtual-staging" className="bg-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-[680px] text-center">
            <span className="eyebrow eyebrow-ink">See It Before You Buy It</span>
            <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Virtual Staging
            </h2>
            <p className="mx-auto mt-5 max-w-[56ch] leading-[1.85] text-plum-body">
              Send us photos of an empty or outdated room, and Fly Girl digitally
              reimagines the space before a single piece of furniture is purchased.
              Perfect for builders, luxury Realtors, developers, vacation rentals,
              homeowners, and model homes.
            </p>
            <p className="mx-auto mt-4 max-w-[56ch] text-[0.9rem] leading-relaxed text-plum-body/80">
              Virtual staging images are presented as design concepts — a preview of
              what your space can become, never a completed client project.
            </p>
          </Reveal>

          <div className="space-y-10">
            <BeforeAfter
              beforeSrc="/media/concepts/virtual-staging/living-room-before.jpg"
              beforeAlt="Before — a rustic living room with stone fireplace prior to the virtual staging concept"
              afterSrc="/media/concepts/virtual-staging/living-room-concept.jpg"
              afterAlt="Design Concept — the same living room digitally reimagined in warm ivory with editorial styling"
              caption="A rustic great room, digitally reimagined in warm ivory — same architecture, entirely new feeling."
            />
            <BeforeAfter
              beforeSrc="/media/concepts/virtual-staging/bathroom-before.jpg"
              beforeAlt="Before — an unstyled bathroom prior to the virtual staging concept"
              afterSrc="/media/concepts/virtual-staging/bathroom-concept.jpg"
              afterAlt="Design Concept — the same bathroom digitally reimagined with layered shelving, art, and warm styling"
              caption="An everyday bathroom, digitally restyled with warmth, texture, and considered details."
            />
          </div>
        </div>
      </section>

      {/* WELCOME GIFTS — the Fly Girl signature */}
      <section id="welcome-gifts" className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="section-shell">
          <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-[680px] text-center">
            <span className="eyebrow eyebrow-ink">The Fly Girl Signature</span>
            <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              Welcome Gifts
            </h2>
            <p className="mx-auto mt-5 max-w-[56ch] text-plum-body">
              A first impression, beautifully wrapped. Corporate welcome gifts,
              executive and VIP gifts, destination and hotel-room gifts,
              client-appreciation and retreat gifts, luxury gift boxes, and
              personalized guest gifts — finished with premium packaging, ribbon,
              thoughtful contents, and impeccable presentation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-media">
              <Image
                src="/media/portfolio/destination-wedding/03-welcome-bags.jpg"
                alt="Personalized Fly Girl welcome gifts styled with travel essentials, premium packaging, and tropical florals"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="text-2xl text-plum">How It Works</h3>
              <ol className="mt-7 space-y-6">
                {[
                  "Fly Girl develops the concept.",
                  "You review and approve the concept.",
                  "A finished sample is presented during the Design Studio Experience.",
                  "Once approved, Fly Girl creates and assembles the full gift collection.",
                ].map((step, i) => (
                  <li key={step} className="grid grid-cols-[auto_1fr] gap-5">
                    <span
                      aria-hidden="true"
                      className="font-serif text-2xl leading-none text-gold-ink/80"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-[1.75] text-plum-body">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}
