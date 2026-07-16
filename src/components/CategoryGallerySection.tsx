import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { CategoryGallery, CaseStudy } from "@/lib/portfolio-galleries";

type CategoryGallerySectionProps = {
  gallery: CategoryGallery;
  studies: CaseStudy[];
  tone?: "warmwhite" | "ivory";
};

/**
 * A category introduction (e.g. "Little Luxe") followed by cards linking into
 * each of its case studies. Renders nothing if the category has no case
 * studies yet, so the page stays clean while collections are awaiting
 * their first fully-told story.
 */
export default function CategoryGallerySection({
  gallery,
  studies,
  tone = "warmwhite",
}: CategoryGallerySectionProps) {
  if (studies.length === 0) return null;

  const bg = tone === "ivory" ? "bg-gradient-to-b from-ivory to-warmwhite" : "bg-warmwhite";

  return (
    <section id={gallery.slug} className={`${bg} scroll-mt-24`}>
      <div className="mx-auto max-w-shell px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,6vw,5.5rem)]">
        <Reveal className="mx-auto mb-[clamp(2rem,4vw,3rem)] max-w-[640px] text-center">
          <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] text-plum">
            {gallery.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-plum-body">{gallery.description}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => {
            const cover = study.images[0];
            if (!cover) return null;
            return (
              <Reveal
                key={study.slug}
                as="article"
                delay={(i % 3) * 0.1}
                className="group"
              >
                <Link href={`#story-${study.slug}`} className="block">
                  <figure className="relative aspect-[4/5] overflow-hidden rounded-[3px] shadow-media">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-plum/60 opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                    <figcaption className="absolute bottom-5 left-5 z-[2]">
                      <div className="font-serif text-xl text-white">{study.title}</div>
                      <div className="mt-0.5 text-[0.68rem] uppercase tracking-luxe text-champagne">
                        {study.subtitle}
                      </div>
                    </figcaption>
                  </figure>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
