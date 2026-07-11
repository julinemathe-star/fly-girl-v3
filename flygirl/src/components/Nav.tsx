"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const markHeight = scrolled ? 44 : 52;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-500 ease-luxe ${
        scrolled
          ? "bg-warmwhite/[0.86] py-4 shadow-[0_1px_0_rgba(201,162,75,0.18)] backdrop-blur-[14px]"
          : "py-6"
      }`}
      style={{ paddingLeft: "clamp(1.5rem,5vw,4rem)", paddingRight: "clamp(1.5rem,5vw,4rem)" }}
    >
      <Link
        href="/"
        aria-label={`${site.name} — home`}
        className="flex items-center leading-none"
        onClick={() => setOpen(false)}
      >
        <Image
          src="/brand/fg-mark.png"
          alt={site.name}
          width={374}
          height={200}
          priority
          className={`w-auto transition-all duration-500 ease-luxe ${
            scrolled ? "drop-shadow-none" : "drop-shadow-[0_2px_10px_rgba(74,43,68,0.45)]"
          }`}
          style={{ height: markHeight }}
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-[2.4rem] md:flex" aria-label="Primary">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`group relative text-[0.74rem] uppercase tracking-luxe transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white/90"
            }`}
          >
            {link.label}
            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover:w-full" />
          </Link>
        ))}
        <Link
          href="/contact"
          className={`rounded-[2px] border px-6 py-[0.6rem] text-[0.74rem] uppercase tracking-luxe transition-all duration-500 hover:bg-gold hover:text-white ${
            scrolled ? "border-gold text-ink" : "border-white/60 text-white"
          }`}
        >
          Plan Your Event
        </Link>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        className="flex flex-col gap-[5px] md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`h-[1.5px] w-6 transition-all duration-300 ${
            scrolled || open ? "bg-plum" : "bg-white"
          } ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
        />
        <span
          className={`h-[1.5px] w-6 transition-all duration-300 ${
            scrolled || open ? "bg-plum" : "bg-white"
          } ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-[1.5px] w-6 transition-all duration-300 ${
            scrolled || open ? "bg-plum" : "bg-white"
          } ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile menu panel */}
      <nav
        aria-label="Mobile"
        className={`fixed inset-y-0 right-0 flex w-[min(78vw,340px)] flex-col items-center justify-center gap-8 bg-warmwhite shadow-[-20px_0_60px_rgba(74,43,68,0.18)] transition-transform duration-500 ease-luxe md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg uppercase tracking-luxe text-ink"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="rounded-[2px] border border-gold px-6 py-3 text-sm uppercase tracking-luxe text-plum"
          onClick={() => setOpen(false)}
        >
          Plan Your Event
        </Link>
      </nav>
    </header>
  );
}
