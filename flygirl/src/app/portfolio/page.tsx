import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CaseStudySection from "@/components/CaseStudySection";
import CategoryGallerySection from "@/components/CategoryGallerySection";
import InquirySection from "@/components/sections/InquirySection";
import { caseStudies, categoryGalleries, caseStudiesInCategory } from "@/lib/portfolio-galleries";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from Fly Girl Events & Design — corporate and executive experiences, destination experiences, styled spaces, welcome gifts, signature details, private celebrations, and Little Luxe™.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Featured Portfolio"
        intro="A glimpse into experiences designed to be remembered — every detail composed with intention. Select any image to view it larger."
        eyebrowClassName="eyebrow-ink"
        bottomPaddingClassName="pb-[clamp(2rem,4vw,3rem)]"
      />

      {/* Collections — an index introducing each category and linking into its stories */}
      {categoryGalleries.map((gallery, i) => (
        <CategoryGallerySection
          key={gallery.slug}
          gallery={gallery}
          studies={caseStudiesInCategory(gallery.slug)}
          tone={i % 2 === 0 ? "warmwhite" : "ivory"}
        />
      ))}

      {/* Every celebration, told in full */}
      {caseStudies.map((study, i) => (
        <CaseStudySection key={study.slug} study={study} tone={i % 2 === 0 ? "ivory" : "warmwhite"} />
      ))}

      <section className="bg-warmwhite py-10 text-center">
        <a
          href="/concepts"
          className="text-[0.78rem] uppercase tracking-luxe text-gold-ink underline underline-offset-4 transition-colors hover:text-plum"
        >
          Curious what&apos;s next? View Concepts &amp; Design Visualizations
        </a>
      </section>

      <InquirySection />
    </>
  );
}
