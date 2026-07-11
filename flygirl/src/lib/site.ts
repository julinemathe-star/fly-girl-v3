export const site = {
  name: "Fly Girl Events & Design",
  shortName: "Fly Girl",
  tagline: "Luxury Event Designer & Creative Director",
  headline: "Creating unforgettable celebrations and beautifully styled spaces.",
  /** One-line positioning shown across the site. */
  positioning: "Luxury Event Designer",
  /** Immediate clarity statement for new visitors (homepage, meta). */
  clarity:
    "We transform celebrations, executive spaces, model homes and luxury environments into unforgettable experiences through thoughtful design, styling and hospitality.",
  serviceLine:
    "Luxury Event Design • Corporate & Executive Experiences • Styled Spaces • Welcome Gifts",
  boardroomsLine: "From boardrooms to ballrooms, we design spaces people remember.",
  description:
    "Fly Girl Events & Design is a luxury creative studio in Frisco, Texas. Luxury event designer for corporate and executive experiences, styled spaces, luxury property staging, welcome gifts, destination experiences, and private celebrations.",
  url: "https://flygirl.events",
  email: "juline@flygirl.events",
  phone: "972-565-3159",
  phoneHref: "+19725653159",
  addressLine1: "Design Studio at Formation",
  addressLine2: "Dallas Cowboys World Headquarters",
  addressLine3: "Frisco, Texas",
  appointmentLine: "By Appointment Only",
  streetAddress: "5 Cowboys Way, Suite 300",
  cityStateZip: "Frisco, Texas 75034",
  studioName: "Formation",
  studioDescription:
    "Our private Design Studio at Formation — Dallas Cowboys World Headquarters, Frisco, Texas",
  location: "Frisco, Texas — & worldwide",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Formation, 5 Cowboys Way, Frisco, TX 75034"),
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Experiences", href: "/experiences" },
  { label: "Design Studio", href: "/design-studio" },
  { label: "Investment", href: "/investment" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
