import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { site } from "@/lib/site";

/**
 * Homepage — confidence through simplicity.
 * Hero film → brief introduction → one editorial studio image →
 * contact → a single call to action. Nothing else.
 */
export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Brief introduction */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[680px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,10vw,8.5rem)] text-center">
          <Reveal>
            <span className="eyebrow eyebrow-ink">Luxury Event Design Studio</span>
            <p className="mx-auto mt-7 font-serif text-[clamp(1.45rem,2.6vw,2rem)] font-light leading-[1.5] text-plum">
              Celebrations, executive experiences, and styled spaces designed with
              intention in Frisco, Texas and worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One editorial studio image */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-shell px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(5rem,10vw,8.5rem)]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] shadow-media sm:aspect-[16/9]">
              <Image
                src="/media/design-process.jpg"
                alt="Juline Mathe working inside the Fly Girl Design Studio, curating fabrics, finishes, and design materials"
                fill
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact + the single call to action */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="mx-auto max-w-[640px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(5rem,10vw,8.5rem)] text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.15] text-plum">
              {site.name}
            </h2>

            <div className="mt-8 space-y-1 text-plum-body">
              <p>Design Studio located at {site.studioName}</p>
              <p>Dallas Cowboys World Headquarters</p>
              <p>5 Cowboys Way</p>
              <p>Suite 300</p>
              <p>Frisco, Texas 75034</p>
            </div>

            <p className="mt-6 text-[0.78rem] uppercase tracking-luxe text-gold-ink">
              {site.appointmentLine}
            </p>

            <div className="mt-8 space-y-2 text-plum-body">
              <p>
                Phone:{" "}
                <a href={`tel:${site.phoneHref}`} className="text-plum transition-colors hover:text-gold-ink">
                  {site.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="text-plum transition-colors hover:text-gold-ink">
                  {site.email}
                </a>
              </p>
            </div>

            <div className="mt-11">
              <Button href="/begin-your-journey" variant="dark">
                Schedule a Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
