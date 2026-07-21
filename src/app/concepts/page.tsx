import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import InquirySection from "@/components/sections/InquirySection";
import { concepts } from "@/lib/concepts";

export const metadata: Metadata = {
  title: "Concepts & Design Visualizations",
  description:
    "AI-generated concept renderings exploring future Fly Girl Events & Design styling directions, shown separately from our real, completed project portfolio.",
};

export default function ConceptsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Looking Ahead"
        title="Concepts & Design Visualizations"
        intro="Renderings that explore future design directions, presented separately from our portfolio of real, completed work."
        eyebrowClassName="eyebrow-ink"
      />

      <section className="bg-warmwhite">
        <div className="section-shell pt-0">
          <Reveal className="mx-auto mb-[clamp(3rem,6vw,4.5rem)] max-w-[680px] rounded-[4px] border border-gold/25 bg-gradient-to-b from-ivory to-warmwhite p-8 text-center shadow-media">
            <p className="text-[0.95rem] leading-[1.75] text-plum-body">
              The images on this page are AI-generated concept renderings created to
              explore design direction, not photographs of completed Fly Girl
              projects. For real, completed work, visit our{" "}
              <a
                href="/portfolio"
                className="text-gold-ink underline underline-offset-2 hover:text-plum"
              >
                Portfolio
              </a>
              .
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {concepts.map((concept, i) => (
              <Reveal
                key={concept.src}
                as="figure"
                delay={(i % 2) * 0.1}
                className="relative aspect-[4/3] overflow-hidden rounded-[3px] shadow-media"
              >
                <Image
                  src={concept.src}
                  alt={concept.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 rounded-[2px] bg-plum/40 px-1.5 py-0.5 text-[0.45rem] uppercase tracking-[0.12em] text-white/70">
                  concept
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InquirySection />
    </>
  );
}
