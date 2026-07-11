import Reveal from "@/components/Reveal";

const pillars = [
  {
    numeral: "I",
    title: "Emotion First",
    body: "Every design begins with how the moment should feel, then works outward to the details.",
  },
  {
    numeral: "II",
    title: "Considered Luxury",
    body: "Restraint and richness in balance. Nothing excessive, nothing accidental.",
  },
  {
    numeral: "III",
    title: "Sense of Place",
    body: "Design that transports — inspired by the world's most beautiful destinations.",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-warmwhite">
      <div className="section-shell max-w-[900px] text-center">
        <Reveal>
          <span className="eyebrow mb-6 block">Our Design Philosophy</span>
        </Reveal>
        <Reveal delay={0.12}>
          <blockquote className="text-[clamp(1.6rem,3.6vw,2.9rem)] font-light leading-[1.35] text-plum">
            People may forget what happened during an event —{" "}
            <em className="italic text-gold-deep">but they&apos;ll never forget how it
            made them feel</em>. That&apos;s the experience we design.
          </blockquote>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mx-auto mt-10 h-px w-[60px] bg-gold" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12}>
              <div className="mb-4 font-serif text-base tracking-[0.3em] text-gold">
                {pillar.numeral}
              </div>
              <h4 className="mb-2 text-2xl text-plum">{pillar.title}</h4>
              <p className="text-[0.82rem] leading-relaxed text-plum-soft/80">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
