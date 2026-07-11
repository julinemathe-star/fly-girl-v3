import Reveal from "@/components/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Extra classes for the eyebrow (e.g. higher-contrast variant per page). */
  eyebrowClassName?: string;
  /** Override the band's bottom padding (defaults to the standard spacing). */
  bottomPaddingClassName?: string;
};

/** Consistent header band for interior pages, offset for the fixed nav. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  eyebrowClassName = "",
  bottomPaddingClassName = "pb-[clamp(3rem,7vw,5rem)]",
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-ivory to-warmwhite pt-[clamp(8rem,14vw,11rem)]">
      <div className={`mx-auto max-w-shell px-[clamp(1.5rem,6vw,5rem)] text-center ${bottomPaddingClassName}`}>
        <Reveal>
          <span className={`eyebrow ${eyebrowClassName}`}>{eyebrow}</span>
          <h1 className="mx-auto mt-4 max-w-[18ch] text-[clamp(2.4rem,5vw,4rem)] text-plum">
            {title}
          </h1>
          {intro ? (
            <p className="mx-auto mt-6 max-w-prose2 text-plum-soft">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
