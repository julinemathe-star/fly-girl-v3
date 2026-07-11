import Reveal from "@/components/Reveal";

type Step = {
  n: string;
  title: string;
  body: string;
  /** Optional secondary paragraph (e.g. preview details). */
  note?: string;
  /** Optional pull-quote shown beneath the step. */
  quote?: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Begin Your Journey",
    body: "This is where we get to know you. Share your inspiration, Pinterest boards, favorite colors, travel memories, traditions, event ideas, and the feeling you want your guests to experience. Every celebration begins with your vision.",
  },
  {
    n: "02",
    title: "Design Development",
    body: "This is where Fly Girl begins to design. We thoughtfully curate every detail — luxury tablescapes, signature displays, personalized stationery, invitations, menu cards, table numbers, favors, florals, linens, chargers, and styling — composed entirely around your vision.",
    note: "Every design is completely customized. Nothing is copied. Nothing is cookie-cutter.",
  },
  {
    n: "03",
    title: "Design Studio Consultation",
    body: "Before production begins, you're invited into the Fly Girl Design Studio at Formation to review, touch, compare, and approve the key elements of your project. The Design Studio Consultation is $250.",
    note: "During the preview, you'll experience many of the actual design elements planned for your celebration — tablescapes, chargers, linens, florals, personalized menu cards, table numbers, invitations, signature displays, favors, and your overall design direction.",
    quote:
      "We don't ask you to imagine your celebration.\nWe invite you to experience it before it happens.",
  },
  {
    n: "04",
    title: "The Celebration Begins",
    body: "Once every detail has been thoughtfully prepared, Fly Girl transforms the space while you focus on making memories — styling every curated element so you can relax, celebrate, and enjoy the people you love.",
  },
];

/**
 * The Fly Girl Journey — the client experience in four elegant steps.
 * Editorial, image-free, generous whitespace; step 03 carries extra detail.
 */
export default function JourneySection() {
  return (
    <section id="journey" className="bg-warmwhite">
      <div className="section-shell">
        <Reveal className="mx-auto mb-[clamp(3.5rem,7vw,5.5rem)] max-w-[640px] text-center">
          <span className="eyebrow eyebrow-ink">The Experience</span>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] text-plum">
            The Fly Girl Experience
          </h2>
          <p className="mt-4 text-plum-soft">
            From your first idea to your unforgettable celebration.
          </p>
        </Reveal>

        <ol className="mx-auto max-w-[820px]">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={(i % 2) * 0.08}
              className="grid grid-cols-[auto_1fr] gap-6 border-b border-gold/20 py-10 last:border-b-0 sm:gap-10"
            >
              <span
                aria-hidden="true"
                className="font-serif text-3xl leading-none text-gold-ink/80 sm:text-4xl"
              >
                {step.n}
              </span>
              <div>
                <h3 className="mb-3 text-2xl text-plum sm:text-[1.7rem]">
                  {step.title}
                </h3>
                <p className="max-w-[56ch] text-plum-soft">{step.body}</p>

                {step.note ? (
                  <p className="mt-4 max-w-[56ch] text-[0.92rem] leading-relaxed text-plum-soft/85">
                    {step.note}
                  </p>
                ) : null}

                {step.quote ? (
                  <blockquote className="mt-6 border-l-2 border-gold/60 pl-5 font-serif text-lg italic leading-snug text-gold-ink sm:text-xl">
                    {step.quote.split("\n").map((line, li) => (
                      <span key={li} className="block">
                        {line}
                      </span>
                    ))}
                  </blockquote>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
