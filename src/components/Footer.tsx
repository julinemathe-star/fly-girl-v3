import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

/**
 * Minimal footer: logo, navigation, legal, copyright.
 * Contact details live in the homepage contact section and on /contact —
 * never duplicated here.
 */
export default function Footer() {
  return (
    <footer className="bg-[#071225] text-warmwhite">
      <div className="mx-auto max-w-shell px-6 py-[clamp(3.5rem,7vw,5.5rem)] text-center md:px-[clamp(2rem,6vw,5rem)]">
        <Image
          src="/brand/fg-mark.png"
          alt={`${site.name} logo`}
          width={140}
          height={75}
          className="mx-auto h-auto w-[120px] opacity-95"
        />

        <nav aria-label="Footer" className="mt-9">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-warmwhite/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-champagne">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex items-center justify-center gap-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-warmwhite/50">
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
