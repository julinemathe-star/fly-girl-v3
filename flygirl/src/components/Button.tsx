import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";

const base =
  "inline-block font-sans uppercase font-normal rounded-[2px] cursor-pointer transition-all duration-500 ease-luxe px-10 py-[1.05rem] text-center";

const sizing = "text-[0.74rem] tracking-luxe";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-gold to-gold-deep text-white shadow-gold hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(169,129,47,0.44)]",
  ghost:
    "bg-white/[0.06] text-white border border-white/70 backdrop-blur-[4px] hover:bg-white hover:text-plum hover:border-white hover:-translate-y-[3px]",
  dark: "bg-transparent text-plum border border-gold hover:bg-gold hover:text-white hover:-translate-y-[3px] hover:shadow-[0_14px_34px_rgba(201,162,75,0.32)]",
};

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${sizing} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  const isHash = href.startsWith("#");
  const isExternal = /^https?:\/\//.test(href);

  if (isInternal && !isHash) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
