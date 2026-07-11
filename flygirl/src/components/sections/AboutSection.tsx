import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="bg-warmwhite">
      <div className="section-shell grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[clamp(2.5rem,6vw,6rem)]">
        <Reveal>
          <span className="eyebrow mb-6 block">The Studio</span>
          <h2 className="mb-6 text-[clamp(2rem,3.6vw,3.1rem)] text-plum">
            From boardrooms to ballrooms,
            <br />
            we design spaces people remember.
          </h2>
          <p className="mb-5 max-w-[46ch] text-plum-soft">
            Fly Girl Events &amp; Design is a luxury creative studio born from more
            than twenty-five years in the sky — a career spent studying grace,
            service, and the quiet luxury of the world&apos;s most beautiful
            destinations.
          </p>
          <p className="mb-5 max-w-[46ch] text-plum-soft">
            That perspective now shapes everything we design: corporate and executive
            experiences, styled spaces, welcome gifts, and celebrations that feel
            transportive, intentional, and unmistakably elevated.
          </p>
          <p className="mt-8 font-serif text-2xl italic text-gold-deep">
            Designed to feel like somewhere unforgettable.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative order-first aspect-[4/3] overflow-hidden rounded-[3px] shadow-media md:order-none md:aspect-[4/5]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/media/portfolio-a.jpg"
            >
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-3.5 border border-white/50" />
            <div className="absolute bottom-0 left-0 bg-plum px-7 py-6 font-serif text-champagne">
              <div className="text-4xl leading-none text-white">25+</div>
              <div className="mt-1.5 font-sans text-[0.62rem] uppercase tracking-luxe text-champagne">
                Years of
                <br />
                Elevated Service
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
