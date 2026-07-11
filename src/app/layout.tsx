import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "luxury event designer Frisco",
    "corporate event styling Frisco",
    "executive event designer Dallas",
    "model home styling Frisco",
    "luxury home staging Frisco",
    "executive office styling Frisco",
    "welcome gifts for corporate events",
    "hospitality styling Dallas",
    "luxury creative studio Frisco",
    "Dallas corporate event designer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/media/hero-poster.jpg", width: 1280, height: 720, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/media/hero-poster.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: "Frisco",
    addressRegion: "TX",
    postalCode: "75034",
    addressCountry: "US",
  },
  makesOffer: [
    "Corporate & Executive Event Styling",
    "Sports Hospitality",
    "Styled Spaces",
    "Home Staging",
    "Virtual Staging",
    "Model Home Styling",
    "Executive Office Styling",
    "Welcome Gifts",
    "Destination Experiences",
    "Private Celebrations",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-plum focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
