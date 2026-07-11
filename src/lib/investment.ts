export type InvestmentTier = {
  name: string;
  detail?: string;
  from?: string;
  unit?: string;
  custom?: boolean;
  description: string;
  includes: string[];
  invoicedSeparately?: string;
};

/**
 * V3 Signature Services & starting investments — never "packages."
 * Corporate & Executive Event Styling appears first by design.
 */
export const investmentTiers: InvestmentTier[] = [
  {
    name: "Corporate & Executive Event Styling",
    detail:
      "Executive dinners, VIP receptions, networking events, sports hospitality, client-appreciation experiences, brand events, and corporate celebrations",
    from: "$3,500",
    description:
      "First-class experiences for the moments your brand is measured by — imagined, designed, and executed flawlessly.",
    includes: [
      "Custom creative concept",
      "Event design direction",
      "Design Studio planning",
      "Layout and styling plan",
      "Tablescape design when applicable",
      "Use of Fly Girl inventory where applicable",
      "Setup and on-site styling",
      "Execution by Juline and the Fly Girl team",
      "Final walkthrough",
    ],
  },
  {
    name: "Private Celebrations",
    from: "$2,500",
    description:
      "Milestone moments composed with elegance and personality — designed entirely around the guest of honor.",
    includes: [
      "Custom creative concept",
      "Event design and styling direction",
      "Design Studio planning",
      "Tablescape design where applicable",
      "Use of Fly Girl inventory where applicable",
      "Setup and on-site styling",
      "Execution by Juline and the Fly Girl team",
      "Final walkthrough",
    ],
  },
  {
    name: "Destination Experiences",
    from: "$4,500",
    description:
      "Celebrations and experiences designed wherever the journey takes you — drawn from a lifetime of travel.",
    includes: [
      "Destination design and creative direction",
      "Travel-ready styling plan",
      "Curated local sourcing direction",
      "Welcome-experience design",
      "On-site styling and execution",
      "Final walkthrough",
    ],
  },
  {
    name: "Commercial Styling",
    from: "$2,500",
    description:
      "Reception areas, executive offices, leasing centers, restaurants, and commercial interiors styled to the standard of the brand behind them.",
    includes: [
      "Space consultation",
      "Design concept",
      "Styling and layout direction",
      "Use of Fly Girl inventory where applicable",
      "On-site installation and styling",
      "Final walkthrough",
    ],
  },
  {
    name: "Model Home Styling",
    from: "$2,000",
    description:
      "Model homes buyers fall in love with the moment they walk in — for builders and developers.",
    includes: [
      "Model-home concept",
      "Room-by-room styling direction",
      "Furnishing recommendations",
      "Installation and finishing touches",
      "Seasonal refresh options",
      "Final styling walkthrough",
    ],
  },
  {
    name: "Home Staging",
    from: "$1,500",
    description:
      "Thoughtful styling that prepares homes for market and creates emotional buyer connections — for homeowners, Realtors, and builders.",
    includes: [
      "Property walkthrough",
      "Staging concept",
      "Furniture-placement plan",
      "Use of Fly Girl inventory where applicable",
      "Installation and finishing touches",
      "Buyer-focused presentation",
      "Final walkthrough",
    ],
  },
  {
    name: "Virtual Staging",
    from: "$395",
    unit: "per room",
    description:
      "Send photos of an empty or outdated room and Fly Girl digitally reimagines the space before furniture is purchased — presented as design concepts.",
    includes: [
      "Photo review and consultation",
      "Digitally reimagined room concept",
      "Styling and furnishing direction",
      "Ideal for builders, Realtors, developers, vacation rentals, and homeowners",
    ],
  },
  {
    name: "Residential Styling",
    from: "$500",
    unit: "per room",
    description:
      "Homes and vacation rentals styled room by room with an editorial eye.",
    includes: [
      "Styling direction for the space",
      "Curated décor and finishing details",
      "Use of Fly Girl inventory where applicable",
      "Installation and final styling",
    ],
  },
  {
    name: "Welcome Gifts",
    detail:
      "Corporate, VIP, destination, executive, hotel, and client-appreciation gifts",
    from: "$750",
    description:
      "The Fly Girl signature — premium packaging, ribbon, personalization, and thoughtful presentation.",
    includes: [
      "Gift concept development",
      "Packaging direction",
      "Product curation",
      "One sample presented during the Design Studio Experience",
      "Assembly and presentation by the Fly Girl team",
    ],
  },
  {
    name: "Little Luxe™",
    detail: "A limited boutique offering, presented by Team 2 Much™",
    from: "$1,995",
    description:
      "Imaginative children's celebrations designed with the same artistry as our most refined events.",
    includes: [
      "Custom concept",
      "Child-focused design direction",
      "Personalized details",
      "Use of Fly Girl inventory where applicable",
      "Setup, styling, and day-of execution",
    ],
  },
];

export const includedInventory = [
  "Linens",
  "Chargers",
  "Napkins",
  "Candlesticks",
  "Vases",
  "Basic décor",
  "Styling pieces",
  "Display pieces",
];

export const inventoryNote =
  "Every event and styling service includes access to Fly Girl's curated in-stock inventory where appropriate. Inventory use is subject to availability and project suitability. Materials are invoiced separately.";

export const materialsNote =
  "Materials, florals, rentals, custom products, purchased décor, signage, favors, delivery, movers, and third-party services are invoiced separately after the design concept is approved.";

/** Shown in the "Every Fly Girl Project Includes" section. */
export const everyExperienceIncludes = [
  "Creative direction",
  "Custom design concept",
  "Professional styling",
  "Use of Fly Girl inventory (where applicable)",
  "Setup",
  "On-site styling",
  "Execution by Juline and the Fly Girl team",
  "Final walkthrough",
];

export const hiringStatement =
  "You aren't hiring Fly Girl simply to decorate—you are hiring a luxury creative studio to imagine it, design it, style it, and execute it flawlessly from concept to completion.";

/** The Design Studio Consultation — an appointment, never described as free. */
export const designStudioConsultation = {
  price: "$250",
  title: "Design Studio Consultation",
  location:
    "Held inside the Fly Girl Design Studio at Formation, located at the Dallas Cowboys World Headquarters in Frisco.",
  includes: [
    "Vision meeting",
    "Design consultation",
    "Mood board",
    "Concept development",
    "Color palette",
    "Material recommendations",
    "Investment planning",
  ],
};

export const nextSteps = [
  {
    n: "01",
    title: "Reserve Your Design Studio Consultation",
    body: "Your $250 Design Studio Consultation is a private appointment at Formation — vision meeting, mood board, concept development, color palette, material recommendations, and investment planning.",
  },
  {
    n: "02",
    title: "Receive Your Custom Design Presentation",
    body: "We'll present your creative vision, inspiration, styling direction, and personalized investment proposal.",
  },
  {
    n: "03",
    title: "Reserve Your Date",
    body: "Once you're ready, we'll finalize your agreement and officially begin bringing your experience to life.",
  },
];
