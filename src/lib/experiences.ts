export type Experience = {
  id: string;
  title: string;
  /** Optional small line above the title (attribution or concept label). */
  subheading?: string;
  description: string;
  image: string;
  alt: string;
  /** Where "Learn More" leads, the matching portfolio or service section. */
  href: string;
};

/**
 * Signature Experiences, the final Fly Girl direction. A luxury creative
 * studio spanning executive events, sports hospitality, styled spaces,
 * staging, and celebrations. Concept visualizations are labeled as such.
 */
export const experiences: Experience[] = [
  {
    id: "corporate-executive-styling",
    title: "Corporate & Executive Styling",
    description:
      "Executive dinners, VIP receptions, networking events, and corporate hospitality, designed to reflect your organization at its most considered and memorable.",
    image: "/media/experiences/corporate-executive-styling.jpg",
    alt: "Design Concept: an executive networking event with styled cocktail tables, lounge seating, and illuminated signage",
    href: "/portfolio#corporate-executive",
  },
  {
    id: "sports-hospitality",
    title: "Sports Hospitality",
    description:
      "Draft parties, VIP hospitality suites, and luxury sports experiences, environments designed around a team's identity, culture, and the people who make it great.",
    image: "/media/experiences/sports-hospitality.jpg",
    alt: "Design Concept: a black and gold Draft Night lounge with illuminated backdrop and fictional team branding",
    href: "/portfolio#sports-hospitality",
  },
  {
    id: "team-dinners",
    title: "Team Dinners",
    description:
      "Championship-caliber team dinners, candlelit tables, personalized details, and rooms styled to celebrate what a team stands for.",
    image: "/media/experiences/team-dinners.jpg",
    alt: "Design Concept: a candlelit team dinner with black and gold place settings and motivational styling",
    href: "/portfolio#sports-hospitality",
  },
  {
    id: "private-celebrations",
    title: "Private Celebrations",
    description:
      "Milestone birthdays, intimate dinners, and personal celebrations, as distinctive and unforgettable as the person at the center of them.",
    image: "/media/experiences/private-celebrations.jpg",
    alt: "Mario's 50th birthday, navy and gold celebration backdrop with illuminated signage and greenery wall",
    href: "/portfolio#private-celebrations",
  },
  {
    id: "destination-experiences",
    title: "Destination Experiences",
    description:
      "Wherever your celebration takes you, we bring effortless design to the world's most beautiful settings, drawn from a lifetime of travel.",
    image: "/media/experiences/destination-experiences.jpg",
    alt: "A vibrant tropical destination tablescape in Montego Bay with orchids and teal glassware",
    href: "/portfolio#destination-experiences",
  },
  {
    id: "styled-spaces",
    title: "Styled Spaces",
    description:
      "Executive offices, commercial interiors, model homes, and luxury residences, spaces styled to feel considered, warm, and quietly glamorous.",
    image: "/media/experiences/styled-spaces.jpg",
    alt: "Design Concept: a styled executive office with automotive art, layered shelving, and refined details",
    href: "/portfolio#styled-spaces",
  },
  {
    id: "home-staging",
    title: "Home Staging",
    description:
      "Thoughtful styling that prepares homes for market and creates emotional buyer connections, for homeowners, Realtors, and builders.",
    image: "/media/experiences/home-staging.jpg",
    alt: "Before and after, the same living room transformed with layered navy, gold, and editorial staging",
    href: "/services#home-staging",
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    description:
      "Send photos of an empty or outdated room and Fly Girl digitally reimagines the space, before a single piece of furniture is purchased.",
    image: "/media/experiences/virtual-staging.jpg",
    alt: "Before and after, a bathroom digitally reimagined with layered shelving, art, and warm styling, shown as a design concept",
    href: "/services#virtual-staging",
  },
  {
    id: "welcome-gifts",
    title: "Welcome Gifts",
    description:
      "The Fly Girl signature. Corporate, VIP, and destination welcome gifts, concepted, sampled at the Design Studio, and assembled with premium packaging and personal touches.",
    image: "/media/experiences/welcome-gifts.jpg",
    alt: "Personalized destination welcome bags styled with travel essentials and tropical florals",
    href: "/portfolio#welcome-gifts",
  },
  {
    id: "little-luxe",
    title: "Little Luxe™",
    subheading: "Presented by Team 2 Much™",
    description:
      "A limited boutique offering for elevated children's celebrations, playful worlds designed with the same artistry as our most refined events.",
    image: "/media/experiences/little-luxe.jpg",
    alt: "Lauren's luxury birthday celebration, black and gold dessert table with two-tier cake and mirrored backdrop",
    href: "/portfolio#little-luxe",
  },
];
