export type Service = {
  title: string;
  blurb: string;
  detail: string;
  /** Call-to-action label — every service guides visitors toward contacting Fly Girl. */
  cta: string;
};

/**
 * V3 service architecture — Fly Girl is a luxury creative studio.
 * Corporate & Executive Event Styling leads. Sports Hospitality, Home
 * Staging, and Virtual Staging join the studio's offerings.
 */
export const services: Service[] = [
  {
    title: "Corporate & Executive Event Styling",
    blurb: "First-class experiences for the moments your brand is measured by.",
    detail:
      "Executive dinners, VIP receptions, networking events, client-appreciation experiences, brand launches, leadership retreats, and corporate celebrations — each designed, styled, and executed with the polish of a first-class arrival.",
    cta: "Request a Proposal",
  },
  {
    title: "Sports Hospitality",
    blurb: "Draft parties, team dinners, and VIP experiences designed to win.",
    detail:
      "Draft parties, team dinners, VIP hospitality suites, networking events, and luxury sports experiences — environments designed around a team's identity, culture, and the people who make it great.",
    cta: "Request a Proposal",
  },
  {
    title: "Styled Spaces",
    blurb: "Interiors composed with an editorial eye.",
    detail:
      "Executive offices, reception areas, commercial offices, luxury homes, model homes, and vacation rentals — spaces styled to feel considered, warm, and quietly glamorous.",
    cta: "Schedule a Design Consultation",
  },
  {
    title: "Executive Office Styling",
    blurb: "Offices that carry the same authority as the people in them.",
    detail:
      "Executive suites, private offices, and leadership spaces styled with refined finishes, layered details, and a sense of arrival — environments designed for the work of making decisions.",
    cta: "Schedule a Design Consultation",
  },
  {
    title: "Commercial Styling",
    blurb: "Considered luxury for the spaces where business happens.",
    detail:
      "Reception areas, leasing centers, hospitality lounges, restaurants, luxury retail, and commercial interiors — styled to reflect the standard of the brand behind them.",
    cta: "Schedule a Design Consultation",
  },
  {
    title: "Model Home Styling",
    blurb: "Model homes buyers fall in love with the moment they walk in.",
    detail:
      "For builders and developers — room-by-room styling direction, furnishing concepts, and finished presentation that turn a model home into the reason a community sells.",
    cta: "Start Your Project",
  },
  {
    title: "Home Staging",
    blurb: "Thoughtful styling that creates emotional buyer connections.",
    detail:
      "For homeowners, Realtors, and builders preparing homes for market — staging that helps buyers picture the life they want, not just the house in front of them.",
    cta: "Start Your Project",
  },
  {
    title: "Virtual Staging",
    blurb: "See the space reimagined before a single piece is purchased.",
    detail:
      "Send photos of an empty or outdated room and Fly Girl digitally reimagines the space — perfect for builders, luxury Realtors, developers, vacation rentals, homeowners, and model homes. Presented as design concepts.",
    cta: "Start Your Project",
  },
  {
    title: "Vacation Rental Styling",
    blurb: "Guest experiences worth returning to.",
    detail:
      "Room-by-room styling and welcome-experience design that turn a rental into a destination guests remember, review, and rebook.",
    cta: "Start Your Project",
  },
  {
    title: "Welcome Gifts",
    blurb: "The Fly Girl signature — a first impression, beautifully wrapped.",
    detail:
      "Corporate welcome gifts, VIP gifts, destination welcome gifts, executive gifts, luxury gift bags and boxes, hotel welcome gifts, and client-appreciation gifts — concepted by Fly Girl, sampled at the Design Studio, then created and assembled with premium packaging and personal touches.",
    cta: "Request Custom Gifts",
  },
  {
    title: "Private Celebrations",
    blurb: "Milestone moments composed with elegance and personality.",
    detail:
      "Milestone birthdays, intimate dinners, graduations, and destination experiences — considered, characterful events designed around the guest of honor, with tablescape design woven through wherever the occasion calls for it.",
    cta: "Book a Consultation",
  },
  {
    title: "Little Luxe™",
    blurb: "A limited boutique offering for elevated children's celebrations.",
    detail:
      "Presented by Team 2 Much™ — imaginative children's celebrations designed with the same artistry as our most refined events, offered on a limited basis each season.",
    cta: "Book a Consultation",
  },
];
