export type PortfolioImage = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short descriptor shown under the title, e.g. location or event type. */
  subtitle: string;
  summary: string;
  images: PortfolioImage[];
  /** Which category gallery this belongs to, e.g. "little-luxe". Used to link from the category intro to its case studies. */
  category: string;
};

export type CategoryGallery = {
  slug: string;
  title: string;
  description: string;
};

/**
 * Featured, fully-told portfolio case studies. Each is a real event with a
 * complete image set. Add images to the array as real photography arrives —
 * filenames are stable so dropping files into the matching
 * public/media/portfolio/<slug>/ folder is all that's needed.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "destination-wedding",
    title: "Destination Wedding",
    subtitle: "Destination Experience — Montego Bay, Jamaica",
    category: "destination-experiences",
    summary:
      "A tropical destination celebration in champagne, teal, and coral — from the travel-inspired invitation suite to vows exchanged along the shoreline at golden hour.",
    images: [
      {
        src: "/media/portfolio/destination-wedding/01-invitation-suite.jpg",
        alt: "Travel-inspired destination wedding invitation suite with passport, boarding pass, and Sandals South Coast Jamaica stationery",
      },
      {
        src: "/media/portfolio/destination-wedding/02-tablescape-centerpiece.jpg",
        alt: "Vibrant tropical centerpiece with orchids and teal glassware at an oceanfront reception",
      },
      {
        src: "/media/portfolio/destination-wedding/03-welcome-bags.jpg",
        alt: "Personalized destination wedding welcome bags with travel essentials and tropical florals",
      },
      {
        src: "/media/portfolio/destination-wedding/04-couple-portrait-shoreline.jpg",
        alt: "Bride and groom portrait along the shoreline at sunset",
      },
      {
        src: "/media/portfolio/destination-wedding/05-couple-walking-beach.jpg",
        alt: "Bride and groom walking hand in hand along the beach",
      },
      {
        src: "/media/portfolio/destination-wedding/06-dress-ocean-view.jpg",
        alt: "Wedding gown hanging with an ocean view balcony backdrop",
      },
      {
        src: "/media/portfolio/destination-wedding/07-bridal-shoe-ring-detail.jpg",
        alt: "Bridal shoe and engagement ring detail styled with the bouquet",
      },
      {
        src: "/media/portfolio/destination-wedding/08-groom-accessories-flatlay.jpg",
        alt: "Groom's accessories flat lay with cologne, sunglasses, and boutonniere",
      },
      {
        src: "/media/portfolio/destination-wedding/09-wedding-cake.jpg",
        alt: "Three-tier wedding cake with teal ribbon and personalized cake topper",
      },
    ],
  },
  {
    slug: "marios-50th-birthday",
    title: "Mario's 50th Birthday",
    subtitle: "Milestone Birthday — Montego Bay, Jamaica",
    category: "signature-tablescapes",
    summary:
      "A milestone celebration in navy and gold, aged to perfection — from the illuminated backdrop and personalized signage to a favor box worthy of the occasion.",
    images: [
      {
        src: "/media/portfolio/marios-50th-birthday/01-backdrop-neon-signage.jpg",
        alt: "Navy and gold 50th birthday backdrop with illuminated neon signage, celebration styling, and greenery wall",
      },
      {
        src: "/media/portfolio/marios-50th-birthday/02-invitation-design.jpg",
        alt: "Navy and gold 50th birthday invitation design with monogram crest and Jamaica destination detail",
      },
      {
        src: "/media/portfolio/marios-50th-birthday/03-favor-box.jpg",
        alt: "Personalized navy and gold favor box with private reserve bottle, cookies, and thank-you tag",
      },
      {
        src: "/media/portfolio/marios-50th-birthday/04-place-setting-menu.jpg",
        alt: "Gold-beaded charger place setting with a personalized navy menu card",
      },
    ],
  },
  {
    slug: "laurens-glamp-and-glow-spa-party",
    title: "Lauren's Glamp & Glow Spa Party",
    subtitle: "Little Luxe™ — Presented by Team 2 Much™",
    category: "little-luxe",
    summary:
      "A glamping-meets-spa-day celebration in lavender and soft sparkle, proof that Little Luxe means never compromising on style.",
    images: [
      {
        src: "/media/portfolio/little-luxe/01-glamp-tents-room.jpg",
        alt: "Lauren's Glamp & Glow Spa Party — glamping tents styled with fairy lights and a welcome screen",
      },
      {
        src: "/media/portfolio/little-luxe/02-personalized-welcome-tumblers.jpg",
        alt: "Personalized welcome tumblers and gift baskets for each guest at a glamp and glow spa party",
      },
      {
        src: "/media/portfolio/little-luxe/03-birthday-cake.jpg",
        alt: "Lavender birthday cake with a personalized photo topper and fresh floral base",
      },
      {
        src: "/media/portfolio/little-luxe/04-smores-favor-kit.jpg",
        alt: "Personalized s'mores favor kits for a glamp and glow spa party",
      },
      {
        src: "/media/portfolio/little-luxe/05-printed-schedule.jpg",
        alt: "A printed evening schedule styled for a glamp and glow sleepover celebration",
      },
      {
        src: "/media/portfolio/little-luxe/06-lip-gloss-lab-candid.jpg",
        alt: "Guests creating custom lip gloss together at a lip gloss lab activity station",
      },
      {
        src: "/media/portfolio/little-luxe/07-welcome-signage.jpg",
        alt: "Welcome signage for Lauren's Glamp and Glow Spa Party with whimsical illustrated tent scene",
      },
    ],
  },
  {
    slug: "laurens-7th-birthday",
    title: "Lauren's Birthday",
    subtitle: "Private Celebration — Black & Gold",
    category: "private-celebrations",
    summary:
      "A black and gold celebration built around Lauren's favorite doll — polished, playful, and finished with a surprise character appearance.",
    images: [
      {
        src: "/media/portfolio/laurens-7th-birthday/01-dessert-table-styling.jpg",
        alt: "Black and gold dessert table with a two-tier drip cake, themed cupcake toppers, and mirrored backdrop",
      },
      {
        src: "/media/portfolio/laurens-7th-birthday/02-guests-candid.jpg",
        alt: "Two young guests smiling together at the birthday celebration",
      },
      {
        src: "/media/portfolio/laurens-7th-birthday/03-birthday-girl-portrait.jpg",
        alt: "Portrait of the birthday girl in her black and gold themed outfit",
      },
      {
        src: "/media/portfolio/laurens-7th-birthday/04-mascot-appearance.jpg",
        alt: "A surprise character mascot appearance delighting the birthday girl and guests",
      },
      {
        src: "/media/portfolio/laurens-7th-birthday/05-favor-packaging.jpg",
        alt: "Personalized black and gold favor packaging and treat box for the birthday celebration",
      },
    ],
  },
  {
    slug: "azoyahs-graduation-celebration",
    title: "Azoyah's Graduation Celebration",
    subtitle: "Milestone Celebration — Class of 2026, FAMU Bound",
    category: "editorial-details",
    summary:
      "A blush and sparkle celebration honoring a hard-earned achievement — from the personalized backdrop and buffet styling to the sweetest welcome favors for guests.",
    images: [
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/01-sweetheart-table-backdrop.jpg",
        alt: "Personalized graduation sweetheart table with illuminated name signage, florals, and Class of 2026 signage",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/02-buffet-styling.jpg",
        alt: "Blush pink buffet styling with neon name sign, florals, and labeled serving stations",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/03-table-number-portrait.jpg",
        alt: "Sparkling table number card featuring a personal portrait and guest well-wishes prompt",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/04-famu-bound-menu-card.jpg",
        alt: "FAMU Bound menu card styled on a blush napkin atop a beaded charger",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/05-welcome-favor-bag.jpg",
        alt: "Personalized graduation welcome favor bag with rose hand cream, lip balm, and chocolate kisses",
      },
    ],
  },
  {
    slug: "welcome-gifts-collection",
    title: "Welcome Gifts & Signature Favors",
    subtitle: "The Fly Girl Signature",
    category: "welcome-gifts",
    summary:
      "A curated look at Fly Girl welcome gifts and guest favors — concepted, personalized, and finished with premium packaging, ribbon, and thoughtful presentation.",
    images: [
      {
        src: "/media/portfolio/destination-wedding/03-welcome-bags.jpg",
        alt: "Personalized destination welcome bags with travel essentials and tropical florals",
      },
      {
        src: "/media/portfolio/welcome-gifts/navy-gold-welcome-gift-set.jpg",
        alt: "Navy and gold Fly Girl branded welcome gift collection with tumbler, luggage tag, sleep mask, and wax-sealed stationery",
      },
      {
        src: "/media/portfolio/welcome-gifts/black-gold-cocktail-gift-box.jpg",
        alt: "Black and gold Fly Girl cocktail gift box with crystal glass, gold barware, and old fashioned syrup",
      },
      {
        src: "/media/portfolio/marios-50th-birthday/03-favor-box.jpg",
        alt: "Navy and gold milestone celebration favor box with personalized detailing",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/05-welcome-favor-bag.jpg",
        alt: "Personalized graduation welcome favor bag with rose hand cream, lip balm, and chocolate kisses",
      },
      {
        src: "/media/portfolio/little-luxe/02-personalized-welcome-tumblers.jpg",
        alt: "Personalized welcome tumblers styled as guest gifts for a boutique celebration",
      },
      {
        src: "/media/portfolio/little-luxe/04-smores-favor-kit.jpg",
        alt: "Packaged s'mores favor kit with personalized labeling and ribbon",
      },
    ],
  },
  {
    slug: "signature-details-collection",
    title: "Signature Details",
    subtitle: "Invitations, Menus & Personal Touches",
    category: "private-celebrations",
    summary:
      "Invitation suites, menu cards, signage, and place settings — the considered details that carry a Fly Girl experience from first impression to final course.",
    images: [
      {
        src: "/media/portfolio/destination-wedding/01-invitation-suite.jpg",
        alt: "Travel-inspired destination invitation suite with passport-style stationery",
      },
      {
        src: "/media/portfolio/marios-50th-birthday/02-invitation-design.jpg",
        alt: "Navy and gold milestone invitation design with monogram crest",
      },
      {
        src: "/media/portfolio/marios-50th-birthday/04-place-setting-menu.jpg",
        alt: "Navy and gold place setting with personalized menu card",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/04-famu-bound-menu-card.jpg",
        alt: "FAMU Bound menu card styled on a blush napkin atop a beaded charger",
      },
      {
        src: "/media/portfolio/azoyahs-graduation-celebration/03-table-number-portrait.jpg",
        alt: "Sparkling table number card featuring a personal portrait",
      },
      {
        src: "/media/portfolio/little-luxe/07-welcome-signage.jpg",
        alt: "Personalized welcome signage styled for a boutique celebration",
      },
    ],
  },
  {
    slug: "corporate-executive-concepts",
    title: "Corporate & Executive Experiences",
    subtitle: "Networking, Executive Environments & VIP Hospitality",
    category: "corporate-executive",
    summary:
      "Executive networking events, refined office environments, and VIP hospitality — designed to reflect your brand at its most considered.",
    images: [
      {
        src: "/media/concepts/corporate/networking-event-concept.jpg",
        alt: "Design Concept — an executive networking event with styled cocktail tables, lounge seating, and illuminated signage",
      },
      {
        src: "/media/concepts/styled-spaces/executive-office-concept.jpg",
        alt: "Design Concept — a styled executive office with layered shelving, warm lighting, and refined details",
      },
      {
        src: "/media/concepts/styled-spaces/executive-lounge-concept.jpg",
        alt: "Design Concept — a moody executive lounge with leather seating, fireplace, and considered styling",
      },
    ],
  },
  {
    slug: "sports-hospitality-concepts",
    title: "Sports Hospitality",
    subtitle: "Draft Party & Team Dinner Transformations",
    category: "sports-hospitality",
    summary:
      "An empty marble hall becomes a black-and-gold Draft Night, and a corporate boardroom becomes a championship team dinner — sports hospitality designed around a team's identity.",
    images: [
      {
        src: "/media/concepts/sports/draft-party-concept.jpg",
        alt: "Design Concept — a black and gold Draft Night lounge with illuminated backdrop, styled cocktail tables, and fictional team branding",
      },
      {
        src: "/media/concepts/sports/draft-party-before.jpg",
        alt: "Before — the empty marble event space prior to the Draft Night design concept",
      },
      {
        src: "/media/concepts/sports/team-dinner-concept.jpg",
        alt: "Design Concept — a candlelit team dinner with black and gold place settings, greenery centerpieces, and motivational styling",
      },
      {
        src: "/media/concepts/sports/team-dinner-before.jpg",
        alt: "Before — the executive boardroom prior to the team dinner design concept",
      },
    ],
  },
  {
    slug: "styled-spaces-concepts",
    title: "Styled Spaces",
    subtitle: "Executive Offices & Luxury Interiors",
    category: "styled-spaces",
    summary:
      "An executive office transformation inspired by our Elite European Auto project, and refined luxury interiors composed with an editorial eye.",
    images: [
      {
        src: "/media/concepts/styled-spaces/executive-office-concept.jpg",
        alt: "Design Concept — a styled executive office with automotive art, layered shelving, warm lighting, and refined details",
      },
      {
        src: "/media/concepts/styled-spaces/executive-office-before.jpg",
        alt: "Before — the unstyled executive office prior to the design concept",
      },
      {
        src: "/media/concepts/styled-spaces/executive-lounge-concept.jpg",
        alt: "Design Concept — a moody luxury lounge with leather seating, fireplace, and considered styling",
      },
      {
        src: "/media/concepts/staging/living-room-after-concept.jpg",
        alt: "Design Concept — a bright, editorial living room styled in warm ivory with layered textures",
      },
    ],
  },
  {
    slug: "executive-dining",
    title: "Executive Dinners & Signature Tablescapes",
    subtitle: "Corporate & Private Dining Details",
    category: "corporate-executive",
    summary:
      "Black-and-gold executive dinners, acrylic gold-foil menus, and candlelit ivory tables — the considered dining details that carry a Fly Girl experience from first course to final toast.",
    images: [
      {
        src: "/media/portfolio/executive-dining/01-black-gold-tablescape.jpg",
        alt: "Black and gold executive dinner tablescape with patterned chargers, black goblets, and taper candles",
      },
      {
        src: "/media/portfolio/executive-dining/02-acrylic-gold-menu.jpg",
        alt: "Acrylic menu with gold foil script resting on a black satin napkin with gold flatware",
      },
      {
        src: "/media/portfolio/executive-dining/03-white-gold-place-setting.jpg",
        alt: "White and gold place setting with beaded charger, pleated napkin, and printed menu",
      },
      {
        src: "/media/portfolio/executive-dining/04-candlelit-ivory-tablescape.jpg",
        alt: "Candlelit ivory and gold tablescape with greenery garland, roses, and champagne",
      },
    ],
  },
  {
    slug: "holiday-styling",
    title: "Holiday & Seasonal Styling",
    subtitle: "Winter White & Gold",
    category: "corporate-executive",
    summary:
      "Winter white and gold seasonal styling for corporate holiday events and private gatherings — crushed velvet, beaded chargers, mercury glass, and quiet sparkle.",
    images: [
      {
        src: "/media/portfolio/holiday-styling/02-winter-white-place-setting.jpg",
        alt: "Winter white place setting with gold-beaded charger, crystal napkin ring, and gold mercury-glass stemware",
      },
      {
        src: "/media/portfolio/holiday-styling/01-gold-beaded-charger-setting.jpg",
        alt: "Gold jeweled charger with white embroidered napkin and butterfly napkin ring on a black table",
      },
      {
        src: "/media/portfolio/holiday-styling/03-winter-white-tablescape.jpg",
        alt: "Winter white holiday tablescape with crushed velvet linen, gold chiavari chairs, and white reindeer centerpiece",
      },
    ],
  },
  {
    slug: "blush-gold-celebration",
    title: "Blush & Gold Celebrations",
    subtitle: "Soft Glamour — Celebration Styling",
    category: "private-celebrations",
    summary:
      "Blush, lavender, and gold celebration styling — sequin linens, gold chiavari seating, layered florals, and jeweled place settings designed for milestone moments.",
    images: [
      {
        src: "/media/portfolio/blush-gold-celebration/02-quinceanera-head-table.jpg",
        alt: "Quinceañera head table with blush sequin linen, floral garland backdrop, and throne seating",
      },
      {
        src: "/media/portfolio/blush-gold-celebration/01-blush-event-room.jpg",
        alt: "Blush celebration room with gold chiavari chairs, sequin accents, and white floral centerpieces",
      },
      {
        src: "/media/portfolio/blush-gold-celebration/03-blush-lavender-place-settings.jpg",
        alt: "Blush and lavender place settings with gold flatware, jeweled napkin rings, and rose petals",
      },
      {
        src: "/media/portfolio/blush-gold-celebration/04-chiavari-chair-detail.jpg",
        alt: "Gold chiavari chair with blush satin sash and single rose detail",
      },
    ],
  },
];

/** Returns all case studies belonging to a given category slug, in listed order. */
export function caseStudiesInCategory(categorySlug: string): CaseStudy[] {
  return caseStudies.filter((study) => study.category === categorySlug);
}
export const categoryGalleries: CategoryGallery[] = [
  {
    slug: "corporate-executive",
    title: "Corporate & Executive Experiences",
    description:
      "Executive dinners, VIP receptions, and corporate hospitality — designed to reflect your brand at its most considered.",
  },
  {
    slug: "sports-hospitality",
    title: "Sports Hospitality",
    description:
      "Draft parties, team dinners, VIP hospitality, and luxury sports experiences — designed around a team's identity and culture.",
  },
  {
    slug: "styled-spaces",
    title: "Styled Spaces",
    description: "Interiors composed with the same editorial eye as our celebrations.",
  },
  {
    slug: "private-celebrations",
    title: "Private Celebrations",
    description: "Milestone moments composed with elegance and personality.",
  },
  {
    slug: "destination-experiences",
    title: "Destination Experiences",
    description: "Celebrations designed wherever the journey takes us.",
  },
  {
    slug: "welcome-gifts",
    title: "Welcome Gifts",
    description:
      "The Fly Girl signature — premium packaging, personalization, and unforgettable first impressions.",
  },
  {
    slug: "little-luxe",
    title: "Little Luxe™",
    description:
      "A limited boutique offering for elevated children's celebrations, presented by Team 2 Much™.",
  },
];
