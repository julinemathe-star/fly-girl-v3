export type ConceptImage = {
  src: string;
  alt: string;
};

/**
 * AI-generated concept renderings used to demonstrate future design
 * capabilities. These are explicitly NOT real event or project photography —
 * kept in their own section, separate from the real-work Portfolio, so the
 * main portfolio only ever builds trust with verified completed projects.
 */
export const concepts: ConceptImage[] = [
  {
    src: "/media/concepts/01-elite-auto-reception-concept.jpg",
    alt: "Concept rendering: a luxury automotive showroom reception design",
  },
  {
    src: "/media/concepts/02-living-kitchen-concept.jpg",
    alt: "Concept rendering: a styled open-concept living and kitchen space",
  },
  {
    src: "/media/concepts/03-two-story-living-concept.jpg",
    alt: "Concept rendering: a two-story living room styling concept",
  },
  {
    src: "/media/concepts/04-luxury-kitchen-concept.jpg",
    alt: "Concept rendering: a luxury kitchen styling concept with waterfall island",
  },
];
