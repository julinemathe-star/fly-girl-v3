import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Experience } from "@/lib/experiences";

type ExperienceRowProps = {
  experience: Experience;
  index: number;
};

/**
 * Large image on one side, minimal copy on the other, alternating each row.
 * Image-forward and editorial, with a subtle "Learn More" cue on hover.
 */
export default function ExperienceRow({ experience, index }: ExperienceRowProps) {
  const imageLeft = index % 2 === 0;

  return (
    <Reveal
      as="article"
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-[clamp(3rem,6vw,6rem)]"
    >
      {/* Image */}
      <div className={imageLeft ? "md:order-1" : "md:order-2"}>
        <figure className="group relative aspect-[5/4] overflow-hidden rounded-[3px] shadow-media">
          <Image
            src={experience.image}
            alt={experience.alt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/25 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-40" />
        </figure>
      </div>

      {/* Copy */}
      <div
        className={`${
          imageLeft ? "md:order-2" : "md:order-1"
        } max-w-[46ch] ${imageLeft ? "" : "md:ml-auto"}`}
      >
        {experience.subheading ? (
          <span className="mb-3 block font-sans text-[0.72rem] uppercase tracking-luxe text-gold-ink">
            {experience.subheading}
          </span>
        ) : null}
        <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] text-plum">
          {experience.title}
        </h3>
        <p className="mt-5 text-plum-soft">{experience.description}</p>

        <a
          href={experience.href}
          className="group/link mt-7 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-luxe text-gold-ink"
        >
          <span className="relative">
            Learn More
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover/link:w-full" />
          </span>
          <span
            aria-hidden="true"
            className="transition-transform duration-500 ease-luxe group-hover/link:translate-x-1"
          >
            &rarr;
          </span>
        </a>
      </div>
    </Reveal>
  );
}
