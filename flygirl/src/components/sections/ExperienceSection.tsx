import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "We begin with your story, your vision, and the feeling you want your guests to carry home.",
  },
  {
    n: "02",
    title: "Design",
    body: "A bespoke creative direction — palette, styling, and atmosphere, presented in full.",
  },
  {
    n: "03",
    title: "Curation",
    body: "Sourcing, florals, and every considered detail, managed with quiet precision.",
  },
  {
    n: "04",
    title: "The Day",
    body: "Seamless styling and on-site direction, so you are fully present in the moment.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-warmwhite to-blush/60"
    >
      <div className="section-shell">
        <div className="mb-[clamp(3rem,6vw,4.5rem)] flex justify-center">
          <SectionHeading
            eyebrow="The Client Experience"
            title="Considered from first note to final toast."
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} className="relative text-center">
              <div className="font-serif text-[2.6rem] leading-none text-gold/85">
                {step.n}
              </div>
              <h4 className="mb-2 mt-3 text-xl text-plum">{step.title}</h4>
              <p className="text-[0.8rem] leading-relaxed text-plum-soft/80">
                {step.body}
              </p>
              {i < steps.length - 1 ? (
                <span className="absolute right-[-1rem] top-5 hidden h-px w-8 bg-gold/50 md:block" />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
