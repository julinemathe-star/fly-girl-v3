"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import BeforeAfter from "@/components/BeforeAfter";
import type { CaseStudy } from "@/lib/portfolio-galleries";

type CaseStudySectionProps = {
  study: CaseStudy;
  tone?: "warmwhite" | "ivory";
};

/**
 * A fully-told portfolio case study: title, short summary, and an editorial
 * image grid. Every image is clickable and opens the project in an elegant
 * lightbox with prev/next, keyboard, and swipe navigation. Renders nothing
 * if no images are available yet.
 */
export default function CaseStudySection({ study, tone = "warmwhite" }: CaseStudySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const pairs = study.pairs ?? [];
  if (study.images.length === 0 && pairs.length === 0) return null;

  const bg = tone === "ivory" ? "bg-gradient-to-b from-ivory to-warmwhite" : "bg-warmwhite";
  const hero = study.images[0] ?? null;
  const rest = study.images.slice(1);

  return (
    <section id={`story-${study.slug}`} className={`${bg} scroll-mt-24`}>
      <div className="mx-auto max-w-shell px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5.5rem)]">
        <Reveal className="mx-auto mb-[clamp(2rem,4vw,3rem)] max-w-[720px] text-center">
          <span className="eyebrow eyebrow-ink">{study.subtitle}</span>
          <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum">
            {study.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-plum-body">{study.summary}</p>
        </Reveal>

        {/* Before → Concept Rendering pairs, always labeled, never stacked apart */}
        {pairs.length > 0 ? (
          <div className="mb-8 space-y-10">
            {pairs.map((pair) => (
              <BeforeAfter
                key={pair.concept.src}
                beforeSrc={pair.before.src}
                beforeAlt={pair.before.alt}
                afterSrc={pair.concept.src}
                afterAlt={pair.concept.alt}
                afterLabel="Concept Rendering"
                caption={pair.caption}
              />
            ))}
          </div>
        ) : null}

        {/* Hero image, full width — clickable */}
        {hero ? (
        <Reveal className="mb-4">
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            aria-label={`View larger: ${hero.alt}`}
            className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-[4px] shadow-media sm:aspect-[21/8]"
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              loading="lazy"
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.03]"
            />
          </button>
        </Reveal>
        ) : null}

        {/* Remaining images, editorial grid — each clickable */}
        {rest.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {rest.map((img, i) => (
              <Reveal
                key={img.src}
                as="figure"
                delay={(i % 4) * 0.08}
                className="group relative aspect-[4/5] overflow-hidden rounded-[3px] shadow-media"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i + 1)}
                  aria-label={`View larger: ${img.alt}`}
                  className="absolute inset-0 block h-full w-full cursor-zoom-in"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.06]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          images={study.images}
          index={lightboxIndex}
          title={study.title}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  );
}
