import Image from "next/image";
import Reveal from "@/components/Reveal";
import { portfolio } from "@/lib/portfolio";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-plum text-warmwhite">
      <div className="section-shell">
        <Reveal className="mb-[clamp(2.5rem,5vw,4rem)] text-center">
          <span className="eyebrow text-champagne">Selected Work</span>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.1rem)] text-white">
            Featured Portfolio
          </h2>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-12">
          {portfolio.map((item, i) => (
            <Reveal
              key={item.title}
              as="figure"
              delay={(i % 3) * 0.1}
              className={`group relative col-span-2 row-span-1 overflow-hidden rounded-[2px] ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-plum/[0.66] opacity-[0.55] transition-opacity duration-500 group-hover:opacity-80" />
              <figcaption className="absolute bottom-[1.1rem] left-[1.3rem] z-[2]">
                <div className="font-serif text-xl text-white">{item.title}</div>
                <div className="mt-0.5 text-[0.6rem] uppercase tracking-luxe text-champagne">
                  {item.category}
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
