export type PortfolioItem = {
  src: string;
  title: string;
  category: string;
  alt: string;
  /** Grid span class for the featured homepage mosaic. */
  span: string;
};

export const portfolio: PortfolioItem[] = [
  {
    src: "/media/portfolio-a.jpg",
    title: "Sunset Vows",
    category: "Destination Experience",
    alt: "Destination ceremony arch styled with florals along a candlelit aisle at sunset",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    src: "/media/portfolio-b.jpg",
    title: "Blossom & Crystal",
    category: "Event Design",
    alt: "Crystal chandeliers suspended among blossoming branches",
    span: "md:col-span-5",
  },
  {
    src: "/media/portfolio-c.jpg",
    title: "Golden Hour",
    category: "Atmosphere",
    alt: "Chandeliers among palm trees glowing at golden hour",
    span: "md:col-span-5",
  },
  {
    src: "/media/portfolio-f.jpg",
    title: "Candlelit Aisle",
    category: "Floral Direction",
    alt: "Foreground of roses and pillar candles lining a ceremony aisle",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    src: "/media/portfolio-e.jpg",
    title: "Wheels Up",
    category: "The Fly Girl Signature",
    alt: "Sunset sky over the ocean with an airplane in flight above a floral arch",
    span: "md:col-span-4",
  },
  {
    src: "/media/portfolio-g.jpg",
    title: "The Table",
    category: "Tablescape",
    alt: "Elegant reception tablescape set at dusk",
    span: "md:col-span-4",
  },
  {
    src: "/media/portfolio-d.jpg",
    title: "Reflections",
    category: "Signature Details",
    alt: "Candles reflected along a mirrored ceremony aisle",
    span: "md:col-span-4",
  },
];
