import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function InquirySection() {
  return (
    <section id="inquiry" className="relative overflow-hidden bg-plum text-warmwhite">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(201,162,75,0.22), transparent 70%)",
        }}
      />
      <div className="section-shell relative z-[2]">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <span className="eyebrow text-champagne">Begin</span>
          <h2 className="mb-6 mt-5 text-[clamp(2.2rem,4.4vw,3.6rem)] text-white">
            Let&apos;s Create Something Unforgettable.
          </h2>
          <p className="mx-auto mb-10 max-w-[48ch] text-warmwhite/80">
            We welcome a limited number of commissions each season to protect the level
            of attention every experience deserves. Tell us about yours.
          </p>
          <Button href="/begin-your-journey" variant="primary">
            Begin Your Journey
          </Button>
          <div className="mt-11 text-[0.74rem] uppercase tracking-[0.22em] text-champagne">
            <a
              href={`mailto:${site.email}`}
              className="border-b border-gold/50 pb-0.5 transition-colors duration-300 hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
