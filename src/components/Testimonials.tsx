import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/testimonials";

/**
 * Refined testimonial section, renders only when reviews exist in
 * src/lib/testimonials.ts, so the homepage never shows placeholders.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-warmwhite">
      <div className="mx-auto max-w-[880px] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(5rem,10vw,8.5rem)] text-center">
        <Reveal>
          <span className="eyebrow eyebrow-ink">Kind Words</span>
        </Reveal>
        <div className="mt-10 space-y-14">
          {testimonials.map((t) => (
            <Reveal key={t.quote} as="blockquote">
              <p className="mx-auto max-w-[46ch] font-serif text-[clamp(1.3rem,2.4vw,1.8rem)] leading-[1.7] text-plum">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 text-[0.74rem] font-semibold uppercase tracking-luxe text-gold-ink">
                {t.name}
                {t.context ? <span className="text-plum-body/70"> · {t.context}</span> : null}
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
