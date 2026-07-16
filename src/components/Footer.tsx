import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Minimal footer — one consistent close for every page.
 * Contact, studio address, a single call to action, and the sign-off.
 * No repeated navigation, no repeated services.
 */
export default function Footer() {
  return (
    <footer className="bg-[#071225] text-warmwhite">
      <div className="mx-auto max-w-shell px-6 py-[clamp(4rem,8vw,6.5rem)] text-center md:px-[clamp(2rem,6vw,5rem)]">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-gold">
          Connect
        </p>

        <div className="mt-6 space-y-2 text-[0.98rem] text-warmwhite/85">
          <p>
            <a href={`mailto:${site.email}`} className="transition hover:text-champagne">
              {site.email}
            </a>
          </p>
          <p>
            <a href={`tel:${site.phoneHref}`} className="transition hover:text-champagne">
              {site.phone}
            </a>
          </p>
        </div>

        <div
          className="mx-auto my-10 flex max-w-[240px] items-center gap-4 text-gold/70"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/45" />
          <span className="text-sm">&#10022;</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/45" />
        </div>

        <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-gold">
          Design Studio
        </p>
        <div className="mt-6 space-y-1 text-[0.95rem] leading-relaxed text-warmwhite/75">
          <p>Formation at Dallas Cowboys World Headquarters</p>
          <p>{site.streetAddress}</p>
          <p>{site.cityStateZip}</p>
        </div>
        <p className="mt-5 text-[0.72rem] uppercase tracking-[0.2em] text-gold">
          {site.appointmentLine}
        </p>

        <div className="mt-10">
          <Link
            href="/begin-your-journey"
            className="inline-flex min-h-[54px] items-center justify-center bg-gold px-10 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-[#071225] transition hover:bg-champagne"
          >
            Schedule a Consultation
          </Link>
        </div>

        <div className="mt-[clamp(3rem,6vw,4.5rem)] space-y-2 border-t border-gold/18 pt-8 text-[0.72rem] tracking-wide text-warmwhite/48">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed with intention in Frisco, Texas.</p>
        </div>
      </div>
    </footer>
  );
}
