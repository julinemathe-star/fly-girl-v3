import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Our Design Studio",
  description:
    "Visit the Fly Girl Design Studio at Formation — Dallas Cowboys World Headquarters, Frisco, Texas. By appointment only. Review, touch, compare, and approve every key element of your project.",
};

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Formation, 5 Cowboys Way, Frisco, TX 75034");

export default function DesignStudioPage() {
  return (
    <>
      {/* HERO — the film */}
      <section className="relative w-full overflow-hidden bg-black pt-[112px] md:min-h-[88vh] md:pt-0">
        <h1 className="sr-only">Inside the Design Studio — Fly Girl Events &amp; Design</h1>
        <video
          className="block aspect-video h-auto w-full object-contain md:absolute md:inset-0 md:h-full md:aspect-auto md:object-cover md:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/design-studio-hero.jpg"
          aria-label="A cinematic look inside the creative world of Fly Girl Events & Design"
        >
          <source src="/media/inside-the-design-studio.mp4" type="video/mp4" />
        </video>
        <Image
          src="/brand/fg-video-bug.png"
          alt=""
          aria-hidden="true"
          width={52}
          height={52}
          className="pointer-events-none absolute bottom-2 right-2 z-[2] h-10 w-10 rounded-full object-contain md:bottom-5 md:right-5 md:h-[52px] md:w-[52px]"
        />
      </section>

      {/* THE CONSULTATION — one elegant section */}
      <section className="bg-gradient-to-b from-ivory to-warmwhite">
        <div className="mx-auto max-w-shell px-[clamp(1.5rem,5vw,4rem)] py-[clamp(5rem,9vw,8rem)]">
          <div className="grid grid-cols-1 gap-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-2 md:items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-media">
              <Image
                src="/media/design-studio-hero.jpg"
                alt="The Fly Girl Design Studio lounge and consultation space at Formation"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <span className="eyebrow eyebrow-ink">The Experience</span>
              <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
                The Design Studio Consultation
              </h2>
              <p className="mt-6 max-w-[52ch] text-[1.02rem] leading-[1.8] text-plum-body">
                Clients visit by appointment to review, touch, compare, and approve
                the key elements of their project before production or event day —
                from the design concept, palette, and linens to table styling,
                welcome gift samples, packaging, menus, and signage.
              </p>
              <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-[1.8] text-plum-body">
                Our studio at {site.studioName}, within the Dallas Cowboys World
                Headquarters, was chosen intentionally — a setting that reflects the
                hospitality, design, and executive standard we bring to every
                celebration.
              </p>

              <div className="mt-8 text-plum-body">
                <p className="font-serif text-xl text-plum">{site.studioName}</p>
                <p className="mt-1">
                  {site.streetAddress}, {site.cityStateZip}
                </p>
                <p className="mt-3 text-[0.74rem] uppercase tracking-luxe text-gold-ink">
                  {site.appointmentLine}
                </p>
                <p className="mt-4">
                  <a
                    href={directionsUrl}
                    className="text-[0.78rem] uppercase tracking-luxe text-gold-ink underline underline-offset-4 transition-colors hover:text-plum"
                  >
                    View Map &amp; Directions
                  </a>
                </p>
              </div>

              <div className="mt-10">
                <Button href="/begin-your-journey" variant="dark">
                  Schedule a Consultation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
