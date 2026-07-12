import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const studioLinks = [
  { label: "About", href: "/about" },
  { label: "Philosophy", href: "/about#philosophy" },
  { label: "Experience", href: "/about#experience" },
];

const serviceLinks = [
  { label: "Corporate & Executive", href: "/services" },
  { label: "Styled Spaces", href: "/services" },
  { label: "Welcome Gifts", href: "/services" },
  { label: "Private Celebrations", href: "/services" },
];

export default function Footer() {
  return (
    <footer
      className="bg-plum-deep text-warmwhite/70"
      style={{
        paddingTop: "clamp(3.5rem,6vw,5rem)",
        paddingBottom: "2.5rem",
        paddingLeft: "clamp(1.5rem,6vw,5rem)",
        paddingRight: "clamp(1.5rem,6vw,5rem)",
      }}
    >
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-10 border-b border-gold/20 pb-12 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo-full.jpg"
            alt={site.name}
            width={900}
            height={900}
            className="mb-5 h-[132px] w-[132px] rounded-[6px] ring-1 ring-gold/30"
          />
          <h3 className="mb-4 font-serif text-2xl uppercase tracking-[0.2em] text-white">
            {site.shortName}
          </h3>
          <p className="max-w-[36ch] text-[0.82rem] leading-8">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-[36ch] text-[0.82rem] leading-7">
            {site.addressLine1}
            <br />
            {site.addressLine2}
            <br />
            {site.addressLine3}
            <br />
            <span className="uppercase tracking-[0.14em] text-gold/90">{site.appointmentLine}</span>
          </p>
        </div>

        <FooterColumn title="Studio" links={studioLinks} />
        <FooterColumn title="Services" links={serviceLinks} />

        <div>
          <h4 className="mb-5 font-sans text-[0.66rem] uppercase tracking-luxe text-gold">
            Connect
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-[0.84rem] transition-colors duration-300 hover:text-champagne"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-[0.84rem] transition-colors duration-300 hover:text-champagne"
              >
                {site.phone}
              </a>
            </li>
            <li className="text-[0.84rem] leading-6 text-warmwhite/70">
              {site.streetAddress}
              <br />
              {site.cityStateZip}
            </li>
            <li>
              <Link
                href="/begin-your-journey"
                className="text-[0.84rem] transition-colors duration-300 hover:text-champagne"
              >
                Begin Your Journey
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-shell flex-wrap justify-between gap-4 text-[0.7rem] tracking-wide text-warmwhite/50">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>{site.headline}</span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 font-sans text-[0.66rem] uppercase tracking-luxe text-gold">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[0.84rem] transition-colors duration-300 hover:text-champagne"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
