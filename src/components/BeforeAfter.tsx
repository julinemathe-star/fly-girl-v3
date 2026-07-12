import Image from "next/image";
import Reveal from "@/components/Reveal";

type BeforeAfterProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  /** Label for the styled side, e.g. "Design Concept". */
  afterLabel?: string;
  caption?: string;
};

/**
 * An editorial Before & After pair. The "after" side is labeled Design
 * Concept by default so digitally reimagined spaces are never presented
 * as completed client projects.
 */
export default function BeforeAfter({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  afterLabel = "After",
  caption,
}: BeforeAfterProps) {
  return (
    <Reveal as="figure">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] shadow-media">
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-[2px] bg-navy-deep/60 px-2 py-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/85">
            Before
          </span>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] shadow-media">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-[2px] bg-gold-deep/70 px-2 py-1 text-[0.5rem] uppercase tracking-[0.14em] text-white/85">
            {afterLabel}
          </span>
        </div>
      </div>
      {caption ? (
        <figcaption className="mx-auto mt-4 max-w-[64ch] text-center text-[0.85rem] leading-relaxed text-plum-body/85">
          {caption}
        </figcaption>
      ) : null}
    </Reveal>
  );
}
