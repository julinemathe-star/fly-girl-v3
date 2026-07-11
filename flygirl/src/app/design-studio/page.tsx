import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import InquirySection from "@/components/sections/InquirySection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Our Design Studio",
  description:
    "Visit the Fly Girl Design Studio at Formation — Dallas Cowboys World Headquarters, Frisco, Texas. By appointment only. Review, touch, compare, and approve every key element of your project.",
};

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Formation, 5 Cowboys Way, Frisco, TX 75034");

const whyVisit = [
  "Design concept",
  "Color palette",
  "Linens and chargers",
  "Table styling",
  "Welcome Gift sample",
  "Packaging and ribbon",
  "Menus and signage",
  "Materials and décor selections",
  "Styling direction",
];

export default function DesignStudioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] w-full items-end overflow-hidden">
        <Image
          src="/media/design-studio-hero.jpg"
          alt="A visualization of the Fly Girl Design Studio consultation experience at Formation in The Star District, Frisco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,25,48,0.32) 0%, rgba(15,25,48,0.12) 38%, rgba(15,25,48,0.16) 68%, rgba(15,25,48,0.56) 100%)",
          }}
        />
        <div className="relative z-[2] mx-auto w-full max-w-[880px] px-6 pb-[clamp(3.5rem,9vw,7rem)] text-center">
          <Reveal>
            <span className="eyebrow text-champagne">Welcome Aboard</span>
            <h1 className="mt-5 text-[clamp(2.3rem,5vw,4rem)] leading-[1.08] text-white text-shadow-luxe">
              Visit Our Design Studio
            </h1>
            <p className="mx-auto mt-5 max-w-[46ch] font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-[1.4] text-champagne text-shadow-soft">
              Where Luxury Celebrations Begin
            </p>
            <p className="mx-auto mt-7 max-w-[58ch] text-[1.05rem] leading-[1.8] text-white/90 text-shadow-soft">
              The Fly Girl Design Studio is located at Formation — Dallas Cowboys World
              Headquarters, Frisco, Texas. By appointment only.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/begin-your-journey" variant="primary">
                Begin Your Journey
              </Button>
              <Button href={directionsUrl} variant="ghost">
                Get Directions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION DETAIL */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[640px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3.5rem,7vw,5.5rem)] text-center">
          <Reveal>
            <span className="eyebrow eyebrow-ink">Located At</span>
            <p className="mt-5 font-serif text-2xl text-plum">{site.studioName}</p>
            <p className="mt-2 text-plum-body">
              Dallas Cowboys World Headquarters
              <br />
              {site.streetAddress}
              <br />
              {site.cityStateZip}
            </p>
            <p className="mt-5 text-[0.78rem] uppercase tracking-luxe text-gold-ink">
              {site.appointmentLine}
            </p>
            <p className="mt-4">
              <a
                href={directionsUrl}
                className="text-[0.8rem] uppercase tracking-luxe text-gold-ink underline underline-offset-4 transition-colors hover:text-plum"
              >
                View Map &amp; Directions
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY VISIT THE STUDIO */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="mx-auto max-w-shell px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3.5rem,7vw,5.5rem)]">
          <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-[680px] text-center">
            <span className="eyebrow eyebrow-ink">The Experience</span>
            <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
              The Design Studio Experience
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-plum-body">
              Clients visit the studio to review, touch, compare, and approve the key
              elements of their project before production or event day. Depending on
              the project, this may include:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-media">
              <Image
                src="/media/design-studio-hero.jpg"
                alt="A visualization of the Fly Girl Design Studio lounge and consultation space"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {whyVisit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[1.02rem] leading-[1.6] text-plum-body"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-[6px] w-[6px] flex-none rounded-full bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSPIRED BY EXCELLENCE */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-shell px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3.5rem,7vw,5.5rem)]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <Reveal delay={0.1} className="order-2 md:order-1">
              <span className="eyebrow eyebrow-ink">Inspired by Excellence</span>
              <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
                A Setting Worthy of the Occasion
              </h2>
              <p className="mt-5 max-w-[52ch] text-plum-body">
                Our studio is located at Formation, within the Dallas Cowboys World
                Headquarters in Frisco — a setting we intentionally chose because it
                reflects the level of hospitality, design, professionalism, and
                executive experience we want every client to enjoy.
              </p>
              <p className="mt-4 max-w-[52ch] text-plum-body">
                From the architecture to the energy of the district itself, every detail
                of the setting mirrors the standard we bring to your celebration.
              </p>
              <div className="mt-7">
                <Button href={directionsUrl} variant="dark">
                  Get Directions
                </Button>
              </div>
            </Reveal>

            <Reveal className="relative order-1 aspect-[4/5] overflow-hidden rounded-[4px] shadow-media md:order-2">
              <Image
                src="/media/design-studio-hero.jpg"
                alt="A visualization of the Fly Girl Design Studio at Formation, reflecting the architecture and energy of The Star District"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}
