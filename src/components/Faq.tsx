"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

const items: FaqItem[] = [
  {
    q: "What is included in the Design Consultation?",
    a: "A private working session with Juline — at the Design Studio or virtually — where we walk through your vision, venue or space, palette, and priorities, and leave you with a clear design direction and next steps for your event or project.",
  },
  {
    q: "Is the consultation fee applied toward my event?",
    a: "Yes — when you move forward with a Fly Girl engagement, your consultation fee is credited toward your design investment.",
  },
  {
    q: "Do you travel?",
    a: "We do. Fly Girl is based in Frisco, Texas and designs experiences across the Dallas–Fort Worth area, nationwide, and worldwide for destination commissions.",
  },
  {
    q: "Do you provide d\u00e9cor outside Texas?",
    a: "Yes. For destination events we design the complete experience and coordinate d\u00e9cor through trusted partners in your destination, styled and finished to the Fly Girl standard.",
  },
  {
    q: "How far in advance should I book?",
    a: "Signature events are best reserved eight to twelve weeks ahead — earlier for peak seasons and destination experiences. Welcome gifts and styled details can often be accommodated on shorter timelines.",
  },
];

/**
 * Collapsible FAQ — a quiet, accessible accordion in the editorial style.
 */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-b from-ivory to-warmwhite">
      <div className="mx-auto max-w-[760px] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,8vw,6.5rem)]">
        <div className="mb-10 text-center">
          <span className="eyebrow eyebrow-ink">Good to Know</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.7rem)] leading-[1.15] text-plum">
            Questions, Answered
          </h2>
        </div>

        <div className="divide-y divide-gold/25 border-y border-gold/25">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex min-h-[64px] w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-serif text-[1.15rem] leading-snug text-plum sm:text-[1.3rem]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-gold-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-6 text-plum-body">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
