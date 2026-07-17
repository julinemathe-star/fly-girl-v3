import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Minimal footer — one consistent close for every page.
 * Studio identity, address, contact, legal links, copyright. Nothing repeated.
 */
export default function Footer() {
  return (
    <footer className="bg-[#071225] text-warmwhite">
      <div className="mx-auto max-w-shell px-6 py-[clamp(4rem,8vw,6.5rem)] text-center md:px-[clamp(2rem,6vw,5rem)]">
        <p className="font-serif text-[1.35rem] text-champagne">{site.name}</p>

        <p className="mt-9 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-gold">
          Design Studio
        </p>
        <div className="mt-5 space-y-1 text-[0.95rem] leading-relaxed text-warmwhite/75">
          <p>{site.studioName}</p>
          <p>{site.streetAddress}</p>
          <p>{site.cityStateZip}</p>
        </div>
        <p className="mt-4 text-[0.72rem] uppercase tracking-[0.2em] text-gold">
          {site.appointmentLine}
        </p>

        <div className="mt-8 space-y-2 text-[0.95rem] text-warmwhite/85">
          <p>
            <a href={`tel:${site.phoneHref}`} className="transition hover:text-champagne">
              &#128222;&nbsp; {site.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="transition hover:text-champagne">
              &#9993;&#65039;&nbsp; {site.email}
            </a>
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-[0.72rem] uppercase tracking-[0.18em] text-warmwhite/60">
          <Link href="/privacy-policy" className="transition hover:text-champagne">
            Privacy Policy
          </Link>
          <span aria-hidden="true" className="text-gold/50">&#10022;</span>
          <Link href="/terms" className="transition hover:text-champagne">
            Terms &amp; Conditions
          </Link>
        </div>

        <div className="mt-[clamp(2.5rem,5vw,3.5rem)] space-y-2 border-t border-gold/18 pt-8 text-[0.72rem] tracking-wide text-warmwhite/48">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed with intention in Frisco, Texas.</p>
        </div>
      </div>
    </footer>
  );
}
