import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
};

/** Eyebrow + serif title + optional intro, used to open sections consistently. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-white" : "text-plum";
  const introColor = tone === "light" ? "text-warmwhite/80" : "text-plum-soft";
  const eyebrowColor = tone === "light" ? "text-champagne" : "";

  return (
    <Reveal className={`max-w-[640px] ${alignment}`}>
      <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      <h2
        className={`mt-4 text-[clamp(2rem,3.6vw,3.1rem)] ${titleColor}`}
      >
        {title}
      </h2>
      {intro ? <p className={`mt-4 ${introColor}`}>{intro}</p> : null}
    </Reveal>
  );
}
