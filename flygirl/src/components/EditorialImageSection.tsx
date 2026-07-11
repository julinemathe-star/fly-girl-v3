import Image from "next/image";
import Reveal from "@/components/Reveal";

type EditorialImageSectionProps = {
  eyebrow?: string;
  heading: string;
  body: string[];
  image: string;
  alt: string;
  /** Image above or below the text block. Defaults to below. */
  imagePosition?: "above" | "below";
  tone?: "warmwhite" | "ivory";
};

/**
 * A single immersive editorial moment: short heading, minimal copy, and one
 * large image given room to breathe. Used for the Design Studio Experience story beats.
 */
export default function EditorialImageSection({
  eyebrow,
  heading,
  body,
  image,
  alt,
  imagePosition = "below",
  tone = "warmwhite",
}: EditorialImageSectionProps) {
  const bg = tone === "ivory" ? "bg-gradient-to-b from-ivory to-warmwhite" : "bg-warmwhite";

  const textBlock = (
    <Reveal className="mx-auto max-w-[680px] px-[clamp(1.5rem,6vw,5rem)] text-center">
      {eyebrow ? <span className="eyebrow eyebrow-ink">{eyebrow}</span> : null}
      <h2 className={`${eyebrow ? "mt-6" : ""} text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-plum`}>
        {heading}
      </h2>
      <div className="mx-auto mt-7 max-w-[58ch] space-y-5 text-[1.02rem] leading-[1.85] text-plum-body">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Reveal>
  );

  const imageBlock = (
    <Reveal delay={0.1}>
      <figure className="mx-auto max-w-shell px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,6vw,5rem)]">
        <div className="overflow-hidden rounded-[8px] shadow-media">
          <Image
            src={image}
            alt={alt}
            width={1600}
            height={1200}
            loading="lazy"
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full"
          />
        </div>
      </figure>
    </Reveal>
  );

  return (
    <section className={bg}>
      {imagePosition === "above" ? (
        <>
          {imageBlock}
          <div className="pb-[clamp(4rem,8vw,7rem)]">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="pt-[clamp(5rem,11vw,9.5rem)]">{textBlock}</div>
          {imageBlock}
        </>
      )}
    </section>
  );
}
