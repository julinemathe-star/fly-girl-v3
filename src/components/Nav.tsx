"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Pages that open with a dark full-bleed hero (nav text should be white
  // at the top of these). All other pages open on ivory and need dark text.
  // NOTE: if a new page with a dark hero is added, add its route here.
  const DARK_HERO_ROUTES = new Set([
    "/",
    "/about",
    "/design-studio",
    "/begin-your-journey",
    "/little-luxe",
    "/preview-experience",
  ]);
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname);
  // When true, the nav sits over a light background and needs dark text.
  const onLight = scrolled || !hasDarkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Robust body scroll lock for iOS Safari (overflow:hidden alone is unreliable).
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" as ScrollBehavior });
    };
  }, [open]);

  const markHeight = scrolled ? 52 : 64;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-500 ease-luxe ${
          scrolled
            ? "bg-warmwhite/[0.92] py-4 shadow-[0_1px_0_rgba(201,162,75,0.18)] backdrop-blur-[14px]"
            : "py-6"
        }`}
        style={{ paddingLeft: "clamp(1.25rem,5vw,4rem)", paddingRight: "clamp(1.25rem,5vw,4rem)" }}
      >
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="flex items-center leading-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-full.jpg"
            alt={site.name}
            width={900}
            height={900}
            priority
            className={`w-auto rounded-[4px] ring-1 ring-gold/40 transition-all duration-500 ease-luxe ${
              scrolled ? "shadow-none" : "shadow-[0_2px_14px_rgba(15,25,48,0.5)]"
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
                onLight ? "text-ink" : "text-white/90"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxe group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className={`rounded-[2px] border px-6 py-[0.6rem] text-[0.74rem] uppercase tracking-luxe transition-all duration-500 hover:bg-gold hover:text-white ${
              onLight ? "border-gold text-ink" : "border-white/60 text-white"
            }`}
          >
            Plan Your Event
          </Link>
        </nav>

        {/* Mobile toggle, 44px tap target */}
        <button
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-6 transition-all duration-300 ${
              onLight || open ? "bg-plum" : "bg-white drop-shadow-[0_1px_3px_rgba(15,25,48,0.55)]"
            } ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 transition-all duration-300 ${
              onLight || open ? "bg-plum" : "bg-white drop-shadow-[0_1px_3px_rgba(15,25,48,0.55)]"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 transition-all duration-300 ${
              onLight || open ? "bg-plum" : "bg-white drop-shadow-[0_1px_3px_rgba(15,25,48,0.55)]"
            } ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {/*
        Mobile menu lives OUTSIDE the header. The header's backdrop-blur
        creates a CSS containing block that breaks fixed positioning of
        anything inside it, which is why the old menu rendered as
        transparent floating links. As a sibling, this panel always spans
        the true viewport.
      */}

      {/* Scrim, tap anywhere outside the panel to close */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-navy-deep/45 backdrop-blur-[2px] transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`fixed inset-y-0 right-0 z-[45] flex w-[min(82vw,340px)] flex-col overflow-y-auto bg-warmwhite pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 shadow-[-20px_0_60px_rgba(15,25,48,0.25)] transition-transform duration-500 ease-luxe md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* my-auto centers when there's room, but stays scrollable when there isn't (landscape) */}
        <div className="my-auto flex w-full flex-col items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-full px-8 py-3 text-center text-lg uppercase tracking-luxe text-ink transition-colors duration-300 active:text-gold-deep"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-5 rounded-[2px] border border-gold px-8 py-3.5 text-sm uppercase tracking-luxe text-plum"
            onClick={() => setOpen(false)}
          >
            Plan Your Event
          </Link>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-4 text-[0.95rem] tracking-[0.08em] text-plum-body transition-colors active:text-gold-deep"
          >
            {site.phone}
          </a>
        </div>
      </nav>
    </>
  );
}
